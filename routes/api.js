var express = require('express');
var app = express();
var router = express.Router();
var bookshelf = require('../custom_modules/bookshelf').plugin('registry');

//models
var media = require('../models/media');
var category = require('../models/category');
var course = require('../models/course');
var user = require('../models/user');
var bind = require('../models/bind');
var examination = require('../models/examination');
var discipline = require('../models/discipline');
var date = require('../custom_modules/date');

/* Avisos */
router.get('/course/warnings', function (req, res, next) {

    //course.where({id: req.session.access.course.id}).fetch({withRelated: ['discipline.warning']})
    course.where({id: req.query.courseid }).fetch({withRelated: ['disciplines.warnings.user']})
    .then(function (coursedata) {

        var data = coursedata.toJSON();

            for(var c = 0; c < data.disciplines.length; c++){

                for(var x = 0; x < data.disciplines[c].warnings.length; x++){
                        data.disciplines[c].warnings[x].timecreated = date('(%a) :: %d de %B, %Hh:%Mm', new Date(data.disciplines[c].warnings[x].timecreated));
                }
            }

        res.json(data);

    });
});

/*
 * ng json query
 */
 router.get('/warning/search/:search', function (req, res, next) {

    warning.query(function (qb) {
        qb.where('title', 'LIKE', '%' + req.params.search + '%')
        .orWhere('details', 'LIKE', '%' + req.params.search + '%')
        .orWhere('url', 'LIKE', '%' + req.params.search + '%');
    }).fetchAll().then(function (warningdata) {

        res.json(warningdata.toJSON());
    });
});
/* Fim Avisos */

/* Categoria */
router.get('/discipline/categories', function (req, res, next) {

	var discipline_id = req.query.discipline_id;
    
    category.where({ discipline_id : discipline_id }).fetchAll().then(function(categorydata){

        var jdata = categorydata.toJSON();

        console.log(jdata);

        return res.json(jdata);
    });
});

/* Fim Categoria */

/* Aula Opcional */
router.get('/course/classoptionals', function (req, res, next) {

    course.where({id: req.query.courseid }).fetch({withRelated: ['classoptional']})
    .then(function (coursedata) {

        //user.where({id: req.session.access.user.id })
        user.where({id: 1 })
        .fetch({withRelated : [ { binds : function (query) { query.where('instance_type', 'classoptional'); }}, 'binds.classoptional']})
        .then(function (subs_fetch){

            var data = coursedata.toJSON();
            data.user = subs_fetch.toJSON();

                for(var c = 0; c < data.classoptional.length; c++){

                    var exist = _.some(data.user.binds, {instance_id : data.classoptional[c].id });

                    if(exist){
                        data.classoptional[c].subs = true;
                    }

                    data.classoptional[c].timestart = date('(%a) :: %d de %B, %Hh:%Mm', new Date(data.classoptional[c].timestart));
                    
                }

            res.json(data);
        });
    });
});

/*
 * ng json query
 */
 router.get('/classoptional/search/:search', function (req, res, next) {

    classoptional.query(function (qb) {
        qb.where('title', 'LIKE', '%' + req.params.search + '%')
        .orWhere('details', 'LIKE', '%' + req.params.search + '%')
        .orWhere('details', 'LIKE', '%' + req.params.search + '%')
    }).fetchAll().then(function (classoptionaldata) {
        res.json(classoptionaldata.toJSON());
    });

});

/* Fim Aula Opcional */

/* Simulados */
router.get('/course/examinations', function (req, res, next) {

    course.where({id: req.query.courseid }).fetch({withRelated: ['disciplines.examinations']})
    .then(function (coursedata) {

        user.where({id: req.query.courseid })
        .fetch({withRelated : [ { binds : function (query) { query.where('instance_type', 'examination'); }},
            { 'binds.examination.schedules' : function (query) { query.where('instance_type', 'examination'); }}
            ]})
        .then(function (subs_fetch){

            var data = coursedata.toJSON();
            data.user = subs_fetch.toJSON();

            for(var c = 0; c < data.disciplines.length; c++){

                for(var x = 0; x < data.disciplines[c].examinations.length; x++){

                    var exist = _.some(data.user.binds, {instance_id : data.disciplines[c].examinations[x].id });

                    console.log(data.disciplines[c].examinations[x].schedules);

                    /* t/f */
                    data.disciplines[c].examinations[x].subs = exist;
                    
                    data.disciplines[c].examinations[x].timecreated = date('(%a) :: %d de %B, %Hh:%Mm', new Date(data.disciplines[c].examinations[x].timecreated));
                    
                }
            }
            res.json(data);
        });
    });
});
/* Fim Simulados */

