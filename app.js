const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const submissions = [];

app.get("/admission", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "form.html"));
});

app.post("/admission", (req, res) => {
  const { name, email, phone, course } = req.body;
  submissions.push({ name, email, phone, course });
  res.send(`<h2>Thank you, ${name}! You’ve successfully applied for the ${course} program.</h2><a href="/admission">Apply again</a>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/admission`);
});
