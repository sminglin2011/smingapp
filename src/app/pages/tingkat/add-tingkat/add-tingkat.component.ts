import { Component, OnInit } from '@angular/core';
import { TingkatService } from '../tingkat.service';
import { TingKat } from '../../models/tingkat.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppUtils } from '../../../tools/app.utils';

@Component({
  selector: 'app-add-tingkat',
  templateUrl: './add-tingkat.component.html',
  styleUrls: ['./add-tingkat.component.css']
})
export class AddTingkatComponent implements OnInit {
  mealType = [
    { name: 'Lunch', code: 'lunch' },
    { name: 'Dinner', code: 'dinner' }
  ];
  menus = [
    { name: '3D' },
    { name: '3D+1' },
    { name: '4D' },
    { name: '4D+1' },
    { name: '5D' },
    { name: '5D+1' }
  ];
  drivers = [
    { name: 'Driver A' },
    { name: 'Driver B' }
  ];
  onlineAddress;

  tingkat: TingKat;
  formGroup: FormGroup;
  compulsoryFields: Array<any>;
  constructor(private service: TingkatService, private formBuilder: FormBuilder,
  private appUtils: AppUtils) {}

  ngOnInit() {
    if (!this.tingkat) {
      this.tingkat = new TingKat();
    }

    this.formGroup = this.appUtils.initFormGroup(this.tingkat, this.compulsoryFields);
    // this.formBuilder.group(this.tingkat);
    console.log(this.tingkat, 'tingkat new ==', 'tingkat form group', this.formGroup.get('customer'));
    this.formGroup.valueChanges.subscribe(value => {
      console.log('tingkat form group value change ===', value);
    });
  }

  // searchPostalCode() {
  //   this.service.getAddressByPostalCode(1).subscribe((data) => {
  //     this.onlineAddress =  data['address'];
  //     // this.block = this.onlineAddress['block'];
  //     // this.address = this.onlineAddress['street'];
  //   });
  // }
}
