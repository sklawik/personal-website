/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `ServiceSettings` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Post_id_key` ON `Post`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Role_id_key` ON `Role`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `ServiceSettings_id_key` ON `ServiceSettings`(`id`);
