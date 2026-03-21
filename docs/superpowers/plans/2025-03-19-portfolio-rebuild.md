# Portfolio Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild vishalecho.github.io as a static HTML/CSS/JS single-page portfolio with professional classic design, highlighting AI-augmented development and test automation expertise.

**Architecture:** Convert Jekyll template to vanilla HTML/CSS/JS with CSS custom properties for theming, sticky navigation, smooth scrolling, and accessible markup. Use system fonts (Inter-like) instead of custom Apercu font. Vanilla JavaScript instead of jQuery.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid), Vanilla JavaScript (ES6+), GitHub Pages

---

### Task 1: Create Project Structure and Plan Document

**Files:**
- Create: `docs/superpowers/plans/2025-03-19-portfolio-rebuild.md`
- Create: `plan-checklist.md` (optional tracking file)

- [ ] **Step 1:** Create the plans directory if it doesn't exist
  ```bash
  mkdir -p docs/superpowers/plans
  ```
  Expected: Directory created or already exists

- [ ] **Step 2:** Write the complete implementation plan to `docs/superpowers/plans/2025-03-19-portfolio-rebuild.md`

  Copy the full plan content below with proper markdown formatting and TDD tasks.

- [ ] **Step 3:** Create a simple checklist file to track progress
  ```bash
  echo "# Portfolio Rebuild Progress" > plan-checklist.md
  echo "- [ ] All tasks completed" >> plan-checklist.md
  ```

- [ ] **Step 4:** Commit the plan files
  ```bash
  git add docs/superpowers/plans/2025-03-19-portfolio-rebuild.md plan-checklist.md
  git commit -m "docs: add portfolio rebuild implementation plan"
  ```

---

### Task 2: Prepare Workspace and Backup Current Site

**Files:**
- Modify: None (git operations only)
- Create: Backups directory

- [ ] **Step 1:** Create a backup branch of current site
  ```bash
  git branch backup/pre-rebuild-2025-03-19
  git push origin backup/pre-rebuild-2025-03-19
  ```
  Expected: Branch created and pushed

- [ ] **Step 2:** Commit any uncommitted changes (check git status first)
  ```bash
  git status
  # If there are uncommitted changes:
  git add .
  git commit -m "chore: save work before portfolio rebuild"
  ```
  Expected: Clean working tree or changes committed

- [ ] **Step 3:** Switch to master branch (if not already)
  ```bash
  git checkout master
  ```
  Expected: On master branch

---

### Task 3: Create index.html with Semantic Structure

**Files:**
- Create: `index.html`

