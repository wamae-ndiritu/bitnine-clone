# Basic Authentication

### Problem Task:

Need to implement a login/signup page that will allow users to view some content after signing up and then login.

### App Logic

- The applications defines api endpoints to register and login user.
- The process of registration involves:

  - Verifying user information to be in the correct format `(username, email & password)`
  - Check if there is an existing user with the same details
  - If no existing user hash the password
  - Save the all the details and the hashed password

- The process of login on the other hand invloves:
  - Verifying login details `(email, password)`
  - Check for a saved user from the Database with the provided email
  - If user if found, compare the provided password with the hashed one
  - If passwords compare, generate a token and return user info and the token as the response.

### Backend Technologies used

- `Node JS`
- `Express.js`

### Database

- `MYSQL cloud`,

### Libraries used:

- `mysql2`: Facilitates mysql connection on node.js
- `bcryptjs`: Used for password hashing
- `jsonwebtoken`: Provides token based authentication
- `joi`: Used for verify form object data
- `cors`: To allows cross-site origin resource sharing
-
