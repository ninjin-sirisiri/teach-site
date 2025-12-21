export const tsIntro = {
  id: "ts-intro",
  category: "ts",
  title: "TypeScriptとは",
  description: "TypeScriptの概要と特徴、JavaScriptとの関係を理解しましょう",
  content: `
    <div class="content-section">
      <h2 class="section-title">TypeScriptとは何か？</h2>
      <p class="content-text">
        <strong>TypeScript</strong>は、Microsoftが開発した<strong>JavaScriptのスーパーセット</strong>です。
        JavaScriptに「静的型付け」という機能を追加し、より安全で保守しやすいコードを書けるようにしたプログラミング言語です。
      </p>
      <div class="info-box">
        <span class="info-box-icon">💡</span>
        <div class="info-box-content">
          <div class="info-box-title">スーパーセットとは？</div>
          <div class="info-box-text">TypeScriptはJavaScriptを完全に含んでいます。つまり、有効なJavaScriptコードはすべてTypeScriptとしても動作します。</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">JavaScriptとの関係</h2>
      <p class="content-text">
        TypeScriptとJavaScriptの関係を理解することが重要です：
      </p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>特徴</th><th>JavaScript</th><th>TypeScript</th></tr>
          </thead>
          <tbody>
            <tr><td>型システム</td><td>動的型付け</td><td>静的型付け（オプション）</td></tr>
            <tr><td>実行環境</td><td>ブラウザ/Node.jsで直接実行</td><td>JavaScriptにコンパイル後に実行</td></tr>
            <tr><td>エラー検出</td><td>実行時</td><td>コンパイル時（開発中）</td></tr>
            <tr><td>学習コスト</td><td>低い</td><td>JavaScriptの知識 + 型の理解</td></tr>
          </tbody>
        </table>
      </div>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">概念図</span>
        </div>
        <div class="code-content">
<pre><code>┌─────────────────────────────────┐
│         TypeScript              │
│  ┌───────────────────────────┐  │
│  │      JavaScript           │  │
│  │  (すべてのJS構文が使える)   │  │
│  └───────────────────────────┘  │
│  + 型注釈                       │
│  + インターフェース              │
│  + ジェネリクス                  │
│  + その他の機能                  │
└─────────────────────────────────┘</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">型システムのメリット</h2>
      <p class="content-text">TypeScriptの型システムには多くのメリットがあります：</p>
      <ul>
        <li>
          <strong>バグの早期発見</strong><br>
          コードを書いている段階で型の不一致を検出できる
        </li>
        <li>
          <strong>コードの自己文書化</strong><br>
          型注釈がそのままドキュメントになり、コードの意図が明確になる
        </li>
        <li>
          <strong>IDEサポートの向上</strong><br>
          自動補完、リファクタリング、エラー表示が強化される
        </li>
        <li>
          <strong>チーム開発の効率化</strong><br>
          型定義により、他の開発者が書いたコードを理解しやすくなる
        </li>
      </ul>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JavaScript vs TypeScript</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// JavaScript - 実行時までエラーがわからない</span>
<span class="keyword">function</span> <span class="function">greet</span>(name) {
  <span class="keyword">return</span> <span class="string">"Hello, "</span> + name.toUpperCase();
}
greet(<span class="number">123</span>); <span class="comment">// 実行時エラー！</span>

<span class="comment">// TypeScript - コンパイル時にエラーを検出</span>
<span class="keyword">function</span> <span class="function">greet</span>(name: <span class="type">string</span>): <span class="type">string</span> {
  <span class="keyword">return</span> <span class="string">"Hello, "</span> + name.toUpperCase();
}
greet(<span class="number">123</span>); <span class="comment">// コンパイルエラー: 型 'number' を型 'string' に割り当てられません</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">TypeScriptの歴史</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>年</th><th>出来事</th></tr>
          </thead>
          <tbody>
            <tr><td>2012</td><td>Microsoft がTypeScript 0.8を公開</td></tr>
            <tr><td>2014</td><td>TypeScript 1.0 リリース</td></tr>
            <tr><td>2016</td><td>TypeScript 2.0 - strictモード導入</td></tr>
            <tr><td>2018</td><td>TypeScript 3.0 - プロジェクト参照機能</td></tr>
            <tr><td>2020</td><td>TypeScript 4.0 - 可変長タプル型など</td></tr>
            <tr><td>2023</td><td>TypeScript 5.0 - デコレータの標準化</td></tr>
            <tr><td>現在</td><td>継続的に進化中、多くの企業で採用</td></tr>
          </tbody>
        </table>
      </div>
      <p class="content-text">
        TypeScriptは現在、Google、Microsoft、Airbnb、Slackなど多くの大企業で採用されており、
        フロントエンド開発のデファクトスタンダードになりつつあります。
      </p>
    </div>

    <div class="content-section">
      <h2 class="section-title">TypeScriptの普及状況</h2>
      <p class="content-text">
        TypeScriptは急速に普及しており、多くのプロジェクトで採用されています：
      </p>
      <ul>
        <li><strong>React</strong> - 公式でTypeScriptをサポート</li>
        <li><strong>Vue.js 3</strong> - TypeScriptで書き直された</li>
        <li><strong>Angular</strong> - TypeScriptが必須</li>
        <li><strong>Next.js</strong> - TypeScriptをデフォルトでサポート</li>
        <li><strong>Node.js</strong> - サーバーサイドでも広く使用</li>
      </ul>
      <div class="info-box">
        <span class="info-box-icon">📊</span>
        <div class="info-box-content">
          <div class="info-box-title">人気の高まり</div>
          <div class="info-box-text">Stack Overflowの調査では、TypeScriptは「最も愛されている言語」の上位に常にランクインしています。</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">開発環境のセットアップ</h2>
      <p class="content-text">TypeScriptを使い始めるには、以下の手順でセットアップします：</p>
      
      <h3>1. Node.jsのインストール</h3>
      <p class="content-text">
        TypeScriptのコンパイラはNode.js上で動作します。
        <a href="https://nodejs.org/" target="_blank">nodejs.org</a>から最新のLTS版をインストールしてください。
      </p>

      <h3>2. TypeScriptのインストール</h3>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">Terminal</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment"># グローバルにインストール</span>
npm install -g typescript

<span class="comment"># プロジェクトにインストール（推奨）</span>
npm install --save-dev typescript</code></pre>
        </div>
      </div>

      <h3>3. 設定ファイルの作成</h3>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">Terminal</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment"># tsconfig.jsonを生成</span>
npx tsc --init</code></pre>
        </div>
      </div>

      <h3>4. コンパイルと実行</h3>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">Terminal</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment"># TypeScriptファイルをコンパイル</span>
npx tsc hello.ts

<span class="comment"># 生成されたJavaScriptを実行</span>
node hello.js</code></pre>
        </div>
      </div>

      <div class="info-box">
        <span class="info-box-icon">🛠️</span>
        <div class="info-box-content">
          <div class="info-box-title">おすすめのエディタ</div>
          <div class="info-box-text">Visual Studio Codeは、TypeScriptのサポートが非常に優れています。自動補完、エラー表示、リファクタリングなどの機能が標準で使えます。</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">最初のTypeScriptコード</h2>
      <p class="content-text">簡単なTypeScriptコードを見てみましょう：</p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">TypeScript</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// 型注釈付きの変数宣言</span>
<span class="keyword">let</span> message: <span class="type">string</span> = <span class="string">"Hello, TypeScript!"</span>;
<span class="keyword">let</span> count: <span class="type">number</span> = <span class="number">42</span>;
<span class="keyword">let</span> isActive: <span class="type">boolean</span> = <span class="keyword">true</span>;

<span class="comment">// 型注釈付きの関数</span>
<span class="keyword">function</span> <span class="function">add</span>(a: <span class="type">number</span>, b: <span class="type">number</span>): <span class="type">number</span> {
  <span class="keyword">return</span> a + b;
}

<span class="comment">// 使用例</span>
console.log(message);
console.log(add(<span class="number">10</span>, <span class="number">20</span>)); <span class="comment">// 30</span></code></pre>
        </div>
      </div>
      <p class="content-text">
        次のレッスンでは、TypeScriptの基本的な型について詳しく学んでいきます。
      </p>
    </div>
  `,
  exercises: [
    {
      question: "TypeScriptとJavaScriptの関係について正しいものはどれですか？",
      options: [
        "TypeScriptはJavaScriptとは全く別の言語である",
        "TypeScriptはJavaScriptのスーパーセット（上位互換）である",
        "JavaScriptはTypeScriptのスーパーセットである",
        "TypeScriptはJavaScriptの古いバージョンである",
      ],
      answer: 1,
      explanation:
        "TypeScriptはJavaScriptのスーパーセットです。すべてのJavaScriptコードは有効なTypeScriptコードとして動作し、TypeScriptはそれに型システムなどの機能を追加しています。",
    },
    {
      question: "TypeScriptの型システムの主なメリットはどれですか？",
      options: [
        "コードの実行速度が大幅に向上する",
        "コンパイル時にエラーを検出でき、バグを早期発見できる",
        "JavaScriptより少ないコード量で同じ機能を実現できる",
        "ブラウザで直接実行できる",
      ],
      answer: 1,
      explanation:
        "TypeScriptの型システムにより、コードを書いている段階（コンパイル時）で型の不一致などのエラーを検出でき、実行前にバグを発見できます。",
    },
    {
      question: "TypeScriptのコードを実行するために必要なステップはどれですか？",
      options: [
        "ブラウザで直接.tsファイルを開く",
        "TypeScriptをJavaScriptにコンパイルしてから実行する",
        "特別なTypeScriptランタイムをインストールする",
        "Javaの仮想マシン上で実行する",
      ],
      answer: 1,
      explanation:
        "TypeScriptはブラウザやNode.jsで直接実行できません。tscコマンドでJavaScriptにコンパイル（変換）してから実行します。",
    },
  ],
};
