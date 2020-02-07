Feature: Login to PHPMyTravels

  In order to access PHPMyTravels securely
  As a User
  I'd like to login in with my credentials

  Scenario: An actor interacts with a login page

    Given John decides to login to PHPMyTravels
    When he enters his credentials user@phptravels.com and demouser
    Then he should see the Account page
