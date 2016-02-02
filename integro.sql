-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           5.6.25 - MySQL Community Server (GPL)
-- OS do Servidor:               Win32
-- HeidiSQL Versão:              9.2.0.4967
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Copiando estrutura para tabela integro.bind
CREATE TABLE IF NOT EXISTS `bind` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `instance_id` int(11) NOT NULL DEFAULT '0',
  `instance_type` varchar(50) COLLATE utf8_unicode_ci DEFAULT '0',
  `class_id` int(11) DEFAULT NULL,
  `timestart` int(11) DEFAULT NULL,
  `timeend` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id_instance_id_instance_type` (`user_id`,`instance_id`,`instance_type`),
  CONSTRAINT `FK_bind_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.bind: ~10 rows (aproximadamente)
/*!40000 ALTER TABLE `bind` DISABLE KEYS */;
INSERT INTO `bind` (`id`, `user_id`, `instance_id`, `instance_type`, `class_id`, `timestart`, `timeend`) VALUES
	(2, 2, 1, NULL, 0, NULL, 0);
INSERT INTO `bind` (`id`, `user_id`, `instance_id`, `instance_type`, `class_id`, `timestart`, `timeend`) VALUES
	(3, 3, 1, NULL, 0, NULL, 0);
INSERT INTO `bind` (`id`, `user_id`, `instance_id`, `instance_type`, `class_id`, `timestart`, `timeend`) VALUES
	(7, 1, 1, 'course', 0, NULL, 0);
INSERT INTO `bind` (`id`, `user_id`, `instance_id`, `instance_type`, `class_id`, `timestart`, `timeend`) VALUES
	(9, 2, 1, 'examination', 0, NULL, 0);
INSERT INTO `bind` (`id`, `user_id`, `instance_id`, `instance_type`, `class_id`, `timestart`, `timeend`) VALUES
	(10, 3, 1, 'examination', 0, NULL, 0);
INSERT INTO `bind` (`id`, `user_id`, `instance_id`, `instance_type`, `class_id`, `timestart`, `timeend`) VALUES
	(13, 2, 1, 'course', 0, NULL, 0);
INSERT INTO `bind` (`id`, `user_id`, `instance_id`, `instance_type`, `class_id`, `timestart`, `timeend`) VALUES
	(69, 1, 3, 'examination', NULL, 2147483647, NULL);
INSERT INTO `bind` (`id`, `user_id`, `instance_id`, `instance_type`, `class_id`, `timestart`, `timeend`) VALUES
	(70, 1, 1, 'reinforcement', NULL, 2147483647, NULL);
INSERT INTO `bind` (`id`, `user_id`, `instance_id`, `instance_type`, `class_id`, `timestart`, `timeend`) VALUES
	(72, 1, 2, 'examination', NULL, 2147483647, NULL);
/*!40000 ALTER TABLE `bind` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.classoptional
CREATE TABLE IF NOT EXISTS `classoptional` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` int(11) DEFAULT NULL,
  `number` int(11) NOT NULL DEFAULT '0',
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `details` text COLLATE utf8_unicode_ci NOT NULL,
  `timestart` bigint(20) DEFAULT NULL,
  `timeend` bigint(20) DEFAULT NULL,
  `timedisabled` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_classoptional_discipline` (`course_id`),
  CONSTRAINT `FK_classoptional_discipline` FOREIGN KEY (`course_id`) REFERENCES `discipline` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.classoptional: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `classoptional` DISABLE KEYS */;
INSERT INTO `classoptional` (`id`, `course_id`, `number`, `title`, `details`, `timestart`, `timeend`, `timedisabled`) VALUES
	(1, 1, 18, 'CLASSOPTIONAL TEST', 'TEST DETAILS', NULL, NULL, NULL);
INSERT INTO `classoptional` (`id`, `course_id`, `number`, `title`, `details`, `timestart`, `timeend`, `timedisabled`) VALUES
	(2, 2, 12, 'CLASSOPTIONAL TEST', 'TEST DETAILS', NULL, NULL, NULL);
INSERT INTO `classoptional` (`id`, `course_id`, `number`, `title`, `details`, `timestart`, `timeend`, `timedisabled`) VALUES
	(3, 3, 15, 'CLASSOPTIONAL TEST', 'TEST DETAILS', NULL, NULL, NULL);
