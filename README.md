# Nandini Bhatt - Academic & Technical Portfolio

> **Faculty in Computer Engineering | Master of Engineering (M.E.) Postgraduate Scholar**  
> Department of Computer Engineering, Neotech Campus, Vadodara, Gujarat.

A modern, responsive, academic and technical web portfolio designed specifically for **Prof. Nandini Bhatt**. It bridges her dual profile: an active faculty member delivering undergraduate computer engineering curriculum and a postgraduate researcher in distributed systems and edge intelligence.

---

## 🌟 Key Features

1. **Academic & Teaching Pedagogy Hub**:
   - Filterable course cards (*Data Structures & Algorithms*, *Database Systems*, *OOP with Java*, *Web Technologies*, *Operating Systems*).
   - Dedicated **Course Study Material Modal** linking to syllabus, lecture slides, lab manuals, and GitHub code repositories.
2. **Master's Thesis & Research Spotlight**:
   - Live research progress bar with milestone checklist (*Literature Survey*, *Mathematical Formulation*, *Simulation Benchmarks*, *Thesis Defense*).
   - Filterable publications list (Journals, Conferences, Preprints) with real-time keyword search.
   - **1-Click BibTeX Citation Generator** with instant clipboard copying.
   - DOI links and PDF access tags.
3. **Student Capstone Mentorship**:
   - Showcase of student engineering teams guided at Neotech Campus (*CampusIQ*, *SecureExam*, *AgroSense*).
4. **Professional Credentials & Neotech Campus Leadership**:
   - Faculty Development Programs (AICTE-ATAL, NPTEL IIT Madras, ISTE STTPs).
   - Departmental roles at Neotech Campus (Laboratory In-Charge, NBA/NAAC coordinator, TechFest mentor).
5. **Interactive Office Hours & Contact**:
   - Campus location (Room 204, Faculty Block, Neotech Campus), office hours schedule, and institutional email.
   - Interactive inquiry form with client-side validation.
6. **Academic Curriculum Vitae**:
   - Dedicated print-optimized academic CV (`assets/documents/Nandini_Bhatt_Academic_CV.html`) ready for 1-click printing or PDF export.
7. **Design & Accessibility**:
   - Modern academic styling with Dark & Light theme switcher.
   - Responsive on mobile, tablet, laptop, and ultra-wide screens.
   - Google Scholar and SEO-optimized **Schema.org JSON-LD** metadata (`Person`, `EducationalOrganization`).

---

## 📁 Project Structure

```
NDB Portfolio/
├── index.html                                  # Primary semantic single-page application
├── assets/
│   ├── css/
│   │   └── styles.css                          # Modern academic styles, animations & print layout
│   ├── js/
│   │   ├── data.js                             # Centralized data store (Edit your information here!)
│   │   └── main.js                             # Interactive controller, modals, search, theme switcher
│   ├── images/
│   │   └── avatar-placeholder.svg              # Scalable vector portrait illustration
│   └── documents/
│       └── Nandini_Bhatt_Academic_CV.html      # Printable formal academic curriculum vitae
└── README.md                                   # Comprehensive documentation & deployment guide
```

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Launch (Zero Installation)
Simply double-click `index.html` in your file explorer / Finder to open it immediately in Google Chrome, Safari, Edge, or Firefox.

### Option 2: Local Python Server (Recommended)
Open Terminal in this directory and run:
```bash
python3 -m http.server 3000
```
Then navigate to `http://localhost:3000` in your browser.

---

## ✏️ How to Customize Data

All dynamic information is centralized inside **`assets/js/data.js`**. You do **not** need to touch HTML code to update your profile:

### 1. Updating Personal & Contact Information
Open `assets/js/data.js` and locate `personalInfo`:
```javascript
personalInfo: {
  fullName: "Nandini Bhatt",
  designation: "Faculty in Computer Engineering",
  affiliation: "Department of Computer Engineering, Neotech Campus",
  email: "nandini.bhatt@neotechcampus.in",
  // Update links to your actual profiles:
  socialLinks: {
    googleScholar: "https://scholar.google.com/citations?user=YOUR_ID",
    researchGate: "https://www.researchgate.net/profile/YOUR_PROFILE",
    orcid: "https://orcid.org/YOUR_ORCID",
    linkedin: "https://www.linkedin.com/in/YOUR_PROFILE",
    github: "https://github.com/YOUR_USERNAME"
  }
}
```

### 2. Changing the Headshot / Photo
1. Save your professional photo as `avatar.jpg` or `avatar.png` into `assets/images/`.
2. In `assets/js/data.js`, update:
   ```javascript
   avatarUrl: "assets/images/avatar.jpg"
   ```

### 3. Adding a New Course
Append an object to `portfolioData.teachingPortfolio` in `assets/js/data.js`:
```javascript
{
  id: "cloud-comp",
  code: "CE602",
  title: "Cloud Computing & Distributed Systems",
  semester: "6th Semester",
  category: "Systems & Databases",
  description: "Virtualization, IaaS/PaaS/SaaS architectures, and microservices.",
  learningOutcomes: [
    "Containerization with Docker and Kubernetes orchestration",
    "Serverless functions and cloud elasticity"
  ],
  resources: {
    syllabus: "#",
    slides: "#",
    labManual: "#",
    codeRepo: "https://github.com/"
  }
}
```

### 4. Adding a Research Paper & BibTeX Citation
Append an object to `portfolioData.researchPublications` in `assets/js/data.js`:
```javascript
{
  id: "pub-05",
  title: "Your New Paper Title",
  authors: ["Nandini Bhatt", "Co-author Name"],
  venue: "IEEE / Springer Conference Name",
  year: 2025,
  type: "Conference", // "Journal", "Conference", or "Preprint"
  indexing: "Scopus / IEEE Xplore",
  doi: "10.1109/EXAMPLE.2025.123456",
  abstract: "Summary of your paper...",
  pdfUrl: "link-to-pdf.pdf",
  bibtex: `@inproceedings{bhatt2025example, ...}`
}
```

---

## 🌐 Free Deployment Options

### 1. GitHub Pages (Recommended - 100% Free Forever)
1. Initialize a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Nandini Bhatt Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/nandini-bhatt-portfolio.git
   git push -u origin main
   ```
2. On GitHub, navigate to **Settings > Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Your website will be live at `https://<your-username>.github.io/nandini-bhatt-portfolio/` in less than 2 minutes!

### 2. Vercel
1. Go to [vercel.com](https://vercel.com).
2. Click **Add New > Project** and import your GitHub repository.
3. Keep default settings and click **Deploy**.

---

## 📜 Academic Integrity & Citation
Feel free to use and adapt this portfolio template for personal academic promotion, accreditation (NBA/NAAC) presentations, and student interaction.
