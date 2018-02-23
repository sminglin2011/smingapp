import { Component, OnInit, sequence } from '@angular/core';
import { MenuCategory } from '../../models/menuCategory.model';
import { CateringService } from '../catering.service';
import { QueryParam } from '../../models/queryParam.model';
import { AppUtils } from '../../../tools/app.utils';
import { TreeNode, Message } from 'primeng/primeng';
import { LayoutModule } from '../../../layout/layout.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-setup',
  templateUrl: './menu-setup.component.html',
  styleUrls: ['./menu-setup.component.css']
})
export class MenuSetupComponent implements OnInit {

  msgs: Message[] = [];
  queryParam = new QueryParam();
  menuCategories = [];
  menus = [];
  menuDisabled = true;
  constructor(private service: CateringService, private router: Router) { }

  ngOnInit() {
    this.queryParam.size = 9999;
    this.queryParam.sortField = 'sequence';
    this.loadMenuCategory();
    this.loadCateringMenus();
  }

  loadCateringMenus() {
    this.service.loadCateringMenuList(this.queryParam).subscribe(data => {
      console.log('load catering menu list ', data);
      this.menus = data['content'];
    });
  }
  loadMenuCategory() {
    this.service.loadMenuCategoryList(this.queryParam).subscribe(data => {
      this.menuCategories = data['content']; // here not Paginator
      if (this.menuCategories.length > 0) { this.menuDisabled = false; }
    });
  }

  newMenuCategory() {
    this.service.loadMenuCategoryList(this.queryParam).subscribe(data => {
      data['content'].push({id: 0, sequence: 0, category: ''});
      this.menuCategories = data['content']; // here not Paginator
    });
  }
  saveMenuCategory(event) {
    console.log(event);
    this.service.saveMenuCategory(event).subscribe(
      result => {
        this.msgs.length = 0;
        this.msgs.push({severity: 'success', summary: '', detail: 'SAVE SUCCESS'});
        this.loadMenuCategory();
      },
      err => console.log('object', err)
    );
  }

}
