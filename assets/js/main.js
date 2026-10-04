/**
 * Main Controller Script for Nandini Bhatt Portfolio
 * Dynamically binds data, handles filters, modals, theme switcher, and interactions.
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderHeroAndAbout();
  renderStats();
  renderTimeline();
  renderThesisSpotlight();
  renderCourses();
  renderPublications();
  renderStudentProjects();
  renderCertifications();
  renderInstitutionalRoles();
  renderOfficeHours();
  setupEventListeners();
  setupScrollSpy();
});

/* ==========================================================================
   1. Theme Management (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("ndb-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  updateThemeIcons();

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem("ndb-theme", isDark ? "dark" : "light");
      updateThemeIcons();
      showToast(isDark ? "Switched to Dark Mode" : "Switched to Light Mode");
    });
  }
}

function updateThemeIcons() {
  const isDark = document.documentElement.classList.contains("dark");
  const sunIcon = document.getElementById("theme-icon-sun");
  const moonIcon = document.getElementById("theme-icon-moon");

  if (sunIcon && moonIcon) {
    if (isDark) {
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
    } else {
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
    }
  }
}

/* ==========================================================================
   2. Render Hero & About Section
   ========================================================================== */
function renderHeroAndAbout() {
  const { personalInfo } = portfolioData;

  // Hero Elements
  const heroName = document.getElementById("hero-name");
  const heroRole = document.getElementById("hero-role");
  const heroCampus = document.getElementById("hero-campus");
  const heroBioLead = document.getElementById("hero-bio-lead");
  const heroAvatar = document.getElementById("hero-avatar");

  if (heroName) heroName.textContent = personalInfo.fullName;
  if (heroRole) heroRole.textContent = personalInfo.designation;
  if (heroCampus) heroCampus.textContent = personalInfo.affiliation;
  if (heroBioLead && personalInfo.bio[0]) heroBioLead.textContent = personalInfo.bio[0];
  if (heroAvatar) heroAvatar.src = personalInfo.avatarUrl;

  // About Detailed Paragraphs
  const aboutContainer = document.getElementById("about-paragraphs");
  if (aboutContainer) {
    aboutContainer.innerHTML = personalInfo.bio
      .map(p => `<p class="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">${p}</p>`)
      .join("");
  }

  // Quick Info Badges
  const badgesContainer = document.getElementById("about-badges");
  if (badgesContainer) {
    badgesContainer.innerHTML = personalInfo.highlights
      .map(
        h => `
        <div class="px-3.5 py-2 rounded-lg bg-indigo-50/70 dark:bg-slate-800/80 border border-indigo-100 dark:border-slate-700">
          <span class="block text-xs font-medium text-slate-500 dark:text-slate-400">${h.label}</span>
          <span class="block text-sm font-semibold text-indigo-900 dark:text-indigo-300">${h.value}</span>
        </div>`
      )
      .join("");
  }
}

/* ==========================================================================
   3. Render Academic Statistics
   ========================================================================== */
function renderStats() {
  const container = document.getElementById("stats-grid");
  if (!container || !portfolioData.academicStats) return;

  container.innerHTML = portfolioData.academicStats
    .map(stat => `
      <div class="glass-card p-5 rounded-2xl text-center">
        <div class="text-3xl lg:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-1">
          ${stat.number}
        </div>
        <div class="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
          ${stat.label}
        </div>
      </div>
    `)
    .join("");
}

/* ==========================================================================
   4. Render Academic & Professional Timeline
   ========================================================================== */
function renderTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container || !portfolioData.academicTimeline) return;

  container.innerHTML = portfolioData.academicTimeline
    .map((item, index) => {
      const isCurrent = item.period.includes("Present");
      return `
        <div class="relative pl-8 sm:pl-10 pb-8 last:pb-0 group">
          <!-- Timeline Marker -->
          <div class="absolute left-0 top-1 w-6 h-6 rounded-full border-2 ${
            isCurrent
              ? "bg-indigo-600 border-indigo-200 dark:border-indigo-900 shadow-md shadow-indigo-500/30"
              : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600"
          } flex items-center justify-center">
            <span class="w-2 h-2 rounded-full ${isCurrent ? "bg-white" : "bg-slate-400 dark:bg-slate-500"}"></span>
          </div>

          <!-- Vertical Line -->
          ${
            index !== portfolioData.academicTimeline.length - 1
              ? '<div class="absolute left-3 top-7 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>'
              : ''
          }

          <!-- Content Card -->
          <div class="glass-card p-5 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-1.5">
              <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                isCurrent
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
                  : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              }">
                ${item.period}
              </span>
              <span class="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                ${item.type}
              </span>
            </div>
            <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              ${item.role}
            </h4>
            <div class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-1.5">
              <span>🏛️ ${item.institution}</span>
              <span>•</span>
              <span>📍 ${item.location}</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              ${item.description}
            </p>
          </div>
        </div>
      `;
    })
    .join("");
}

