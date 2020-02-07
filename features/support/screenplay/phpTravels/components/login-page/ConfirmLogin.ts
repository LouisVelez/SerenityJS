import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/protractor';
import { LoginPage } from './ui';

export const ConfirmLogin = () =>
  Task.where(`#actor logins to PhpMyTravels`, (
    Click.on(LoginPage.loginButton)
  ),
  );