/* Mídia */
router.get('/media/find/:id', function (req, res, next){
    var id = req.params.id;
    
    media.where({ id : id }).fetch().then(function(mediadata){

        var jdata = mediadata.toJSON();

        res.json(jdata);
    });
});

router.get('/course/media', function (req, res, next) {

    var courseid = req.session.access.course.id;

    course.where({id: courseid }).fetch({withRelated: ['disciplines.media.user', 'disciplines.media.categories']})
    .then(function (coursedata) {

        console.log(coursedata);

        var data = coursedata.toJSON();

        data.user = req.session.access.user;

        for(var c = 0; c < data.disciplines.length; c++){
            for(var x = 0; x < data.disciplines[c].media.length; x++){
                data.disciplines[c].media[x].timecreated = date('(%a) :: %d de %B, %Hh:%Mm', new Date(data.disciplines[c].media[x].timecreated));
                data.disciplines[c].categories = data.disciplines[c].categories;
            }
        }

        res.json(data);

    });
});
/* Fim Mídia */

/* Monitorias */
router.get('/course/reinforcements', function (req, res, next) {

    //course.where({id: req.session.access.course.id}).fetch({withRelated: ['discipline.reinforcement']})
    course.where({id: req.query.courseid }).fetch({withRelated: ['disciplines.reinforcements']})
    .then(function (coursedata) {

        //user.where({id: req.session.access.user.id })
        user.where({id: 1 })
        .fetch({withRelated : [ { binds : function (query) { query.where('instance_type', 'reinforcement'); }}, 'binds.reinforcement']})
        .then(function (subs_fetch){

            var data = coursedata.toJSON();
            data.user = subs_fetch.toJSON();

            for(var c = 0; c < data.disciplines.length; c++){

                for(var x = 0; x < data.disciplines[c].reinforcements.length; x++){

                    var exist = _.some(data.user.binds, {instance_id : data.disciplines[c].reinforcements[x].id });

                    if(exist){
                        data.disciplines[c].reinforcements[x].subs = true;
                    }

                    data.disciplines[c].reinforcements[x].timecreated = date('(%a) :: %d de %B, %Hh:%Mm', new Date(data.disciplines[c].reinforcements[x].timecreated));
                }
            }

            res.json(data);
        });
    });
});
/* Fim Monitorias */

/* Eventos */
router.get('/schedule/vacancies/check/:instance_type/:instance_id', function (req, res, next) {

	var sch = schedule.where({instance_type: req.params.instance_type, instance_id: req.params.instance_id})
	.fetch().then(function (scheduledata) {

		if(scheduledata === null)
			return res.json({ vacancies_left : 0});

		var data = {};

		var bd = bind.where({instance_type: scheduledata.toJSON().instance_type, instance_id: scheduledata.toJSON().instance_id})
		.count().then(function (bind_count) {

			if(bind_count === null)
				return res.json({ vacancies_left : 0});

			data.vacancies_left = scheduledata.toJSON().vacancies - bind_count;

			return res.json(data);	

		});		
		
	});
});

/* Fim Eventos */

/* Vínculos de usuário x objeto */
router.get('/bind/:instance_type', function (req, res, next){

	//TODO: Planejar Validação
	var bind_kind = req.params.kind;

    bind.forge({
        /* user_id : req.session.access.user.id, */
        user_id : req.query.user_id,
        instance_id : req.query.id,
        instance_type : bind_kind,
        timestart: Date.now()
    })
    .save()
    .then(success => res.status(200).send(success))
    .catch(error => res.status(500)
            .send(error.message)
    );
});

/* Desvincular usuário x objeto */
router.get('/unlink/:instance_type', function (req, res, next){

	//TODO: Planejar Validação
	var bind_kind = req.params.kind;

    bind.where({
        /* user_id : req.session.access.user.id, */
        user_id : req.query.user_id,
        instance_id : req.query.id,
        instance_type : bind_kind
    })
    .destroy()
    .then(success => {
        res.status(200).send(success);
    })
    .catch(error => {
           res.status(500)
            .send(error.message);
    }
    );
});

/* Fim Vínculos */

module.exports = router;