/* ==========================================================================
   5. Render Master's Thesis Spotlight
   ========================================================================== */
function renderThesisSpotlight() {
  const container = document.getElementById("thesis-spotlight-card");
  if (!container || !portfolioData.thesisSpotlight) return;

  const t = portfolioData.thesisSpotlight;

  container.innerHTML = `
    <div class="glass-card p-6 sm:p-8 rounded-2xl border-2 border-indigo-200/80 dark:border-indigo-900/60 relative overflow-hidden">
      <!-- Glow decoration -->
      <div class="absolute top-0 right-0 -mt-10 -mr-10 w-44 h-44 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>

      <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
        <span class="academic-badge bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
          🎯 Master's Thesis Spotlight
        </span>
        <span class="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300">
          ${t.status}
        </span>
      </div>

      <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">
        ${t.title}
      </h3>
      <p class="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-4">
        ${t.domain}
      </p>

      <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
        ${t.abstract}
      </p>

      <!-- Progress Bar -->
      <div class="mb-6 bg-slate-100 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
        <div class="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
          <span>Overall Dissertation Progress</span>
          <span class="text-indigo-600 dark:text-indigo-400">${t.progress}% Completed</span>
        </div>
        <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
          <div class="bg-indigo-600 dark:bg-indigo-500 h-3 rounded-full progress-striped transition-all duration-1000" style="width: ${t.progress}%"></div>
        </div>
      </div>

      <!-- Milestone Checklist -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
        ${t.milestones
          .map(
            m => `
          <div class="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <span class="${m.done ? "text-emerald-500" : "text-slate-400"} mt-0.5">
              ${m.done ? "✓" : "○"}
            </span>
            <span class="${m.done ? "font-medium" : "text-slate-500 dark:text-slate-400"}">${m.name}</span>
          </div>`
          )
          .join("")}
      </div>

      <!-- Tech Stack Tags -->
      <div class="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-700/80">
        <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-2">Research Tools:</span>
        ${t.technologies
          .map(
            tech => `<span class="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">${tech}</span>`
          )
          .join("")}
      </div>
    </div>
  `;
}

/* ==========================================================================
   6. Render Courses & Pedagogy Hub
   ========================================================================== */
let activeCourseCategory = "All";

function renderCourses() {
  const container = document.getElementById("courses-grid");
  const filterContainer = document.getElementById("course-filter-buttons");
  if (!container || !portfolioData.teachingPortfolio) return;

  const categories = ["All", "Core Computing", "Systems & Databases", "Programming & Dev", "Laboratories"];

  // Filter Buttons
  if (filterContainer) {
    filterContainer.innerHTML = categories
      .map(
        cat => `
        <button type="button" class="course-filter-btn px-4 py-2 rounded-full text-xs font-medium transition-all ${
          activeCourseCategory === cat
            ? "bg-indigo-600 text-white shadow-sm"
            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
        }" data-category="${cat}">
          ${cat}
        </button>`
      )
      .join("");

    filterContainer.querySelectorAll(".course-filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        activeCourseCategory = btn.dataset.category;
        renderCourses();
      });
    });
  }

  // Filtered List
  const filteredCourses = portfolioData.teachingPortfolio.filter(
    c => activeCourseCategory === "All" || c.category === activeCourseCategory
  );

  container.innerHTML = filteredCourses
    .map(
      course => `
      <div class="glass-card p-6 rounded-2xl flex flex-col justify-between">
        <div>
          <!-- Course Header -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900">
              ${course.code}
            </span>
            <span class="text-xs font-medium text-slate-500 dark:text-slate-400">
              ${course.semester}
            </span>
          </div>

          <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
            ${course.title}
          </h4>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            ${course.description}
          </p>

          <!-- Outcomes -->
          <div class="space-y-1.5 mb-5">
            <div class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Key Outcomes:</div>
            ${course.learningOutcomes
              .map(
                o => `
              <div class="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                <span class="text-indigo-500 font-bold">•</span>
                <span>${o}</span>
              </div>`
              )
              .join("")}
          </div>
        </div>

        <!-- Action / Material Buttons -->
        <div class="pt-4 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-between gap-2">
          <button type="button" class="open-course-modal text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1" data-course-id="${course.id}">
            📚 View Study Material
          </button>
          <a href="${course.resources.codeRepo}" target="_blank" rel="noopener noreferrer" class="text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1">
            GitHub Code ↗
          </a>
        </div>
      </div>
    `
    )
    .join("");

  // Attach modal handlers
  container.querySelectorAll(".open-course-modal").forEach(btn => {
    btn.addEventListener("click", () => {
      const courseId = btn.dataset.courseId;
      const course = portfolioData.teachingPortfolio.find(c => c.id === courseId);
      if (course) openCourseModal(course);
    });
  });
}

