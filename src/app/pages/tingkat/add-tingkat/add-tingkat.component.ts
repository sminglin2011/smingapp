import { Component, OnInit } from '@angular/core';
import { TingkatService } from '../tingkat.service';

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
  block; unit; address; tingkat = true;
  constructor(private service: TingkatService) {}

  ngOnInit() {}

  searchPostalCode() {
    this.service.getAddressByPostalCode(1).subscribe((data) => {
      this.onlineAddress =  data['address'];
      this.block = this.onlineAddress['block'];
      this.address = this.onlineAddress['street'];
    });
  }
}
