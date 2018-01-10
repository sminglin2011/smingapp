import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  moduleList = '';
  constructor( private service: AppService) {
  }

  ngOnInit() {
    this.loadModuleData();
  }
  loadModuleData() {
    this.service.getModuleList().subscribe(data => {
      this.moduleList = data['data'];
    });
  }
}
