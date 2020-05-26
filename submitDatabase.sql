-- MySQL dump 10.17  Distrib 10.3.15-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: gwaze0
-- ------------------------------------------------------
-- Server version	10.3.15-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `homeimgs`
--

DROP TABLE IF EXISTS `homeimgs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `homeimgs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `i_name` varchar(15) NOT NULL,
  `i_src` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `homeimgs`
--

LOCK TABLES `homeimgs` WRITE;
/*!40000 ALTER TABLE `homeimgs` DISABLE KEYS */;
INSERT INTO `homeimgs` VALUES (1,'pageone','/images/pageone.jpg'),(2,'pagetwo','/images/pagetwo.jpg');
/*!40000 ALTER TABLE `homeimgs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hyons`
--

DROP TABLE IF EXISTS `hyons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hyons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` varchar(20) NOT NULL,
  `hyonText` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hyons`
--

LOCK TABLES `hyons` WRITE;
/*!40000 ALTER TABLE `hyons` DISABLE KEYS */;
INSERT INTO `hyons` VALUES (1,'1','후쿠오카의 한 단체에서 주기적으로 주최하고 있는 한일교류회 혹은\n      미리 대실을 해두고 팻말 등을 들고 다니며 직접 참가자를 모집해\n      한일 교류회를 함으로써 일본인 친구들과 교류 할 수있는 기회를 가짐'),(2,'2','글로만 배워 오던 일본어였지만 모르는 일본인에게 직접\n    말을 걸어 실전 일본어를 사용해보고 친구를 사귀어\n       일본인 친구들과의 친목을 도모하고 일본어 사용에 대한\n    자신감을 높이는 활동'),(3,'3','매주 주말 조원들과 후쿠오카 및 근교 여행지를 둘러보며\n    조원들과의 사이를 더욱 돈독하게 하고 여행 전날에는 각 조 별로\n    어디로 여행을 갈지 발표 함 으로써 여행지 공유 및 그 여행지를\n    가는 이유를 설명한다.'),(4,'4','일본 최대의 명절 오봉은 8월15일을 중심으로 긴 휴일이다. 오봉 연휴에는 평일이지만 일본어 수업 대신 조원들과 함께 일본 최대의 명절을 즐길 수 있는 시간이 주어진다.'),(5,'5','일본 IT기업인 GMO페파보를 견학한다.\n    견학을 가면 현지 엔지니어와 한국인 취업자가\n    말해주는 유익한 정보들을 들을 수 있는 유익한 시간이다.'),(6,'6','매주 주말은 조별 여행을 가는 날이지만 봉사활동을 할 수도 있다.\n   봉사활동은 직접 검색을 해보고 봉사활동을 찾아서 신청을 해야한다.\n   해외에서의 봉사활동이라 더욱 뜻 깊은 시간'),(7,'7','조선통신사 상륙 기념비, 나가사키 평화공원 등 역사적으로 깊은\n  뜻을 지니고 있는 장소들을 탐방한다. 탐방 전 이러한 곳들이\n  생긴 이유를 조사해 봄으로써 역사를 정확히 알아가는 시간');
/*!40000 ALTER TABLE `hyons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` varchar(20) NOT NULL,
  `hyonImage` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'1','/images/hanil.jpg'),(2,'2','/images/kanna.jpg'),(3,'3','/images/ryokou.jpg'),(4,'4','/images/obong.jpg'),(5,'5','/images/gmo.jpg'),(6,'6','/images/bongsa.jpeg'),(7,'7','/images/nagasaki.jpg');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `introduceimgs`
--

DROP TABLE IF EXISTS `introduceimgs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `introduceimgs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `i_name` varchar(15) NOT NULL,
  `i_src` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `introduceimgs`
--

LOCK TABLES `introduceimgs` WRITE;
/*!40000 ALTER TABLE `introduceimgs` DISABLE KEYS */;
/*!40000 ALTER TABLE `introduceimgs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `introduces`
--

DROP TABLE IF EXISTS `introduces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `introduces` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `introduce` varchar(500) NOT NULL,
  `i_name` varchar(15) NOT NULL,
  `i_phone` varchar(15) NOT NULL,
  `i_email` varchar(30) NOT NULL,
  `i_birth` varchar(9) NOT NULL,
  `real_name` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `introduces`
--

LOCK TABLES `introduces` WRITE;
/*!40000 ALTER TABLE `introduces` DISABLE KEYS */;
INSERT INTO `introduces` VALUES (1,'2WDJ 김현진이라고합니다. 경상북도 구미 출신이며 현재는 영진전문대학교에 재학 중입니다. 취미는 음악 감상과 영화 감상이며 좋아하는 음식은 김치찌개입니다. 좋아하는 스포츠는 농구이며 보는 것 하는 것 둘 다 좋아합니다.','memberone','010-9502-6053','polo9562@gmail.com','97/10/22','김현진');
/*!40000 ALTER TABLE `introduces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logoimgs`
--

DROP TABLE IF EXISTS `logoimgs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `logoimgs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `i_name` varchar(15) NOT NULL,
  `i_src` varchar(100) NOT NULL,
  `use` varchar(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logoimgs`
--

LOCK TABLES `logoimgs` WRITE;
/*!40000 ALTER TABLE `logoimgs` DISABLE KEYS */;
/*!40000 ALTER TABLE `logoimgs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qnas`
--

DROP TABLE IF EXISTS `qnas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qnas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `q_title` varchar(20) NOT NULL,
  `q_body` varchar(30) NOT NULL,
  `u_id` varchar(20) NOT NULL,
  `answer` varchar(20) DEFAULT '0',
  `answerInfo` varchar(30) DEFAULT NULL,
  `time` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qnas`
--

LOCK TABLES `qnas` WRITE;
/*!40000 ALTER TABLE `qnas` DISABLE KEYS */;
INSERT INTO `qnas` VALUES (3,'테스트','./userQna/20190614174230관리자','관리자','1','./adminAnswer/관리자3','20190614174230'),(4,'테스트2','./userQna/20190614174817관리자','관리자','0',NULL,'20190614174817'),(5,'테스트 3','./userQna/20190614174823관리자','관리자','0',NULL,'20190614174823'),(6,'테스트 4','./userQna/20190614174829관리자','관리자','0',NULL,'20190614174829'),(7,'테스트','./userQna/20190614175238테스트용','테스트용','0',NULL,'20190614175238');
/*!40000 ALTER TABLE `qnas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(30) NOT NULL,
  `name` varchar(15) NOT NULL,
  `identity_number` int(10) unsigned NOT NULL,
  `phone` varchar(15) NOT NULL,
  `gender` int(10) unsigned NOT NULL,
  `admin` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `u_id` (`u_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'asd','$2b$12$RXHNU8b9hWK07b3eGbsld.ega.bjVyssz3TLDh./wFOPV2ugV.z42','a@a.com','asd',1,'124155',10,0),(2,'테스트','$2b$12$Ve5dV6b9Sz/D1h4g6bKZgucs7aHj75QdBhjisdRSYQsNA8V0E9bn2','test@naver.com','테스트',971022,'01012341234',10,0),(3,'테스트용','$2b$12$TRZ5qfDy.DxXPrV7CEjMj.TG/wKjpymx09Sg/ulkG9uAYEiIIt/.6','test@naver.com','테스트용',971022,'01012341234',10,0),(5,'관리자','$2b$12$udBdp8J8vjSt/dM1dzukNuTlXQTWkIEv0cIlzUZMllG7wdljg8556','admin@naver.com','관리자',981023,'01000000000',10,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-15 15:44:03
