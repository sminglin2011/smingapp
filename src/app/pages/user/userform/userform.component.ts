import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user-model';
import { UserService } from '../user.service';
import { FieldBase } from '../../shared/dynamic-form/fieldbase';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  @Input() fields: FieldBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private service: UserService) {  }

  ngOnInit() {
    this.fields = this.service.createUserFields(new User());
    this.form = this.service.toFormGroup(this.fields);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    this.service.newUser(this.form.value).subscribe(() => {
      console.log('component add new one');
    });
  }

}
