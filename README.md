

Comments about each part 
### 1) Fetch questions

GET questions from the endpoint `https://putsreq.com/RWhI8ht10y5kqfmemrML`. 

The response was lagging during the challenge, please see issues in this repositroy about the failed response from the API on Heroku. 

### 2) Render the form

Form has been build, with Tailwind and Vue environment. 

_Use the [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#the_constraint_validation_api) to ensure the required fields collected are correct and their format is correct. Present the user with proper messaging based on the issue with their input._
The validation started with the validation via the API mentioned: 
https://github.com/stephan-schmidt/nyc-frontend-challenge/blob/ba2e29a6f69d23c005afad668bc300a1333f27a6/dist/js/default.js#L57

It has not been finished as of yet and an approach using the framework for the form - Vue.js - is perfered in my point of view. 
https://github.com/stephan-schmidt/nyc-frontend-challenge/blob/ba2e29a6f69d23c005afad668bc300a1333f27a6/dist/js/default.js#L16

Something more to finish and work on. 



### 3) Create the submission handler

Submission should work when entering the JSON data in the sample JSON. 

## Wrapping Up

Use this Github Repo with the express app.
