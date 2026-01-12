# Bukhari-day Personal Portfolio!

A website with **SvelteKit**, **Tailwind CSS**, and **MDsveX**. Designed to be fast and easy to maintain using a file-based CMS approach.

![Project Preview](https://www.bukhari.day/static/og-default.png)

## 🚀 Tech Stack
- **Framework:** [SvelteKit](https://kit.svelte.dev/) (Svelte 5 Runes)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Components:** [shadcn-svelte](https://next.shadcn-svelte.com/)
- **Content:** [MDsveX](https://mdsvex.com/) (Markdown + Svelte)
- **Icons:** [Lucide Svelte](https://lucide.dev/icons/)
- **Deployment:** [Vercel](https://vercel.com/)


## ✨ Key Features
- **File-Based CMS:** Write blog posts and project case studies in Markdown (`.md`).
- **Zero-Config Dark Mode:** Includes a system-aware theme toggle (Light / Dark / System).
- **SEO Optimized:** Automatic Sitemap generation, RSS Feed, and Open Graph social preview cards.
- **Static Prerendering:** Builds to pure HTML for instant page loads and zero hosting costs.
- **Responsive:** Mobile-first layout with an accessible navigation menu.
- **Type-Safe:** Fully typed with TypeScript.


## 🛠️ Getting Started
### Prerequisites
- Node.js (v18+)
- pnpm (recommended) or npm

### Installation
1. **Clone the repository**
   ```bash
   git clone [https://github.com/yourusername/portfolio.git](https://github.com/yourusername/portfolio.git)
   cd portfolio
   ```
2. **Install dependencies**
   ```Bash
   pnpm install
   ```
3. **Start the development server**
   ```Bash
   pnpm dev
   ```
4. **Open http://localhost:5173 in your browser.**

## ✍️ Managing Content
The site uses a file-based content system located in the content/ directory. No database required.
### Adding a Blog Post
   1.  Create a new file: content/posts/my-new-post.md
   2.  Add the required frontmatter:
   ```YAML
    ---
    title: "My New Article"
    description: "A short summary for the card preview."
    date: "2026-01-12"
    tags: ["Svelte", "Tutorial"]
    published: true
    slug: "my-new-post"
    ---

    Your markdown content here...
  ```

### Adding a Project
  1. Create a new file: content/projects/my-project.md
  2. Add the required frontmatter:
   ```YAML
    ---
    title: "Project Name"
    slug: "project-name"
    summary: "One sentence pitch."
    role: "Frontend Developer"
    year: 2025
    tech: ["SvelteKit", "TypeScript"]
    link: 
      label: "Live Demo"
      url: "https://..."
    featured: true
    ---

    ## The Challenge
    Explain the problem...
  ```

## ⚙️ Configuration
  - Site Metadata: Update the SEO defaults in src/lib/components/SEO.svelte.
  - Navigation: Update menu links in src/lib/components/Header.svelte.
  - Resume: Edit the digital resume at src/routes/resume/+page.svelte.

## 🚀 Deployment
This project is configured for Vercel with static prerendering enabled.
  1. Push your code to GitHub.
  2. Import the project in Vercel.
  3. The adapter-auto will handle the build settings automatically.

## 📄 License
This project is open source and available under the MIT License.