/*!40000 ALTER TABLE `classoptional` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.content
CREATE TABLE IF NOT EXISTS `content` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `title` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `metatitle` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `url` text COLLATE utf8_unicode_ci,
  `timevalid` bigint(15) DEFAULT NULL,
  `timecreated` bigint(15) DEFAULT NULL,
  `timeupdated` bigint(15) DEFAULT NULL,
  `timedisabled` bigint(15) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_content_user` (`user_id`),
  CONSTRAINT `FK_content_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.content: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `content` DISABLE KEYS */;
INSERT INTO `content` (`id`, `user_id`, `title`, `metatitle`, `size`, `url`, `timevalid`, `timecreated`, `timeupdated`, `timedisabled`) VALUES
	(1, 1, 'Testing Content', 'testing-content', 127, 'http://www.soma.com.br/', NULL, 1451606400, 1451606400, NULL);
INSERT INTO `content` (`id`, `user_id`, `title`, `metatitle`, `size`, `url`, `timevalid`, `timecreated`, `timeupdated`, `timedisabled`) VALUES
	(2, 2, 'Testing Content 2', 'testing-content 2', 127, 'http://www.soma.com.br/', NULL, 1451606400, 1451606400, NULL);
/*!40000 ALTER TABLE `content` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.course
CREATE TABLE IF NOT EXISTS `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `metaname` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dailyround` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `timestart` int(11) DEFAULT NULL,
  `timeend` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.course: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` (`id`, `name`, `metaname`, `dailyround`, `timestart`, `timeend`) VALUES
	(1, 'Extensivo MAX', 'extensivo-max', 'manha', 1451606400, NULL);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.discipline
CREATE TABLE IF NOT EXISTS `discipline` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `details` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_discipline_course` (`course_id`),
  CONSTRAINT `FK_discipline_course` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.discipline: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `discipline` DISABLE KEYS */;
INSERT INTO `discipline` (`id`, `course_id`, `title`, `details`) VALUES
	(1, 1, 'Português', 'editoração eletrônica como Aldus PageMake');
INSERT INTO `discipline` (`id`, `course_id`, `title`, `details`) VALUES
	(2, 1, 'Matemática', 'editoração eletrônica como Aldus PageMake');
INSERT INTO `discipline` (`id`, `course_id`, `title`, `details`) VALUES
	(3, 1, 'Biologia', 'editoração eletrônica como Aldus PageMake');
/*!40000 ALTER TABLE `discipline` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.disciplinemedia
CREATE TABLE IF NOT EXISTS `disciplinemedia` (
  `discipline_id` int(11) NOT NULL,
  `media_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `disciplineid_contentid` (`discipline_id`,`media_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.disciplinemedia: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `disciplinemedia` DISABLE KEYS */;
INSERT INTO `disciplinemedia` (`discipline_id`, `media_id`, `id`) VALUES
	(1, 1, 1);
INSERT INTO `disciplinemedia` (`discipline_id`, `media_id`, `id`) VALUES
	(1, 2, 2);
/*!40000 ALTER TABLE `disciplinemedia` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.examination
CREATE TABLE IF NOT EXISTS `examination` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `details` text COLLATE utf8_unicode_ci NOT NULL,
  `discipline_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_examination_discipline` (`discipline_id`),
  CONSTRAINT `FK_examination_discipline` FOREIGN KEY (`discipline_id`) REFERENCES `discipline` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.examination: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `examination` DISABLE KEYS */;
INSERT INTO `examination` (`id`, `title`, `details`, `discipline_id`) VALUES
	(1, 'Test', 'editoração eletrônica como Aldus PageMake', 3);
INSERT INTO `examination` (`id`, `title`, `details`, `discipline_id`) VALUES
	(2, 'Test', 'editoração eletrônica como Aldus PageMake', 1);
INSERT INTO `examination` (`id`, `title`, `details`, `discipline_id`) VALUES
	(3, 'Test', 'editoração eletrônica como Aldus PageMake', 2);
