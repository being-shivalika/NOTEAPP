**Notes App – Full Stack CRUD Application**

A simple full-stack Notes Application that demonstrates how to build and connect a frontend interface with a backend REST API.
The application allows users to create, read, update, and delete notes while storing them on the server.

This project focuses on understanding the fundamentals of REST API development, CRUD operations, and frontend–backend integration.

**Project Overview**

This application enables users to manage personal notes through a web interface. Users can:

- Create new notes
- View all saved notes
- Update existing notes
- Delete notes

The frontend communicates with the backend using REST API endpoints. The backend handles data storage and processing.

**Features**

- Create notes
- View all notes
- Update existing notes
- Delete notes
- RESTful API architecture
- Frontend and backend integration
- Clean modular code structure

**Tech Stack**
Frontend

- React.js
- JavaScript
- HTML
- TailwindCSS

Backend

- Node.js
- Express.js
- API Communication
- REST APIs
- JSON data exchange

**Project Structure**

Get All Notes
GET /notes
Returns all saved notes.

Update Note
PATCH /notes/:id
Updates an existing note.

Delete Note
DELETE /notes/:id
Removes a note from the database.

**How It Works**

The frontend UI allows users to interact with notes.
When a user performs an action (create, update, delete), the frontend sends an HTTP request to the backend API.
The Express server processes the request and performs the corresponding CRUD operation.
The server returns a response to the frontend.
The UI updates to reflect the latest state of the notes.


**Learning Outcomes**

This project helps understand:

- REST API design 
- CRUD operations
- Frontend–backend communication
- Handling HTTP requests
- Managing application state
- Structuring full-stack applications

Future Improvements :

- Adding user authentication
- Connecting to a database (MongoDB / PostgreSQL)
- Implementing search and filtering
- Adding note categories


This project is for learning and educational purposes.

If you want, I can also show you 3 small improvements that make this project look much stronger on GitHub (so it actually impresses recruiters instead of looking like a beginner CRUD app).
