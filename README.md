#Feature: Display correct component implementation
Appropriate React component should be displayed based on the contents of the JSON response
No component should be displayed if the response indicates so

##Scenario: FeatureA rendering
Given JSON response is received
When It indicates FeatureA
Then FeatureA component should be rendered

##Scenario: FeatureB rendering
Given JSON response is received
When It indicates FeatureB
Then FeatureB component should be rendered

##Scenario: No feature
Given JSON response is received
When It indicates no feature
Then No feature component should be rendered

#Feature: Toggle component implementation
There should be UI to allow for selecting feature component implementation (or no implementation)

##Scenario: Display currently selected implementation
Given JSON response is received
Then Current implementation should be flagged as active in the implementation selector

##Scenario: FeatureA selection
When FeatureA is selected
Then Make sure the correct JSON response is returned
And FeatureA is rendered

##Scenario: FeatureB selection
When FeatureB is selected
Then Make sure the correct JSON response is returned
And FeatureB is rendered

##Scenario: no feature selection
When no feature is selected
Then Make sure the correct JSON response is returned
And No feature is rendered
