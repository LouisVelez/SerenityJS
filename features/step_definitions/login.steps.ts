import { WithStage } from '@serenity-js/core';
import { Navigate } from '@serenity-js/protractor';
import { Given, Then, When } from 'cucumber';
import {
  ConfirmLogin,
  EnterPassword,
  EnterUsername,
  LoginResult,
} from '../support/screenplay/phpTravels/components/login-page';

Given(/(.*) decides to login to PHPMyTravels/, function (this: WithStage, actorName: string) {
  return this.stage
    .theActorCalled(actorName)
    .attemptsTo(Navigate.to('/login/'),
    );
});

When(/(?:he|she|they) enters his credentials (.*) and (.*)/, function (this: WithStage, username: string, password: string,
) {
  return this.stage.theActorInTheSpotlight().attemptsTo(
    EnterUsername.of(username),
    EnterPassword.of(password),
    ConfirmLogin(),
  );
});

Then(/(?:he|she|they) should see the Account page/, function (this: WithStage) {
  return this.stage
    .theActorInTheSpotlight().attemptsTo(LoginResult(),
    );
});
