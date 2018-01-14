import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { fadeIn } from './animations/fadeIn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ fadeIn ]
})
export class AppComponent implements OnInit {
  moduleList = [
        { 'title': 'USER', 'url': 'user' },
        { 'title': 'ACCOUNT', 'url': 'account' }
    ];
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
