# FaceRecognition

The app sends the public URL of images to Clarifai and receives co-ordinates of all the faces in the image.
The app uses Clarifai’s face detection model API to detect faces in images.
The app was deployed to Heroku via Github integration. (That it takes a bit time because it is 
on the free plan which means the app goes to sleep often and needs time to wake up when it's accesed).

The hosted version of the application is available here: [https://smart-brainre.herokuapp.com/]
(https://smart-brainre.herokuapp.com/)

### Features

- New user registration
- Existing user login
- picture counter for each user
- drawing square aroung face in picture


### Technology Used

- Front End: 
      -React 
      -JavaScript 
      -Tachyions
      -React.js-Tilt (for the logo)
      -React-particles-js (for the background)
      
- Back End:
      - Node.js
      - Express
      - Clarifai.FaceDetectModel (image-recognition API)
      - PostgreSQL
      - Knex.js (query builder for Postgres).


### ScreenShots

<a href="[https://smart-brainre.herokuapp.com/]"><img src="https://github.com/Jacanroman/Facerecognition/blob/master/images/Register.png" alt="Image_web" /></a>

<a href="[https://smart-brainre.herokuapp.com/]"><img src="https://github.com/Jacanroman/Facerecognition/blob/master/images/Signin.png" alt="Image_web" /></a>

<a href="[https://smart-brainre.herokuapp.com/]"><img src="https://github.com/Jacanroman/Facerecognition/blob/master/images/main1.png" alt="Image_web" /></a>

<a href="[https://smart-brainre.herokuapp.com/]"><img src="https://github.com/Jacanroman/Facerecognition/blob/master/images/main.png" alt="Image_web" /></a>


      
### Running the application locally

Clone the application and install dependencies:

  npm install

To start the application:

  npm start

The application will then be accessible at:

[http://localhost:3000](http://localhost:3000)

