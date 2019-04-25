import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CrossFieldErrorMatcher} from '../shared/CrossFieldErrorMatcher';
import {RegisterMenuService} from '../shared/registermenu.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registermenus: any = {
    SIGN_UP_PASSWORD: '',
    SIGN_UP_ID: '',
    SIGN_UP_PASSWORD_CONFIRM: '',
    SIGN_UP_TITLE: '',
    BUTTON_CANCEL: '',
    BUTTON_SAVE: '',
    MEMBER_DUPLICATED_ID: '',
    PASSWORD_NOT_MATCHED: '',
    REQUIRED_PARAMETER: '',
    PASSWORD_INVALID: '',
    WARNING_COLLECT: '',
    MEMBER_AVAILABLE_ID: '',
    WARNING_CONTENT: ''
  };

  userForm: FormGroup;
  errorMatcher = new CrossFieldErrorMatcher();
  
  constructor(private fb: FormBuilder,
              private registerMenuService: RegisterMenuService) {
    this.initForm();
  }

  ngOnInit() {
    this.registerMenuService.readRegisterMenu(Object.keys(this.registermenus).join(','))
      .subscribe(res => {
        this.registermenus = res.result;
      });
  }

  initForm() {
    this.userForm = this.fb.group({
      username: '',
      password: '',
      verifyPassword: ''
    }, {
      validator: this.passwordValidator
    });
  }

  passwordValidator(form: FormGroup) {
    const condition = form.get('password').value !== form.get('verifyPassword').value;

    return condition ? {passwordsDoNotMatch: true} : null;
  }
}
