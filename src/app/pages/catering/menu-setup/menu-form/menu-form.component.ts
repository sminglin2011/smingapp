import { Component, OnInit, sequence } from '@angular/core';
import { CateringMenuItem } from '../../../models/cateringMenuItem.model';
import { CateringService } from '../../catering.service';
import { QueryParam } from '../../../models/queryParam.model';
import { InventoryService } from '../../../inventory/inventory.service';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AppUtils } from '../../../../tools/app.utils';
import { CateringMenu } from '../../../models/cateringMenu.model';
import { Inventory } from '../../../models/inventory.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {

  queryParam = new QueryParam({size: 9999});
  id: number;
  private sub: any;
  msgs = [];

  formGroup: FormGroup;
  menu: CateringMenu = new CateringMenu();
  menuItem: CateringMenuItem = new CateringMenuItem();
  menuItems: CateringMenuItem[] = [];
  compulsoryFields = new Array();

  menuCategories = [];
  itemGroups: Array<any>;
  inventories = [];
  blockedPanel = true;

  constructor(private service: CateringService, private inventoryService: InventoryService,
  private appUtils: AppUtils, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    if (!this.formGroup) {
      this.formGroup = this.appUtils.initFormGroup(this.menu, this.compulsoryFields);
      console.log('init form group = ', this.formGroup);
      this.formGroup.valueChanges.subscribe(value => {
        this.menu = value;
      });
    }
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.loadCateringMenuFromApi();
    });
    this.loadMenuCategories();
    this.loadItemGroup();
    this.loadInventories();
  }
  loadCateringMenuFromApi() {
    if (this.id) {
      this.queryParam.condition = {id: this.id };
      this.service.loadCateringMenuList(this.queryParam).subscribe(data => {
        this.menu = data['content'][0];
        this.formGroup = this.appUtils.initFormGroup(this.menu, this.compulsoryFields);
      });
    }
  }

  loadMenuCategories() {
    this.queryParam.condition = {};
    this.menuCategories = [];
    this.service.loadMenuCategoryList(this.queryParam)
      .subscribe(data => {
        console.log('init menu category??????', data);
        for (const c of data['content']) {
          this.menuCategories.push({value: c['category'], label: c['category']});
        }
      });
  }

  loadInventories() {
    this.queryParam.condition = {};
    this.inventories = [];
    this.inventoryService.loadList(this.queryParam)
      .subscribe(data => {
        for (const i of data['content']) {
          this.inventories.push({value: i['description'], label: i['description']});
        }
      });
  }

  loadItemGroup() {
    this.service.loadItemGroup().subscribe(data => {
      data['group'].unshift({value: '', label: 'Select'});
      this.itemGroups = data['group'];
    });
  }
  saveMenu() {
    this.service.saveCateringMenu(this.formGroup.value).subscribe(
      result => {
        console.log('result,===', result);
        this.msgs = [];
        if (result['code'] && result.code === 100) {
          this.msgs.push({severity: 'error', summary: '', detail: result.message});
        } else {
          this.msgs.push({severity: 'success', summary: '', detail: 'SAVE SUCCESS'});
          this.menu = result;
        }
        this.blockedPanel = false;
      },
      err => console.log('object', err)
    );
  }
  newItem() {
    const arr = this.formGroup.get('cateringMenuItems') as FormArray;
    arr.push(this.appUtils.initFormGroup(new CateringMenuItem, []));
    console.log('this.formGroup = ', this.formGroup);
  }
}
