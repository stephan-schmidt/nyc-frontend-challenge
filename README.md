

Comments about each part 
### 1) Fetch questions

GET questions from the endpoint `https://putsreq.com/RWhI8ht10y5kqfmemrML`. The response will be:
please see issues in this repositroy about the failed response from the API on Heroku 

### 2) Render the form

Build out the form using the JSON response. You may use a component framework or templating language of your choice for this portion.

Use the [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#the_constraint_validation_api) to ensure the required fields collected are correct and their format is correct. Present the user with proper messaging based on the issue with their input.


### 3) Create the submission handler

POST form submissions to the same endpoint (`https://putsreq.com/RWhI8ht10y5kqfmemrML`). A stringified JSON object should be passed as the body of the request. **For the sake of this exercise**, any successful submission body `200` should match the following exactly otherwise it will return a client-side error `400`.

```json
[
  {
    "name": "nameFirst",
    "value": "Jane"
  },
  {
    "name": "nameLast",
    "value": "Doe"
  },
  {
    "name": "contactPhone",
    "value": "9999999999"
  },
  {
    "name": "contactEmail",
    "value": "jd@email.com"
  },
  {
    "name": "contactPreferred",
    "value": "phone"
  }
]
```

### Back-end

If you would like to see what the form service looks like on the back-end, you can browse a copy of the logic in the [**service.js**](service.js) file.

## Wrapping Up

Create a new GitHub repository for the completed challenge to share. Include any additional instructions needed to run the application.

#### Think about the following items and be prepared to discuss in our interview.

* Assuming this service would be able to provide a session token or require authentication in a live environment, describe how would you ensure that the response sent to the backend service is properly authenticated.

* Describe how you would ensure the form would not submit spam.

* Any other thoughts on improvements to this form outside of the direction given will be considered.
