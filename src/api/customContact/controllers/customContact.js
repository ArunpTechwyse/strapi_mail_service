const form = require('../../form-sec/controllers/form-sec');
const nodemailer = require('nodemailer');

module.exports = {
 async sendEmail(to, subject, text) {
    console.log("sending email...")
    // Create a Nodemailer transporter using Mandrill
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
         //host: 'smtp.mandrillapp.com',
        port: 587,
        auth: {
          user: 'ptfattendanceapp@gmail.com',
          pass: 'vkxhfuwbaygppaim',
        },
      });
  
      // Define email options
      const mailOptions = {
        from: 'ptfattendanceapp@gmail.com', // Sender address
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
 },
};
