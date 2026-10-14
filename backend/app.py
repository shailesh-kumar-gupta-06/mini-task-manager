from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

tasks = [
    {"id": 1, "title": "Learn Backend Deployment", "completed": False},
    {"id": 2, "title": "Deploy Flask API", "completed": False}
]


@app.route("/")
def home():
    return jsonify({
        "message": "Mini Task Manager API is running!"
    })


@app.route("/api/tasks", methods=["GET"])
def get_tasks():
    return jsonify(tasks)


@app.route("/api/tasks", methods=["POST"])
def add_task():
    data = request.get_json()

    if not data or not data.get("title"):
        return jsonify({
            "error": "Task title is required"
        }), 400

    new_task = {
        "id": len(tasks) + 1,
        "title": data["title"],
        "completed": False
    }

    tasks.append(new_task)

    return jsonify(new_task), 201


@app.route("/api/tasks/<int:task_id>", methods=["PUT"])
def complete_task(task_id):

    for task in tasks:
        if task["id"] == task_id:
            task["completed"] = not task["completed"]
            return jsonify(task)

    return jsonify({
        "error": "Task not found"
    }), 404


@app.route("/api/tasks/<int:task_id>", methods=["DELETE"])
def delete_task(task_id):

    for task in tasks:
        if task["id"] == task_id:
            tasks.remove(task)

            return jsonify({
                "message": "Task deleted successfully"
            })

    return jsonify({
        "error": "Task not found"
    }), 404


if __name__ == "__main__":
    app.run(debug=True)