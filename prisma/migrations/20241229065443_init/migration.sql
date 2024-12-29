-- CreateTable
CREATE TABLE "url" (
    "id" TEXT NOT NULL,
    "originalUrl" TEXT NOT NULL,
    "shortCode" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "visits" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "url_pkey" PRIMARY KEY ("id")
);
