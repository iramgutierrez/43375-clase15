const nodemailer = require('nodemailer')

const TEST_MAIL = 'lela.muller24@ethereal.email'
const PASSWORD_MAIL = 'SJwa4qXX4HUC2j5S8Z'
 
const sendMail = async (subject, body) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: TEST_MAIL,
      pass: PASSWORD_MAIL
    }
  })


  const mailOptions = {
    from: 'Servidor Node.js',
    to: TEST_MAIL,
    subject: subject,
    html: body
  }

  await transporter.sendMail(mailOptions)
}

module.exports = {
  sendMail
}