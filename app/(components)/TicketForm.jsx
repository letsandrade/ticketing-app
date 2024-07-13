"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id === "new" ? false : true;
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

    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });

      if (!res.ok) {
        throw new Error("Failed to update ticket");
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });

      if (!res.ok) {
        throw new Error("Failed to create ticket");
      }
    }

    router.push("/");
    router.refresh();
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  if (EDITMODE) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }

  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center">
      <form
        className="flex w-1/2 flex-col gap-3"
        method="POST"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? "Update your ticket" : "Create your ticket"}</h3>
        <label htmlFor="">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <label htmlFor="">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows={5}
        />
        <label htmlFor="">category</label>
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
        <label htmlFor="priority">priority</label>
        <div className="flex items-center justify-start">
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            required={true}
            value={1}
            checked={formData.priority == 1}
          />
          <label htmlFor="priority-1" className="m-0">
            1
          </label>
        </div>
        <input
          id="priority-2"
          name="priority"
          type="radio"
          onChange={handleChange}
          required={true}
          value={2}
          checked={formData.priority == 2}
        />
        <label htmlFor="priority-2">2</label>
        <input
          id="priority-3"
          name="priority"
          type="radio"
          onChange={handleChange}
          required={true}
          value={3}
          checked={formData.priority == 3}
        />
        <label htmlFor="priority-3">3</label>
        <input
          id="priority-4"
          name="priority"
          type="radio"
          onChange={handleChange}
          required={true}
          value={4}
          checked={formData.priority == 4}
        />
        <label htmlFor="priority-4">4</label>
        <input
          id="priority-5"
          name="priority"
          type="radio"
          onChange={handleChange}
          required={true}
          value={5}
          checked={formData.priority == 5}
        />
        <label htmlFor="priority-5">5</label>
        <label htmlFor="">Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label htmlFor="">Status</label>
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
        <input
          type="submit"
          className="btn max-w-xs"
          value={EDITMODE ? "Update ticket" : "Create ticket"}
        />
      </form>
    </div>
  );
};

export default TicketForm;
