import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(bodyParser.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send-email", async (req, res) => {
  const { firstName, lastName, company, email, phone, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: "LyubomirDev <onboarding@resend.dev>",
      to: "iliev.lyubomir98@gmail.com",
      subject: `New message from ${firstName} ${lastName}`,
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
        <h2 style="color: #444; text-align: center; border-bottom: 2px solid #ddd; padding-bottom: 10px;">New Contact Form Submission</h2>
        
        <div style="padding: 10px; background-color: #fff; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <p style="margin: 0; color: #555;"><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p style="margin: 0; color: #555;"><strong>Company:</strong> ${company}</p>
          <p style="margin: 0; color: #555;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0073e6; text-decoration: none;">${email}</a></p>
          <p style="margin: 0; color: #555;"><strong>Phone:</strong> <a href="tel:${phone}" style="color: #0073e6; text-decoration: none;">${phone}</a></p>
        </div>
    
        <div style="padding: 15px; background-color: #fff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h3 style="margin-top: 0; color: #444;">Message</h3>
          <p style="color: #555;">${message}</p>
        </div>
        
        <footer style="text-align: center; margin-top: 20px; color: #777; font-size: 12px;">
          <p>&copy; 2024 Lyubomir Portfolio</p>
          <p>Sent via <a href="https://resend.com" style="color: #0073e6; text-decoration: none;">Resend</a></p>
        </footer>
      </div>
    `,
      replyTo: email,
    });

    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
