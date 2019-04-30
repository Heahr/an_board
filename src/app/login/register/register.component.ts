import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CrossFieldErrorMatcher} from '../shared/CrossFieldErrorMatcher';
import {RegisterMenuService} from '../shared/registermenu.service';
import {LanguageMenuService} from '../../global/shared/languagemenu.service';

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

  languages: any[] = [
    {locale: 'ko', name: '한국어'},
    {locale: 'en', name: 'English'}
  ];

  registerform = {
    id: '',
    name: '',
    password: '',
    passwordConfirm: ''
  }

  userForm: FormGroup;
  errorMatcher = new CrossFieldErrorMatcher();

  constructor(private fb: FormBuilder,
              private registerMenuService: RegisterMenuService,
              private languageMenuService: LanguageMenuService) {
    this.initForm();
  }

  ngOnInit() {
    this.languageMenuService.getLocale().subscribe(value =>
      this.registerMenuService.readRegisterMenu(Object.keys(this.registermenus).join(','), value)
        .subscribe(res => {
          this.registermenus = res.result;
        })
    );
    this.sendLocale('');
  }

  sendLocale(locale: string) {
    return this.languageMenuService.sendLocale(locale);

  }

  initForm() {
    this.userForm = this.fb.group({
      id: '',
      name: '',
      password: '',
      passwordConfirm: ''
    }, {
      validator: this.passwordValidator
    });
  }

  passwordValidator(form: FormGroup) {
    const condition = form.get('password').value !== form.get('passwordConfirm').value;

    return condition ? {passwordsDoNotMatch: true} : null;
  }

  test() {
    console.log(this.registerform);
  }
}
