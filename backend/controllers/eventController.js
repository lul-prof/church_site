// controllers/eventController.js
const pool = require("../pool.js");

// Get all events
exports.getEvents = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM events ORDER BY start ASC");
    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

// Create a new event
exports.createEvent = async (req, res) => {
  const { title, start, end } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO events (title, start, end) VALUES ($1, $2, $3) RETURNING *",
      [title, start, end]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

// Update an event
exports.updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title, start, end } = req.body;
  try {
    const result = await pool.query(
      "UPDATE events SET title = $1, start = $2, end = $3 WHERE id = $4 RETURNING *",
      [title, start, end, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM events WHERE id = $1", [id]);
    res.json({ message: "Event deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};
