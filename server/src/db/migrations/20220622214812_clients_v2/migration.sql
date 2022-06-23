/*
  Warnings:

  - Added the required column `avatar` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "cpf" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Client" ("cpf", "createdAt", "email", "first_name", "id", "last_name", "phone") SELECT "cpf", "createdAt", "email", "first_name", "id", "last_name", "phone" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
CREATE UNIQUE INDEX "Client_cpf_key" ON "Client"("cpf");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
