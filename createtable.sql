CREATE TABLE `orders` (
  `orderId` int NOT NULL AUTO_INCREMENT,
  `phoneNo` varchar(10) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `shop` varchar(30) DEFAULT NULL,
  `total` int DEFAULT NULL,
  `username` varchar(30) DEFAULT NULL,
  `stat` int DEFAULT NULL,
  `takenBy` varchar(30) DEFAULT NULL,
  `orderTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `takenTime` timestamp NULL DEFAULT NULL,
  `delieveredTime` timestamp NULL DEFAULT NULL,
  `items` json DEFAULT NULL,
  PRIMARY KEY (`orderId`)
)