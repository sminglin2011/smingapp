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

  constructor() {
  }

  ngOnInit() {
  }
}
