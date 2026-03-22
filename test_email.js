const emailjs = require('@emailjs/browser');

const body = {
  lib_version: "3.11.0",
  user_id: "n629mPkgzuzLZfXwH",
  service_id: "service_wsxg3dy",
  template_id: "template_59d3ypj",
  template_params: {
    to_name : "Fabio",
    from_name : "Test",
    reply_to : "test@example.com",
    message : "Test message from API debugging script"
  }
};

fetch('https://api.emailjs.com/api/v1.0/email/send', {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  }
}).then(res => res.text()).then(text => {
  console.log("Response:", text);
}).catch(err => {
  console.error("Error:", err);
});
