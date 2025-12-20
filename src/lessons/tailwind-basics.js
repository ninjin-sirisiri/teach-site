export const tailwindBasics = {
  id: "tailwind-basics",
  category: "tailwind",
  title: "Tailwind CSS入門",
  description: "ユーティリティファーストのCSSフレームワークで効率的にスタイリングを学びましょう",
  content: `
    <div class="content-section">
      <h2 class="section-title">Tailwind CSSとは？</h2>
      <p class="content-text">
        <strong>Tailwind CSS</strong>は、ユーティリティファーストのCSSフレームワークです。
        事前定義されたクラスを組み合わせることで、CSSファイルを書かずにスタイリングができます。
      </p>
      <div class="info-box">
        <span class="info-box-icon">🌊</span>
        <div class="info-box-content">
          <div class="info-box-title">メリット</div>
          <div class="info-box-text">CSSファイルの管理不要、一貫したデザイン、高速な開発、小さなバンドルサイズ</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">セットアップ</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">Terminal</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment"># Viteプロジェクトにインストール</span>
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
        </div>
      </div>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">tailwind.config.js</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="keyword">export default</span> {
  content: [
    <span class="string">"./index.html"</span>,
    <span class="string">"./src/**/*.{js,jsx}"</span>,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
        </div>
      </div>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">src/index.css</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="keyword">@tailwind</span> base;
<span class="keyword">@tailwind</span> components;
<span class="keyword">@tailwind</span> utilities;</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">間隔（Spacing）</h2>
      <p class="content-text">padding/marginは数値で指定。1単位 = 0.25rem (4px)</p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>クラス</th><th>値</th><th>説明</th></tr>
          </thead>
          <tbody>
            <tr><td><code>p-4</code></td><td>1rem (16px)</td><td>全方向のpadding</td></tr>
            <tr><td><code>px-4</code></td><td>1rem</td><td>左右のpadding</td></tr>
            <tr><td><code>py-2</code></td><td>0.5rem</td><td>上下のpadding</td></tr>
            <tr><td><code>pt-8</code></td><td>2rem</td><td>上のpadding</td></tr>
            <tr><td><code>m-auto</code></td><td>auto</td><td>中央寄せ</td></tr>
            <tr><td><code>space-x-4</code></td><td>1rem</td><td>子要素間の横スペース</td></tr>
          </tbody>
        </table>
      </div>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML + Tailwind</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"p-6 m-4 space-y-4"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;p&gt;</span>padding: 24px, margin: 16px<span class="tag">&lt;/p&gt;</span>
  <span class="tag">&lt;p&gt;</span>この要素との間隔は16px<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;/div&gt;</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">カラー</h2>
      <p class="content-text">色は<code>色名-強度</code>の形式。強度は50〜950。</p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML + Tailwind</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">&lt;!-- テキストカラー --&gt;</span>
<span class="tag">&lt;p</span> <span class="attr">class</span>=<span class="string">"text-gray-900"</span><span class="tag">&gt;</span>濃いグレー<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;p</span> <span class="attr">class</span>=<span class="string">"text-blue-500"</span><span class="tag">&gt;</span>青色<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;p</span> <span class="attr">class</span>=<span class="string">"text-emerald-600"</span><span class="tag">&gt;</span>エメラルド<span class="tag">&lt;/p&gt;</span>

<span class="comment">&lt;!-- 背景カラー --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"bg-blue-500"</span><span class="tag">&gt;</span>青い背景<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"bg-gray-100"</span><span class="tag">&gt;</span>薄いグレー背景<span class="tag">&lt;/div&gt;</span>

<span class="comment">&lt;!-- グラデーション --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"bg-gradient-to-r from-blue-500 to-purple-600"</span><span class="tag">&gt;</span>
  右へのグラデーション
<span class="tag">&lt;/div&gt;</span>

<span class="comment">&lt;!-- 透明度 --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"bg-black/50"</span><span class="tag">&gt;</span>50%透明の黒<span class="tag">&lt;/div&gt;</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">サイズと枠線</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML + Tailwind</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">&lt;!-- サイズ --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"w-full"</span><span class="tag">&gt;</span>幅100%<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"w-1/2"</span><span class="tag">&gt;</span>幅50%<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"w-64"</span><span class="tag">&gt;</span>幅256px<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"max-w-md mx-auto"</span><span class="tag">&gt;</span>最大幅448px、中央寄せ<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"min-h-screen"</span><span class="tag">&gt;</span>最小高さ100vh<span class="tag">&lt;/div&gt;</span>

<span class="comment">&lt;!-- 枠線 --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"border"</span><span class="tag">&gt;</span>1pxの枠線<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"border-2 border-blue-500"</span><span class="tag">&gt;</span>2pxの青い枠線<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"rounded"</span><span class="tag">&gt;</span>少し角丸<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"rounded-lg"</span><span class="tag">&gt;</span>大きめの角丸<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"rounded-full"</span><span class="tag">&gt;</span>完全な丸（円）<span class="tag">&lt;/div&gt;</span>

<span class="comment">&lt;!-- 影 --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"shadow"</span><span class="tag">&gt;</span>小さな影<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"shadow-lg"</span><span class="tag">&gt;</span>大きな影<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"shadow-xl"</span><span class="tag">&gt;</span>より大きな影<span class="tag">&lt;/div&gt;</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">Flexbox</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML + Tailwind</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">&lt;!-- 基本のFlex --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"flex items-center justify-between"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;span&gt;</span>左<span class="tag">&lt;/span&gt;</span>
  <span class="tag">&lt;span&gt;</span>右<span class="tag">&lt;/span&gt;</span>
<span class="tag">&lt;/div&gt;</span>

<span class="comment">&lt;!-- 中央寄せ --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"flex items-center justify-center h-screen"</span><span class="tag">&gt;</span>
  完全に中央
<span class="tag">&lt;/div&gt;</span>

<span class="comment">&lt;!-- 縦並び --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"flex flex-col gap-4"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;div&gt;</span>上<span class="tag">&lt;/div&gt;</span>
  <span class="tag">&lt;div&gt;</span>下<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span>

<span class="comment">&lt;!-- 均等配置 --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"flex gap-4"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"flex-1"</span><span class="tag">&gt;</span>1/3<span class="tag">&lt;/div&gt;</span>
  <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"flex-1"</span><span class="tag">&gt;</span>1/3<span class="tag">&lt;/div&gt;</span>
  <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"flex-1"</span><span class="tag">&gt;</span>1/3<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">Grid</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML + Tailwind</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">&lt;!-- 3列グリッド --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"grid grid-cols-3 gap-4"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;div&gt;</span>1<span class="tag">&lt;/div&gt;</span>
  <span class="tag">&lt;div&gt;</span>2<span class="tag">&lt;/div&gt;</span>
  <span class="tag">&lt;div&gt;</span>3<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span>

<span class="comment">&lt;!-- レスポンシブグリッド --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;div&gt;</span>カード1<span class="tag">&lt;/div&gt;</span>
  <span class="tag">&lt;div&gt;</span>カード2<span class="tag">&lt;/div&gt;</span>
  <span class="tag">&lt;div&gt;</span>カード3<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span>

<span class="comment">&lt;!-- 2列分使う --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"grid grid-cols-3 gap-4"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"col-span-2"</span><span class="tag">&gt;</span>メイン（2列）<span class="tag">&lt;/div&gt;</span>
  <span class="tag">&lt;div&gt;</span>サイド<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">レスポンシブデザイン</h2>
      <p class="content-text">プレフィックスを付けると特定の画面サイズ以上で適用されます。Tailwindはモバイルファーストで設計されています。</p>
      <div class="visual-diagram">
        <div class="diagram-label">ブレイクポイントのイメージ</div>
        <div class="responsive-viz">
          <div class="resp-bar">Mobile (base)</div>
          <div class="resp-bar sm active">sm (640px)</div>
          <div class="resp-bar md active">md (768px)</div>
          <div class="resp-bar lg active">lg (1024px)</div>
          <div class="resp-bar xl active">xl (1280px)</div>
        </div>
      </div>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>プレフィックス</th><th>最小幅</th><th>対象デバイス</th></tr>
          </thead>
          <tbody>
            <tr><td><code>sm:</code></td><td>640px</td><td>大きめのスマホ</td></tr>
            <tr><td><code>md:</code></td><td>768px</td><td>タブレット</td></tr>
            <tr><td><code>lg:</code></td><td>1024px</td><td>ノートPC</td></tr>
            <tr><td><code>xl:</code></td><td>1280px</td><td>デスクトップ</td></tr>
          </tbody>
        </table>
      </div>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML + Tailwind</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">&lt;!-- モバイルファースト：小さい画面ベース --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"
  p-4          // モバイル
  md:p-8       // タブレット以上
  lg:p-12      // PC以上
"</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- 表示/非表示の切り替え --&gt;</span>
<span class="tag">&lt;nav</span> <span class="attr">class</span>=<span class="string">"hidden md:flex"</span><span class="tag">&gt;</span>PC用ナビ<span class="tag">&lt;/nav&gt;</span>
<span class="tag">&lt;button</span> <span class="attr">class</span>=<span class="string">"md:hidden"</span><span class="tag">&gt;</span>ハンバーガーメニュー<span class="tag">&lt;/button&gt;</span>

<span class="comment">&lt;!-- 文字サイズ --&gt;</span>
<span class="tag">&lt;h1</span> <span class="attr">class</span>=<span class="string">"text-2xl md:text-4xl lg:text-6xl"</span><span class="tag">&gt;</span>
  レスポンシブな見出し
<span class="tag">&lt;/h1&gt;</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">状態のスタイリング</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML + Tailwind</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">&lt;!-- ホバー --&gt;</span>
<span class="tag">&lt;button</span> <span class="attr">class</span>=<span class="string">"bg-blue-500 hover:bg-blue-600"</span><span class="tag">&gt;</span>
  ホバーで色が変わる
<span class="tag">&lt;/button&gt;</span>

<span class="comment">&lt;!-- フォーカス --&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">class</span>=<span class="string">"border focus:border-blue-500 focus:ring-2"</span><span class="tag">/&gt;</span>

<span class="comment">&lt;!-- アクティブ --&gt;</span>
<span class="tag">&lt;button</span> <span class="attr">class</span>=<span class="string">"bg-blue-500 active:bg-blue-700"</span><span class="tag">&gt;</span>
  押した時
<span class="tag">&lt;/button&gt;</span>

<span class="comment">&lt;!-- 無効化 --&gt;</span>
<span class="tag">&lt;button</span> <span class="attr">class</span>=<span class="string">"bg-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed"</span> <span class="attr">disabled</span><span class="tag">&gt;</span>
  無効なボタン
<span class="tag">&lt;/button&gt;</span>

<span class="comment">&lt;!-- グループホバー --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"group"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;p</span> <span class="attr">class</span>=<span class="string">"group-hover:text-blue-500"</span><span class="tag">&gt;</span>親にホバーで変化<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;/div&gt;</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">トランジションとアニメーション</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML + Tailwind</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">&lt;!-- トランジション --&gt;</span>
<span class="tag">&lt;button</span> <span class="attr">class</span>=<span class="string">"
  bg-blue-500 
  hover:bg-blue-600 
  hover:scale-105
  transition-all 
  duration-300
"</span><span class="tag">&gt;</span>
  スムーズに変化
<span class="tag">&lt;/button&gt;</span>

<span class="comment">&lt;!-- アニメーション --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"animate-spin"</span><span class="tag">&gt;</span>🔄<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"animate-pulse"</span><span class="tag">&gt;</span>ローディング<span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"animate-bounce"</span><span class="tag">&gt;</span>⬇️<span class="tag">&lt;/div&gt;</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">実践：カードコンポーネント</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML + Tailwind</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;img</span> <span class="attr">class</span>=<span class="string">"w-full h-48 object-cover"</span> <span class="attr">src</span>=<span class="string">"card.png"</span> <span class="attr">alt</span>=<span class="string">""</span><span class="tag">/&gt;</span>
  <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"p-6"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;span</span> <span class="attr">class</span>=<span class="string">"text-sm text-blue-500 font-semibold"</span><span class="tag">&gt;</span>Travel<span class="tag">&lt;/span&gt;</span>
    <span class="tag">&lt;h2</span> <span class="attr">class</span>=<span class="string">"text-xl font-bold text-gray-900 mt-2"</span><span class="tag">&gt;</span>静かな湖畔のコテージ<span class="tag">&lt;/h2&gt;</span>
    <span class="tag">&lt;p</span> <span class="attr">class</span>=<span class="string">"text-gray-600 mt-2"</span><span class="tag">&gt;</span>
      自然に囲まれた静かな湖畔で、リラックスした時間を過ごしませんか？
    <span class="tag">&lt;/p&gt;</span>
    <span class="tag">&lt;button</span> <span class="attr">class</span>=<span class="string">"mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"</span><span class="tag">&gt;</span>
      詳細を見る
    <span class="tag">&lt;/button&gt;</span>
  <span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span></code></pre>
        </div>
      </div>

      <div class="demo-box">
        <div class="demo-label">プレビュー</div>
        <!-- Tailwind Demo (styled with inline-styles or existing classes if possible, but the app doesn't have Tailwind loaded globally. I'll use a recreation with CSS classes) -->
        <div style="max-width: 320px; background: white; border-radius: 16px; overflow: hidden; box-shadow: var(--shadow-lg); border: 1px solid var(--border-color);">
          <img src="card.png" style="width: 100%; height: 180px; object-fit: cover;" alt="Demo Image">
          <div style="padding: 1.5rem;">
            <span style="font-size: 0.8rem; color: #6366f1; font-weight: 600;">Travel</span>
            <h3 style="font-size: 1.25rem; font-weight: 800; margin-top: 0.5rem; color: #1e293b;">静かな湖畔のコテージ</h3>
            <p style="color: #64748b; font-size: 0.9rem; margin-top: 0.5rem;">自然に囲まれた静かな湖畔で、リラックスした時間を過ごしませんか？</p>
            <button style="margin-top: 1.5rem; width: 100%; background: #6366f1; color: white; border: none; padding: 0.75rem; border-radius: 8px; font-weight: 600; cursor: pointer;">
              詳細を見る
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">実践：ナビゲーションバー</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML + Tailwind</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="tag">&lt;nav</span> <span class="attr">class</span>=<span class="string">"bg-white shadow-sm fixed w-full top-0 z-50"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"max-w-6xl mx-auto px-4"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"flex items-center justify-between h-16"</span><span class="tag">&gt;</span>
      <span class="comment">&lt;!-- ロゴ --&gt;</span>
      <span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="string">"/"</span> <span class="attr">class</span>=<span class="string">"text-xl font-bold text-gray-900"</span><span class="tag">&gt;</span>
        Logo
      <span class="tag">&lt;/a&gt;</span>
      
      <span class="comment">&lt;!-- デスクトップメニュー --&gt;</span>
      <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"hidden md:flex items-center space-x-8"</span><span class="tag">&gt;</span>
        <span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="string">"#"</span> <span class="attr">class</span>=<span class="string">"text-gray-600 hover:text-blue-500"</span><span class="tag">&gt;</span>Home<span class="tag">&lt;/a&gt;</span>
        <span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="string">"#"</span> <span class="attr">class</span>=<span class="string">"text-gray-600 hover:text-blue-500"</span><span class="tag">&gt;</span>About<span class="tag">&lt;/a&gt;</span>
        <span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="string">"#"</span> <span class="attr">class</span>=<span class="string">"bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"</span><span class="tag">&gt;</span>
          Contact
        <span class="tag">&lt;/a&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
      
      <span class="comment">&lt;!-- モバイルメニューボタン --&gt;</span>
      <span class="tag">&lt;button</span> <span class="attr">class</span>=<span class="string">"md:hidden p-2"</span><span class="tag">&gt;</span>☰<span class="tag">&lt;/button&gt;</span>
    <span class="tag">&lt;/div&gt;</span>
  <span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/nav&gt;</span></code></pre>
        </div>
      </div>
    </div>
  `,
  exercises: [
    {
      question:
        "Tailwind CSSにおいて、paddingを全方向に「16px（1rem）」設定するクラスはどれですか？",
      options: ["m-4", "p-4", "padding-16", "p-16"],
      answer: 1,
      explanation: "p-4クラスは全方向に1rem (16px) のpaddingを適用します。",
    },
    {
      question:
        "アイテムを「横並びにし、要素間の中央に配置」するためのクラスの組み合わせはどれですか？",
      options: [
        "flex items-center justify-between",
        "grid grid-cols-2",
        "flex flex-col items-center",
        "block mx-auto",
      ],
      answer: 0,
      explanation:
        "flexでFlexboxを開始し、items-centerで垂直中央、justify-betweenで両端揃え（要素間を広げる）にします。",
    },
    {
      question:
        "タブレットサイズ（768px以上）からスタイルを適用するためのプレフィックスは何ですか？",
      options: ["sm:", "md:", "lg:", "xl:"],
      answer: 1,
      explanation:
        "md: プレフィックスを使用すると、768px（ミディアムサイズ）以上のデバイスにのみスタイルが適用されます。",
    },
  ],
};
