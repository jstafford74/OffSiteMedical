This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Application WorkFlow 
(https://github.com/jstafford74/OffSiteMedical/blob/master/OffsiteMed%20DB%20design.png)

The entry point for this application is a splash landing page that will provide basic content and collateral and allow the visitor to take 3 actions: `Sign Up` ,  `Login` or take `SCRA`.


### Logging In
There are roughly 38k people with existing data.  It is imperative before medical services are rendered that any further services are matched with existing data in the database.  In order to verify an existing profile, `First Name`, `Last Name`, `email` & `DOB` will be requested and using a `findOne` query.  Once a profile has been located a passwordless login will be utilized to allow the verified user to log into the site in order to verify & update existing information, provide insurance information and take a SCRA.  There isn't scope for saving previous emails, home addresses or insurance information, but there exists a need for tracking SCRA through time for each patient.  

Unique to the existing db setup is a patientID which identifies the patient's profile data. 

Step 1: Create Form for Checking Existing Login

### Create Profile
When the user visits the site, they are either logged in, or not.  `This is initial state.`  If not logged in, either login or create a profile to log in.  The profile creation page will post new user data to the profile table, and then send the user back to the log in page.

### Login
User enters username and password `Stored in profile table` and then visits their profile page. The profile page will display basic information and if the profile is `type = enterprise` then there is an opportunity to schedule an offsite visit.
The `Calendar Table` will be used to supply available days, and received posts from users for scheduling.  in sync with the post to calendar table is the creation of `offsite_n`.  Each offsite visit will have a unique table that has records equal to the available appointments.  For example, if the decision maker wants an offsite visit to last between 8am and 4pm, and we determine each visit is 10 minutes long, then there will be 6 appts per hour(8am, 8:10am, 8:20am etc) and 48 appts per day.

To facilitate calendar creation, profile rendering and offsite scheduling the basic design.
Using `faker(https://www.npmjs.com/package/faker)`, `sequelize(https://sequelize.org/v5/)`, `sequelize-auto(https://www.npmjs.com/package/sequelize-auto)` &  `mysql2(https://www.npmjs.com/package/mysql2)`

### Route Checks & Testing
postman testing:
xmysql -u root -p 'my_password' -d offsitemedical

In the api/index.js file I am using "/api" as the base url that requires routes/api/index.js.
routes/api/index.js uses "api/auth" route for login & refresh, "api/signup" for signup and "api/protected" for rendering the user's profile once logged in. 



Routes Are classified into two categories, protected or not.  Unprotected routes include "/" and "/signup".

### Passport.JS 
Passport JS
Designed to serve a singular purpose: Authenticate request. Passport delegates all other functionality to the application, which keeps code clean and maintainable, and makes Passport extremely easy to integrate into an application.
Authentication mechanisms, known as strategies, are packaged as individual modules. Applications can choose which strategies to employ, without creating unnecessary dependencies. Authenticating requests are made via `passport.authenticate()` and specifying which strategy to employ. A redirect is commonly issued after authenticating a request.Redirects are often combined with flash messages in order to display status information to the user.After successful authentication, Passport will establish a persistent login session. This is useful for the common scenario of users accessing a web application via a browser. However, in some cases, session support is not necessary. For example, API servers typically require credentials to be supplied with each request. When this is the case, session support can be safely disabled by setting the session option to false.
Three pieces need to be configured to use Passport for authentication:
    Authentication strategies
    Application middleware
    Sessions (optional)

Strategies require what is known as a `verify callback`. The purpose of a verify callback is to find the user that possesses a set of credentials.

When Passport authenticates a request, it parses the credentials contained in the request, then invokes the `verify callback` with those credentials as arguments, e.g. case username and password. If the credentials are valid, the verify callback invokes done to supply Passport with the user that authenticated.

In a Connect or Express-based application, passport.initialize() middleware is required to initialize Passport, and if the application uses persistent login sessions, passport.session() middleware must also be used.  Note that enabling session support is entirely optional, though it is recommended for most applications. If enabled, be sure to use session() before passport.session() to ensure that the login session is restored in the correct order.

Sessions
In a typical web application, the credentials used to authenticate a user will only be transmitted during the login request. If authentication succeeds, a session will be established and maintained via a cookie set in the user's browser.

Each subsequent request will not contain credentials, but rather the unique cookie that identifies the session. In order to support login sessions, Passport will serialize and deserialize user instances to and from the session.
The most widely used way for websites to authenticate users is via a username and password. Support for this mechanism is provided by the passport-local module.

