export const htmlBasics = {
  id: "html-basics",
  category: "html",
  title: "HTML基礎",
  description: "HTMLの基本構造からフォーム、セマンティックHTMLまでを学びましょう",
  content: `
    <div class="content-section">
      <h2 class="section-title">HTMLとは？</h2>
      <p class="content-text">
        <strong>HTML (HyperText Markup Language)</strong>は、Webページの構造を定義するためのマークアップ言語です。
        ブラウザはHTMLを読み取り、その構造に従ってコンテンツを表示します。
      </p>
      <div class="info-box">
        <span class="info-box-icon">💡</span>
        <div class="info-box-content">
          <div class="info-box-title">ポイント</div>
          <div class="info-box-text">HTMLは「何を表示するか」を定義し、CSSは「どのように見せるか」を定義します。</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">基本構造</h2>
      <p class="content-text">すべてのHTMLドキュメントは以下の基本構造を持ちます：</p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="tag">&lt;!DOCTYPE html&gt;</span>
<span class="tag">&lt;html</span> <span class="attr">lang</span>=<span class="string">"ja"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;head&gt;</span>
    <span class="tag">&lt;meta</span> <span class="attr">charset</span>=<span class="string">"UTF-8"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;meta</span> <span class="attr">name</span>=<span class="string">"viewport"</span> <span class="attr">content</span>=<span class="string">"width=device-width, initial-scale=1.0"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;title&gt;</span>ページタイトル<span class="tag">&lt;/title&gt;</span>
    <span class="tag">&lt;link</span> <span class="attr">rel</span>=<span class="string">"stylesheet"</span> <span class="attr">href</span>=<span class="string">"style.css"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;/head&gt;</span>
  <span class="tag">&lt;body&gt;</span>
    <span class="comment">&lt;!-- ここにコンテンツを書く --&gt;</span>
    <span class="tag">&lt;script</span> <span class="attr">src</span>=<span class="string">"script.js"</span><span class="tag">&gt;&lt;/script&gt;</span>
  <span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span></code></pre>
        </div>
      </div>
      <ul>
        <li><strong>&lt;!DOCTYPE html&gt;</strong> - HTML5であることを宣言</li>
        <li><strong>&lt;html lang="ja"&gt;</strong> - 言語を日本語に設定</li>
        <li><strong>&lt;head&gt;</strong> - メタ情報（タイトル、CSS読み込みなど）</li>
        <li><strong>&lt;body&gt;</strong> - 実際に表示されるコンテンツ</li>
      </ul>
    </div>

    <div class="content-section">
      <h2 class="section-title">テキスト関連タグ</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>タグ</th><th>用途</th><th>例</th></tr>
          </thead>
          <tbody>
            <tr><td><code>&lt;h1&gt;~&lt;h6&gt;</code></td><td>見出し（h1が最大）</td><td>ページタイトル、セクション見出し</td></tr>
            <tr><td><code>&lt;p&gt;</code></td><td>段落</td><td>本文テキスト</td></tr>
            <tr><td><code>&lt;strong&gt;</code></td><td>重要なテキスト（太字）</td><td>強調したい語句</td></tr>
            <tr><td><code>&lt;em&gt;</code></td><td>強調（斜体）</td><td>ニュアンスを加えたい語句</td></tr>
            <tr><td><code>&lt;br&gt;</code></td><td>改行</td><td>詩や住所など</td></tr>
            <tr><td><code>&lt;hr&gt;</code></td><td>水平線</td><td>セクションの区切り</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">リンクと画像</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">&lt;!-- 外部リンク --&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="string">"https://example.com"</span> <span class="attr">target</span>=<span class="string">"_blank"</span><span class="tag">&gt;</span>外部サイト<span class="tag">&lt;/a&gt;</span>

<span class="comment">&lt;!-- 内部リンク（同じサイト内） --&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="string">"/about.html"</span><span class="tag">&gt;</span>About<span class="tag">&lt;/a&gt;</span>

<span class="comment">&lt;!-- ページ内リンク（アンカー） --&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="string">"#section1"</span><span class="tag">&gt;</span>セクション1へ<span class="tag">&lt;/a&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">id</span>=<span class="string">"section1"</span><span class="tag">&gt;</span>ここにジャンプ<span class="tag">&lt;/div&gt;</span>

<span class="comment">&lt;!-- 画像 --&gt;</span>
<span class="tag">&lt;img</span> <span class="attr">src</span>=<span class="string">"photo.jpg"</span> <span class="attr">alt</span>=<span class="string">"写真の説明"</span> <span class="attr">width</span>=<span class="string">"300"</span><span class="tag">&gt;</span></code></pre>
        </div>
      </div>
      <div class="info-box">
        <span class="info-box-icon">⚠️</span>
        <div class="info-box-content">
          <div class="info-box-title">重要</div>
          <div class="info-box-text">alt属性は必ず設定しましょう。アクセシビリティとSEOに重要です。</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">リスト</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">&lt;!-- 順序なしリスト --&gt;</span>
<span class="tag">&lt;ul&gt;</span>
  <span class="tag">&lt;li&gt;</span>りんご<span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;li&gt;</span>バナナ<span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;li&gt;</span>オレンジ<span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ul&gt;</span>

<span class="comment">&lt;!-- 順序ありリスト --&gt;</span>
<span class="tag">&lt;ol&gt;</span>
  <span class="tag">&lt;li&gt;</span>最初のステップ<span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;li&gt;</span>次のステップ<span class="tag">&lt;/li&gt;</span>
  <span class="tag">&lt;li&gt;</span>完了<span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ol&gt;</span>

<span class="comment">&lt;!-- ナビゲーションによく使うパターン --&gt;</span>
<span class="tag">&lt;nav&gt;</span>
  <span class="tag">&lt;ul&gt;</span>
    <span class="tag">&lt;li&gt;&lt;a</span> <span class="attr">href</span>=<span class="string">"/"</span><span class="tag">&gt;</span>ホーム<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="tag">&lt;li&gt;&lt;a</span> <span class="attr">href</span>=<span class="string">"/about"</span><span class="tag">&gt;</span>About<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
    <span class="tag">&lt;li&gt;&lt;a</span> <span class="attr">href</span>=<span class="string">"/contact"</span><span class="tag">&gt;</span>お問い合わせ<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
  <span class="tag">&lt;/ul&gt;</span>
<span class="tag">&lt;/nav&gt;</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">セマンティックHTML</h2>
      <p class="content-text">セマンティック（意味のある）タグを使うと、検索エンジンやスクリーンリーダーがページ構造を理解しやすくなります。</p>
      <div class="visual-diagram">
        <div class="diagram-label">一般的なページ構成の例</div>
        <div class="semantic-layout">
          <div class="layout-item layout-header">header</div>
          <div class="layout-item layout-nav">nav</div>
          <div class="layout-item layout-main">main</div>
          <div class="layout-item layout-aside">aside</div>
          <div class="layout-item layout-footer">footer</div>
        </div>
      </div>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="tag">&lt;header&gt;</span>
  <span class="tag">&lt;nav&gt;</span>ナビゲーション<span class="tag">&lt;/nav&gt;</span>
<span class="tag">&lt;/header&gt;</span>

<span class="tag">&lt;main&gt;</span>
  <span class="tag">&lt;article&gt;</span>
    <span class="tag">&lt;h1&gt;</span>記事タイトル<span class="tag">&lt;/h1&gt;</span>
    <span class="tag">&lt;section&gt;</span>
      <span class="tag">&lt;h2&gt;</span>セクション1<span class="tag">&lt;/h2&gt;</span>
      <span class="tag">&lt;p&gt;</span>本文...<span class="tag">&lt;/p&gt;</span>
    <span class="tag">&lt;/section&gt;</span>
  <span class="tag">&lt;/article&gt;</span>
  <span class="tag">&lt;aside&gt;</span>サイドバー<span class="tag">&lt;/aside&gt;</span>
<span class="tag">&lt;/main&gt;</span>

<span class="tag">&lt;footer&gt;</span>
  <span class="tag">&lt;p&gt;</span>&copy; 2024 My Site<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;/footer&gt;</span></code></pre>
        </div>
      </div>
      <div class="table-wrapper">
        <table>
          <thead><tr><th>タグ</th><th>用途</th></tr></thead>
          <tbody>
            <tr><td><code>&lt;header&gt;</code></td><td>ヘッダー（ロゴ、ナビ）</td></tr>
            <tr><td><code>&lt;nav&gt;</code></td><td>ナビゲーション</td></tr>
            <tr><td><code>&lt;main&gt;</code></td><td>メインコンテンツ（1ページに1つ）</td></tr>
            <tr><td><code>&lt;article&gt;</code></td><td>独立したコンテンツ（記事など）</td></tr>
            <tr><td><code>&lt;section&gt;</code></td><td>関連するコンテンツのグループ</td></tr>
            <tr><td><code>&lt;aside&gt;</code></td><td>補足情報（サイドバー）</td></tr>
            <tr><td><code>&lt;footer&gt;</code></td><td>フッター（著作権、リンク）</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">フォーム</h2>
      <p class="content-text">ユーザー入力を受け付けるためのフォーム要素です。お問い合わせフォームやログインフォームに使います。</p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="tag">&lt;form</span> <span class="attr">action</span>=<span class="string">"/submit"</span> <span class="attr">method</span>=<span class="string">"POST"</span><span class="tag">&gt;</span>
  <span class="comment">&lt;!-- テキスト入力 --&gt;</span>
  <span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="string">"name"</span><span class="tag">&gt;</span>お名前<span class="tag">&lt;/label&gt;</span>
  <span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="string">"text"</span> <span class="attr">id</span>=<span class="string">"name"</span> <span class="attr">name</span>=<span class="string">"name"</span> <span class="attr">required</span><span class="tag">&gt;</span>

  <span class="comment">&lt;!-- メール --&gt;</span>
  <span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="string">"email"</span><span class="tag">&gt;</span>メール<span class="tag">&lt;/label&gt;</span>
  <span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="string">"email"</span> <span class="attr">id</span>=<span class="string">"email"</span> <span class="attr">name</span>=<span class="string">"email"</span> <span class="attr">placeholder</span>=<span class="string">"example@mail.com"</span><span class="tag">&gt;</span>

  <span class="comment">&lt;!-- パスワード --&gt;</span>
  <span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="string">"password"</span> <span class="attr">name</span>=<span class="string">"password"</span> <span class="attr">minlength</span>=<span class="string">"8"</span><span class="tag">&gt;</span>

  <span class="comment">&lt;!-- テキストエリア --&gt;</span>
  <span class="tag">&lt;textarea</span> <span class="attr">name</span>=<span class="string">"message"</span> <span class="attr">rows</span>=<span class="string">"5"</span><span class="tag">&gt;&lt;/textarea&gt;</span>

  <span class="comment">&lt;!-- セレクトボックス --&gt;</span>
  <span class="tag">&lt;select</span> <span class="attr">name</span>=<span class="string">"category"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="string">""</span><span class="tag">&gt;</span>選択してください<span class="tag">&lt;/option&gt;</span>
    <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="string">"general"</span><span class="tag">&gt;</span>一般<span class="tag">&lt;/option&gt;</span>
    <span class="tag">&lt;option</span> <span class="attr">value</span>=<span class="string">"support"</span><span class="tag">&gt;</span>サポート<span class="tag">&lt;/option&gt;</span>
  <span class="tag">&lt;/select&gt;</span>

  <span class="comment">&lt;!-- チェックボックス --&gt;</span>
  <span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="string">"checkbox"</span> <span class="attr">id</span>=<span class="string">"agree"</span> <span class="attr">name</span>=<span class="string">"agree"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;label</span> <span class="attr">for</span>=<span class="string">"agree"</span><span class="tag">&gt;</span>利用規約に同意<span class="tag">&lt;/label&gt;</span>

  <span class="comment">&lt;!-- 送信ボタン --&gt;</span>
  <span class="tag">&lt;button</span> <span class="attr">type</span>=<span class="string">"submit"</span><span class="tag">&gt;</span>送信<span class="tag">&lt;/button&gt;</span>
<span class="tag">&lt;/form&gt;</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">実践：シンプルなページ構造</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="tag">&lt;!DOCTYPE html&gt;</span>
<span class="tag">&lt;html</span> <span class="attr">lang</span>=<span class="string">"ja"</span><span class="tag">&gt;</span>
<span class="tag">&lt;head&gt;</span>
  <span class="tag">&lt;meta</span> <span class="attr">charset</span>=<span class="string">"UTF-8"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;meta</span> <span class="attr">name</span>=<span class="string">"viewport"</span> <span class="attr">content</span>=<span class="string">"width=device-width, initial-scale=1.0"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;title&gt;</span>My Portfolio<span class="tag">&lt;/title&gt;</span>
  <span class="tag">&lt;link</span> <span class="attr">rel</span>=<span class="string">"stylesheet"</span> <span class="attr">href</span>=<span class="string">"style.css"</span><span class="tag">&gt;</span>
<span class="tag">&lt;/head&gt;</span>
<span class="tag">&lt;body&gt;</span>
  <span class="tag">&lt;header&gt;</span>
    <span class="tag">&lt;nav&gt;</span>
      <span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="string">"/"</span> <span class="attr">class</span>=<span class="string">"logo"</span><span class="tag">&gt;</span>MyLogo<span class="tag">&lt;/a&gt;</span>
      <span class="tag">&lt;ul&gt;</span>
        <span class="tag">&lt;li&gt;&lt;a</span> <span class="attr">href</span>=<span class="string">"#about"</span><span class="tag">&gt;</span>About<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
        <span class="tag">&lt;li&gt;&lt;a</span> <span class="attr">href</span>=<span class="string">"#works"</span><span class="tag">&gt;</span>Works<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
        <span class="tag">&lt;li&gt;&lt;a</span> <span class="attr">href</span>=<span class="string">"#contact"</span><span class="tag">&gt;</span>Contact<span class="tag">&lt;/a&gt;&lt;/li&gt;</span>
      <span class="tag">&lt;/ul&gt;</span>
    <span class="tag">&lt;/nav&gt;</span>
  <span class="tag">&lt;/header&gt;</span>

  <span class="tag">&lt;main&gt;</span>
    <span class="tag">&lt;section</span> <span class="attr">id</span>=<span class="string">"hero"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;h1&gt;</span>Web Developer<span class="tag">&lt;/h1&gt;</span>
      <span class="tag">&lt;p&gt;</span>モダンなWebサイトを作ります<span class="tag">&lt;/p&gt;</span>
    <span class="tag">&lt;/section&gt;</span>

    <span class="tag">&lt;section</span> <span class="attr">id</span>=<span class="string">"about"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;h2&gt;</span>About Me<span class="tag">&lt;/h2&gt;</span>
      <span class="tag">&lt;p&gt;</span>自己紹介文...<span class="tag">&lt;/p&gt;</span>
    <span class="tag">&lt;/section&gt;</span>

    <span class="tag">&lt;section</span> <span class="attr">id</span>=<span class="string">"works"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;h2&gt;</span>Works<span class="tag">&lt;/h2&gt;</span>
      <span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"grid"</span><span class="tag">&gt;</span>
        <span class="tag">&lt;article</span> <span class="attr">class</span>=<span class="string">"card"</span><span class="tag">&gt;</span>
          <span class="tag">&lt;img</span> <span class="attr">src</span>=<span class="string">"work1.jpg"</span> <span class="attr">alt</span>=<span class="string">"作品1"</span><span class="tag">&gt;</span>
          <span class="tag">&lt;h3&gt;</span>プロジェクト1<span class="tag">&lt;/h3&gt;</span>
        <span class="tag">&lt;/article&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
    <span class="tag">&lt;/section&gt;</span>
  <span class="tag">&lt;/main&gt;</span>

  <span class="tag">&lt;footer&gt;</span>
    <span class="tag">&lt;p&gt;</span>&copy; 2024 My Portfolio<span class="tag">&lt;/p&gt;</span>
  <span class="tag">&lt;/footer&gt;</span>
<span class="tag">&lt;/body&gt;</span>
<span class="tag">&lt;/html&gt;</span></code></pre>
        </div>
      </div>
    </div>
  `,
  exercises: [
    {
      question: "HTML5であることを宣言するための記述はどれですか？",
      options: ["<html>", "<!DOCTYPE html>", '<meta charset="UTF-8">', "<head>"],
      answer: 1,
      explanation: "<!DOCTYPE html>は文書がHTML5であることをブラウザに伝えます。",
    },
    {
      question: "画像を表示するためのタグと、必須の属性の組み合わせはどれですか？",
      options: ["<a> と href", "<img> と src", "<div> と class", "<p> と text"],
      answer: 1,
      explanation:
        "画像を表示するには <img> タグを使い、ファイルの場所を指定する src 属性が必要です。",
    },
    {
      question:
        "検索エンジンやスクリーンリーダーが理解しやすい「意味のあるタグ」を使うことを何と呼びますか？",
      options: ["ダイナミックHTML", "セマンティックHTML", "レスポンシブHTML", "スタティックHTML"],
      answer: 1,
      explanation:
        "セマンティックHTMLは、適切なタグ（header, main, footerなど）を使って文書の意味を正しく伝える手法です。",
    },
  ],
};
