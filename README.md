# Angular-NodeJS-App

This is a simple Angular and Node.js application with MongoDB integration.

## Installation

1. Clone the repository:
Install dependencies for the frontend:
cd LMS_frontend
npm install
Install dependencies for the backend:

cd LMS_backend
npm install
Usage
Running the Frontend
To run the Angular frontend, navigate to the project root directory and run:

bash
Copy code
ng serve
The frontend will be served at http://localhost:4200/ by default.

Running the Backend
Before running the backend, ensure you have created a .env file in the root directory of the backend with the following content:

makefile named .env and add following value

PORT=8000
MONGODB_URI=your_mongodb_value_here
Replace your_mongodb_value_here with the URI of your MongoDB instance.

To start the backend server, navigate to the backend directory and run:

bash
Copy code
npm start
The backend will be served at http://localhost:8000/ by default.


License
This project is licensed under the MIT License.
