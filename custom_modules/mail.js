var nodemailer = require('nodemailer');
var mail = 'contato@desenvolvedormatteus.com.br';
var mailpw = '84090762';
var mailhost = 'mx1.hostinger.com.br';
var siteroot = 'http://localhost:3000';
var transporter = nodemailer.createTransport('smtps://' + mail + ':' + mailpw + '@' + mailhost);

module.exports = {
    recovery: function (userto, recoverynumber) {

        var maildata = {
            to: userto.email,
            from: mail,
            subject: '✔ Recuperação de senha', // Subject line 
            text: 'Registramos uma solicitação para recuperação de senha.', // plaintext body
            html: '<b><a href="' + siteroot + '/recovery/validate/'+userto.username+'/'+recoverynumber+'">✔ Clique aqui</a> para prosseguir e redefinir sua senha.</b>'
        }; // html body 

        return transporter.sendMail(maildata);
    },
    passwordchanged: function (userto) {

        var maildata = {
            to: userto.email,
            from: mail,
            subject: '✔ Senha modificada', // Subject line 
            text: 'Sua senha foi atualizada, como solicitado.', // plaintext body
            html: '<b><a href="' + siteroot + '/login">✔ Clique aqui</a> para fazer login no sistema.</b>'
        }; // html body 

        return transporter.sendMail(maildata);
    },
    join: function (userto) {
        var maildata = {
            to: userto.email,
            from: mail,
            subject: '✔ Cadastro', // Subject line 
            text: 'Solicitação de cadastro registrada.', // plaintext body 
            html: '<b><a href="' + siteroot + '/recovery/validate">✔ Clique aqui</a> para prosseguir e finalizar seu cadastro.</b>'
        }; // html body 

        return transporter.sendMail(maildata);
    },
    notify: function (usersto, items) {
        var maildata = {
            to: userto.email,
            from: mail,
            subject: '✔ Notificação de rotina', // Subject line 
            text: 'Informações que podem ser de seu interesse.', // plaintext body 
            html: '<b>Solicitação registrada. <a href="' + siteroot + '/recovery/validate">✔ Clique aqui</a> para redefinir sua senha.</b>'
        }; // html body 

        return transporter.sendMail(maildata);
    },
    declaration: function (userto, declaration_data) {

        var maildata = {
            to: userto.email,
            from: '"SOMA | Financeiro" <'+mail+'>',
            subject: '✔ Declaração de débitos anuais', // Subject line 
            text: 'Declaração de débitos anuais', // plaintext body
            html: declaration_data.message,
            debug: true,
            attachments: [{
            // utf-8 string as an attachment
            filename: declaration_data.filename,
            path: declaration_data.path
        }]
        }; // html body 

        return transporter.sendMail(maildata);
    },

    mkt: function (userto, mkt_data) {

        var maildata = {
            to: userto.email,
            from: '"Desenvolvedor Web | Matteus Barbosa" <'+mail+'>',
            subject: "✔ Peça agora seu Website + Hospedagem + Emails a R$49,90/mês. Seu produto na web e Seu negócio conectado!",
            text: 'Peça agora seu Website + Hospedagem + Emails a R$49,90/mês. Seu produto na web e Seu negócio conectado! http://www.desenvolvedormatteus.com.br/contratar', // plaintext body
           // html: mkt_data.message,
            html: mkt_data.message,
            debug: true,
        }; // html body 

        return transporter.sendMail(maildata);
    },
};