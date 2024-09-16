/*
  Warnings:

  - You are about to drop the column `canUsersAccess` on the `ServiceSettings` table. All the data in the column will be lost.
  - You are about to drop the column `perms` on the `User` table. All the data in the column will be lost.
  - Added the required column `isServiceOnline` to the `ServiceSettings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ServiceSettings` DROP COLUMN `canUsersAccess`,
    ADD COLUMN `isServiceOnline` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `perms`;

-- CreateTable
CREATE TABLE `Post` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
