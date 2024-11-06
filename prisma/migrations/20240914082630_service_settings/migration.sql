-- CreateTable
CREATE TABLE `ServiceSettings` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `canUsersAccess` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