- [ ] **Step 1:** Write the HTML5 boilerplate with proper meta tags and viewport

  Content should include:
  - `<!DOCTYPE html>`
  - `<html lang="en">`
  - `<head>` with charset, viewport, description, Open Graph tags, canonical link
  - `<title>Vishal Kumar - Senior Software Engineer | AI-Augmented Development</title>`
  - Link to `styles.css`
  - Link to `script.js` with `defer`
  - System font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`

- [ ] **Step 2:** Add `<header>` with sticky navigation

  Navigation should include:
  - Logo/name (Vishal Kumar)
  - Links: About, Experience, Skills, Projects, Contact
  - Smooth scroll to sections via `href="#section-id"`

- [ ] **Step 3:** Add Hero section (`<section id="hero">`)

  Content:
  - `<h1>Vishal Kumar</h1>`
  - `<h2>Senior Software Engineer | AI-Augmented Development</h2>`
  - `<p>` tagline about building scalable systems with AI (2-3 sentences)
  - Social links: LinkedIn, GitHub, Email (use SVG icons inline)
  - Call-to-action button "View My Work" linking to #projects or #contact

- [ ] **Step 4:** Add About section (`<section id="about">`)

  Content:
  - `<h2>About Me</h2>`
  - Paragraph: 9+ years experience, quality focus (TDD, 80%+ coverage), AI integration expertise
  - Paragraph: Brief career summary (WiseTech, EY, Talview, DBS, TCS)
  - Education mention (Dr. A.P.J. Abdul Kalam Technical University, Lucknow)

- [ ] **Step 5:** Add Experience section (`<section id="experience">`)

  Structure:
  - `<h2>Experience</h2>`
  - Timeline layout using semantic `<article>` or `<div>` cards
  - Each role: Company, Role, Dates (in reverse chronological order):
    1. **WiseTech Global** - Software Engineer 2 (Present)
       - Bullet: Built full test automation platform with 95% reliability integrated with GitHub Actions
       - Bullet: Led migration from Selenium to Playwright, improving test execution speed by 60%
       - Bullet: Modernized legacy systems: Java 8→21, implemented TDD with 85%+ coverage
       - Bullet: Technologies: Java 21, Spring Boot, Angular, Playwright, GitHub Actions, Docker, K8s

    2. **EY (AI Consulting)** - AI/ML Engineer (duration)
       - Bullet: Developed RAG pipelines and LLM integrations for enterprise clients
       - Bullet: Built MCP (Model Context Protocol) servers for tool-augmented AI workflows
       - Bullet: Consulted on AI strategy and implementation patterns
       - Bullet: Tech: Python, LangChain, AWS, Azure OpenAI, vector databases

    3. **Talview** - Full-Stack Developer / Android Engineer (duration)
       - Bullet: Led development of mobile SDKs and microservices
       - Bullet: Built Android SDK used by 100+ enterprise customers
       - Bullet: Implemented real-time video processing and AI-based assessments
       - Bullet: Tech: Android, Node.js, TypeScript, PostgreSQL, AWS

    4. **DBS Bank** - Mobile Banking Developer (duration)
       - Bullet: Developed Digibank micro-frontend framework for modular mobile app architecture
       - Bullet: Led House Bill - Cargowise integration project
       - Bullet: Tech: Android, React Native, Kotlin, microservices

    5. **TCS** - Software Engineer (duration)
       - Bullet: Drone surveillance system for agritech
       - Bullet: UAV data processing and analytics platform
       - Bullet: Tech: Java, embedded systems, computer vision

- [ ] **Step 6:** Add Skills section (`<section id="skills">`)

  Structure:
  - `<h2>Skills</h2>`
  - Categorized skill groups with `<h3>` or bold labels:
    - **Languages:** Java, Kotlin, TypeScript/JavaScript, Python, SQL, HTML/CSS
    - **Frameworks:** Spring Boot, Angular, Node.js, React, Android SDK
    - **Cloud & DevOps:** AWS (EC2, S3, Lambda, RDS), Azure, Docker, Kubernetes, Jenkins, GitHub Actions, Terraform
    - **AI/ML:** LLMs (Claude, GPT), RAG, MCP, LangChain, vector databases, embeddings, fine-tuning
    - **Testing:** Playwright, Selenium, JUnit 5, TestNG, TDD, Mockito, Cucumber, 80%+ coverage
    - **Databases:** PostgreSQL, MySQL, MongoDB, Redis, Oracle
    - **Mobile:** Android (Jetpack, MVVM, Coroutines), React Native
  - Use `<ul>` with `<li>` for each skill
  - CSS Grid or Flexbox for responsive skill cards

- [ ] **Step 7:** Add Projects section (`<section id="projects">`)

  Structure:
  - `<h2>Featured Projects</h2>`
  - Project cards (3-4 featured):
    1. **Test Automation Platform** (WiseTech)
       - Description: Built comprehensive test automation platform achieving 95% reliability
       - Key features: GitHub Actions integration, parallel execution, flaky test detection
       - Tech: Java 21, Spring Boot, Playwright, Docker, Kubernetes, MongoDB
       - Metrics: 60% faster execution, 95% pass rate, 1000+ automated tests

    2. **AI-Augmented Development Tools** (Personal/Enterprise)
       - Description: Custom MCP servers and LLM integration tools for enhanced developer productivity
       - Key features: Code review automation, documentation generation, RAG-based Q&A
       - Tech: TypeScript, Python, FastAPI, PostgreSQL, vector embeddings, Claude API
       - Metrics: 40% reduction in boilerplate code, 30% faster onboarding

    3. **DBS Digibank Micro-Frontend Framework** (DBS Bank)
       - Description: Led development of modular mobile app architecture
       - Key features: Independent module deployment, shared component library, A/B testing
       - Tech: React Native, Android, Kotlin, microservices, Feature flags
       - Impact: 2x faster feature delivery, 50% reduction in app size

    4. **House Bill - Cargowise Integration** (DBS/Talview)
       - Description: Enterprise integration system for logistics and trade finance
       - Key features: Real-time document processing, OCR, workflow automation
       - Tech: Java, Spring Boot, Angular, PostgreSQL, AWS Lambda
       - Impact: 80% automation of manual processes, 3-day to 2-hour processing

    *Optional:* Talview Preview Android SDK - Enterprise SDK with 100+ customers
  - Each card: Title, description (3-4 lines), tech stack tags, metrics/impact, links (code, live demo if available)
  - Use responsive grid layout (1 col mobile, 2 tablet, 3 desktop)

- [ ] **Step 8:** Add Contact section (`<section id="contact">`)

  Structure:
  - `<h2>Get In Touch</h2>`
  - Brief invitation to connect
  - Direct links as buttons:
    - Email: vishal.iert.cs@gmail.com
    - LinkedIn: linkedin.com/in/vishalkumar
    - GitHub: github.com/vishalecho
  - Simple contact form (optional, without backend - can use Formspree or emailto link):
    - Name, Email, Message fields
    - Submit button (if no backend, use `mailto:` link or note about contacting directly)

- [ ] **Step 9:** Add footer (`<footer>`)

  Content:
  - Copyright: `© 2025 Vishal Kumar`
  - Social icon links (LinkedIn, GitHub, Email) - can reuse from hero
  - "Built with care" or similar tagline
  - Back to top button (anchor link to #hero)

- [ ] **Step 10:** Validate HTML structure
  ```bash
  # Check for basic structure
  grep -c "<section" index.html
  grep -c "<h1" index.html
  grep -c "<h2" index.html
  ```
  Expected: Multiple sections, one h1, multiple h2s

- [ ] **Step 11:** Commit the HTML file
  ```bash
  git add index.html
  git commit -m "feat: add complete HTML structure with all sections"
  ```

---

### Task 4: Create styles.css with Professional Classic Theme

**Files:**
- Create: `styles.css`

- [ ] **Step 1:** Set up CSS custom properties (variables) at `:root`

  Theme colors:
  - Primary accent: `--color-accent: #2563eb;` (professional blue)
  - Neutral palette:
    - `--color-bg: #f8fafc;` (light slate)
    - `--color-bg-alt: #e2e8f0;`
    - `--color-text: #1e293b;` (dark slate)
    - `--color-text-muted: #64748b;`
    - `--color-border: #cbd5e1;`
    - `--color-card-bg: #ffffff;`
  - Spacing scale: `--spacing-xs: 0.5rem; --spacing-sm: 1rem; --spacing-md: 1.5rem; --spacing-lg: 2rem; --spacing-xl: 3rem; --spacing-2xl: 5rem;`
  - Typography:
    - `--font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;`
    - `--font-mono: "SF Mono", "Fira Code", "Consolas", monospace;`
    - `--font-size-base: 1rem;` (16px)
    - `--font-size-h1: clamp(2rem, 5vw, 3.5rem);`
    - `--font-size-h2: clamp(1.5rem, 4vw, 2.5rem);`
    - `--line-height: 1.6;`
  - Shadows and transitions:
    - `--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);`
    - `--shadow-md: 0 4px 6px rgba(0,0,0,0.07);`
    - `--shadow-lg: 0 10px 15px rgba(0,0,0,0.1);`
    - `--transition: 0.2s ease-in-out;`
  - Container width: `--max-width: 1200px;`

