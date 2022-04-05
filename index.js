const sgMail = require('@sendgrid/mail');
const dotenv = require("dotenv")

dotenv.config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const msg = {
  to: 'from@mail.com',
  from: 'to@mail.com', // Use the email address or domain you verified above
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

//ES8
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
})();
