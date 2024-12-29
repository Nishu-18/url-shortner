/*
  Warnings:

  - A unique constraint covering the columns `[shortCode]` on the table `url` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "url_shortCode_key" ON "url"("shortCode");
