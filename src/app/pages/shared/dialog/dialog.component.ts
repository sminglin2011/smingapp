import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() inputParam;
  @Input() inputParam2;
  @Input() openDialog: boolean;

  private open = new EventEmitter();
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.showDialog(this.openDialog);
  }

  showDialog(show: boolean) {
    if (show) {
      console.log('dialog come');
      this.el.nativeElement.querySelector('.modal').style.display = 'block';
    } else {
      this.el.nativeElement.querySelector('.modal').style.display = 'none';
    }
  }
}
