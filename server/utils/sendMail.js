const nodemailer = require('nodemailer')

const sendMail = async options => {
  const transporter = nodemailer.createTransport({
    // CONFIGURATION!
    service: 'gmail',
    auth: {
      user: process.env.PASS,
      pass: process.env.USER
    }
  })

  const mailOptions = {
    from: process.env.USER,
    to: options.email,
    subject: options.subject,
    text: options.message
  }

  await transporter.sendMail(mailOptions)
}

module.exports = sendMail