- [ ] **Step 2:** Add dark mode support via `@media (prefers-color-scheme: dark)` or class-based

  Override variables for dark mode (keep accent same):
  - `--color-bg: #0f172a;` (dark slate)
  - `--color-bg-alt: #1e293b;`
  - `--color-text: #f1f5f9;`
  - `--color-text-muted: #94a3b8;`
  - `--color-border: #334155;`
  - `--color-card-bg: #1e293b;`

- [ ] **Step 3:** Reset and base styles

  - Box-sizing: border-box
  - Remove default margins
  - Set font family, line-height, color on body
  - Selection color: accent color or yellow highlight (`#ffd700`)
  - Smooth scrolling: `html { scroll-behavior: smooth; }`

- [ ] **Step 4:** Typography styles

  - Heading hierarchy (h1, h2, h3, h4)
  - Paragraph spacing (margin-bottom: 1em)
  - Link styles: color = accent, underline on hover, transition
  - Strong/bold: use `--color-text` or accent

- [ ] **Step 5:** Layout and container utilities

  - `.container`: max-width, centered, padding
  - `.section`: padding (large vertical), container
  - `.grid`: CSS Grid for project cards
  - `.flex`: Flexbox utilities
  - Responsive breakpoints: mobile-first media queries

- [ ] **Step 6:** Header and Navigation styles

  - `<header>`: fixed/sticky position, top, full width, z-index high
  - Background: `--color-bg` with backdrop blur (glassmorphism): `backdrop-filter: blur(10px);`
  - Border-bottom: `1px solid var(--color-border)`
  - Nav list: horizontal flex, spacing
  - Nav links: padding, hover effect (underline or color change)
  - Mobile menu: hamburger icon (hidden on desktop with CSS, shown on mobile)
  - Active link styling: highlight current section

