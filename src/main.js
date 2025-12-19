import "./style.css";
import { lessons, getLessonById } from "./lessons/index.js";

// Utils
function escapeHTML(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
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
              <div class="nav-link ${!currentLesson ? "active" : ""}" data-page="home">
                <span class="nav-icon">🏠</span>
                <span>ホーム</span>
              </div>
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
                  <div class="nav-link ${currentLesson === item.id ? "active" : ""}" data-lesson="${item.id}">
                    <span class="nav-icon">${item.icon}</span>
                    <span>${item.label}</span>
                    <span class="nav-badge ${item.badge}">${getBadgeLabel(item.badge)}</span>
                  </div>
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
    react: "React",
    tailwind: "TW",
  };
  return labels[badge] || badge.toUpperCase();
}

function renderHome() {
  return `
    <div class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Web技術を<br>スピーディに習得</h1>
        <p class="hero-subtitle">HTML、CSS、JavaScriptの基礎からReact、Tailwind CSSまで。モダンなWeb開発のすべてを、ここで手に入れよう。</p>
      </div>
      <div class="hero-image">
        <img src="/banner.png" alt="Web Development" style="width: 100%; height: auto; border-radius: 12px; box-shadow: var(--shadow-xl);">
      </div>
    </div>
    
    <h2 class="home-section-title">📚 まずはここから</h2>
    <div class="cards-grid">
      <div class="card intro" data-lesson="web-intro">
        <div class="card-icon">🌐</div>
        <h3 class="card-title">Web開発入門</h3>
        <p class="card-description">Webの仕組みと必要な技術の全体像を理解します。</p>
      </div>
      <div class="card intro" data-lesson="modern-web">
        <div class="card-icon">🚀</div>
        <h3 class="card-title">モダンWeb開発</h3>
        <p class="card-description">React、Tailwindなど現代の技術を概観します。</p>
      </div>
    </div>

    <h2 class="home-section-title">🔤 基礎を学ぶ</h2>
    <div class="cards-grid">
      <div class="card html" data-lesson="html-intro">
        <div class="card-icon">📖</div>
        <h3 class="card-title">HTMLとは</h3>
        <p class="card-description">HTMLの役割となぜ重要なのかを理解します。</p>
      </div>
      <div class="card html" data-lesson="html-basics">
        <div class="card-icon">📄</div>
        <h3 class="card-title">HTML構文</h3>
        <p class="card-description">タグ、属性、フォームなどの具体的な書き方を学びます。</p>
      </div>
      <div class="card css" data-lesson="css-intro">
        <div class="card-icon">📖</div>
        <h3 class="card-title">CSSとは</h3>
        <p class="card-description">CSSの仕組みとなぜ必要なのかを理解します。</p>
      </div>
      <div class="card css" data-lesson="css-basics">
        <div class="card-icon">🎨</div>
        <h3 class="card-title">CSS構文</h3>
        <p class="card-description">Flexbox、Grid、アニメーションなどを習得します。</p>
      </div>
      <div class="card js" data-lesson="js-intro">
        <div class="card-icon">📖</div>
        <h3 class="card-title">JavaScriptとは</h3>
        <p class="card-description">JavaScriptの特徴とできることを理解します。</p>
      </div>
      <div class="card js" data-lesson="js-basics">
        <div class="card-icon">⚡</div>
        <h3 class="card-title">JavaScript構文</h3>
        <p class="card-description">変数、関数、DOM操作などを実装します。</p>
      </div>
    </div>

    <h2 class="home-section-title">⚙️ フレームワーク</h2>
    <div class="cards-grid">
      <div class="card react" data-lesson="react-basics">
        <div class="card-icon">⚛️</div>
        <h3 class="card-title">React入門</h3>
        <p class="card-description">コンポーネントベースのUI構築を学びます。</p>
      </div>
      <div class="card tailwind" data-lesson="tailwind-basics">
        <div class="card-icon">🌊</div>
        <h3 class="card-title">Tailwind CSS</h3>
        <p class="card-description">ユーティリティファーストのモダンなCSS手法を習得します。</p>
      </div>
    </div>
  `;
}

function renderLesson() {
  const lesson = getLessonById(currentLesson);
  if (!lesson) return "<p>レッスンが見つかりません</p>";

  const currentIndex = lessons.findIndex((l) => l.id === currentLesson);
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

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

      <div class="lesson-nav">
        ${
          prevLesson
            ? `<button class="nav-button" data-lesson="${prevLesson.id}">← ${prevLesson.title}</button>`
            : `<button class="nav-button" data-page="home">← ホーム</button>`
        }
        ${
          nextLesson
            ? `<button class="nav-button primary" data-lesson="${nextLesson.id}">${nextLesson.title} →</button>`
            : `<button class="nav-button primary" data-page="home">完了 🎉</button>`
        }
      </div>
    </div>
  `;
}

function attachEventListeners() {
  // Navigation links
  document.querySelectorAll("[data-lesson]").forEach((el) => {
    el.addEventListener("click", () => {
      currentLesson = el.dataset.lesson;
      sidebarOpen = false;
      render();
      // Ensure scroll happens after DOM paint is complete
      setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 0);
    });
  });

  document.querySelectorAll('[data-page="home"]').forEach((el) => {
    el.addEventListener("click", () => {
      currentLesson = null;
      sidebarOpen = false;
      render();
      // Ensure scroll happens after DOM paint is complete
      setTimeout(() => window.scrollTo({ top: 0, behavior: "instant" }), 0);
    });
  });

  // Mobile menu
  const menuToggle = document.getElementById("menuToggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      sidebarOpen = !sidebarOpen;
      document.getElementById("sidebar").classList.toggle("open", sidebarOpen);
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
render();
