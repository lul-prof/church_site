// routes/events.js
const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController.js");

// Event Routes
router.get("/events", eventController.getEvents); // Get all events
router.post("/events", eventController.createEvent); // Create an event
router.put("/events/:id", eventController.updateEvent); // Update an event
router.delete("/events/:id", eventController.deleteEvent); // Delete an event

module.exports = router;
