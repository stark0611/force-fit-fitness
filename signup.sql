-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 30, 2022 at 07:47 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `signup`
--

-- --------------------------------------------------------

--
-- Table structure for table `sign`
--

CREATE TABLE `sign` (
  `sno` int(11) NOT NULL,
  `Email` varchar(500) NOT NULL,
  `password` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sign`
--

INSERT INTO `sign` (`sno`, `Email`, `password`, `date`) VALUES
(16, 'sdf@df.b', 'sdf', '0000-00-00 00:00:00'),
(17, 'se@sdgs.df', 'df', '0000-00-00 00:00:00'),
(34, 'aniketrajywardhan@gmail.com', '123', '0000-00-00 00:00:00'),
(38, 'aniketrajyawardhan@gmail.com', 'f', '0000-00-00 00:00:00'),
(41, '', '', '0000-00-00 00:00:00'),
(48, 'A@F.F', '$2y$10$8pl8eGeW./F6kHzyzTSvfu1QeoJpz2F5MEFgLyNgYYurScRz3c1n.', '0000-00-00 00:00:00'),
(49, 'S@H.H', '$2y$10$pTECfn0riRU.91FvKWBbSejxdCmqOWC12OizGkT6MABLufGk2mLTK', '0000-00-00 00:00:00'),
(50, 'W@S.S', '$2y$10$Vx7Lt/VBAS00vG6y4P4lN.lq2t9k7MF00mrheFggcstXBV60Ns9L6', '0000-00-00 00:00:00'),
(51, 'aniket', '$2y$10$RcD3/4gsB48M//GDhM6d2.GeJgX5W6p.j2if8Pyk/XefNThZA4yEG', '0000-00-00 00:00:00'),
(52, 'aaniket', '$2y$10$9WCyB/HgGROvnu1bVRS/fezy5GSIlp3psLX9u79iMtvEl2xf/MZoW', '2022-12-28 09:17:31'),
(53, 'qwe', '$2y$10$VA7xOZCD5ST2Nfdj0j5.q.g6FGKfCDjmmHOKL4.hD.VJeu9l/Bxf6', '2022-12-30 08:12:18'),
(54, 'aniket@gmail.com', '$2y$10$lk9i2rV52zH6J96oOiAMU.pgT3uMxMzhdjI613f1Y3/OoSRag..8i', '2022-12-30 09:21:17'),
(55, 'aa@q.qwe', '$2y$10$YTZB/le4SJ1p1k5DZu369Ohk4bLhqEhvQnwb9P89af.z16D6jWViu', '2022-12-30 12:03:38'),
(56, 'lkj@dfhdf.df', '$2y$10$dGWH7QcLUtd0LX7juJONB./YUsIH6dHQkHtrf1Xjolx.FV3KACFBy', '2022-12-30 12:06:58'),
(57, 'SA@ER.H', '$2y$10$nPZ5G/y4DAuT.cfrr3s49eobkrMzadupKEnjDHXnOzrvlSVDmjI/.', '2022-12-30 13:17:11'),
(58, 'krishna@gmail.com', '$2y$10$usyZnRatdYMOZMdZykxYS.zxA0zlyB5LCNWXXN9leV2W2oVjHLatS', '2022-12-30 16:45:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sign`
--
ALTER TABLE `sign`
  ADD PRIMARY KEY (`sno`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sign`
--
ALTER TABLE `sign`
  MODIFY `sno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
