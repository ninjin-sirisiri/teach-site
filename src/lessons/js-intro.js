export const jsIntro = {
  id: "js-intro",
  category: "js",
  title: "JavaScriptとは",
  description: "JavaScriptの役割と特徴、何ができるのかを理解しましょう",
  content: `
    <div class="content-section">
      <h2 class="section-title">JavaScriptとは何か？</h2>
      <p class="content-text">
        <strong>JavaScript</strong>は、Webページに「動き」や「機能」を追加するための<strong>プログラミング言語</strong>です。
        HTMLとCSSが静的な見た目を作るのに対し、JavaScriptはユーザーの操作に反応して動的な変化を実現します。
      </p>
      <div class="info-box">
        <span class="info-box-icon">⚡</span>
        <div class="info-box-content">
          <div class="info-box-title">注意</div>
          <div class="info-box-text">JavaScriptと「Java」は全く別の言語です。名前が似ていますが、関係はありません。</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">JavaScriptでできること</h2>
      <p class="content-text">JavaScriptを使うと、様々なことができます：</p>
      <ul>
        <li><strong>ユーザー操作への反応</strong> - クリック、スクロール、入力などへの対応</li>
        <li><strong>コンテンツの動的変更</strong> - ページをリロードせずに内容を更新</li>
        <li><strong>フォームのバリデーション</strong> - 入力内容のチェック</li>
        <li><strong>アニメーション</strong> - CSSより複雑な動きの制御</li>
        <li><strong>データの取得・送信</strong> - サーバーとの通信（API連携）</li>
        <li><strong>ゲームやアプリの開発</strong> - インタラクティブなコンテンツ</li>
      </ul>
    </div>

    <div class="content-section">
      <h2 class="section-title">具体的な例</h2>
      <p class="content-text">普段使っているWebサイトのこんな機能がJavaScriptで作られています：</p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>機能</th><th>例</th></tr>
          </thead>
          <tbody>
            <tr><td>モーダル（ポップアップ）</td><td>ログイン画面、確認ダイアログ</td></tr>
            <tr><td>スライダー/カルーセル</td><td>画像のスライドショー</td></tr>
            <tr><td>無限スクロール</td><td>SNSのフィード</td></tr>
            <tr><td>リアルタイム検索</td><td>入力中に候補を表示</td></tr>
            <tr><td>ダークモード切り替え</td><td>テーマの変更</td></tr>
            <tr><td>フォーム送信</td><td>ページ遷移なしでデータ送信</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">JavaScriptの特徴</h2>
      <ul>
        <li>
          <strong>インタプリタ言語</strong><br>
          コンパイル不要。書いたコードがすぐに実行される
        </li>
        <li>
          <strong>動的型付け</strong><br>
          変数の型を明示的に指定する必要がない
        </li>
        <li>
          <strong>イベント駆動</strong><br>
          「クリックされたら」「読み込まれたら」といったイベントに反応して動く
        </li>
        <li>
          <strong>シングルスレッド</strong><br>
          基本的に一度に1つの処理を実行（非同期処理で対応）
        </li>
      </ul>
    </div>

    <div class="content-section">
      <h2 class="section-title">JavaScriptの歴史</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>年</th><th>出来事</th></tr>
          </thead>
          <tbody>
            <tr><td>1995</td><td>Netscape社のBrendan Eichが10日間で開発</td></tr>
            <tr><td>1997</td><td>ECMAScriptとして標準化</td></tr>
            <tr><td>2009</td><td>Node.js登場（サーバーサイドでも使用可能に）</td></tr>
            <tr><td>2015</td><td><strong>ES6/ES2015</strong> - let/const、アロー関数など大幅な進化</td></tr>
            <tr><td>現在</td><td>毎年新機能が追加（ES2020, ES2021...）</td></tr>
          </tbody>
        </table>
      </div>
      <p class="content-text">
        2015年のES6（ES2015）で大きく進化し、現在の「モダンJavaScript」の基盤ができました。
        このサイトで学ぶ構文は、主にES6以降のモダンな書き方です。
      </p>
    </div>

    <div class="content-section">
      <h2 class="section-title">DOM（Document Object Model）</h2>
      <p class="content-text">
        JavaScriptがHTMLを操作するための仕組みが<strong>DOM</strong>です。
        ブラウザはHTMLを読み込むと、DOMという「ツリー構造」のオブジェクトを作成します。
        JavaScriptはこのDOMを通じて、要素の追加・削除・変更ができます。
      </p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">概念図</span>
        </div>
        <div class="code-content">
<pre><code>    document
       │
    &lt;html&gt;
       │
   ┌───┴───┐
&lt;head&gt;    &lt;body&gt;
   │         │
&lt;title&gt;   ┌──┴──┐
        &lt;h1&gt;   &lt;p&gt;</code></pre>
        </div>
      </div>
      <p class="content-text">
        JavaScriptは<code>document.querySelector()</code>などを使って、このツリーから要素を取得し、操作します。
      </p>
    </div>

    <div class="content-section">
      <h2 class="section-title">フロントエンドとバックエンド</h2>
      <p class="content-text">
        JavaScriptは元々ブラウザ（フロントエンド）専用でしたが、
        <strong>Node.js</strong>の登場によりサーバーサイド（バックエンド）でも使えるようになりました。
      </p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>環境</th><th>特徴</th><th>用途</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>フロントエンド</strong></td>
              <td>ブラウザで実行</td>
              <td>UI操作、DOM操作、ユーザー体験</td>
            </tr>
            <tr>
              <td><strong>バックエンド（Node.js）</strong></td>
              <td>サーバーで実行</td>
              <td>API作成、データベース操作</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="content-text">
        このサイトでは<strong>フロントエンドのJavaScript</strong>を学びます。
      </p>
    </div>

    <div class="content-section">
      <h2 class="section-title">JavaScriptの書き方</h2>
      <p class="content-text">JavaScriptをHTMLに読み込む方法は3つあります。</p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">&lt;!-- 1. 外部ファイル読み込み（推奨） --&gt;</span>
<span class="tag">&lt;script</span> <span class="attr">src</span>=<span class="string">"script.js"</span><span class="tag">&gt;&lt;/script&gt;</span>

<span class="comment">&lt;!-- 2. HTML内に直接記述 --&gt;</span>
<span class="tag">&lt;script&gt;</span>
  console.log('Hello');
<span class="tag">&lt;/script&gt;</span>

<span class="comment">&lt;!-- 3. インライン（避ける） --&gt;</span>
<span class="tag">&lt;button</span> <span class="attr">onclick</span>=<span class="string">"alert('クリック')"</span><span class="tag">&gt;</span>ボタン<span class="tag">&lt;/button&gt;</span></code></pre>
        </div>
      </div>
      <div class="info-box">
        <span class="info-box-icon">💡</span>
        <div class="info-box-content">
          <div class="info-box-title">ベストプラクティス</div>
          <div class="info-box-text">scriptタグは&lt;body&gt;の最後、または<code>defer</code>属性を付けてHTMLの読み込み後に実行するのが一般的です。</div>
        </div>
      </div>
    </div>
  `,
  exercises: [
    {
      question: "JavaScriptの主な役割はどれですか？",
      options: [
        "Webページの構造を定義する",
        "文字の色やレイアウトを装飾する",
        "Webページに「動き」や「機能」を追加する",
        "サーバーを物理的に構築する",
      ],
      answer: 2,
      explanation:
        "JavaScriptは動きやインタラクティブな機能を追加するためのプログラミング言語です。",
    },
    {
      question: "JavaScriptがHTMLを操作するための「ツリー構造」の仕組みを何と呼びますか？",
      options: ["CSSOM", "DOM", "BOM", "JSON"],
      answer: 1,
      explanation:
        "DOM (Document Object Model) は、HTMLをJavaScriptから扱えるようにしたオブジェクトのツリー構造です。",
    },
    {
      question: "名前が似ている「Java」と「JavaScript」の関係について正しいものはどれですか？",
      options: [
        "JavaScriptはJavaの簡略版である",
        "同じ開発者が作った姉妹言語である",
        "全く別の言語であり、直接の関係はない",
        "JavaScriptで書いたコードはJavaでも動く",
      ],
      answer: 2,
      explanation: "JavaとJavaScriptは名前は似ていますが、全く別のプログラミング言語です。",
    },
  ],
};
