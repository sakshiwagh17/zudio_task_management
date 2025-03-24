// src/pages/Tasks/AssignTasks.jsx
import React, { useState } from "react";
import "./AssignTasks.css";

const Assigntasks = () => {
  // State for task details
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
    priority: "Medium",
    dueDate: "",
    assignedUser: "",
    document: null,
  });

  // Dummy users for dropdown
  const users = ["John Doe", "Jane Smith", "Alice Brown", "Bob Johnson"];

  // Handle input changes
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTask({ ...task, document: file });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task Created:", task);
    alert("Task Assigned Successfully!");
    setTask({
      title: "",
      description: "",
      status: "Pending",
      priority: "Medium",
      dueDate: "",
      assignedUser: "",
      document: null,
    });
  };

  return (
    <div className="assign-tasks-container">
      <h2>Assign New Task</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-grid">
          {/* Title */}
          <div className="form-group">
            <label>Task Title</label>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Enter task title"
              required
            />
          </div>

          {/* Due Date */}
          <div className="form-group">
            <label>Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Status */}
          <div className="form-group">
            <label>Status</label>
            <select name="status" value={task.status} onChange={handleChange}>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Priority */}
          <div className="form-group">
            <label>Priority</label>
            <select name="priority" value={task.priority} onChange={handleChange}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          {/* Assign User */}
          <div className="form-group">
            <label>Assign To</label>
            <select name="assignedUser" value={task.assignedUser} onChange={handleChange} required>
              <option value="">Select User</option>
              {users.map((user, index) => (
                <option key={index} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>

          {/* Upload Document */}
          <div className="form-group">
            <label>Upload Document</label>
            <input type="file" accept=".pdf,.docx,.png,.jpg" onChange={handleFileChange} />
            {task.document && <p className="file-name">📄 {task.document.name}</p>}
          </div>
        </div>

        {/* Description (Full Width) */}
        <div className="form-group full-width">
          <label>Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Enter task details"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit">Assign Task</button>
      </form>
    </div>
  );
};

export default Assigntasks;