/*!40000 ALTER TABLE `examination` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.media
CREATE TABLE IF NOT EXISTS `media` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `url` text COLLATE utf8_unicode_ci,
  `title` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `details` text COLLATE utf8_unicode_ci,
  `metatitle` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `format` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `timecreated` bigint(15) DEFAULT NULL,
  `timeupdated` bigint(15) DEFAULT NULL,
  `timedisabled` bigint(15) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_media_user` (`user_id`),
  CONSTRAINT `FK_media_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.media: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
INSERT INTO `media` (`id`, `user_id`, `url`, `title`, `details`, `metatitle`, `format`, `size`, `timecreated`, `timeupdated`, `timedisabled`) VALUES
	(1, 2, 'http://www.soma.com.br/sia/pdfs/hor/hor_aulas-provas_recup-final_1em.pdf', 'Horários de aulas', 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.', 'horarios-aulas', 'pdf', 128000, 1453309585, 1453309585, NULL);
INSERT INTO `media` (`id`, `user_id`, `url`, `title`, `details`, `metatitle`, `format`, `size`, `timecreated`, `timeupdated`, `timedisabled`) VALUES
	(2, 5, 'http://www.soma.com.br/sia/arquivos/2015/soma/enem/aplicacao3-2014_dia_1.pdf', '3ª Aplicação Enem - 1º Dia', 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.', '3-aplicacao-enem-1', 'pdf', 128000, 1453309585, 1453309585, NULL);
INSERT INTO `media` (`id`, `user_id`, `url`, `title`, `details`, `metatitle`, `format`, `size`, `timecreated`, `timeupdated`, `timedisabled`) VALUES
	(3, 3, 'http://www.soma.com.br/sia/arquivos/2015/soma/dicas_ENEM-conteudos_mais_abordados.pdf', 'Dicas para o ENEM - Conteúdos Mais abordados', 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.', 'dicas-enem', 'pdf', 128000, 1453309585, 1453309585, NULL);
/*!40000 ALTER TABLE `media` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.reinforcement
CREATE TABLE IF NOT EXISTS `reinforcement` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `discipline_id` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `details` text COLLATE utf8_unicode_ci,
  `timecreated` bigint(20) DEFAULT NULL,
  `timedisabled` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_reinforcement_discipline` (`discipline_id`),
  CONSTRAINT `FK_reinforcement_discipline` FOREIGN KEY (`discipline_id`) REFERENCES `discipline` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.reinforcement: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `reinforcement` DISABLE KEYS */;
INSERT INTO `reinforcement` (`id`, `discipline_id`, `title`, `details`, `timecreated`, `timedisabled`) VALUES
	(1, 1, 'TEST REINFORCEMENT', 'Details...', 2147483647, NULL);
INSERT INTO `reinforcement` (`id`, `discipline_id`, `title`, `details`, `timecreated`, `timedisabled`) VALUES
	(2, 1, 'TEST REINFORCEMENT 2', 'Details...', 2147483647, NULL);
INSERT INTO `reinforcement` (`id`, `discipline_id`, `title`, `details`, `timecreated`, `timedisabled`) VALUES
	(3, 3, 'TEST REINFORCEMENT 3', 'Details...', 2147483647, NULL);
/*!40000 ALTER TABLE `reinforcement` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.rule
CREATE TABLE IF NOT EXISTS `rule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `course_id` int(11) NOT NULL DEFAULT '0',
  `level` tinyint(1) NOT NULL DEFAULT '0',
  `timestart` int(11) NOT NULL DEFAULT '0',
  `timeend` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_rule_user` (`user_id`),
  KEY `FK_rule_course` (`course_id`),
  CONSTRAINT `FK_rule_course` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `FK_rule_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.rule: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `rule` DISABLE KEYS */;
/*!40000 ALTER TABLE `rule` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.schedule
CREATE TABLE IF NOT EXISTS `schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `discipline_id` int(11) NOT NULL,
  `instance_id` int(11) NOT NULL,
  `instance_type` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `vacancies` int(11) NOT NULL,
  `hourstart` int(11) NOT NULL,
  `hourend` int(11) NOT NULL,
  `timestart` int(11) NOT NULL,
  `timeend` int(11) NOT NULL,
  `timesubstart` int(11) NOT NULL,
  `timesubend` int(11) NOT NULL,
  `timecreated` int(11) NOT NULL,
  `weekdays` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_schedule_discipline` (`discipline_id`),
  CONSTRAINT `FK_schedule_discipline` FOREIGN KEY (`discipline_id`) REFERENCES `discipline` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.schedule: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `timecreated` bigint(20) DEFAULT NULL,
  `timeupdated` bigint(20) DEFAULT NULL,
  `timelastlogin` bigint(20) DEFAULT NULL,
  `securityhash` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `securityhash` (`securityhash`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.user: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `name`, `password`, `username`, `email`, `timecreated`, `timeupdated`, `timelastlogin`, `securityhash`) VALUES
	(1, 'Beta', '$2a$10$KfuVSBgPdJJgT6Bk/pDtGOUZZW1Simpgr6YFJnIED7hjywZp/XB8m', 'admin', 'matteusbarbosa2@gmail.com', 1452539980680, NULL, 1454446003778, NULL);
INSERT INTO `user` (`id`, `name`, `password`, `username`, `email`, `timecreated`, `timeupdated`, `timelastlogin`, `securityhash`) VALUES
	(2, 'Alfa', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` (`id`, `name`, `password`, `username`, `email`, `timecreated`, `timeupdated`, `timelastlogin`, `securityhash`) VALUES
	(3, 'Bravo', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` (`id`, `name`, `password`, `username`, `email`, `timecreated`, `timeupdated`, `timelastlogin`, `securityhash`) VALUES
	(4, 'Rambo', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` (`id`, `name`, `password`, `username`, `email`, `timecreated`, `timeupdated`, `timelastlogin`, `securityhash`) VALUES
	(5, 'Delta', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.userresponsible
CREATE TABLE IF NOT EXISTS `userresponsible` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `timestart` int(11) DEFAULT NULL,
  `timeend` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_user_responsible_user` (`user_id`),
  CONSTRAINT `FK_user_responsible_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.userresponsible: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `userresponsible` DISABLE KEYS */;
