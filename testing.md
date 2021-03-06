Landon Baxter, Michael Catchen, Darwin Boersma, Josef Los

# planr
User friendly task manager that students will actually use.

## Automated Test Cases

* Ava Test Runner - https://github.com/avajs/ava
* Nock HTTP Mocking Library - https://github.com/node-nock/nock

### Our tests

![17 tests passed!](http://i.imgur.com/ZwbqYaB.png "Image")
We created asynchronous tests using AVA that verify our sign up's functionality. In order to effectively test this, we had to create tests for three or four different ReduxJS actions (e.g., LandingActions.js). Our tests checked that our frontend correctly handles an invalid sign up form, which can entail 1) an invalid email, 2) an empty password, 3) an empty username, or 4) a username or email that has already been signed up. For the last possibility, we also had to write tests to ensure that the frontend correctly handles responses from the server.
## User Acceptance Tests

### UAT #1
Use case name  

* Verify signup with valid user name and password  

Description  

* Test the planr signup page  

Pre-conditions  

* User has valid email, username and password 

Test steps  

1. Navigate to assignmeme.herokuapp.com  
2. Provide valid email  
3. Provide username  
3. Provide valid password  
4. Click signup button  

Expected result  

* User should be able to click sign up without any errors thrown. 

Actual result  

* Nothing at all (no errors/red outlines)

Status (Pass/Fail)  

* Pass  

Notes  

* Nothing happens on frontend yet.   

Post-conditions  

* The user is added to the database, even though the frontend doesn't yet give this feedback. 

&nbsp;  
### UAT #2
Use case name  
  
* Verify invalid email in sign up.  

Description  
  
* User enters invalid email into email field  

Pre-conditions  

* User has invalid email, but non-empty password and username.  

Test steps  

1. Navigate to assignmeme.herokuapp.com  
2. Provide invalid email  
3. Provide valid username and password  
4. Click signup button 

Expected result  

* User should not be signed up and should see a red outline on the form.  

Actual result  

* Red outline on the signup form.  

Status (Pass/Fail)  

* Pass  

Notes  

* N/A  

Post-conditions  

* User is not added to the database and is instead notified of invalid form via red outline.  

&nbsp;  
### UAT #3

Use case name  

* Sign up with duplicate user   

Description  

* User enters email that has already been used.  

Pre-conditions  

* User has email that has already been registered, but non-empty password and username.  

Test steps  

1. Navigate to assignmeme.herokuapp.com  
2. Use email: "monkey@mon.key"  
3. Provide valid username and password  
4. Click signup button  

Expected result  

* User should not be signed up and should see a red outline on the form.  

Actual result  

* Red outline on the signup form.  

Status (Pass/Fail)  

* Pass  

Notes

* N/A  

Post-conditions  

* User is not added to the database and is instead notified of duplicate email via red outline.  
