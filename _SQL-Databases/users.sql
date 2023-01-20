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
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `vorname` varchar(255) NOT NULL,
  `nachname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `vorname`, `nachname`, `email`, `password`, `created_at`) VALUES
(222, 'Caetano', 'Chappuis', 'caetchappuis@gmail.com', '$2y$10$GTVZHZQMMOEruGrANZuVLe9DdCL/u0AksDmP9UGg2froxiKSSGjH.', '2023-01-19 00:24:50'),
(223, 'Melina ', 'Aeschbach', 'melina.aeschbach@gmail.com', '$2y$10$WYmU6A2/tYXrDXzUDwI/GurfpPAUOJS5XV2KQCJzw9UV8Q5tfYneW', '2023-01-19 09:56:15'),
(224, 'Nina', 'Burger', 'ninaburger@gmail.com', '$2y$10$nZjQFSUzu.sm.TwcgpC7BO6bB1Vsyh8F36Z3wUyI4NLQO.NsN3966', '2023-01-19 10:39:35'),
(225, 'Marco', 'Vollenweider', 'marco.vol@gmail.com', '$2y$10$TF/6baUU.xNK0gW25okXvugT1jP9Jif9n5GMyaXQgQxPfggjt8KTK', '2023-01-19 11:54:56'),
(226, 'Dominik', 'Bolsinger', 'bolsingerd@gmail.com', '$2y$10$/c8Cjzv6cWumZKwUBOD4ReaZ3husUFn/d4DOfHuwOHaXqHOGS/j0y', '2023-01-19 11:58:10'),
(227, 'Ciril', 'Misner', 'ciril@hotmail.com', '$2y$10$/TAyaxMrKh7Qp68bvGlrAeHELouR2DMNttlTiOwyE3zPmoaVxL7Pa', '2023-01-19 12:02:12'),
(228, 'Leo', 'Salz', 'leo.salz@gmail.com', '$2y$10$riiPN3.3iUN8FpBbuZPwSuqhdRvReTsaWxFq3iu6lnXWteM3iaSmO', '2023-01-19 12:04:24'),
(229, 'Maria', 'Lener', 'maria.lener@gmail.com', '$2y$10$7DrllzZYXnsmsPtBYdVSBOGxu181fREbsUfWRiAbzbmiyDC7eDv42', '2023-01-19 12:07:00'),
(230, 'Remo', 'Siebacher', 'remo.siebacher@hotmail.com', '$2y$10$66ISqiPnvR0FGtiGHHknE.QH/CvkeqBLM5HZP1woibbH4JtYJxnSW', '2023-01-19 12:22:11'),
(231, 'Marlin ', 'Chappuis', '123@gmail.com', '$2y$10$.8aeSvf/ogD7zSBXKc7omu1msD8EOw9kZfXcqBfnck7MxXXRPr1r2', '2023-01-20 00:25:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=232;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