/*!40000 ALTER TABLE `userresponsible` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.warning
CREATE TABLE IF NOT EXISTS `warning` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `discipline_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `details` text COLLATE utf8_unicode_ci,
  `url` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `timecreated` bigint(20) NOT NULL DEFAULT '0',
  `timeupdated` bigint(20) NOT NULL DEFAULT '0',
  `timevalid` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_warning_discipline` (`discipline_id`),
  KEY `FK_warning_user` (`user_id`),
  CONSTRAINT `FK_warning_discipline` FOREIGN KEY (`discipline_id`) REFERENCES `discipline` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `FK_warning_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.warning: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `warning` DISABLE KEYS */;
INSERT INTO `warning` (`id`, `discipline_id`, `user_id`, `title`, `details`, `url`, `timecreated`, `timeupdated`, `timevalid`) VALUES
	(1, 1, 2, 'Testing News 1', 'Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor, ou palavras aleatórias que não parecem nem um pouco convincentes. Se você pretende usar uma passagem de Lorem Ipsum, precisa ter certeza de que não há algo embaraçoso escrito escondido no meio do texto. Todos os geradores de Lorem Ipsum na internet tendem a repetir pedaços predefinidos conforme necessário, fazendo deste o primeiro gerador de Lorem Ipsum autêntico da internet. Ele usa um dicionário com mais de 200 palavras em Latim combinado com um punhado de modelos de estrutura de frases para gerar um Lorem Ipsum com aparência razoável, livre de repetições, inserções de humor, palavras não características, etc.', 'http://www.soma.com.br', 2147483647, 1452795116, 1462097700);
INSERT INTO `warning` (`id`, `discipline_id`, `user_id`, `title`, `details`, `url`, `timecreated`, `timeupdated`, `timevalid`) VALUES
	(2, 2, 5, 'Testing News 2', 'Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor, ou palavras aleatórias que não parecem nem um pouco convincentes. Se você pretende usar uma passagem de Lorem Ipsum, precisa ter certeza de que não há algo embaraçoso escrito escondido no meio do texto. Todos os geradores de Lorem Ipsum na internet tendem a repetir pedaços predefinidos conforme necessário, fazendo deste o primeiro gerador de Lorem Ipsum autêntico da internet. Ele usa um dicionário com mais de 200 palavras em Latim combinado com um punhado de modelos de estrutura de frases para gerar um Lorem Ipsum com aparência razoável, livre de repetições, inserções de humor, palavras não características, etc.', 'http://www.soma.com.br', 2147483647, 1452795116, 1462097700);
INSERT INTO `warning` (`id`, `discipline_id`, `user_id`, `title`, `details`, `url`, `timecreated`, `timeupdated`, `timevalid`) VALUES
	(3, 3, 3, 'Testing News 3', 'Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor, ou palavras aleatórias que não parecem nem um pouco convincentes. Se você pretende usar uma passagem de Lorem Ipsum, precisa ter certeza de que não há algo embaraçoso escrito escondido no meio do texto. Todos os geradores de Lorem Ipsum na internet tendem a repetir pedaços predefinidos conforme necessário, fazendo deste o primeiro gerador de Lorem Ipsum autêntico da internet. Ele usa um dicionário com mais de 200 palavras em Latim combinado com um punhado de modelos de estrutura de frases para gerar um Lorem Ipsum com aparência razoável, livre de repetições, inserções de humor, palavras não características, etc.', 'http://www.soma.com.br', 2147483647, 1452795116, 1462097700);
/*!40000 ALTER TABLE `warning` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
