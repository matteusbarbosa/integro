var strftime = require('strftime'); // not required in browsers
var pt_BR = {
    days: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    shortDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    AM: '(MANHÃ)',
    PM: '(NOITE)',
    am: '(manhã)',
    pm: '(noite)',
    formats: {
        D: '%d/%m/%y',
        F: '%Y-%m-%d',
        R: '%H:%M',
        X: '%T',
        c: '%a %b %d %X %Y',
        r: '%I:%M:%S %p',
        T: '%H:%M:%S',
        v: '%e-%b-%Y',
        x: '%D'
    }
};

module.exports = strftime.localize(pt_BR);