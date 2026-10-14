# Mini Task Manager

A simple task manager built for practicing frontend-backend communication and backend deployment.

## Tech Stack

Frontend:
- HTML
- CSS
- JavaScript

Backend:
- Python
- Flask
- Flask-CORS

## Features

- View tasks
- Add tasks
- Mark tasks as completed
- Delete tasks
- REST API

## Project Structure

mini-task-manager/

├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── .gitignore

├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js

└── README.md


## Run Backend

Go inside backend:

cd backend

Create virtual environment:

python3 -m venv venv

Activate it:

source venv/bin/activate

Install dependencies:

pip install -r requirements.txt

Run server:

python app.py

Backend will run on:

http://127.0.0.1:5000


## API Endpoints

GET /

Check whether API is running.

GET /api/tasks

Get all tasks.

POST /api/tasks

Create a new task.

PUT /api/tasks/<id>

Complete/uncomplete a task.

DELETE /api/tasks/<id>

Delete a task.


## Frontend

Open:

frontend/index.html

The frontend communicates with the Flask backend using JavaScript fetch().
