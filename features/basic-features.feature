Feature: Using basic gherkin structures
    Using scenario and Scenario Outline
    
    Scenario: a is equal to a
        Given a letter "a"
        When test for a
        Then it's going to work just fine
    
    Scenario Outline: x compared to a
        Given a letter "<anyletter>"
        When test for a
        Then it's going message "<message>"

        Examples:
            | anyletter | message |
            | a         |    ok   |
            | b         |   nok   |
            | c         |   nok   |
            | d         |   nok   |