/* ==========================================================================
   7. Render Research Publications
   ========================================================================== */
let activePubType = "All";
let pubSearchQuery = "";

function renderPublications() {
  const container = document.getElementById("publications-list");
  const filterContainer = document.getElementById("pub-filter-buttons");
  const searchInput = document.getElementById("pub-search-input");
  if (!container || !portfolioData.researchPublications) return;

  const types = ["All", "Journal", "Conference", "Preprint"];

  // Filter Buttons
  if (filterContainer) {
    filterContainer.innerHTML = types
      .map(
        t => `
        <button type="button" class="pub-filter-btn px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
          activePubType === t
            ? "bg-indigo-600 text-white shadow-sm"
            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
        }" data-type="${t}">
          ${t}
        </button>`
      )
      .join("");

    filterContainer.querySelectorAll(".pub-filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        activePubType = btn.dataset.type;
        renderPublications();
      });
    });
  }

  // Bind Search Input once
  if (searchInput && !searchInput.dataset.bound) {
    searchInput.dataset.bound = "true";
    searchInput.addEventListener("input", e => {
      pubSearchQuery = e.target.value.toLowerCase().trim();
      renderPublications();
    });
  }

  // Filter & Search Logic
  const filtered = portfolioData.researchPublications.filter(pub => {
    const matchesType = activePubType === "All" || pub.type === activePubType;
    const matchesSearch =
      !pubSearchQuery ||
      pub.title.toLowerCase().includes(pubSearchQuery) ||
      pub.venue.toLowerCase().includes(pubSearchQuery) ||
      pub.abstract.toLowerCase().includes(pubSearchQuery);
    return matchesType && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-slate-500 dark:text-slate-400 text-sm">
        No publications found matching current filters.
      </div>`;
    return;
  }

  container.innerHTML = filtered
    .map(pub => {
      const formattedAuthors = pub.authors
        .map(a =>
          a.includes("Nandini Bhatt")
            ? `<strong class="text-indigo-600 dark:text-indigo-300 font-bold">${a}</strong>`
            : a
        )
        .join(", ");

      return `
      <article class="glass-card p-6 rounded-2xl mb-4 transition-all">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div class="flex items-center gap-2">
            <span class="academic-badge bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900">
              ${pub.type}
            </span>
            <span class="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
              ${pub.indexing}
            </span>
          </div>
          <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Year ${pub.year}
          </span>
        </div>

        <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
          ${pub.title}
        </h4>

        <div class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-2">
          ${formattedAuthors}
        </div>

        <div class="text-xs font-serif italic text-slate-500 dark:text-slate-400 mb-3">
          ${pub.venue}
        </div>

        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          ${pub.abstract}
        </p>

        <!-- Actions -->
        <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200 dark:border-slate-700/80">
          <div class="text-xs text-slate-500 dark:text-slate-400 font-mono">
            DOI: <a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 hover:underline">${pub.doi}</a>
          </div>

          <div class="flex items-center gap-2">
            <button type="button" class="cite-pub-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center gap-1.5 transition-colors" data-pub-id="${pub.id}">
              <span>📄</span> Cite / BibTeX
            </button>
            <a href="${pub.pdfUrl}" class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors flex items-center gap-1">
              <span>⬇</span> PDF
            </a>
          </div>
        </div>
      </article>
    `;
    })
    .join("");

  // Attach Cite Modal buttons
  container.querySelectorAll(".cite-pub-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const pubId = btn.dataset.pubId;
      const pub = portfolioData.researchPublications.find(p => p.id === pubId);
      if (pub) openCiteModal(pub);
    });
  });
}

/* ==========================================================================
   8. Render Student Capstone Projects Guided
   ========================================================================== */
function renderStudentProjects() {
  const container = document.getElementById("student-projects-grid");
  if (!container || !portfolioData.studentProjectsGuided) return;

  container.innerHTML = portfolioData.studentProjectsGuided
    .map(
      proj => `
      <div class="glass-card p-6 rounded-2xl flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="text-xs font-medium text-indigo-600 dark:text-indigo-400">
              ${proj.academicYear}
            </span>
            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">
              ${proj.team}
            </span>
          </div>

          <h4 class="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
            ${proj.title}
          </h4>

          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            ${proj.description}
          </p>

          <div class="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60 mb-4">
            <span class="block text-xs font-semibold text-emerald-800 dark:text-emerald-300">
              🏆 Outcome: ${proj.outcome}
            </span>
          </div>
        </div>

        <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-slate-700/80">
          ${proj.techStack
            .map(
              t => `<span class="px-2 py-0.5 rounded text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">${t}</span>`
            )
            .join("")}
        </div>
      </div>
    `
    )
    .join("");
}

/* ==========================================================================
   9. Render Certifications & Faculty Development Programs (FDPs)
   ========================================================================== */
function renderCertifications() {
  const container = document.getElementById("certifications-grid");
  if (!container || !portfolioData.certificationsAndFDPs) return;

  container.innerHTML = portfolioData.certificationsAndFDPs
    .map(
      cert => `
      <div class="glass-card p-5 rounded-xl flex items-start gap-3.5">
        <div class="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center shrink-0 text-lg">
          📜
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-between gap-2 mb-1">
            <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
              ${cert.category} • ${cert.year}
            </span>
            <span class="text-xs font-medium text-slate-400">
              ${cert.duration}
            </span>
          </div>
          <h5 class="text-sm font-bold text-slate-900 dark:text-white leading-snug mb-1">
            ${cert.title}
          </h5>
          <div class="text-xs text-slate-500 dark:text-slate-400">
            Issuing Body: ${cert.organization}
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

/* ==========================================================================
   10. Render Institutional Roles at Neotech Campus
   ========================================================================== */
function renderInstitutionalRoles() {
  const container = document.getElementById("institutional-roles-grid");
  if (!container || !portfolioData.institutionalRoles) return;

  container.innerHTML = portfolioData.institutionalRoles
    .map(
      role => `
      <div class="glass-card p-5 rounded-xl">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-indigo-500 font-bold">🏛️</span>
          <h5 class="text-sm font-bold text-slate-900 dark:text-white">
            ${role.role}
          </h5>
        </div>
        <div class="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-2">
          ${role.department}
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          ${role.responsibilities}
        </p>
      </div>
    `
    )
    .join("");
}

/* ==========================================================================
   11. Render Office Hours & Campus Location
   ========================================================================== */
function renderOfficeHours() {
  const { officeHours, personalInfo } = portfolioData;
  const container = document.getElementById("office-hours-content");
  if (!container || !officeHours) return;

  container.innerHTML = `
    <div class="space-y-3 text-sm text-slate-600 dark:text-slate-300">
      <div class="flex items-start gap-2.5">
        <span class="text-indigo-600 font-bold">🕒</span>
        <div>
          <span class="font-semibold block text-slate-900 dark:text-white">Office Hours:</span>
          <span>${officeHours.schedule}</span>
        </div>
      </div>
      <div class="flex items-start gap-2.5">
        <span class="text-indigo-600 font-bold">📍</span>
        <div>
          <span class="font-semibold block text-slate-900 dark:text-white">Location:</span>
          <span>${officeHours.room}</span>
          <span class="block text-xs text-slate-500">${officeHours.campus}</span>
        </div>
      </div>
      <div class="flex items-start gap-2.5">
        <span class="text-indigo-600 font-bold">✉️</span>
        <div>
          <span class="font-semibold block text-slate-900 dark:text-white">Institutional Email:</span>
          <a href="mailto:${personalInfo.email}" class="text-indigo-600 dark:text-indigo-400 hover:underline">${personalInfo.email}</a>
        </div>
      </div>
      <p class="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-700/80">
        💡 ${officeHours.policy}
      </p>
    </div>
  `;
}

/* ==========================================================================
   12. Modals & Notifications
   ========================================================================== */
function openCiteModal(pub) {
  const modal = document.getElementById("cite-modal");
  const modalContent = document.getElementById("cite-modal-content");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="mb-4">
      <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-1">Cite Publication</h3>
      <p class="text-xs text-slate-500 dark:text-slate-400">${pub.title}</p>
    </div>
    
    <div class="relative mb-4">
      <pre id="bibtex-code" class="p-4 rounded-xl bg-slate-900 text-slate-100 text-xs font-mono overflow-x-auto max-h-60 leading-relaxed">${pub.bibtex}</pre>
    </div>

    <div class="flex justify-end gap-2">
      <button type="button" id="copy-bibtex-btn" class="px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center gap-1.5">
        <span>📋</span> Copy BibTeX
      </button>
      <button type="button" class="close-modal-btn px-4 py-2 rounded-lg text-xs font-semibold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300">
        Close
      </button>
    </div>
  `;

  modal.classList.add("active");

  const copyBtn = modalContent.querySelector("#copy-bibtex-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(pub.bibtex).then(() => {
        showToast("BibTeX copied to clipboard!");
      });
    });
  }

  modalContent.querySelectorAll(".close-modal-btn").forEach(btn => {
    btn.addEventListener("click", closeModal);
  });
}

function openCourseModal(course) {
  const modal = document.getElementById("course-modal");
  const modalContent = document.getElementById("course-modal-content");
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="mb-4">
      <div class="flex items-center gap-2 mb-1">
        <span class="px-2 py-0.5 rounded text-xs font-mono font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
          ${course.code}
        </span>
        <span class="text-xs text-slate-500">${course.semester}</span>
      </div>
      <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">${course.title}</h3>
      <p class="text-xs text-slate-600 dark:text-slate-300">${course.description}</p>
    </div>

    <div class="space-y-3 mb-6">
      <h5 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Course Materials & Downloads</h5>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <a href="${course.resources.syllabus}" class="p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-500 flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200 transition-colors">
          <span>📄</span>
          <div>
            <div class="font-semibold">Course Syllabus (PDF)</div>
            <div class="text-[10px] text-slate-400">GTU / Campus Approved</div>
          </div>
        </a>

        <a href="${course.resources.slides}" class="p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-500 flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200 transition-colors">
          <span>📊</span>
          <div>
            <div class="font-semibold">Lecture Slides & Notes</div>
            <div class="text-[10px] text-slate-400">Modules 1 to 5</div>
          </div>
        </a>

        <a href="${course.resources.labManual}" class="p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-500 flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200 transition-colors">
          <span>💻</span>
          <div>
            <div class="font-semibold">Lab Manual & Problem Sets</div>
            <div class="text-[10px] text-slate-400">Practical Exercises</div>
          </div>
        </a>

        <a href="${course.resources.codeRepo}" target="_blank" rel="noopener noreferrer" class="p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-500 flex items-center gap-2.5 text-xs text-slate-700 dark:text-slate-200 transition-colors">
          <span>🐙</span>
          <div>
            <div class="font-semibold">GitHub Code Repository</div>
            <div class="text-[10px] text-slate-400">Weekly lab programs</div>
          </div>
        </a>
      </div>
    </div>

    <div class="flex justify-end">
      <button type="button" class="close-modal-btn px-4 py-2 rounded-lg text-xs font-semibold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300">
        Close Window
      </button>
    </div>
  `;

  modal.classList.add("active");

  modalContent.querySelectorAll(".close-modal-btn").forEach(btn => {
    btn.addEventListener("click", closeModal);
  });
}

function closeModal() {
  document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toast-text");
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

/* ==========================================================================
   13. Event Listeners & Navigation
   ========================================================================== */
function setupEventListeners() {
  // Modal Overlays click outside to close
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", e => {
      if (e.target === overlay) closeModal();
    });
  });

  // Escape key to close modal
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // Back to Top button
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove("hidden");
        backToTopBtn.classList.add("flex");
      } else {
        backToTopBtn.classList.add("hidden");
        backToTopBtn.classList.remove("flex");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Contact Form Submission Handler
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("contact-name").value;
      const email = document.getElementById("contact-email").value;
      const subject = document.getElementById("contact-subject").value;
      const message = document.getElementById("contact-message").value;

      if (!name || !email || !message) {
        showToast("Please fill in all required fields.");
        return;
      }

      // Simulate sending inquiry
      showToast(`Thank you, ${name}! Your message has been sent to Prof. Nandini Bhatt.`);
      contactForm.reset();
    });
  }
}

/* ==========================================================================
   14. ScrollSpy for Active Navigation Links
   ========================================================================== */
function setupScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let currentId = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = sec.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
}
