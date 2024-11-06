/*
  Warnings:

  - You are about to drop the `ServiceSettings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `ServiceSettings`;

-- CreateTable
CREATE TABLE `ServiceConfig` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `isServiceAccessible` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `ServiceConfig_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
