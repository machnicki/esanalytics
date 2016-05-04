Feature: Display correct component implementation
        Appropriate React component should be displayed based on the contents of the JSON response
        No component should be displayed if the response indicates so

    Scenario: FeatureA rendering
        Given JSON response is received
        When It indicates FeatureA
        Then FeatureA component should be rendered

    Scenario: FeatureB rendering
        Given JSON response is received
        When It indicates FeatureB
        Then FeatureB component should be rendered

    Scenario: No feature
        Given JSON response is received
        When It indicates no feature
        Then No feature component should be rendered
