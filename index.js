const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: '',
    PORT: 0,
    secure: false,
    auth: {
        user:'',
        pass:'',
    }
});


transport.sendMail({
    from: '',
    to: '',
    subject: '',
    html:'<>',
    text:'',
})