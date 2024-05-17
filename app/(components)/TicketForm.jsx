"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const router = useRouter();

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Failed to create ticket");
    }

    router.refresh();
    router.push("/");
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center">
      <form
        className="flex w-1/2 flex-col gap-3"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h3>create your ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows={5}
        />
        <label>category</label>
        <select
          id="category"
          name="category"
          onChange={handleChange}
          required={true}
          value={formData.category}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>
        <label>priority</label>
        <input
          id="priority-1"
          name="priority"
          type="radio"
          onChange={handleChange}
          required={true}
          value={1}
          checked={formData.priority == 1}
        />
        <label>1</label>
        <input
          id="priority-2"
          name="priority"
          type="radio"
          onChange={handleChange}
          required={true}
          value={2}
          checked={formData.priority == 2}
        />
        <label>2</label>
        <input
          id="priority-3"
          name="priority"
          type="radio"
          onChange={handleChange}
          required={true}
          value={3}
          checked={formData.priority == 3}
        />
        <label>3</label>
        <input
          id="priority-4"
          name="priority"
          type="radio"
          onChange={handleChange}
          required={true}
          value={4}
          checked={formData.priority == 4}
        />
        <label>4</label>
        <input
          id="priority-5"
          name="priority"
          type="radio"
          onChange={handleChange}
          required={true}
          value={5}
          checked={formData.priority == 5}
        />
        <label>5</label>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label>Status</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input type="submit" className="btn max-w-xs" value="Create Ticket" />
      </form>
    </div>
  );
};

export default TicketForm;
