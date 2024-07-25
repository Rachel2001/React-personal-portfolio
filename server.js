const nodemailer = require("nodemailer");

// Configure transporter for sending emails (replace credentials with your actual Gmail address and password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rachelinemouyana9@gmail.com",
    pass: "NunuPunu16!",
  },
});

const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;

app.use(express.json());

// Route handler for the root path (`/`)
app.get("/", (req, res) => {
  res.send("Hello!"); // Replace with your desired response
});

// Route handler for form submission (`/submit-form`)
app.post("/submit-form", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: "rachelinemouyana9@gmail.com",
    to: "rachelinemouyana9@gmail.com",
    subject: "New Message from Your Portfolio",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Something went wrong");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Message sent successfully");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
