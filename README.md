# Analytics Dashboard

A modern analytics dashboard built with Next.js 15, featuring real-time data visualization and interactive components. This dashboard provides comprehensive insights into website traffic, user behavior, and conversion metrics.

## Features

- 🚀 Built with Next.js 15 and React 19
- 📊 Interactive data visualizations using Recharts
- 🎨 Modern UI with Tailwind CSS and Radix UI components
- 🔄 Server-side rendering with Suspense for improved UX
- 📱 Responsive design for all devices
- 🗄️ Database integration with Prisma and PostgreSQL
- 🌐 Country-specific analytics with react-country-flag
- 📈 Real-time analytics tracking
- 🔍 Advanced filtering and segmentation
- 👥 User journey tracking
- 🎯 Goal conversion monitoring

## Data Models

The dashboard tracks several key metrics through the following models:

### Analytics

- Daily visitor counts
- Revenue tracking
- Bounce rate analysis
- Session duration metrics

### VisitorJourney

- User demographics
- Device and browser information
- Traffic sources
- Goal completion tracking
- Time-to-completion metrics

### VisitorFilter

- Custom filter configurations
- Default filter presets
- Filter persistence

### AnalyticsInfo

- Domain configuration
- Analytics instance management
- Active status tracking

## Tech Stack

- **Framework**: Next.js 15
- **UI**: React 19, Tailwind CSS, Radix UI
- **Database**: Prisma with PostgreSQL (via Prisma Accelerate)
- **Charts**: Recharts
- **Styling**: Tailwind CSS, class-variance-authority
- **Development**: TypeScript, ESLint
- **Performance**: Prisma Accelerate, Server Components

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment:
   - Create a `.env` file in the root directory
   - Add your [Prisma Accelerate database URL](https://www.prisma.io/docs/getting-started/quickstart-prismaPostgres):
     ```
     DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=YOUR_API_KEY"
     ```
4. Run Prisma migrations:
   ```bash
   npx prisma migrate dev
   ```
5. Seed the Database:
   ```bash
   npx prisma db seed
   ```
6. Start the development server:
   ```bash
   npm run dev
   ```

## Database Seeding

The project includes a seed script that populates the database with sample analytics data. The seed data includes:

- 30 days of analytics data with random metrics
- 50 diverse visitor journeys with various sources, devices, and goals
- Default visitor filters
- Analytics information

To seed the database, run:

```bash
npx prisma db seed
```

The seed script will create:

- Daily analytics records with visitors, revenue, bounce rate, and session time
- Visitor journeys with randomized:
  - Traffic sources (Google, Facebook, Twitter, etc.)
  - Goals (signup, purchase, download, etc.)
  - Countries (US, Germany, Japan, etc.)
  - Devices (iPhone, Samsung, MacBook, etc.)
  - Browsers (Safari, Chrome, Firefox, etc.)
  - Time to complete metrics
- A default visitor filter
- Basic analytics information

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run reset-prisma` - Reset database and run migrations
- `npm run delete-db-data` - Force reset database schema
- `npm run seed` - Seed the database with sample data (30 days of analytics, 50 visitor journeys, default filters)

## Project Structure

- `/app` - Next.js app directory with pages and layouts
- `/components` - Reusable React components
  - `/ui` - Base UI components
  - `/charts` - Data visualization components
  - `/analytics` - Analytics-specific components
- `/prisma` - Database schema and migrations
  - `schema.prisma` - Database schema definition
  - `seed.ts` - Database seeding script
- `/public` - Static assets
- `/styles` - Global styles and Tailwind configuration
- `/utils` - Utility functions
- `/types` - TypeScript type definitions
- `/lib` - Shared libraries and configurations

## Performance Optimizations

- Server Components for improved initial load
- Suspense for streaming server components
- Optimized data fetching and caching
- Efficient client-side navigation
- Prisma Accelerate for optimized database queries
- Tailwind CSS for optimized styling
- TypeScript for type safety and better development experience

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT License - feel free to use this project for your own purposes.
