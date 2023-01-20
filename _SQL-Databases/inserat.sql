-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 20, 2023 at 02:11 AM
-- Server version: 10.3.37-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `imtowns3`
--

-- --------------------------------------------------------

--
-- Table structure for table `inserat`
--

CREATE TABLE `inserat` (
  `id` int(11) NOT NULL,
  `users_id` int(42) NOT NULL,
  `beschreibung` varchar(200) NOT NULL,
  `gegenleistung` varchar(200) NOT NULL,
  `adresse` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `inserat`
--

INSERT INTO `inserat` (`id`, `users_id`, `beschreibung`, `gegenleistung`, `adresse`) VALUES
(88, 223, 'Ich brauche ein Spanisch Tutor, da ich nächste Woche eine Prüfung habe. ', 'Ich könnte dafür deinen Hund oder Katze für eine 1 Woche lang hüten. Ich habe schon viele Erfahrungen mit Tieren gemacht.', 'Scalettastrasse 143, 7000 Chur'),
(89, 224, 'Ich brauche jemanden der sich sehr gut mit Blender auskennt, da ich nicht mehr vorwärts komme mit meinem Projekt. ', 'Ich kann sehr gut Kochen und würde dann meine Kochdienste 3 mal anbieten. ', 'Sandgrube 22-30,4614 Hägendorf, Olten'),
(91, 225, 'Ich brauche Hilfe bei der Gartenarbeit, da ich es nicht mehr alleine schaffe.', 'Ich biete dafür Betreuungshilfe für Haustiere an.', 'Eibachweg 12, Fisibach'),
(92, 226, 'Ich brauche Hilfe beim Programmieren. Vor allem in den Bereichen PHP und Java Script habe ich überhaupt keine Erfahrung.', 'Ich kann gut Texte schreiben. Falls sie also einen Text auf ihrer Webseite oder für ein Resumé brauchen, kann ich das für sie übernehmen.', 'Engadinstrasse 12, Chur'),
(93, 227, 'Ich würde gerne Ukulele lernen, brauche jedoch unbedingt einen Lehrer, der mir die Basics beibringt.', 'Ich bin gelernter Elektriker. Falls also in ihrem Zuhause etwas kaputt ist, kann ich das im Handumdrehen für sie erledigen.', 'Siebacherweg 5, Bonn'),
(94, 228, 'Ich bin skater und hätte gerne ein professionelles Video von ein paar stunts die ich mache.', 'Ich habe nichts anzubieten ausser die Garantie, dass du mit mir eine gute Zeit verbringst.', 'Marbelstrasse 16, Offenbach'),
(95, 229, 'Für einen Bühnenauftritt nächste Woche muss ich professionelle geschminkt werden. Ich suche eine/einen ausgebildete/n Maskenbildner/in', 'Als Gegenleistung kann ich dir ein Ticket bei der Aufführung besorgen.', 'Opernhaus Zürich'),
(96, 230, 'Ich brauche jemanden der meinen Fernseher repariert.', 'Ich koche sehr gerne und würde anbieten ein komplettes Wochenmenü vorzubereiten.', 'Lenzweg 2, Laubach'),
(97, 222, 'Ich brauche mit Kochen einmal in der Woche', 'Ich bin ein Spanisch Tutor und könnte dr Spanisch beibringen. ', 'Chur Medienhaus ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `inserat`
--
ALTER TABLE `inserat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `inserat`
--
ALTER TABLE `inserat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
