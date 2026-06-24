# xyz-landing-page

Landing page for product XYZ built with Next.js. This project focuses on providing a high-performance interface with specific styling requirements for call-to-action elements.

## Tech Stack

- **Framework:** Next.js 14+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Repository:** `KUBBESA/xyz-landing-page` (Private)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:KUBBESA/xyz-landing-page.git
   cd xyz-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to check code quality |

## Features & Requirements

### Landing Page Specifications

- **Layout:** Responsive design maintaining existing landing page information.
- **Primary CTA Button:**
  - **Text:** "CHICHO - JARVIS"
  - **Position:** Centered on the screen
  - **Background Color:** Yellow
  - **Border Style:** Dashed
  - **Border Color:** Black
  - **Border Radius:** 12px

## Deployment

This project is configured for deployment on **Vercel**.

1. Push changes to the `main` branch.
2. Vercel will automatically trigger a deployment.
3. Ensure environment variables are configured in the Vercel dashboard if applicable.

## Project Structure

```
xyz-landing-page/
├── app/                 # Next.js App Router
├── components/          # Reusable UI components
├── public/              # Static assets
├── styles