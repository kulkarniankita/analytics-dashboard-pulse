-- CreateTable
CREATE TABLE "Analytics" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "visitors" INTEGER NOT NULL,
    "revenue" DOUBLE PRECISION NOT NULL,
    "bounceRate" DOUBLE PRECISION NOT NULL,
    "sessionTime" INTEGER NOT NULL,

    CONSTRAINT "Analytics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisitorJourney" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "device" TEXT NOT NULL,
    "os" TEXT NOT NULL,
    "browser" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "timeToComplete" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL,
    "avatarSeed" TEXT NOT NULL,

    CONSTRAINT "VisitorJourney_pkey" PRIMARY KEY ("id")
);
