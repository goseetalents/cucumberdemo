Feature: bank account
  In order to let the bank take care of my money
  As a bank client
  I want to have an account where I can deposit and withdraw money

Scenario: deposit money
    Given a bank account for "Fredrik" with 300 SEK
    When "Fredrik" deposits 100 SEK
    Then the account of "Fredrik" should contain 400 SEK

Scenario: withdraw money
    Given a bank account for "Fredrik" with 300 SEK
    When "Fredrik" withdraws 100 SEK
    Then the account of "Fredrik" should contain 200 SEK

Scenario Outline: add interest to account
    Given a bank account for "Fredrik" with <initial> SEK
    When we add yearly interest of <interest>% for "Fredrik"
    Then the account of "Fredrik" should contain <expected> SEK

    Examples:
    | initial | interest | expected |
    | 100     | 3        | 103      |
    | 48      | 10       | 53       |    
    | 1000    | 25       | 1250     |
    