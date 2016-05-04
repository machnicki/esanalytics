Feature: Toggle component implementation
        There should be UI to allow for selecting feature component implementation (or no implementation)

    Scenario: Display currently selected implementation
        Given JSON response is received
        Then Current implementation should be flagged as active in the implementation selector

    Scenario: FeatureA selection
        When FeatureA is selected
        Then Make sure the correct JSON response is returned
        And FeatureA is rendered

    Scenario: FeatureB selection
        When FeatureB is selected
        Then Make sure the correct JSON response is returned
        And FeatureB is rendered

    Scenario: no feature selection
        When no feature is selected
        Then Make sure the correct JSON response is returned
        And No feature is rendered
