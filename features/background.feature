Feature: Using background
    Using background

    Background: having the letter A
        Given a letter "a"
    
    @out
    Scenario: a is equal to a
        When test for "a"
        Then it's going to work just fine

    Scenario: b compared to a
        When test for "b"
        Then it's going message "nok"