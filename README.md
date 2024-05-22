# Angular-NodeJS-App

This is a simple Angular and Node.js application with MongoDB integration.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/Angular-NodeJS-App.git
Navigate into the project directory:
bash
Copy code
cd Angular-NodeJS-App
Install dependencies for the frontend:
bash
Copy code
npm install
Install dependencies for the backend:
bash
Copy code
cd backend
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

makefile
Copy code
PORT=8000
MONGODB_URI=your_mongodb_value_here
Replace your_mongodb_value_here with the URI of your MongoDB instance.

To start the backend server, navigate to the backend directory and run:

bash
Copy code
npm start
The backend will be served at http://localhost:8000/ by default.

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License.