- [ ] **Step 7:** Hero section styles

  - Full viewport height or large padding (`min-height: 80vh`)
  - Centered or left-aligned content
  - H1: large, bold
  - H2 or tagline: smaller, muted color
  - Social links: flex row, icon buttons with hover
  - CTA button: accent background, white text, hover transition
  - Subtle background: maybe gradient or pattern (keep minimal)

- [ ] **Step 8:** About section styles

  - Plain text paragraphs with good line-height
  - Max-width for readability (65-75 characters)
  - No special styling needed, clean and readable

- [ ] **Step 9:** Experience timeline styles

  - Vertical timeline layout:
    - Left border: accent color, thin
    - Each role: card style or spaced list
    - Company name: bold/heading
    - Role: slightly smaller, muted
    - Dates: monospace font, small, muted
    - Bullet points: simple circles or custom markers
    - Hover effects: subtle lift or border highlight
  - Mobile: stack vertically without timeline graphic

- [ ] **Step 10:** Skills section styles

  - Grid of skill categories: `display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--spacing-md);`
  - Category card: padded, border, border-radius small, background `--color-card-bg`, shadow-sm
  - Category title: bold, accent color or heading
  - Skills list: inline tags or stacked items
  - Individual skill: small badge or pill style (optional)

- [ ] **Step 11:** Projects section styles

  - Grid layout: 1 col mobile, 2 tablet, 3 desktop
  - Project card: background `--color-card-bg`, border, border-radius medium, padding, shadow-sm, hover: shadow-md, slight translateY
  - Card structure:
    - Title: h3 or h4, bold
    - Description: paragraph
    - Tech stack: inline badges with muted background, accent border or text
    - Metrics: italic or highlighted box
    - Links: "View Code" and "Live Demo" buttons (if applicable)
  - Responsive: collapse to single column on mobile

- [ ] **Step 12:** Contact section styles

  - Simple layout: centered or two-column (info + form)
  - Contact links as large button cards
  - Form (if included): styled inputs, textarea, submit button
    - Input styles: padding, border, border-radius, focus outline accent
    - Accessibility: labels, aria-required
  - Responsive: stack on mobile

- [ ] **Step 13:** Footer styles

  - Padding, border-top, centered or spaced
  - Copyright: small, muted
  - Social icons: svg or icon font, size 24px, hover color change

- [ ] **Step 14:** Back-to-top button

  - Fixed position: bottom right, small padding
  - Hidden by default, show via JS when scrolled down
  - Icon (arrow up), accent color or solid
  - Hover: scale or color transition
  - Smooth scroll to top on click

- [ ] **Step 15:** Animations and transitions

  - Define utility classes:
    - `.fade-in`: opacity 0→1, translateY
    - `.slide-up`: translateY 20px→0
  - Add when elements come into view (via IntersectionObserver)
  - Hover effects on cards and buttons
  - Smooth transitions on all interactive elements

