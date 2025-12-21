import "./style.css";
import { lessons, getLessonById } from "./lessons/index.js";
import {
  isLessonComplete,
  toggleLessonComplete,
  setLastVisited,
  getLastVisited,
  getCompletedCount,
  getProgressPercentage,
} from "./progress.js";

// Utils
function escapeHTML(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br>");
}

// State
let currentLesson = null;
let sidebarOpen = false;

// Navigation config
const navSections = [
  {
    title: "入門",
    items: [
      { id: "web-intro", icon: "🌐", label: "Web開発入門", badge: "intro" },
      { id: "modern-web", icon: "🚀", label: "モダンWeb開発", badge: "intro" },
    ],
  },
  {
    title: "HTML",
    items: [
      { id: "html-intro", icon: "📖", label: "HTMLとは", badge: "html" },
      { id: "html-basics", icon: "📄", label: "HTML構文", badge: "html" },
    ],
  },
  {
    title: "CSS",
    items: [
      { id: "css-intro", icon: "📖", label: "CSSとは", badge: "css" },
      { id: "css-basics", icon: "🎨", label: "CSS構文", badge: "css" },
    ],
  },
  {
    title: "JavaScript",
    items: [
      { id: "js-intro", icon: "📖", label: "JavaScriptとは", badge: "js" },
      { id: "js-basics", icon: "⚡", label: "JavaScript構文", badge: "js" },
      { id: "js-advanced", icon: "🔥", label: "JavaScript応用", badge: "js" },
    ],
  },
  {
    title: "TypeScript",
    items: [
      { id: "ts-intro", icon: "📖", label: "TypeScriptとは", badge: "ts" },
      { id: "ts-basics", icon: "📘", label: "TypeScript基礎", badge: "ts" },
    ],
  },
  {
    title: "ツール",
    items: [
      { id: "git-intro", icon: "🔧", label: "Git入門", badge: "git" },
      { id: "github-basics", icon: "🐙", label: "GitHubの基本", badge: "git" },
      { id: "deploy-guide", icon: "🚀", label: "デプロイガイド", badge: "intro" },
    ],
  },
  {
    title: "フレームワーク",
    items: [
      { id: "react-basics", icon: "⚛️", label: "React入門", badge: "react" },
      { id: "tailwind-basics", icon: "🌊", label: "Tailwind CSS", badge: "tailwind" },
    ],
  },
];

// Default Meta Data
const defaultMeta = {
  title: "Web技術学習サイト | HTML/CSS/JS/React/Tailwindを効率的に学ぶ",
  description:
    "Web開発の基礎から最新技術まで、ステップバイステップで学べる無料学習サイト。HTML, CSS, JavaScript, React, Tailwind CSSのチュートリアルと演習を提供しています。",
  url: "https://ninjin-sirisiri.github.io/teach-site/",
};

function updateMetaTags(lesson) {
  const title = lesson ? `${lesson.title} | Web技術学習サイト` : defaultMeta.title;
  const description = lesson ? lesson.description : defaultMeta.description;
  const url = lesson ? `${defaultMeta.url}#${lesson.id}` : defaultMeta.url;

  // Title
  document.title = title;

  // Meta Description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", description);

  // OGP
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", description);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", url);

  // Twitter
  const twTitle = document.querySelector('meta[property="twitter:title"]');
  if (twTitle) twTitle.setAttribute("content", title);

  const twDesc = document.querySelector('meta[property="twitter:description"]');
  if (twDesc) twDesc.setAttribute("content", description);

  const twUrl = document.querySelector('meta[property="twitter:url"]');
  if (twUrl) twUrl.setAttribute("content", url);

  // Structured Data (JSON-LD)
  let script = document.querySelector('script[type="application/ld+json"][data-dynamic="true"]');
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-dynamic", "true");
    document.head.appendChild(script);
  }

  if (lesson) {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: lesson.title,
      description: lesson.description,
      url: url,
      author: {
        "@type": "Organization",
        name: "Web Dev Learn",
      },
      image: "https://ninjin-sirisiri.github.io/teach-site/banner.png",
      inLanguage: "ja",
      audience: {
        "@type": "EducationalAudience",
        educationalRole: "student",
      },
    };
    script.textContent = JSON.stringify(jsonLd);
  } else {
    script.textContent = "";
  }
}

