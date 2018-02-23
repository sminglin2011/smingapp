import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { FieldBase } from '../../shared/dynamic-form/fieldbase';
import { FormGroup } from '@angular/forms';
import { AppUtils } from '../../../tools/app.utils';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  id = 0;
  msgs: Message[] = [];
  user: User;
  form: FormGroup;
  compulsoryFields: Array<any> = new Array<String>();

  constructor(private service: UserService, private appUtil: AppUtils,
    private route: ActivatedRoute, private router: Router) {  }

  ngOnInit() {
    console.log('this.route==', this.route.queryParams);
    this.route.queryParams.subscribe(params => {
      console.log('params==', params['id']);
      if (params['id']) {
        this.id = params['id'];
        this.service.getUser(this.id).subscribe(data => {
          console.log('get user form api user=', data);
          this.form.patchValue(data);
        });
      }
    });
    this.compulsoryFields.push('username', 'email', 'mobile');
    this.form = this.appUtil.initFormGroup(new User, this.compulsoryFields);
    console.log('form==', this.form);
  }

  onSubmit() {
    this.service.saveUser(this.form.value).subscribe(result => {
      this.msgs.length = 0;
        this.msgs.push(AppUtils.SUCCESS_MESSAGE);
        setTimeout(() => {
          this.close();
        }, 300);
    }, err => console.error('error', err) );
  }

  close() {
    this.router.navigate(['/pages/user/userlist']);
  }
}
