// form-sec.js

require('dotenv').config();
const nodemailer = require('nodemailer');

async function sendEmail(to, subject, text) {
    console.log("sending email...");
    // Create a Nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: process.env.EMAIL_USER, // Use environment variable
          pass: process.env.EMAIL_PASS, // Use environment variable
        },
    });

    // Define email options
    const mailOptions = {
        from: process.env.EMAIL_USER, // Sender address
        to: to, // List of recipients
        subject: subject, // Subject line
        text: text, // Plain text body
    };

    // Send the email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);
    } catch (error) {
      console.error('Error sending email: ' + error);
    }
}

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::form-sec.form-sec',
({ strapi }) => ({
    async create(ctx) {
        console.log("entered to create")
        const response = await super.create(ctx);

        console.log(response);
        console.log("response");

        const email = response.data.attributes.email;
        const name = response.data.attributes.name;
        // Send email
        await sendEmail(email, 'Testing', `hey dear ${name}, this is a confirmation message`);
        
        return response;
        
    },
}));
