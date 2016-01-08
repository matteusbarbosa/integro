var nodemailer = require('nodemailer');
var mail = 'contato@desenvolvedormatteus.com.br';
var mailpw = '84090762';
var mailhost = 'mx1.hostinger.com.br';
var siteroot = 'http://localhost:3000';
var transporter = nodemailer.createTransport('smtps://'+mail+':'+mailpw+'@'+mailhost);

module.exports = {

	recovery : function recovery (userto){
		var maildata = {
			to : userto.email,
			from : mail, 
		subject: '✔ Recuperação de senha', // Subject line 
	    text: 'Solicitação registrada. Acesse para redefinir sua senha.', // plaintext body 
	    html: '<b>Solicitação registrada. <a href="'+siteroot+'/recovery/validate">✔ Clique aqui</a> para redefinir sua senha.</b>' // html body 
	};

	transporter.sendMail(maildata, function(error, info){

		if(error){
			return error;
		} else{
			//return info.response;
			return true;
		}
	});
},

join : function join (userto){
	transporter.sendMail(data, function(error, info){
		if(error){
			return error;
		} else{
			return info.response;
		}
	});
},

notify : function notify (userto){
	transporter.sendMail(data, function(error, info){
		if(error){
			return error;
		} else{
			return info.response;
		}
	});
}
};