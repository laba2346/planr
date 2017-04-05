Landon Baxter, Michael Catchen, Darwin Boersma, Josef Los
planr
User friendly task manager that students will actually use.


User Acceptance Tests

Use case name
    Verify signup with valid user name and password
Description
    Test the planr signup page
Pre-conditions
    User has valid email, username and password
Test steps
    1. Navigate to assignmeme.herokuapp.com
    2. Provide valid email
    3. Provide username
    3. Provide valid password
    4. Click signup button
Expected result
    User should be able to sign up
Actual result
    Nothing at all
Status (Pass/Fail)
    Pass
Notes
    Nothing happens on frontend.
Post-conditions
    User is confused and feels like his/her internet sucks. The user account is
    added to the database, even if the dumb dumb user doesnt think so.


Use case name
    Verify invalid email in sign up.
Description
    User enters invalid email into email field
Pre-conditions
    User has invalid email, but non-empty password and username.
Test steps
    1. Navigate to assignmeme.herokuapp.com
    2. Provide invalid email
    3. Provide valid username and password
    4. Click signup button
Expected result
    User should not be signed up and should see a red outline on the form.
Actual result
    Red outline on the signup form.
Status (Pass/Fail)
    Pass
Notes
    N/A
Post-conditions
    User is not added to the database and is instead notified of invalid form
    via red outline.

Use case name
    Sign up with duplicate user
Description
    User enters email that has already been used.
Pre-conditions
    User has email that has already been registered, but non-empty password and
    username.
Test steps
    1. Navigate to assignmeme.herokuapp.com
    2. Use email: "monkey@mon.key"
    3. Provide valid username and password
    4. Click signup button
Expected result
    User should not be signed up and should see a red outline on the form.
Actual result
    Red outline on the signup form.
Status (Pass/Fail)
    Pass
Notes
    N/A
Post-conditions
    User is not added to the database and is instead notified of duplicate email
    via red outline.
