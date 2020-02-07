import { Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/protractor';
import { LoginPage } from './ui';

export const EnterUsername = {
  of: (value: string | number) =>
    Task.where(`#actor enters his username: ${value}`,
      Enter.theValue(value).into(LoginPage.usernameInput),
    ),
};
