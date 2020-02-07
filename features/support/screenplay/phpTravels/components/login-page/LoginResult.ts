import { Ensure } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { isVisible, Wait } from '@serenity-js/protractor';
import { LoginPage } from './ui';

export const LoginResult = () =>
  Task.where(`#actor logins to PHPMyTravels`, (
    Wait.until(LoginPage.result, isVisible()),
    Ensure.that(LoginPage.result, isVisible())
  ),
  );