- [ ] **Step 16:** Utility classes

  - `.sr-only`: screen reader only (accessibility)
  - `.text-accent`, `.text-muted`
  - `.mb-0`, `.mb-1`, `.mb-2` (margin utilities)
  - `.flex-center`, `.flex-between`

- [ ] **Step 17:** Media queries and responsiveness

  - Check all sections at breakpoints: 640px, 768px, 1024px, 1280px
  - Adjust padding, font sizes, grid columns
  - Navigation: show hamburger menu on mobile (<768px)
  - Ensure no horizontal scroll: `overflow-x: hidden`

- [ ] **Step 18:** Accessibility improvements

  - Focus styles: visible outline (offset), accent color
  - Skip to content link (hidden visually, visible on focus)
  - Alt text for any decorative images (SVGs have `aria-hidden="true"`)
  - Semantic HTML verification (already done in HTML task)
  - Color contrast check (WCAG AA minimum)

- [ ] **Step 19:** Performance optimizations

  - Use `will-change` sparingly for animations
  - Minimize repaints (transform/opacity only)
  - Lazy loading for any images (not needed if using SVGs inline)
  - CSS minification plan (post-build, optional)

- [ ] **Step 20:** Commit CSS file
  ```bash
  git add styles.css
  git commit -m "feat: add complete stylesheet with professional classic theme"
  ```

---

### Task 5: Create script.js for Interactions

**Files:**
- Create: `script.js`

- [ ] **Step 1:** Feature detection and polyfills (if any needed)

  - Check for `IntersectionObserver` support, polyfill if needed (optional)
  - Check for `scrollTo` smooth behavior

- [ ] **Step 2:** Mobile navigation toggle

  - Select hamburger button and nav menu
  - Add click event: toggle `.nav-open` class on menu
  - Close menu when clicking a link
  - Close menu when clicking outside (document click)
  - Add ARIA attributes (`aria-expanded`, `aria-label`)

- [ ] **Step 3:** Sticky navigation behavior

  - Detect when page scrolls past hero section
  - Add `.scrolled` class to header for style change (background opacity increase, shadow)
  - Toggle visibility of back-to-top button

- [ ] **Step 4:** Smooth scroll for anchor links

  - Intercept clicks on `a[href^="#"]`
  - Prevent default, use `scrollTo` with smooth behavior
  - Update active nav link based on scroll position (IntersectionObserver)
  - Offset for fixed header if needed

- [ ] **Step 5:** Intersection Observer for scroll animations

  - Target elements with class `.animate-on-scroll` or all sections
  - Add `.is-visible` class when in view
  - Options: threshold 0.1, rootMargin "0px 0px -50px 0px"
  - Define CSS transitions for fade/slide effects

- [ ] **Step 6:** Back-to-top button functionality

  - Scroll event: show/hide button based on `window.scrollY > 300`
  - Click event: `window.scrollTo({ top: 0, behavior: 'smooth' })`

- [ ] **Step 7:** Contact form handling (if form exists)

  - Prevent default form submission
  - Validate required fields (name, email, message)
  - Email validation regex
  - Show success/error messages (inline or toast)
  - Option: Integrate with Formspree or emailto link

- [ ] **Step 8:** Optional: Theme toggle (dark/light mode)

  - If implementing: toggle class on body
  - Save preference in `localStorage`
  - Respect system preference initially
  - Smooth transition between themes

- [ ] **Step 9:** Performance optimizations

  - Debounce scroll events (if using)
  - Use `requestAnimationFrame` for animations
  - Remove observers when not needed (cleanup)

- [ ] **Step 10:** Test all JavaScript functionality

  - Open in browser, check console for errors
  - Test mobile navigation toggle
  - Test smooth scroll navigation
  - Test scroll animations (resize and scroll)
  - Test contact form validation
  - Test back-to-top button

- [ ] **Step 11:** Commit JavaScript file
  ```bash
  git add script.js
  git commit -m "feat: add interactive JavaScript functionality"
  ```

---

### Task 6: Content Polish and Optimization

**Files:**
- Modify: `index.html` (content refinement)

