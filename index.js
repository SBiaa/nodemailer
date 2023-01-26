const nodemailer = require('nodemailer');

    const transport = nodemailer.createTransport({
        host: 'smtp.office365.com',
        PORT: 587,
        secure: false,
        auth: {
            user:'',
            pass:'',
        }
    });

transport.sendMail({
    from: '',
    to: '',
    subject: 'Enviando email com Nodemailer',
    html:'<h1>Oii, tudo bem?</h1> <p> Esse email foi enviando com Nodemailer </p> <p> Caso você seja um(a) recrutador(a), saiba que eu sou muito esforçada e amo aprender coisas novas, me de um voto de confiança para poder mostrar o meu potencial </p><p> Caso você seja um(a) dev procurando inspirações, me manda uma mensagem e vamos pensar em um projeto legal para desenvolver</p>',
    text:'Oii, tudo bem?\n  Esse email foi enviando com Nodemailer \n \n Caso você seja um(a) recrutador(a), saiba que eu sou muito esforçada e amo aprender coisas novas, me de um voto de confiança para poder mostrar o meu potencial\n \n  Caso você seja um(a) dev procurando inspirações, me manda uma mensagem e vamos pensar em um projeto legal para desenvolver',
}).then(() => console.log('Email enviado com sucesso!'))
.catch((err) => console.log("Erro ao enviar email", err))