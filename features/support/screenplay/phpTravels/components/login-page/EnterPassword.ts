import { Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/protractor';
import { LoginPage } from './ui';

export const EnterPassword = {
  of: (value: string | number) =>
    Task.where(`#actor enters his password: ${value}`,
      Enter.theValue(value).into(LoginPage.passwordInput),
    ),
};
