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

-- Copiando estrutura para tabela integro.class_optional
CREATE TABLE IF NOT EXISTS `class_optional` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL DEFAULT '0',
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `details` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.class_optional: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `class_optional` DISABLE KEYS */;
/*!40000 ALTER TABLE `class_optional` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.content
CREATE TABLE IF NOT EXISTS `content` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `metatitle` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `url` text COLLATE utf8_unicode_ci,
  `timecreated` bigint(15) DEFAULT NULL,
  `timeupdated` bigint(15) DEFAULT NULL,
  `timedisabled` bigint(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.content: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `content` DISABLE KEYS */;
INSERT INTO `content` (`id`, `title`, `metatitle`, `size`, `url`, `timecreated`, `timeupdated`, `timedisabled`) VALUES
	(1, 'Testing Content', 'testing-content', 127, 'http://www.soma.com.br/', 1451606400, 1451606400, NULL);
INSERT INTO `content` (`id`, `title`, `metatitle`, `size`, `url`, `timecreated`, `timeupdated`, `timedisabled`) VALUES
	(2, 'Testing Content 2', 'testing-content 2', 127, 'http://www.soma.com.br/', 1451606400, 1451606400, NULL);
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

-- Copiando dados para a tabela integro.course: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` (`id`, `name`, `metaname`, `dailyround`, `timestart`, `timeend`) VALUES
	(1, 'Extensivo MAX', 'extensivo-max', 'manha', 1451606400, NULL);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.discipline
CREATE TABLE IF NOT EXISTS `discipline` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `courseid` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_discipline_course` (`courseid`),
  CONSTRAINT `FK_discipline_course` FOREIGN KEY (`courseid`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.discipline: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `discipline` DISABLE KEYS */;
INSERT INTO `discipline` (`id`, `courseid`) VALUES
	(1, 1);
INSERT INTO `discipline` (`id`, `courseid`) VALUES
	(2, 1);
INSERT INTO `discipline` (`id`, `courseid`) VALUES
	(3, 1);
/*!40000 ALTER TABLE `discipline` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.examination
CREATE TABLE IF NOT EXISTS `examination` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `details` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.examination: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `examination` DISABLE KEYS */;
/*!40000 ALTER TABLE `examination` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.reinforcement
CREATE TABLE IF NOT EXISTS `reinforcement` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `details` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.reinforcement: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `reinforcement` DISABLE KEYS */;
/*!40000 ALTER TABLE `reinforcement` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.rule
CREATE TABLE IF NOT EXISTS `rule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL DEFAULT '0',
  `courseid` int(11) NOT NULL DEFAULT '0',
  `level` tinyint(1) NOT NULL DEFAULT '0',
  `timestart` int(11) NOT NULL DEFAULT '0',
  `timeend` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_rule_user` (`userid`),
  KEY `FK_rule_course` (`courseid`),
  CONSTRAINT `FK_rule_course` FOREIGN KEY (`courseid`) REFERENCES `course` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT `FK_rule_user` FOREIGN KEY (`userid`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.rule: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `rule` DISABLE KEYS */;
/*!40000 ALTER TABLE `rule` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.schedule
CREATE TABLE IF NOT EXISTS `schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `metakind` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `instanceid` int(11) NOT NULL,
  `disciplineid` int(11) NOT NULL,
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
  KEY `FK_schedule_discipline` (`disciplineid`),
  CONSTRAINT `FK_schedule_discipline` FOREIGN KEY (`disciplineid`) REFERENCES `discipline` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.schedule: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.subscription
CREATE TABLE IF NOT EXISTS `subscription` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL DEFAULT '0',
  `instanceid` int(11) NOT NULL DEFAULT '0',
  `classid` int(11) DEFAULT '0',
  `metakind` varchar(255) COLLATE utf8_unicode_ci DEFAULT '0',
  `timestart` int(11) DEFAULT '0',
  `timeend` int(11) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_subscription_user` (`userid`),
  CONSTRAINT `FK_subscription_user` FOREIGN KEY (`userid`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.subscription: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `subscription` DISABLE KEYS */;
/*!40000 ALTER TABLE `subscription` ENABLE KEYS */;


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
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.user: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `name`, `password`, `username`, `email`, `timecreated`, `timeupdated`, `timelastlogin`) VALUES
	(1, 'Beta', '$2a$10$IlZdwa3nQwad5H4ngW.miOoZfwtFhFJ0lDMcoahPo.Xj2yex79kc6', 'admin', 'matteusbarbosa2@gmail.com', NULL, NULL, NULL);
INSERT INTO `user` (`id`, `name`, `password`, `username`, `email`, `timecreated`, `timeupdated`, `timelastlogin`) VALUES
	(2, 'Alfa', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` (`id`, `name`, `password`, `username`, `email`, `timecreated`, `timeupdated`, `timelastlogin`) VALUES
	(3, 'Bravo', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` (`id`, `name`, `password`, `username`, `email`, `timecreated`, `timeupdated`, `timelastlogin`) VALUES
	(4, 'Rambo', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` (`id`, `name`, `password`, `username`, `email`, `timecreated`, `timeupdated`, `timelastlogin`) VALUES
	(5, 'Delta', NULL, NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;


-- Copiando estrutura para tabela integro.user_responsible
CREATE TABLE IF NOT EXISTS `user_responsible` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `timestart` int(11) DEFAULT NULL,
  `timeend` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_user_responsible_user` (`userid`),
  CONSTRAINT `FK_user_responsible_user` FOREIGN KEY (`userid`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela integro.user_responsible: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `user_responsible` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_responsible` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
