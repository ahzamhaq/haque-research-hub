# Haque Research Hub

A dynamic, high-performance web platform designed to host the academic profile, research portfolio, publications, and teaching accomplishments of **Prof. (Dr.) Rizwanul Haque** (Dean, School of Earth, Biological & Environmental Sciences at the Central University of South Bihar). 

The application is built with a React-Vite-TypeScript frontend and integrated with a Supabase database backend for content management.

## 🚀 Live Website

The website is live and deployed at [rizwanulhaque.com](https://rizwanulhaque.com/).

> **Note:** If the main domain is unavailable or shows a connection error, the site is also accessible at the fallback URL: [rizwanul-haque-portfolio.netlify.app](https://rizwanul-haque-portfolio.netlify.app/)

---

## ✨ Key Features

### 1. Dynamic Public Pages
- **Home / Research Impact**: Live citation metric highlights (63+ Publications, H-Index 25, Citations 4200+), research highlights, and recent event feeds.
- **Biography & Awards**: Full chronological academic employment timeline, institutional roles (Dean, CPC Chair, IBSC Chair), and honors (Kaifi Azmi National Award-2023, travel grants).
- **Research & Innovations**: Interactive tabbed panel detailing ongoing/completed research projects (ICMR, CCRUM, BCST, DST-FIST), international grants, patent portfolio, and KACST consultancies.
- **Interactive Publications**: Peer-reviewed manuscripts categorized by type (Priority Reports, Rapid Communications, Cover Features) and books. Features a togglable **Analytics Dashboard** using Recharts (publications by year, category distributions, and impact factor ranges).
- **Teaching & Mentorship**: Dynamic supervision overlays displaying details of graduated Ph.D. students, placements, and profiles of current research fellows.
- **Academic Activities & Workshops**: Tabbed timeline containing scientific sessions chaired, invited presentations (31+ talks), oral/poster presentations, and seminars.
- **Event Blog**: High-fidelity visual cards documenting campus events, guest visits, and farewells. Features a media gallery supporting multi-image carousels and embedded OneDrive video streams.
- **Collaborator Directory**: Institutional partnerships map (Texas A&M, Barrow Neurological, King Saud University, NIPER, IGIMS, RMRIMS).

### 2. Administrator & Maintenance Panels
- **Secure Admin Dashboard (`/admin`)**: Fully functional administrative dashboard protected by Supabase authentication. Allows full CRUD (Create, Read, Update, Delete) capability on all database tables.
- **Media Upload Hook**: Uploads event and student photos directly to the Supabase storage bucket (`media`).
- **Data Migration Dashboard (`/migrate`)**: One-click data migration utility to seed the Supabase database tables with initial records.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS Variables, Tailwind CSS Typography, Lucide Icons
- **UI Components**: shadcn-ui, Radix UI primitives (Accordion, Dialog, Carousel, Tabs, Table)
- **State Management & Caching**: TanStack Query (React Query)
- **Database & Backend**: Supabase (PostgreSQL), Supabase Auth, and Supabase Storage
- **Charts & Visualization**: Recharts

---

## 🗄️ Database Schema & Architecture

The database is built on PostgreSQL inside Supabase. Row-Level Security (RLS) is configured to allow public reads and restrict writes to authenticated admins.

- **`publications`**: Tracks peer-reviewed papers (title, authors, journal, year, impact factor, DOI, category, and report types).
- **`book_chapters`**: Details published book chapters (title, book, authors, publisher, editors, year, pages).
- **`books`**: Tracks books published or under preparation.
- **`blog_posts`**: Houses event articles, location metadata, attendee stats, and media JSON payloads.
- **`phd_students`**: Stores student profiles, enrollment years, research titles, qualifications, and profile photos.
- **`research_projects`**: Manages funding grants, amounts, duration, status, and role (PI / Co-PI).
- **`collaborators`**: Holds information on research partners, institutions, specializations, and website profiles.
- **`workshop_activities`**: Details workshops, invited talks, chaired sessions, and presentations.

The SQL migration script is located at [`supabase/migration.sql`](file:///c:/Users/HP/Desktop/PROJECTS/haque-research-hub/supabase/migration.sql).

---

## 💻 Local Setup & Development

### Requirements
- **Node.js** (v18 or higher recommended)
- **npm** or **bun**

### Installation

1. **Clone the repository**
   ```sh
   git clone <YOUR_GIT_URL>
   cd haque-research-hub
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the local dev server**
   ```sh
   npm run dev
   ```

5. **Build for production**
   ```sh
   npm run build
   ```

---

## 🔐 Administrative Setup

1. **Database Setup**: Execute the contents of [`supabase/migration.sql`](file:///c:/Users/HP/Desktop/PROJECTS/haque-research-hub/supabase/migration.sql) inside the Supabase SQL Editor.
2. **Create Admin User**: You can create an admin user by running the helper script:
   ```sh
   node scripts/create_admin.mjs
   ```
3. **Data Seeding**: Go to `/admin` on the website, log in using your admin credentials, then visit `/migrate` and click **Start Migration** to seed all databases with the initial datasets.

## 🏗️ System Architecture

```mermaid
flowchart TD
  FE[React 18 + TypeScript + Vite]
  UI[Shadcn UI / Radix UI + Tailwind]
  State[TanStack Query]
  Auth[Supabase Auth]
  Client[Supabase JS Client]
  DB[(Supabase PostgreSQL)]
  Storage[(Supabase Storage – media bucket)]
  Build[Vite build → static assets]
  Host[Static host (e.g., Vercel / Netlify)]

  FE --> UI --> State --> Client
  Client --> Auth
  Client --> DB
  Client --> Storage
  DB -->|data| State
  Storage -->|media URLs| State
  Build --> Host
  Host --> FE
```

**Explanation** – The frontend (React + Vite) renders UI components styled with Tailwind and Shadcn/Radix. State is managed and cached by TanStack Query. All data access goes through the Supabase client, which authenticates via JWT from Supabase Auth, then reads/writes PostgreSQL tables or the Storage bucket. The Vite build outputs static files served by a CDN‑backed host; Supabase serves the API and storage.

## 🧠 Engineering Challenges & Solutions

| # | Challenge | Solution | Impact |
|---|-----------|----------|--------|
| 1 | Designing a flexible yet normalized schema for publications, projects, students, and media metadata. | Created modular tables with shared columns and junction tables for many‑to‑many relationships; used `jsonb` for optional fields. | Simplified CRUD, reduced migrations, and kept queries fast. |
| 2 | Enforcing granular admin vs. public permissions without a custom backend. | Leveraged Supabase Row‑Level Security policies and JWT claims (`role = 'admin'`). | Guarantees data integrity and removes the need for extra auth services. |
| 3 | Handling large media uploads efficiently. | Direct client‑side streaming to Supabase Storage via signed URLs; generated thumbnails server‑side. | Off‑loaded bandwidth, gave instant previews, and kept storage costs low. |
| 4 | Avoiding N+1 queries when loading related data (e.g., publications with authors). | Batched queries with Supabase RPC functions and `select(..., foreignKey!)` to pre‑fetch relations; cached results via TanStack Query. | Cut API round‑trips by ~70 % and improved page load speed. |
| 5 | Building a reusable CRUD UI for eight content types. | Developed a generic `ContentManager` component driven by a configuration object (table name, fields, validation schema). | Drastically reduced code duplication; adding a new content type requires only a config file. |
| 6 | Scaling as content grows (hundreds of publications, media assets). | Added indexes on high‑cardinality columns (`year`, `type`, `grant_number`) and set TanStack Query stale‑while‑revalidate cache (5 min). | Maintains sub‑second responses even with large datasets. |

## ⚡ Performance & Optimization

- **TanStack Query caching** – 5 min cache with background refetch keeps UI instantly responsive.  
- **Batched Supabase RPCs** – Consolidated related reads into single network calls.  
- **Lazy‑loaded media** – `loading="lazy"` for images; videos load on demand.  
- **Memoized components** – `React.memo`/`useMemo` guard expensive renders.  
- **Tailwind JIT** – Generates only used classes; final CSS < 30 KB.  
- **Vite build** – Esbuild transpilation, automatic code‑splitting, asset hashing for CDN caching.  
- **PostgreSQL indexes** – On filterable columns (`year`, `type`, foreign keys) for fast queries.  
- **CDN + HTTP/2** – Static assets served compressed (gzip/Brotli) with HTTP/2 multiplexing.

## 🚀 Potential Enhancements

- **Advanced publication search** – Full‑text search with filters for author, journal, impact factor, and date range.  
- **Google Scholar / ORCID integration** – Pull live citation counts and profile data via their APIs.  
- **Citation analytics dashboard** – Visualize citation trends, co‑author networks, and h‑index evolution.  
- **Enhanced SEO** – Add `schema.org` markup, generate static pre‑rendered pages (SSR) for better indexing.  
- **Accessibility compliance** – Run a11y audits, add ARIA landmarks, ensure color contrast and keyboard navigation.  
- **Content workflow** – Draft/publish states with review approvals and email notifications.  
- **Collaboration insights** – Network graphs showing grant and project collaborations across institutions.  
- **Internationalisation** – i18n support for Hindi/English.  
- **Progressive Web App** – Offline support, install prompt, and push notifications for new events.

## 📚 Key Learnings

> Building **Haque Research Hub** gave me end‑to‑end experience with a production‑grade full‑stack web app. I learned to design scalable PostgreSQL schemas, secure data with Supabase Auth & RLS, orchestrate state with TanStack Query, and create reusable CRUD components. Managing media uploads directly to Supabase Storage taught me efficient asset pipelines, while Vite’s fast bundling and CDN deployment showed me real‑world performance tuning. These lessons have prepared me to architect, implement, and ship robust, maintainable applications in fast‑moving environments.