- [ ] **Step 1:** Verify all content matches specification

  - Hero: Title "Senior Software Engineer | AI-Augmented Development"
  - About: 9+ years, AI integration, quality focus
  - Experience: 4-5 roles with correct companies and quantified achievements
  - Skills: 6 categories (Languages, Frameworks, Cloud/DevOps, AI/ML, Testing, Mobile)
  - Projects: Test Automation Platform, AI-Augmented Tools, DBS Digibank, House Bill Cargowise
  - Contact: correct email and social links

- [ ] **Step 2:** Add concise meta description (155-160 chars)

  - In `<head>`: `<meta name="description" content="Vishal Kumar - Senior Software Engineer specializing in AI-augmented development, test automation, Java, Spring Boot, and scalable systems. 9+ years experience.">`

- [ ] **Step 3:** Add Open Graph tags for social sharing

  ```html
  <meta property="og:title" content="Vishal Kumar - Senior Software Engineer">
  <meta property="og:description" content="Portfolio of Vishal Kumar, specializing in AI-augmented development and test automation with 9+ years of experience.">
  <meta property="og:image" content="https://vishalecho.github.io/img/og-image.jpg">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://vishalecho.github.io">
  ```

- [ ] **Step 4:** Add Twitter Card meta tags (optional)

  ```html
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Vishal Kumar - Senior Software Engineer">
  <meta name="twitter:description" content="AI-augmented development, test automation, Java, Spring Boot, 9+ years">
  <meta name="twitter:image" content="https://vishalecho.github.io/img/og-image.jpg">
  ```

- [ ] **Step 5:** Add favicon

  - Create or obtain `favicon.ico` (16x16, 32x32)
  - Link in `<head>`: `<link rel="icon" type="image/x-icon" href="/favicon.ico">`
  - Or use SVG favicon: `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`

- [ ] **Step 6:** Add schema.org structured data (JSON-LD)

  - Add to `<head>` or end of `<body>`:
  ```json
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vishal Kumar",
    "url": "https://vishalecho.github.io",
    "sameAs": [
      "https://linkedin.com/in/vishalkumar",
      "https://github.com/vishalecho"
    ],
    "jobTitle": "Senior Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "WiseTech Global"
    }
  }
  </script>
  ```

- [ ] **Step 7:** Create placeholder avatar image (optional)

  - Generate a simple avatar (initials or gradient) or use existing photo
  - Save as `img/avatar.jpg` or `img/avatar.svg`
  - Add to hero section if desired

- [ ] **Step 8:** Optimize images (if any)

  - Compress to WebP format
  - Add `loading="lazy"` to below-the-fold images
  - Specify width and height attributes

- [ ] **Step 9:** Add robots.txt (already exists - verify)

  - Should allow all: `User-agent: *` `Allow: /`

