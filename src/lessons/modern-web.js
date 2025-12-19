export const modernWeb = {
  id: "modern-web",
  category: "intro",
  title: "モダンWeb開発",
  description: "ReactやTailwindなど、現代のWeb開発で使われる技術を理解しましょう",
  content: `
    <div class="content-section">
      <h2 class="section-title">なぜフレームワークが必要なのか？</h2>
      <p class="content-text">
        HTML/CSS/JavaScriptだけでもWebサイトは作れます。
        しかし、規模が大きくなると<strong>管理が大変</strong>になります。
      </p>
      <ul>
        <li>同じようなコードを何度も書く（重複）</li>
        <li>ファイルが増えて整理が難しい</li>
        <li>変更したときに他の部分に影響が出る</li>
        <li>チームで開発するときに統一が取れない</li>
      </ul>
      <p class="content-text">
        これらの問題を解決するために、<strong>フレームワーク</strong>や<strong>ライブラリ</strong>が生まれました。
      </p>
    </div>

    <div class="content-section">
      <h2 class="section-title">ライブラリとフレームワークの違い</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>種類</th><th>特徴</th><th>例</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>ライブラリ</strong></td>
              <td>必要な機能だけを使う「道具箱」</td>
              <td>React, jQuery, Lodash</td>
            </tr>
            <tr>
              <td><strong>フレームワーク</strong></td>
              <td>アプリ全体の構造を決める「設計図」</td>
              <td>Angular, Vue.js, Next.js</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box">
        <span class="info-box-icon">💡</span>
        <div class="info-box-content">
          <div class="info-box-title">例え</div>
          <div class="info-box-text">ライブラリは「DIYで棚を作るときに使う電動ドリル」、フレームワークは「IKEA の組み立てキット（説明書通りに作る）」のイメージです。</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">React（リアクト）とは？</h2>
      <p class="content-text">
        <strong>React</strong>は、Facebook（現Meta）が開発したUIライブラリです。
        現在最も人気のあるJavaScriptライブラリの1つで、多くの企業で採用されています。
      </p>
      <ul>
        <li>
          <strong>コンポーネントベース</strong><br>
          UIを小さな部品（コンポーネント）に分割して再利用
        </li>
        <li>
          <strong>仮想DOM</strong><br>
          変更があった部分だけを効率的に更新
        </li>
        <li>
          <strong>宣言的UI</strong><br>
          「どうなるべきか」を記述すると、Reactが更新を担当
        </li>
      </ul>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">React コンポーネントのイメージ</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// ボタンコンポーネントを1回作れば...</span>
<span class="keyword">function</span> <span class="function">Button</span>({ label }) {
  <span class="keyword">return</span> <span class="tag">&lt;button&gt;</span>{label}<span class="tag">&lt;/button&gt;</span>;
}

<span class="comment">// 何度でも再利用できる</span>
<span class="tag">&lt;Button</span> <span class="attr">label</span>=<span class="string">"送信"</span> <span class="tag">/&gt;</span>
<span class="tag">&lt;Button</span> <span class="attr">label</span>=<span class="string">"キャンセル"</span> <span class="tag">/&gt;</span>
<span class="tag">&lt;Button</span> <span class="attr">label</span>=<span class="string">"削除"</span> <span class="tag">/&gt;</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">他のUIライブラリ/フレームワーク</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>名前</th><th>特徴</th><th>開発元</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Vue.js</strong></td>
              <td>学習しやすい、段階的に導入可能</td>
              <td>Evan You（個人）</td>
            </tr>
            <tr>
              <td><strong>Angular</strong></td>
              <td>フル機能、大規模アプリ向け</td>
              <td>Google</td>
            </tr>
            <tr>
              <td><strong>Svelte</strong></td>
              <td>コンパイル時最適化、軽量</td>
              <td>Rich Harris</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="content-text">
        どれを選んでも基本概念は似ています。まずは1つをしっかり学べば、他への応用も効きます。
      </p>
    </div>

    <div class="content-section">
      <h2 class="section-title">Tailwind CSS とは？</h2>
      <p class="content-text">
        <strong>Tailwind CSS</strong>は、「ユーティリティファースト」のCSSフレームワークです。
        従来のCSSのようにクラス名を考えて定義するのではなく、あらかじめ用意された小さなクラスを組み合わせてスタイリングします。
      </p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">従来のCSS vs Tailwind CSS</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">/* 従来のCSS */</span>
.card {
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

<span class="comment">&lt;!-- Tailwind CSS --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"p-4 bg-white rounded-lg shadow"</span><span class="tag">&gt;</span>
  カード
<span class="tag">&lt;/div&gt;</span></code></pre>
        </div>
      </div>
      <ul>
        <li><strong>メリット</strong> - クラス名を考える必要がない、一貫したデザイン</li>
        <li><strong>デメリット</strong> - HTMLが長くなる、最初は覚えることが多い</li>
      </ul>
    </div>

    <div class="content-section">
      <h2 class="section-title">他のCSSフレームワーク</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>名前</th><th>特徴</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Bootstrap</strong></td>
              <td>コンポーネント志向、すぐに使えるUIパーツ</td>
            </tr>
            <tr>
              <td><strong>Bulma</strong></td>
              <td>軽量、Flexboxベース</td>
            </tr>
            <tr>
              <td><strong>CSS Modules</strong></td>
              <td>コンポーネントごとにスコープを分ける</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">開発環境とツール</h2>
      <p class="content-text">モダンなWeb開発では、様々なツールを使って効率化します。</p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>ツール</th><th>役割</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>npm / yarn / pnpm</strong></td>
              <td>パッケージ（ライブラリ）の管理</td>
            </tr>
            <tr>
              <td><strong>Vite / Webpack</strong></td>
              <td>ファイルのバンドル、開発サーバー</td>
            </tr>
            <tr>
              <td><strong>Git / GitHub</strong></td>
              <td>コードのバージョン管理、共有</td>
            </tr>
            <tr>
              <td><strong>ESLint / Prettier</strong></td>
              <td>コードの品質チェック、自動整形</td>
            </tr>
            <tr>
              <td><strong>TypeScript</strong></td>
              <td>型のあるJavaScript（エラー防止）</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">学習の順序</h2>
      <p class="content-text">以下の順番で学ぶことをお勧めします：</p>
      <ol>
        <li><strong>HTML/CSS/JavaScript の基礎</strong> - 必須の土台</li>
        <li><strong>Git/GitHub</strong> - コード管理の基本</li>
        <li><strong>React または Vue</strong> - UIライブラリ</li>
        <li><strong>Tailwind CSS</strong> - 効率的なスタイリング</li>
        <li><strong>TypeScript</strong> - 型安全なJavaScript</li>
        <li><strong>Next.js または Nuxt</strong> - フルスタックフレームワーク</li>
      </ol>
      <div class="info-box">
        <span class="info-box-icon">⚡</span>
        <div class="info-box-content">
          <div class="info-box-title">重要</div>
          <div class="info-box-text">フレームワークを学ぶ前に、HTML/CSS/JavaScriptの基礎をしっかり理解することが大切です。基礎がないと、フレームワークが何をしているのか分からなくなります。</div>
        </div>
      </div>
    </div>
  `,
  exercises: [
    {
      question: "UIを部品（コンポーネント）ごとに分割して開発するライブラリはどれですか？",
      options: ["BootStrap", "React", "Bulma", "Git"],
      answer: 1,
      explanation: "ReactはコンポーネントベースのUIライブラリです。",
    },
    {
      question: "モダン開発において、コードの「型」を定義してエラーを防ぐ言語はどれですか？",
      options: ["JavaScript", "HTML", "TypeScript", "Vite"],
      answer: 2,
      explanation: "TypeScriptはJavaScriptに型を追加した言語で、エラーを未然に防ぐことができます。",
    },
  ],
};
