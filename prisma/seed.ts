import { PrismaClient } from "@/prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to start of day for consistency

  // Seed Analytics data (last 30 days)
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    await prisma.analytics.create({
      data: {
        date,
        visitors: Math.floor(Math.random() * 1000),
        revenue: parseFloat((Math.random() * 1000).toFixed(2)),
        bounceRate: parseFloat((80 + Math.random() * 15).toFixed(1)),
        sessionTime: Math.floor(Math.random() * 300), // seconds
      },
    });
  }

  // Seed VisitorJourney data
  const sources = [
    "Direct/None",
    "Google",
    "Facebook",
    "Twitter",
    "LinkedIn",
    "Instagram",
    "Reddit",
    "GitHub",
    "Product Hunt",
    "Hacker News",
  ];

  const goals = [
    "signup_waitlist",
    "purchase_premium",
    "download_ebook",
    "schedule_demo",
    "contact_sales",
    "join_community",
    "read_blog",
    "watch_tutorial",
  ];

  const countries = [
    "United States",
    "Germany",
    "Japan",
    "Australia",
    "Canada",
    "Brazil",
    "United Kingdom",
    "South Africa",
    "New Zealand",
    "France",
    "India",
    "Singapore",
    "South Korea",
    "Netherlands",
    "Sweden",
  ];

  const devices = [
    "iPhone 13",
    "iPhone 14 Pro",
    "Samsung Galaxy S21",
    "Samsung Galaxy S22",
    "Google Pixel 6",
    "Google Pixel 7",
    "OnePlus 9",
    "Xiaomi 12",
    "MacBook Pro",
    "Dell XPS",
    "iPad Pro",
    "Surface Pro",
  ];

  const browsers = [
    "Safari",
    "Chrome",
    "Firefox",
    "Edge",
    "Brave",
    "Opera",
    "Samsung Internet",
  ];

  const timeToCompleteOptions = [
    "a few seconds",
    "5 minutes",
    "15 minutes",
    "30 minutes",
    "1 hour",
    "2 hours",
    "3 hours",
    "6 hours",
    "12 hours",
    "1 day",
    "2 days",
    "3 days",
    "1 week",
    "2 weeks",
    "1 month",
  ];

  // Generate 50 diverse journeys
  const referenceDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  for (let i = 0; i < 50; i++) {
    const completedAt = new Date(referenceDate);

    // Generate more dates in current month
    let randomDaysAgo;
    if (Math.random() < 0.6) {
      // 60% chance of being in current month
      randomDaysAgo = Math.floor(Math.random() * 31); // 0-30 days ago
    } else {
      randomDaysAgo = Math.floor(Math.random() * 90) + 31; // 31-120 days ago
    }

    completedAt.setDate(referenceDate.getDate() - randomDaysAgo);

    // Random time of day
    completedAt.setHours(Math.floor(Math.random() * 24));
    completedAt.setMinutes(Math.floor(Math.random() * 60));
    completedAt.setSeconds(Math.floor(Math.random() * 60));

    console.log("Generated date:", completedAt); // Debug log

    const journey = {
      name: `${getRandomAdjective()} ${getRandomAnimal()}`,
      country: countries[Math.floor(Math.random() * countries.length)],
      device: devices[Math.floor(Math.random() * devices.length)],
      os: Math.random() > 0.5 ? "iOS" : "Android",
      browser: browsers[Math.floor(Math.random() * browsers.length)],
      goal: goals[Math.floor(Math.random() * goals.length)],
      source: sources[Math.floor(Math.random() * sources.length)],
      timeToComplete:
        timeToCompleteOptions[
          Math.floor(Math.random() * timeToCompleteOptions.length)
        ],
      completedAt,
      avatarSeed: `${getRandomAdjective()} ${getRandomAnimal()}`,
    };

    await prisma.visitorJourney.create({ data: journey });
  }

  // Seed VisitorFilter data
  const existingFilters = await prisma.visitorFilter.findMany();

  if (existingFilters.length === 0) {
    const defaultFilter = {
      name: "Default Filter",
      filters: {
        browsers: ["Chrome", "Safari"],
        sources: ["Product Hunt"],
        os: ["iOS"],
      },
      isDefault: true,
    };

    await prisma.visitorFilter.create({
      data: defaultFilter,
    });
  }
}

// Helper functions for generating random names
function getRandomAdjective() {
  const adjectives = [
    "happy",
    "wise",
    "brave",
    "gentle",
    "curious",
    "playful",
    "majestic",
    "swift",
    "calm",
    "clever",
    "bright",
    "daring",
    "eager",
    "fierce",
    "graceful",
    "hopeful",
    "jolly",
    "kind",
    "lively",
    "merry",
  ];
  return adjectives[Math.floor(Math.random() * adjectives.length)];
}

function getRandomAnimal() {
  const animals = [
    "dolphin",
    "owl",
    "tiger",
    "panda",
    "fox",
    "penguin",
    "eagle",
    "cheetah",
    "koala",
    "raven",
    "bear",
    "cat",
    "deer",
    "elephant",
    "giraffe",
    "hare",
    "jaguar",
    "kangaroo",
    "lion",
    "monkey",
  ];
  return animals[Math.floor(Math.random() * animals.length)];
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