// Render
function render() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <button class="mobile-menu-toggle" id="menuToggle">☰</button>
    ${renderSidebar()}
    <main class="main-content">
      ${currentLesson ? renderLesson() : renderHome()}
    </main>
  `;
  attachEventListeners();
}

function renderSidebar() {
  return `
    <aside class="sidebar ${sidebarOpen ? "open" : ""}" id="sidebar">
      <div class="sidebar-header">
        <div class="logo">
          <div class="logo-icon">🚀</div>
          <span>Web Dev Learn</span>
        </div>
      </div>
      <nav>
        <div class="nav-section">
          <div class="nav-list">
            <div class="nav-item">
              <a href="#" class="nav-link ${!currentLesson ? "active" : ""}">
                <span class="nav-icon">🏠</span>
                <span>ホーム</span>
              </a>
            </div>
          </div>
        </div>
        ${navSections
          .map(
            (section) => `
          <div class="nav-section">
            <div class="nav-section-title">${section.title}</div>
            <div class="nav-list">
              ${section.items
                .map(
                  (item) => `
                <div class="nav-item">
                  <a href="#${item.id}" class="nav-link ${currentLesson === item.id ? "active" : ""}">
                    <span class="nav-icon">${item.icon}</span>
                    <span>${item.label}</span>
                    <span class="nav-completion ${isLessonComplete(item.id) ? "completed" : "incomplete"}">${isLessonComplete(item.id) ? "✓" : ""}</span>
                  </a>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>
        `,
          )
          .join("")}
      </nav>
    </aside>
  `;
}

function getBadgeLabel(badge) {
  const labels = {
    intro: "入門",
    html: "HTML",
    css: "CSS",
    js: "JS",
    ts: "TS",
    git: "Git",
    react: "React",
    tailwind: "TW",
  };
  return labels[badge] || badge.toUpperCase();
}

function renderHome() {
  const totalLessons = lessons.length;
  const completedCount = getCompletedCount();
  const progressPercent = getProgressPercentage(totalLessons);
  const lastVisitedId = getLastVisited();
  const lastVisitedLesson = lastVisitedId ? getLessonById(lastVisitedId) : null;

  return `
    <div class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Web技術を<br>スピーディに習得</h1>
        <p class="hero-subtitle">HTML、CSS、JavaScriptの基礎からReact、Tailwind CSSまで。モダンなWeb開発のすべてを、ここで手に入れよう。</p>
      </div>
      <div class="hero-image">
        <img src="banner.png" alt="Web Development" style="width: 100%; height: auto; border-radius: var(--radius-md); border: 1px solid var(--border-color); box-shadow: var(--shadow-md);">
      </div>
    </div>
    
    <div class="progress-section">
      <div class="progress-header">
        <div class="progress-title">
          <span>📊</span>
          <span>学習進捗</span>
        </div>
        <div class="progress-stats">${completedCount} / ${totalLessons} レッスン完了</div>
      </div>
      <div class="progress-bar-container">
        <div class="progress-bar" style="width: ${progressPercent}%"></div>
      </div>
      <div class="progress-percentage">${progressPercent}% 完了</div>
    </div>

    ${
      lastVisitedLesson && !isLessonComplete(lastVisitedId)
        ? `
    <div class="continue-banner">
      <div class="continue-text">
        <div class="continue-title">📖 続きから学習</div>
        <div class="continue-subtitle">${lastVisitedLesson.title}</div>
      </div>
      <a href="#${lastVisitedId}" class="continue-button">
        続ける →
      </a>
    </div>
    `
        : ""
    }

    <h2 class="home-section-title">📚 まずはここから</h2>
    <div class="cards-grid">
      <a href="#web-intro" class="card intro">
        <div class="card-icon">🌐</div>
        <h3 class="card-title">Web開発入門</h3>
        <p class="card-description">Webの仕組みと必要な技術の全体像を理解します。</p>
      </a>
      <a href="#modern-web" class="card intro">
        <div class="card-icon">🚀</div>
        <h3 class="card-title">モダンWeb開発</h3>
        <p class="card-description">React、Tailwindなど現代の技術を概観します。</p>
      </a>
    </div>

    <h2 class="home-section-title">🔤 基礎を学ぶ</h2>
    <div class="cards-grid">
      <a href="#html-intro" class="card html">
        <div class="card-icon">📖</div>
        <h3 class="card-title">HTMLとは</h3>
        <p class="card-description">HTMLの役割となぜ重要なのかを理解します。</p>
      </a>
      <a href="#html-basics" class="card html">
        <div class="card-icon">📄</div>
        <h3 class="card-title">HTML構文</h3>
        <p class="card-description">タグ、属性、フォームなどの具体的な書き方を学びます。</p>
      </a>
      <a href="#css-intro" class="card css">
        <div class="card-icon">📖</div>
        <h3 class="card-title">CSSとは</h3>
        <p class="card-description">CSSの仕組みとなぜ必要なのかを理解します。</p>
      </a>
      <a href="#css-basics" class="card css">
        <div class="card-icon">🎨</div>
        <h3 class="card-title">CSS構文</h3>
        <p class="card-description">Flexbox、Grid、アニメーションなどを習得します。</p>
      </a>
      <a href="#js-intro" class="card js">
        <div class="card-icon">📖</div>
        <h3 class="card-title">JavaScriptとは</h3>
        <p class="card-description">JavaScriptの特徴とできることを理解します。</p>
      </a>
      <a href="#js-basics" class="card js">
        <div class="card-icon">⚡</div>
        <h3 class="card-title">JavaScript構文</h3>
        <p class="card-description">変数、関数、DOM操作などを実装します。</p>
      </a>
      <a href="#js-advanced" class="card js">
        <div class="card-icon">🔥</div>
        <h3 class="card-title">JavaScript応用</h3>
        <p class="card-description">非同期処理、モジュール、エラーハンドリングを学びます。</p>
      </a>
    </div>

    <h2 class="home-section-title">🔷 TypeScript</h2>
    <div class="cards-grid">
      <a href="#ts-intro" class="card ts">
        <div class="card-icon">📖</div>
        <h3 class="card-title">TypeScriptとは</h3>
        <p class="card-description">TypeScriptの概要と特徴、JavaScriptとの関係を理解します。</p>
      </a>
      <a href="#ts-basics" class="card ts">
        <div class="card-icon">📘</div>
        <h3 class="card-title">TypeScript基礎</h3>
        <p class="card-description">基本的な型、インターフェース、Union型を学びます。</p>
      </a>
    </div>

    <h2 class="home-section-title">🛠️ ツール</h2>
    <div class="cards-grid">
      <a href="#git-intro" class="card git">
        <div class="card-icon">🔧</div>
        <h3 class="card-title">Git入門</h3>
        <p class="card-description">バージョン管理の基本とコマンドをマスターします。</p>
      </a>
      <a href="#github-basics" class="card git">
        <div class="card-icon">🐙</div>
        <h3 class="card-title">GitHubの基本</h3>
        <p class="card-description">コードの共有と共同開発のワークフローを学びます。</p>
      </a>
      <a href="#deploy-guide" class="card intro">
        <div class="card-icon">🚀</div>
        <h3 class="card-title">デプロイガイド</h3>
        <p class="card-description">GitHub Pages、Vercel、Netlifyで公開します。</p>
      </a>
    </div>

    <h2 class="home-section-title">⚙️ フレームワーク</h2>
    <div class="cards-grid">
      <a href="#react-basics" class="card react">
        <div class="card-icon">⚛️</div>
        <h3 class="card-title">React入門</h3>
        <p class="card-description">コンポーネントベースのUI構築を学びます。</p>
      </a>
      <a href="#tailwind-basics" class="card tailwind">
        <div class="card-icon">🌊</div>
        <h3 class="card-title">Tailwind CSS</h3>
        <p class="card-description">ユーティリティファーストのモダンなCSS手法を習得します。</p>
      </a>
    </div>
  `;
}

function renderLesson() {
  const lesson = getLessonById(currentLesson);
  if (!lesson) return "<p>レッスンが見つかりません</p>";

  const currentIndex = lessons.findIndex((l) => l.id === currentLesson);
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;
  const isComplete = isLessonComplete(currentLesson);

  return `
    <div class="lesson">
      <div class="lesson-header">
        <span class="lesson-badge ${lesson.category}">${getBadgeLabel(lesson.category)}</span>
        <h1 class="lesson-title">${lesson.title}</h1>
        <p class="lesson-description">${lesson.description}</p>
      </div>
      ${lesson.content}
      
      ${
        lesson.exercises && lesson.exercises.length > 0
          ? `
        <div class="quiz-section">
          <div class="quiz-header">
            <span class="quiz-icon">📝</span>
            <h2 class="quiz-title">演習問題</h2>
          </div>
          <div class="quiz-list">
            ${lesson.exercises
              .map(
                (ex, i) => `
              <div class="quiz-item" data-quiz-index="${i}">
                <div class="quiz-question">
                  <span>Q${i + 1}.</span>
                  <span>${escapeHTML(ex.question)}</span>
                </div>
                <div class="quiz-options">
                  ${ex.options
                    .map(
                      (opt, oi) => `
                    <button class="quiz-option" data-option-index="${oi}">${escapeHTML(opt)}</button>
                  `,
                    )
                    .join("")}
                </div>
                <div class="quiz-feedback"></div>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      `
          : ""
      }

      <div class="lesson-complete-section">
        <button class="complete-button ${isComplete ? "completed" : "incomplete"}" id="completeBtn">
          ${isComplete ? "✓ 完了済み" : "✓ このレッスンを完了としてマーク"}
        </button>
      </div>

      <div class="lesson-nav">
        ${
          prevLesson
            ? `<a href="#${prevLesson.id}" class="nav-button">← ${prevLesson.title}</a>`
            : `<a href="#" class="nav-button">← ホーム</a>`
        }
        ${
          nextLesson
            ? `<a href="#${nextLesson.id}" class="nav-button primary">${nextLesson.title} →</a>`
            : `<a href="#" class="nav-button primary">完了 🎉</a>`
        }
      </div>
    </div>
  `;
}

function handleRoute() {
  const hash = window.location.hash.slice(1);
  let lesson = null;
  if (hash) {
    lesson = getLessonById(hash);
    if (lesson) {
      currentLesson = hash;
      setLastVisited(currentLesson);
    } else {
      currentLesson = null;
    }
  } else {
    currentLesson = null;
  }

  updateMetaTags(lesson);

  sidebarOpen = false;
  render();
  // Ensure scroll happens after DOM paint is complete
  setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 0);
}

function attachEventListeners() {
  // Mobile menu
  const menuToggle = document.getElementById("menuToggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      sidebarOpen = !sidebarOpen;
      document.getElementById("sidebar").classList.toggle("open", sidebarOpen);
    });
  }

  // Complete button
  const completeBtn = document.getElementById("completeBtn");
  if (completeBtn) {
    completeBtn.addEventListener("click", () => {
      toggleLessonComplete(currentLesson);
      render();
    });
  }

  // Quiz interactions
  document.querySelectorAll(".quiz-option").forEach((el) => {
    el.addEventListener("click", (e) => {
      const optionBtn = e.target;
      const quizItem = optionBtn.closest(".quiz-item");
      const quizIndex = parseInt(quizItem.dataset.quizIndex);
      const optionIndex = parseInt(optionBtn.dataset.optionIndex);
      const lesson = getLessonById(currentLesson);
      const exercise = lesson.exercises[quizIndex];

      // Remove previous states
      quizItem.querySelectorAll(".quiz-option").forEach((btn) => {
        btn.classList.remove("selected", "correct", "wrong");
        btn.disabled = true;
      });

      const feedback = quizItem.querySelector(".quiz-feedback");
      feedback.classList.remove("correct", "wrong");
      feedback.classList.add("show");

      if (optionIndex === exercise.answer) {
        optionBtn.classList.add("correct");
        feedback.classList.add("correct");
        feedback.innerHTML = `<strong>正解！</strong> ${escapeHTML(exercise.explanation) || ""}`;
      } else {
        optionBtn.classList.add("wrong");
        feedback.classList.add("wrong");
        feedback.innerHTML = `<strong>不正解...</strong> 正解は「${escapeHTML(
          exercise.options[exercise.answer],
        )}」です。${escapeHTML(exercise.explanation) || ""}`;
        // Show correct one as well
        quizItem.querySelectorAll(".quiz-option")[exercise.answer].classList.add("correct");
      }
    });
  });
}

// Copy code function
window.copyCode = function (btn) {
  const codeBlock = btn.closest(".code-block");
  const code = codeBlock.querySelector("code").textContent;
  navigator.clipboard.writeText(code).then(() => {
    const originalText = btn.textContent;
    btn.textContent = "コピーしました！";
    setTimeout(() => {
      btn.textContent = originalText;
    }, 2000);
  });
};

// Initialize
window.addEventListener("hashchange", handleRoute);
handleRoute();
