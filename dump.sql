-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2023 at 11:30 AM
-- Server version: 10.6.11-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel`
--
DROP DATABASE laravel;
CREATE DATABASE IF NOT EXISTS `laravel` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `laravel`;

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
CREATE TABLE IF NOT EXISTS `courses` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `title`, `description`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Belajar Java', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tempus mi, quis elementum purus. Phasellus et hendrerit libero. Sed sollicitudin condimentum justo sed dictum.', NULL, NULL, NULL),
(2, 'Belajar C++', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tempus mi, quis elementum purus. Phasellus et hendrerit libero. Sed sollicitudin condimentum justo sed dictum', NULL, NULL, NULL),
(3, 'Belajar Python', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa a impedit ad eius, repudiandae vel! Tempore possimus voluptatum nisi laboriosam, incidunt nostrum quisquam autem cum explicabo, at minima consectetur!', NULL, NULL, NULL),
(4, 'Belajar PHP', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa a impedit ad eius, repudiandae vel! Tempore possimus voluptatum nisi laboriosam, incidunt nostrum quisquam autem cum explicabo, at minima consectetur!', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `courses_taken`
--

DROP TABLE IF EXISTS `courses_taken`;
CREATE TABLE IF NOT EXISTS `courses_taken` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `course_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `courses_taken_user_id_foreign` (`user_id`),
  KEY `courses_taken_course_id_foreign` (`course_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `courses_taken`
--

INSERT INTO `courses_taken` (`id`, `course_id`, `user_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(29, 1, 1, '2023-05-29 08:43:06', '2023-05-29 08:43:06', NULL),
(34, 2, 1, '2023-05-29 08:45:32', '2023-05-29 08:45:32', NULL),
(36, 4, 1, '2023-05-29 09:26:32', '2023-05-29 09:26:32', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `finished_materials`
--

DROP TABLE IF EXISTS `finished_materials`;
CREATE TABLE IF NOT EXISTS `finished_materials` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `material_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `finished_materials_user_id_foreign` (`user_id`),
  KEY `finished_materials_material_id_foreign` (`material_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `finished_materials`
--

INSERT INTO `finished_materials` (`id`, `user_id`, `material_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, NULL, NULL),
(2, 1, 2, '2023-05-29 05:14:57', '2023-05-29 05:14:57'),
(3, 1, 3, '2023-05-29 05:27:45', '2023-05-29 05:27:45'),
(4, 1, 4, '2023-05-29 05:27:52', '2023-05-29 05:27:52'),
(5, 1, 15, '2023-05-29 09:25:37', '2023-05-29 09:25:37');

-- --------------------------------------------------------

--
-- Table structure for table `materials`
--

DROP TABLE IF EXISTS `materials`;
CREATE TABLE IF NOT EXISTS `materials` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` longtext NOT NULL,
  `course_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `materials_course_id_foreign` (`course_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `materials`
--

INSERT INTO `materials` (`id`, `title`, `content`, `course_id`, `created_at`, `updated_at`) VALUES
(1, 'Fungsi', '<p>\r\nSemper ridiculus pharetra ipsum? Dapibus lacinia a natoque erat posuere malesuada mattis pellentesque interdum consequat. Praesent aptent in penatibus diam vestibulum montes magna vivamus habitant. Varius quisque amet velit lorem ipsum leo sapien felis curabitur viverra semper! At praesent porttitor taciti primis fringilla nam hendrerit. Tortor nec imperdiet turpis venenatis sollicitudin convallis justo. Scelerisque, est tortor parturient donec nulla? Vulputate vitae sed dapibus! Laoreet ornare ante potenti nisl nulla lorem, nulla nunc. Purus semper leo curabitur dictumst? Cursus penatibus pharetra et nullam suscipit montes tortor! Amet aliquet libero habitant auctor velit auctor congue.\r\n</p>\r\n<p>\r\nTorquent eros urna sodales nibh ad rutrum luctus lectus nisi blandit. Viverra euismod nisi mauris praesent. Sociosqu a ac vivamus augue urna gravida duis. Sit felis mollis felis semper arcu odio nam litora. Laoreet amet pulvinar, per diam risus integer nam dictum. Gravida auctor sed mauris dui erat dapibus tellus ultrices? Interdum dignissim condimentum vel vivamus. Volutpat et etiam risus primis metus enim fermentum ut dignissim luctus! Vel mus nec nibh sodales lacinia nostra cubilia lacus cubilia sociis aliquam conubia. Tristique etiam.\r\n</p>\r\n<p>\r\nMattis inceptos massa, pellentesque pharetra sollicitudin. Velit vel in nullam. Suspendisse vulputate phasellus sagittis aliquet facilisis cum tellus potenti. Quis pretium tortor condimentum nostra! Class per varius eu hendrerit consequat nunc. Tellus orci consectetur sapien, nostra commodo. Consequat pharetra fringilla at quis ut volutpat potenti sociis cum! Neque litora facilisi non quisque tortor parturient sem posuere amet porta porta! Venenatis aliquam vulputate, eleifend augue nullam himenaeos primis lectus non nisi vel? Dui amet ornare vel duis in.\r\n</p>\r\n<p>\r\nOrci urna leo, dui lacus mollis leo sed! Justo tellus, praesent porta consectetur varius a nascetur placerat neque. Scelerisque dis conubia nascetur vivamus ipsum tristique. Non augue tincidunt venenatis aliquam diam tortor pretium magna! Aliquam pulvinar auctor blandit dui pellentesque duis nostra in id pharetra. Purus eleifend rhoncus egestas at sociosqu dui curabitur sollicitudin nisi mi. Ultricies fusce maecenas lobortis primis lacus volutpat a pretium ornare. Montes habitant pharetra porttitor semper sociosqu! Vulputate taciti in tellus eget justo odio lobortis aliquam bibendum neque. Leo dictum conubia sed dapibus iaculis ornare porta.\r\n</p>\r\n<p>\r\nPhasellus nulla dignissim id elementum lectus nisl in accumsan. Platea odio a habitant. Aenean commodo sed velit nibh per ultrices duis pulvinar mattis eu! Mollis, quisque sapien litora. Rhoncus convallis accumsan rutrum ad non dignissim? Primis tempor amet feugiat ac erat augue magna. Semper mauris habitasse sodales congue luctus potenti facilisi nullam, tempor parturient tellus. Sed scelerisque nisi non adipiscing nibh dictum ridiculus lacinia luctus dictum praesent nullam. Ultricies purus etiam ac lacinia. Tincidunt maecenas congue et porta adipiscing? Consequat felis tempor eleifend laoreet per. Sed cubilia porta egestas cras bibendum etiam lacus tristique vulputate. Dapibus quis.\r\n</p>', 1, NULL, NULL),
(2, 'Fungsi 2', '<p>\r\nSemper ridiculus pharetra ipsum? Dapibus lacinia a natoque erat posuere malesuada mattis pellentesque interdum consequat. Praesent aptent in penatibus diam vestibulum montes magna vivamus habitant. Varius quisque amet velit lorem ipsum leo sapien felis curabitur viverra semper! At praesent porttitor taciti primis fringilla nam hendrerit. Tortor nec imperdiet turpis venenatis sollicitudin convallis justo. Scelerisque, est tortor parturient donec nulla? Vulputate vitae sed dapibus! Laoreet ornare ante potenti nisl nulla lorem, nulla nunc. Purus semper leo curabitur dictumst? Cursus penatibus pharetra et nullam suscipit montes tortor! Amet aliquet libero habitant auctor velit auctor congue.\r\n</p>\r\n<p>\r\nTorquent eros urna sodales nibh ad rutrum luctus lectus nisi blandit. Viverra euismod nisi mauris praesent. Sociosqu a ac vivamus augue urna gravida duis. Sit felis mollis felis semper arcu odio nam litora. Laoreet amet pulvinar, per diam risus integer nam dictum. Gravida auctor sed mauris dui erat dapibus tellus ultrices? Interdum dignissim condimentum vel vivamus. Volutpat et etiam risus primis metus enim fermentum ut dignissim luctus! Vel mus nec nibh sodales lacinia nostra cubilia lacus cubilia sociis aliquam conubia. Tristique etiam.\r\n</p>\r\n<p>\r\nMattis inceptos massa, pellentesque pharetra sollicitudin. Velit vel in nullam. Suspendisse vulputate phasellus sagittis aliquet facilisis cum tellus potenti. Quis pretium tortor condimentum nostra! Class per varius eu hendrerit consequat nunc. Tellus orci consectetur sapien, nostra commodo. Consequat pharetra fringilla at quis ut volutpat potenti sociis cum! Neque litora facilisi non quisque tortor parturient sem posuere amet porta porta! Venenatis aliquam vulputate, eleifend augue nullam himenaeos primis lectus non nisi vel? Dui amet ornare vel duis in.\r\n</p>\r\n<p>\r\nOrci urna leo, dui lacus mollis leo sed! Justo tellus, praesent porta consectetur varius a nascetur placerat neque. Scelerisque dis conubia nascetur vivamus ipsum tristique. Non augue tincidunt venenatis aliquam diam tortor pretium magna! Aliquam pulvinar auctor blandit dui pellentesque duis nostra in id pharetra. Purus eleifend rhoncus egestas at sociosqu dui curabitur sollicitudin nisi mi. Ultricies fusce maecenas lobortis primis lacus volutpat a pretium ornare. Montes habitant pharetra porttitor semper sociosqu! Vulputate taciti in tellus eget justo odio lobortis aliquam bibendum neque. Leo dictum conubia sed dapibus iaculis ornare porta.\r\n</p>\r\n<p>\r\nPhasellus nulla dignissim id elementum lectus nisl in accumsan. Platea odio a habitant. Aenean commodo sed velit nibh per ultrices duis pulvinar mattis eu! Mollis, quisque sapien litora. Rhoncus convallis accumsan rutrum ad non dignissim? Primis tempor amet feugiat ac erat augue magna. Semper mauris habitasse sodales congue luctus potenti facilisi nullam, tempor parturient tellus. Sed scelerisque nisi non adipiscing nibh dictum ridiculus lacinia luctus dictum praesent nullam. Ultricies purus etiam ac lacinia. Tincidunt maecenas congue et porta adipiscing? Consequat felis tempor eleifend laoreet per. Sed cubilia porta egestas cras bibendum etiam lacus tristique vulputate. Dapibus quis.\r\n</p>', 1, NULL, NULL),
(3, 'Prosedur', '<p>\r\nSemper ridiculus pharetra ipsum? Dapibus lacinia a natoque erat posuere malesuada mattis pellentesque interdum consequat. Praesent aptent in penatibus diam vestibulum montes magna vivamus habitant. Varius quisque amet velit lorem ipsum leo sapien felis curabitur viverra semper! At praesent porttitor taciti primis fringilla nam hendrerit. Tortor nec imperdiet turpis venenatis sollicitudin convallis justo. Scelerisque, est tortor parturient donec nulla? Vulputate vitae sed dapibus! Laoreet ornare ante potenti nisl nulla lorem, nulla nunc. Purus semper leo curabitur dictumst? Cursus penatibus pharetra et nullam suscipit montes tortor! Amet aliquet libero habitant auctor velit auctor congue.\r\n</p>\r\n<p>\r\nTorquent eros urna sodales nibh ad rutrum luctus lectus nisi blandit. Viverra euismod nisi mauris praesent. Sociosqu a ac vivamus augue urna gravida duis. Sit felis mollis felis semper arcu odio nam litora. Laoreet amet pulvinar, per diam risus integer nam dictum. Gravida auctor sed mauris dui erat dapibus tellus ultrices? Interdum dignissim condimentum vel vivamus. Volutpat et etiam risus primis metus enim fermentum ut dignissim luctus! Vel mus nec nibh sodales lacinia nostra cubilia lacus cubilia sociis aliquam conubia. Tristique etiam.\r\n</p>\r\n<p>\r\nMattis inceptos massa, pellentesque pharetra sollicitudin. Velit vel in nullam. Suspendisse vulputate phasellus sagittis aliquet facilisis cum tellus potenti. Quis pretium tortor condimentum nostra! Class per varius eu hendrerit consequat nunc. Tellus orci consectetur sapien, nostra commodo. Consequat pharetra fringilla at quis ut volutpat potenti sociis cum! Neque litora facilisi non quisque tortor parturient sem posuere amet porta porta! Venenatis aliquam vulputate, eleifend augue nullam himenaeos primis lectus non nisi vel? Dui amet ornare vel duis in.\r\n</p>\r\n<p>\r\nOrci urna leo, dui lacus mollis leo sed! Justo tellus, praesent porta consectetur varius a nascetur placerat neque. Scelerisque dis conubia nascetur vivamus ipsum tristique. Non augue tincidunt venenatis aliquam diam tortor pretium magna! Aliquam pulvinar auctor blandit dui pellentesque duis nostra in id pharetra. Purus eleifend rhoncus egestas at sociosqu dui curabitur sollicitudin nisi mi. Ultricies fusce maecenas lobortis primis lacus volutpat a pretium ornare. Montes habitant pharetra porttitor semper sociosqu! Vulputate taciti in tellus eget justo odio lobortis aliquam bibendum neque. Leo dictum conubia sed dapibus iaculis ornare porta.\r\n</p>\r\n<p>\r\nPhasellus nulla dignissim id elementum lectus nisl in accumsan. Platea odio a habitant. Aenean commodo sed velit nibh per ultrices duis pulvinar mattis eu! Mollis, quisque sapien litora. Rhoncus convallis accumsan rutrum ad non dignissim? Primis tempor amet feugiat ac erat augue magna. Semper mauris habitasse sodales congue luctus potenti facilisi nullam, tempor parturient tellus. Sed scelerisque nisi non adipiscing nibh dictum ridiculus lacinia luctus dictum praesent nullam. Ultricies purus etiam ac lacinia. Tincidunt maecenas congue et porta adipiscing? Consequat felis tempor eleifend laoreet per. Sed cubilia porta egestas cras bibendum etiam lacus tristique vulputate. Dapibus quis.\r\n</p>', 2, NULL, NULL),
(4, 'Prosedur 2', '<p>\r\nSemper ridiculus pharetra ipsum? Dapibus lacinia a natoque erat posuere malesuada mattis pellentesque interdum consequat. Praesent aptent in penatibus diam vestibulum montes magna vivamus habitant. Varius quisque amet velit lorem ipsum leo sapien felis curabitur viverra semper! At praesent porttitor taciti primis fringilla nam hendrerit. Tortor nec imperdiet turpis venenatis sollicitudin convallis justo. Scelerisque, est tortor parturient donec nulla? Vulputate vitae sed dapibus! Laoreet ornare ante potenti nisl nulla lorem, nulla nunc. Purus semper leo curabitur dictumst? Cursus penatibus pharetra et nullam suscipit montes tortor! Amet aliquet libero habitant auctor velit auctor congue.\r\n</p>\r\n<p>\r\nTorquent eros urna sodales nibh ad rutrum luctus lectus nisi blandit. Viverra euismod nisi mauris praesent. Sociosqu a ac vivamus augue urna gravida duis. Sit felis mollis felis semper arcu odio nam litora. Laoreet amet pulvinar, per diam risus integer nam dictum. Gravida auctor sed mauris dui erat dapibus tellus ultrices? Interdum dignissim condimentum vel vivamus. Volutpat et etiam risus primis metus enim fermentum ut dignissim luctus! Vel mus nec nibh sodales lacinia nostra cubilia lacus cubilia sociis aliquam conubia. Tristique etiam.\r\n</p>\r\n<p>\r\nMattis inceptos massa, pellentesque pharetra sollicitudin. Velit vel in nullam. Suspendisse vulputate phasellus sagittis aliquet facilisis cum tellus potenti. Quis pretium tortor condimentum nostra! Class per varius eu hendrerit consequat nunc. Tellus orci consectetur sapien, nostra commodo. Consequat pharetra fringilla at quis ut volutpat potenti sociis cum! Neque litora facilisi non quisque tortor parturient sem posuere amet porta porta! Venenatis aliquam vulputate, eleifend augue nullam himenaeos primis lectus non nisi vel? Dui amet ornare vel duis in.\r\n</p>\r\n<p>\r\nOrci urna leo, dui lacus mollis leo sed! Justo tellus, praesent porta consectetur varius a nascetur placerat neque. Scelerisque dis conubia nascetur vivamus ipsum tristique. Non augue tincidunt venenatis aliquam diam tortor pretium magna! Aliquam pulvinar auctor blandit dui pellentesque duis nostra in id pharetra. Purus eleifend rhoncus egestas at sociosqu dui curabitur sollicitudin nisi mi. Ultricies fusce maecenas lobortis primis lacus volutpat a pretium ornare. Montes habitant pharetra porttitor semper sociosqu! Vulputate taciti in tellus eget justo odio lobortis aliquam bibendum neque. Leo dictum conubia sed dapibus iaculis ornare porta.\r\n</p>\r\n<p>\r\nPhasellus nulla dignissim id elementum lectus nisl in accumsan. Platea odio a habitant. Aenean commodo sed velit nibh per ultrices duis pulvinar mattis eu! Mollis, quisque sapien litora. Rhoncus convallis accumsan rutrum ad non dignissim? Primis tempor amet feugiat ac erat augue magna. Semper mauris habitasse sodales congue luctus potenti facilisi nullam, tempor parturient tellus. Sed scelerisque nisi non adipiscing nibh dictum ridiculus lacinia luctus dictum praesent nullam. Ultricies purus etiam ac lacinia. Tincidunt maecenas congue et porta adipiscing? Consequat felis tempor eleifend laoreet per. Sed cubilia porta egestas cras bibendum etiam lacus tristique vulputate. Dapibus quis.\r\n</p>', 2, NULL, NULL),
(5, 'Lorem Ipsum Dolor', '<h2>Aenean commodo ligula eget dolor aenean massa</h2>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<h2>Aenean commodo ligula eget dolor aenean massa</h2>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<ul>\r\n  <li>Lorem ipsum dolor sit amet consectetuer.</li>\r\n  <li>Aenean commodo ligula eget dolor.</li>\r\n  <li>Aenean massa cum sociis natoque penatibus.</li>\r\n</ul>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<table class=\"data\">\r\n  <tr>\r\n    <th>Entry Header 1</th>\r\n    <th>Entry Header 2</th>\r\n    <th>Entry Header 3</th>\r\n    <th>Entry Header 4</th>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry First Line 1</td>\r\n    <td>Entry First Line 2</td>\r\n    <td>Entry First Line 3</td>\r\n    <td>Entry First Line 4</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry Line 1</td>\r\n    <td>Entry Line 2</td>\r\n    <td>Entry Line 3</td>\r\n    <td>Entry Line 4</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry Last Line 1</td>\r\n    <td>Entry Last Line 2</td>\r\n    <td>Entry Last Line 3</td>\r\n    <td>Entry Last Line 4</td>\r\n  </tr>\r\n</table>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>', 1, NULL, NULL),
(6, 'Lorem Ipsum Dolor 2', '<h2>Aenean commodo ligula eget dolor aenean massa</h2>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<h2>Aenean commodo ligula eget dolor aenean massa</h2>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<ul>\r\n  <li>Lorem ipsum dolor sit amet consectetuer.</li>\r\n  <li>Aenean commodo ligula eget dolor.</li>\r\n  <li>Aenean massa cum sociis natoque penatibus.</li>\r\n</ul>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<table class=\"data\">\r\n  <tr>\r\n    <th>Entry Header 1</th>\r\n    <th>Entry Header 2</th>\r\n    <th>Entry Header 3</th>\r\n    <th>Entry Header 4</th>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry First Line 1</td>\r\n    <td>Entry First Line 2</td>\r\n    <td>Entry First Line 3</td>\r\n    <td>Entry First Line 4</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry Line 1</td>\r\n    <td>Entry Line 2</td>\r\n    <td>Entry Line 3</td>\r\n    <td>Entry Line 4</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry Last Line 1</td>\r\n    <td>Entry Last Line 2</td>\r\n    <td>Entry Last Line 3</td>\r\n    <td>Entry Last Line 4</td>\r\n  </tr>\r\n</table>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>', 1, NULL, NULL),
(7, 'Lorem Ipsum Dolor 3', '<h2>Aenean commodo ligula eget dolor aenean massa</h2>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<h2>Aenean commodo ligula eget dolor aenean massa</h2>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<ul>\r\n  <li>Lorem ipsum dolor sit amet consectetuer.</li>\r\n  <li>Aenean commodo ligula eget dolor.</li>\r\n  <li>Aenean massa cum sociis natoque penatibus.</li>\r\n</ul>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<table class=\"data\">\r\n  <tr>\r\n    <th>Entry Header 1</th>\r\n    <th>Entry Header 2</th>\r\n    <th>Entry Header 3</th>\r\n    <th>Entry Header 4</th>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry First Line 1</td>\r\n    <td>Entry First Line 2</td>\r\n    <td>Entry First Line 3</td>\r\n    <td>Entry First Line 4</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry Line 1</td>\r\n    <td>Entry Line 2</td>\r\n    <td>Entry Line 3</td>\r\n    <td>Entry Line 4</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry Last Line 1</td>\r\n    <td>Entry Last Line 2</td>\r\n    <td>Entry Last Line 3</td>\r\n    <td>Entry Last Line 4</td>\r\n  </tr>\r\n</table>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>', 1, NULL, NULL),
(8, 'Lorem Ipsum Dolor 4', '<h2>Aenean commodo ligula eget dolor aenean massa</h2>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<h2>Aenean commodo ligula eget dolor aenean massa</h2>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<ul>\r\n  <li>Lorem ipsum dolor sit amet consectetuer.</li>\r\n  <li>Aenean commodo ligula eget dolor.</li>\r\n  <li>Aenean massa cum sociis natoque penatibus.</li>\r\n</ul>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<table class=\"data\">\r\n  <tr>\r\n    <th>Entry Header 1</th>\r\n    <th>Entry Header 2</th>\r\n    <th>Entry Header 3</th>\r\n    <th>Entry Header 4</th>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry First Line 1</td>\r\n    <td>Entry First Line 2</td>\r\n    <td>Entry First Line 3</td>\r\n    <td>Entry First Line 4</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry Line 1</td>\r\n    <td>Entry Line 2</td>\r\n    <td>Entry Line 3</td>\r\n    <td>Entry Line 4</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry Last Line 1</td>\r\n    <td>Entry Last Line 2</td>\r\n    <td>Entry Last Line 3</td>\r\n    <td>Entry Last Line 4</td>\r\n  </tr>\r\n</table>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>', 2, NULL, NULL),
(9, 'Lorem Ipsum Dolor 5', '<h2>Aenean commodo ligula eget dolor aenean massa</h2>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<h2>Aenean commodo ligula eget dolor aenean massa</h2>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<ul>\r\n  <li>Lorem ipsum dolor sit amet consectetuer.</li>\r\n  <li>Aenean commodo ligula eget dolor.</li>\r\n  <li>Aenean massa cum sociis natoque penatibus.</li>\r\n</ul>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<table class=\"data\">\r\n  <tr>\r\n    <th>Entry Header 1</th>\r\n    <th>Entry Header 2</th>\r\n    <th>Entry Header 3</th>\r\n    <th>Entry Header 4</th>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry First Line 1</td>\r\n    <td>Entry First Line 2</td>\r\n    <td>Entry First Line 3</td>\r\n    <td>Entry First Line 4</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry Line 1</td>\r\n    <td>Entry Line 2</td>\r\n    <td>Entry Line 3</td>\r\n    <td>Entry Line 4</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry Last Line 1</td>\r\n    <td>Entry Last Line 2</td>\r\n    <td>Entry Last Line 3</td>\r\n    <td>Entry Last Line 4</td>\r\n  </tr>\r\n</table>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>', 2, NULL, NULL),
(14, 'Lorem Ipsum 6', '<h2>Aenean commodo ligula eget dolor aenean massa</h2>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<h2>Aenean commodo ligula eget dolor aenean massa</h2>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<ul>\r\n  <li>Lorem ipsum dolor sit amet consectetuer.</li>\r\n  <li>Aenean commodo ligula eget dolor.</li>\r\n  <li>Aenean massa cum sociis natoque penatibus.</li>\r\n</ul>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<table class=\"data\">\r\n  <tr>\r\n    <th>Entry Header 1</th>\r\n    <th>Entry Header 2</th>\r\n    <th>Entry Header 3</th>\r\n    <th>Entry Header 4</th>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry First Line 1</td>\r\n    <td>Entry First Line 2</td>\r\n    <td>Entry First Line 3</td>\r\n    <td>Entry First Line 4</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry Line 1</td>\r\n    <td>Entry Line 2</td>\r\n    <td>Entry Line 3</td>\r\n    <td>Entry Line 4</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry Last Line 1</td>\r\n    <td>Entry Last Line 2</td>\r\n    <td>Entry Last Line 3</td>\r\n    <td>Entry Last Line 4</td>\r\n  </tr>\r\n</table>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>', 3, NULL, NULL),
(15, 'Lorem Ipsum Dolor 7', '<h2>Aenean commodo ligula eget dolor aenean massa</h2>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<h2>Aenean commodo ligula eget dolor aenean massa</h2>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<ul>\r\n  <li>Lorem ipsum dolor sit amet consectetuer.</li>\r\n  <li>Aenean commodo ligula eget dolor.</li>\r\n  <li>Aenean massa cum sociis natoque penatibus.</li>\r\n</ul>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<table class=\"data\">\r\n  <tr>\r\n    <th>Entry Header 1</th>\r\n    <th>Entry Header 2</th>\r\n    <th>Entry Header 3</th>\r\n    <th>Entry Header 4</th>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry First Line 1</td>\r\n    <td>Entry First Line 2</td>\r\n    <td>Entry First Line 3</td>\r\n    <td>Entry First Line 4</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry Line 1</td>\r\n    <td>Entry Line 2</td>\r\n    <td>Entry Line 3</td>\r\n    <td>Entry Line 4</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry Last Line 1</td>\r\n    <td>Entry Last Line 2</td>\r\n    <td>Entry Last Line 3</td>\r\n    <td>Entry Last Line 4</td>\r\n  </tr>\r\n</table>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>', 4, NULL, NULL),
(16, 'Lorem Ipsum Dolor 8', '<h2>Aenean commodo ligula eget dolor aenean massa</h2>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<h2>Aenean commodo ligula eget dolor aenean massa</h2>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<ul>\r\n  <li>Lorem ipsum dolor sit amet consectetuer.</li>\r\n  <li>Aenean commodo ligula eget dolor.</li>\r\n  <li>Aenean massa cum sociis natoque penatibus.</li>\r\n</ul>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<table class=\"data\">\r\n  <tr>\r\n    <th>Entry Header 1</th>\r\n    <th>Entry Header 2</th>\r\n    <th>Entry Header 3</th>\r\n    <th>Entry Header 4</th>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry First Line 1</td>\r\n    <td>Entry First Line 2</td>\r\n    <td>Entry First Line 3</td>\r\n    <td>Entry First Line 4</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry Line 1</td>\r\n    <td>Entry Line 2</td>\r\n    <td>Entry Line 3</td>\r\n    <td>Entry Line 4</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry Last Line 1</td>\r\n    <td>Entry Last Line 2</td>\r\n    <td>Entry Last Line 3</td>\r\n    <td>Entry Last Line 4</td>\r\n  </tr>\r\n</table>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>', 4, NULL, NULL),
(17, 'Lorem Ipsum Dolor 9', '<h2>Aenean commodo ligula eget dolor aenean massa</h2>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<h2>Aenean commodo ligula eget dolor aenean massa</h2>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<ul>\r\n  <li>Lorem ipsum dolor sit amet consectetuer.</li>\r\n  <li>Aenean commodo ligula eget dolor.</li>\r\n  <li>Aenean massa cum sociis natoque penatibus.</li>\r\n</ul>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>\r\n<table class=\"data\">\r\n  <tr>\r\n    <th>Entry Header 1</th>\r\n    <th>Entry Header 2</th>\r\n    <th>Entry Header 3</th>\r\n    <th>Entry Header 4</th>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry First Line 1</td>\r\n    <td>Entry First Line 2</td>\r\n    <td>Entry First Line 3</td>\r\n    <td>Entry First Line 4</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry Line 1</td>\r\n    <td>Entry Line 2</td>\r\n    <td>Entry Line 3</td>\r\n    <td>Entry Line 4</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Entry Last Line 1</td>\r\n    <td>Entry Last Line 2</td>\r\n    <td>Entry Last Line 3</td>\r\n    <td>Entry Last Line 4</td>\r\n  </tr>\r\n</table>\r\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing \r\nelit. Aenean commodo ligula eget dolor. Aenean massa. \r\nCum sociis natoque penatibus et magnis dis parturient \r\nmontes, nascetur ridiculus mus. Donec quam felis, \r\nultricies nec, pellentesque eu, pretium quis, sem.</p>', 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_05_24_032756_create_courses_table', 1),
(6, '2023_05_24_032837_create_materials_table', 1),
(7, '2023_05_24_032943_create_courses_taken_table', 1),
(8, '2023_05_24_033011_create_finished_materials_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_username_unique` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `full_name`, `password`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, '12121212', 'Userr', '$2y$10$19xEB7TWUoNFEsG8qzdc4e6Q0RBa6PLoOXqYjVLaYrfxdua.pHriq', '2023-05-29 01:38:30', '2023-05-29 01:38:30', NULL),
(2, 'user', 'User', '$2y$10$EawPS1frL1zF4rgvw0qyou/JA3F2fuOBV8p9A7lY5mrHbleBtiKwi', '2023-05-29 03:34:21', '2023-05-29 03:34:21', NULL);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `courses_taken`
--
ALTER TABLE `courses_taken`
  ADD CONSTRAINT `courses_taken_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`),
  ADD CONSTRAINT `courses_taken_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `finished_materials`
--
ALTER TABLE `finished_materials`
  ADD CONSTRAINT `finished_materials_material_id_foreign` FOREIGN KEY (`material_id`) REFERENCES `materials` (`id`),
  ADD CONSTRAINT `finished_materials_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `materials`
--
ALTER TABLE `materials`
  ADD CONSTRAINT `materials_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
