import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class LoginPage {
  static usernameInput = Target.the('username input').located(by.css('#loginfrm > div.wow.fadeIn > div:nth-child(1) > label > input[type=email]'));
  static passwordInput = Target.the('password input').located(by.css('#loginfrm > div.wow.fadeIn > div:nth-child(2) > label > input[type=password]'));
  static loginButton = Target.the('login button').located(by.css('#loginfrm > button'));

  static result = Target.the('result').located(by.css('body > div.body-inner > div.main-wrapper.scrollspy-action > div.container > div.container.mt25.offset-0 > div > div.row.mywishlist > div.col-12.col-md-4.col-lg-4.o2 > aside > nav > ul > li:nth-child(2) > a'));
}