- [ ] **Step 10:** Create sitemap.xml (static version)

  - Simple sitemap with just index.html
  - Example:
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://vishalecho.github.io/</loc>
      <lastmod>2025-03-19</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
  </urlset>
  ```

- [ ] **Step 11:** Commit content optimizations
  ```bash
  git add index.html favicon.ico img/ sitemap.xml robots.txt 2>/dev/null || echo "Some files may not exist yet"
  git commit -m "chore: optimize content, meta tags, and add assets"
  ```

---

### Task 7: Testing and Validation

**Files:**
- All files

- [ ] **Step 1:** HTML validation

  ```bash
  # Use online validator or local tool
  # https://validator.w3.org/
  # Or install: npm install -g html-validator
  html-validate index.html
  ```
  Expected: No errors, warnings OK if minor

- [ ] **Step 2:** CSS validation

  ```bash
  # https://jigsaw.w3.org/css-validator/
  # Or use stylelint
  npx stylelint styles.css
  ```
  Expected: No errors

- [ ] **Step 3:** Lighthouse audit

  - Open Chrome DevTools → Lighthouse
  - Run audit for Performance, Accessibility, Best Practices, SEO
  - Target scores: 90+ each
  - Fix issues flagged (image sizes, contrast, etc.)

- [ ] **Step 4:** Cross-browser testing

  - Chrome, Firefox, Safari, Edge
  - Mobile: iOS Safari, Chrome Android
  - Check: layout, fonts, animations, navigation

- [ ] **Step 5:** Responsive design testing

  - Use DevTools device toolbar
  - Test breakpoints: 320px, 375px, 768px, 1024px, 1280px
  - Check: no horizontal scroll, readable text, tap targets (min 44x44px)

- [ ] **Step 6:** Accessibility testing

  - Keyboard navigation: tab through all interactive elements
  - Screen reader test (NVDA, VoiceOver, or built-in)
  - Color contrast: https://webaim.org/resources/contrastchecker/
  - All images have alt text, icons have aria-hidden or labels
  - Form labels properly associated

- [ ] **Step 7:** Performance testing

  - PageSpeed Insights: https://pagespeed.web.dev/
  - First Contentful Paint < 1s, LCP < 2.5s
  - Minimize render-blocking resources (CSS inline? defer JS)
  - Total page size < 200KB (excluding images)

- [ ] **Step 8:** SEO check

  - Meta description present
  - Title tag unique and descriptive
  - Heading hierarchy correct (one h1, proper h2 nesting)
  - Structured data valid (Schema.org)
  - Open Graph tags present
  - Images have alt attributes

- [ ] **Step 9:** Link checking

  - All internal anchor links work
  - All external links open in new tab (target="_blank")
  - No 404s on social links

- [ ] **Step 10:** JavaScript error check

  - Console: no errors or warnings
  - All features work when JS disabled (progressive enhancement)

- [ ] **Step 11:** Commit testing changes (if any fixes made)
  ```bash
  git add .
  git commit -m "test: fix issues found in validation and testing"
  ```

---

### Task 8: Deploy to GitHub Pages

**Files:**
- Repository config only

- [ ] **Step 1:** Ensure all files are committed to master branch

  ```bash
  git status
  git push origin master
  ```
  Expected: All changes pushed

- [ ] **Step 2:** Configure GitHub Pages

  - Go to repo Settings → Pages
  - Source: Deploy from a branch
  - Branch: `master` (or `main`) / `/(root)`
  - Save

- [ ] **Step 3:** Verify deployment

  - Wait 1-2 minutes
  - Visit: `https://vishalecho.github.io`
  - Check: site loads, all sections visible, styles applied

- [ ] **Step 4:** Test on live URL

  - Check all links work
  - Check HTTPS (should be automatic)
  - Check custom domain if any (none expected)

- [ ] **Step 5:** Run Lighthouse on live site

  - Use DevTools or PageSpeed Insights on live URL
  - Compare with local results

- [ ] **Step 6:** Share preview with user for feedback

  - Confirm: `https://vishalecho.github.io` is correct
  - Ask user to review content accuracy

- [ ] **Step 7:** Create initial release tag (optional)

  ```bash
  git tag -a v1.0.0 -m "First stable release of rebuilt portfolio"
  git push origin v1.0.0
  ```

- [ ] **Step 8:** Final commit message

  ```bash
  git log --oneline -5
  # Ensure commit history is clean and descriptive
  ```

---

## Post-Implementation Checklist

- [ ] All HTML sections present and semantic
- [ ] CSS follows professional classic design (slate/gray + blue #2563eb)
- [ ] Mobile-first responsive design working
- [ ] Sticky navigation with smooth scroll
- [ ] All JavaScript features functional (tested)
- [ ] Content accurate: WiseTech, EY, Talview, DBS, TCS + quantified achievements
- [ ] Skills categorized correctly (AI/ML, Testing, etc.)
- [ ] Projects showcase test automation and AI capabilities
- [ ] Contact information verified
- [ ] Accessibility: keyboard nav, ARIA, contrast ratios
- [ ] Performance: Lighthouse 90+ scores
- [ ] SEO: meta tags, structured data, OG tags
- [ ] Deployed to GitHub Pages successfully

---

## Notes for Implementer

- Keep CSS simple and maintainable, avoid over-engineering
- Use CSS custom properties extensively for theming consistency
- Vanilla JS only - no jQuery or frameworks
- Prioritize accessibility and semantic HTML
- Content is king - ensure information is accurate and well-structured
- If you encounter blockers, create separate tasks for research
- Commit frequently with descriptive messages
- Test on real devices if possible (not just emulators)
