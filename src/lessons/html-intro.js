export const htmlIntro = {
  id: "html-intro",
  category: "html",
  title: "HTMLとは",
  description: "HTMLの役割と歴史、なぜ重要なのかを理解しましょう",
  content: `
    <div class="content-section">
      <h2 class="section-title">HTMLとは何か？</h2>
      <p class="content-text">
        <strong>HTML（HyperText Markup Language）</strong>は、Webページの「構造」を定義するためのマークアップ言語です。
        プログラミング言語ではなく、「この部分は見出し」「この部分は段落」といった<strong>意味付け（マークアップ）</strong>を行う言語です。
      </p>
      <div class="info-box">
        <span class="info-box-icon">📝</span>
        <div class="info-box-content">
          <div class="info-box-title">名前の意味</div>
          <div class="info-box-text">
            <strong>HyperText</strong> = リンクで繋がったテキスト<br>
            <strong>Markup</strong> = 印をつける<br>
            <strong>Language</strong> = 言語
          </div>
        </div>
      </div>
    <div class="content-section">
      <h2 class="section-title">HTMLの構造（DOMツリー）</h2>
      <p class="content-text">
        HTMLは親子関係を持つ<strong>ツリー構造</strong>になっています。これをDOM（Document Object Model）ツリーと呼びます。
      </p>
      <div class="visual-diagram">
        <div class="diagram-label">DOMツリーのイメージ</div>
        <div class="dom-tree">
          <div class="dom-node root">&lt;html&gt;</div>
          <div class="dom-children">
            <div class="dom-tree">
              <div class="dom-node">&lt;head&gt;</div>
              <div class="dom-children">
                <div class="dom-node">&lt;title&gt;</div>
              </div>
            </div>
            <div class="dom-tree">
              <div class="dom-node">&lt;body&gt;</div>
              <div class="dom-children">
                <div class="dom-node">&lt;h1&gt;</div>
                <div class="dom-node">&lt;p&gt;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="content-text">
        このように、タグの中に別のタグを入れることで、複雑な構造を作り上げていきます。
      </p>
    </div>

    <div class="content-section">
      <h2 class="section-title">HTMLの役割</h2>
      <p class="content-text">
        HTMLは「何を表示するか」という<strong>コンテンツの構造</strong>を定義します。
        見た目（色やレイアウト）はCSS、動きはJavaScriptが担当します。
      </p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTMLの役割の例</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">&lt;!-- HTMLは「何か」を伝える --&gt;</span>
<span class="tag">&lt;h1&gt;</span>これは最も重要な見出しです<span class="tag">&lt;/h1&gt;</span>
<span class="tag">&lt;p&gt;</span>これは本文の段落です<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;nav&gt;</span>これはナビゲーションです<span class="tag">&lt;/nav&gt;</span>
<span class="tag">&lt;button&gt;</span>これはボタンです<span class="tag">&lt;/button&gt;</span></code></pre>
        </div>
      </div>
      <p class="content-text">
        このようにHTMLは、「見出し」「段落」「ナビゲーション」「ボタン」といった<strong>意味</strong>をブラウザや検索エンジンに伝えます。
      </p>
    </div>

    <div class="content-section">
      <h2 class="section-title">HTMLの歴史</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>年</th><th>バージョン</th><th>特徴</th></tr>
          </thead>
          <tbody>
            <tr><td>1991</td><td>HTML 1.0</td><td>最初のHTML、基本的なタグのみ</td></tr>
            <tr><td>1997</td><td>HTML 4.0</td><td>CSSとの分離が進む</td></tr>
            <tr><td>2000</td><td>XHTML</td><td>XMLベースの厳格なHTML</td></tr>
            <tr><td>2014</td><td><strong>HTML5</strong></td><td>現在の標準。セマンティックタグ、マルチメディア対応</td></tr>
          </tbody>
        </table>
      </div>
      <p class="content-text">
        現在使用されている<strong>HTML5</strong>は、動画や音声の埋め込み、意味のあるタグ（セマンティックタグ）などが追加され、よりリッチなWebページを作れるようになりました。
      </p>
    </div>

    <div class="content-section">
      <h2 class="section-title">なぜHTMLが重要なのか？</h2>
      <ul>
        <li><strong>すべてのWebページの基盤</strong> - どんなWebサイトも必ずHTMLで作られています</li>
        <li><strong>SEO（検索エンジン最適化）</strong> - 正しいHTMLを書くことで、Googleなどの検索エンジンに内容が伝わります</li>
        <li><strong>アクセシビリティ</strong> - 視覚障害者が使うスクリーンリーダーは、HTMLの構造を読み上げます</li>
        <li><strong>保守性</strong> - 意味のあるHTMLは、後から編集しやすくなります</li>
      </ul>
    </div>

    <div class="content-section">
      <h2 class="section-title">タグと要素の基本</h2>
      <p class="content-text">
        HTMLは<strong>タグ</strong>を使って構造を定義します。タグは<code>&lt;タグ名&gt;</code>で始まり、<code>&lt;/タグ名&gt;</code>で終わります。
      </p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">&lt;!-- 開始タグと終了タグ --&gt;</span>
<span class="tag">&lt;p&gt;</span>これは段落です<span class="tag">&lt;/p&gt;</span>

<span class="comment">&lt;!-- 入れ子（ネスト）にできる --&gt;</span>
<span class="tag">&lt;div&gt;</span>
  <span class="tag">&lt;h1&gt;</span>タイトル<span class="tag">&lt;/h1&gt;</span>
  <span class="tag">&lt;p&gt;</span>本文<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;/div&gt;</span>

<span class="comment">&lt;!-- 自己終了タグ（中身がない） --&gt;</span>
<span class="tag">&lt;img</span> <span class="attr">src</span>=<span class="string">"photo.jpg"</span> <span class="attr">alt</span>=<span class="string">"写真"</span><span class="tag">&gt;</span>
<span class="tag">&lt;br&gt;</span>
<span class="tag">&lt;input</span> <span class="attr">type</span>=<span class="string">"text"</span><span class="tag">&gt;</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">属性について</h2>
      <p class="content-text">
        タグには<strong>属性</strong>を追加して、追加情報を指定できます。
      </p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">&lt;!-- href属性でリンク先を指定 --&gt;</span>
<span class="tag">&lt;a</span> <span class="attr">href</span>=<span class="string">"https://example.com"</span><span class="tag">&gt;</span>リンク<span class="tag">&lt;/a&gt;</span>

<span class="comment">&lt;!-- class属性でCSSのスタイルを適用 --&gt;</span>
<span class="tag">&lt;div</span> <span class="attr">class</span>=<span class="string">"container"</span><span class="tag">&gt;</span>...<span class="tag">&lt;/div&gt;</span>

<span class="comment">&lt;!-- id属性で一意の識別子を設定 --&gt;</span>
<span class="tag">&lt;section</span> <span class="attr">id</span>=<span class="string">"about"</span><span class="tag">&gt;</span>...<span class="tag">&lt;/section&gt;</span>

<span class="comment">&lt;!-- 複数の属性を指定可能 --&gt;</span>
<span class="tag">&lt;img</span> <span class="attr">src</span>=<span class="string">"photo.jpg"</span> <span class="attr">alt</span>=<span class="string">"説明"</span> <span class="attr">width</span>=<span class="string">"300"</span> <span class="attr">class</span>=<span class="string">"profile"</span><span class="tag">&gt;</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">ブロック要素とインライン要素</h2>
      <p class="content-text">
        HTML要素は大きく<strong>ブロック要素</strong>と<strong>インライン要素</strong>に分けられます。
      </p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>種類</th><th>特徴</th><th>代表的なタグ</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>ブロック要素</strong></td>
              <td>横幅いっぱいに広がり、前後に改行が入る</td>
              <td>div, p, h1〜h6, section, header</td>
            </tr>
            <tr>
              <td><strong>インライン要素</strong></td>
              <td>内容の幅だけを占め、改行されない</td>
              <td>span, a, strong, em, img</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box">
        <span class="info-box-icon">💡</span>
        <div class="info-box-content">
          <div class="info-box-title">ポイント</div>
          <div class="info-box-text">CSSで<code>display</code>プロパティを使うと、ブロック要素をインラインに、インライン要素をブロックに変更できます。</div>
        </div>
      </div>
    </div>
  `,
  exercises: [
    {
      question: "HTMLは何の略称ですか？",
      options: [
        "HyperText Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
      ],
      answer: 0,
      explanation:
        "HTMLはHyperText Markup Languageの略で、Webページの構造を記述するための言語です。",
    },
    {
      question: "HTMLにおいて、見た目（スタイル）を担当するのはどれですか？",
      options: ["HTML", "CSS", "JavaScript", "PHP"],
      answer: 1,
      explanation: "HTMLは構造、CSSは見た目、JavaScriptは動きを担当します。",
    },
  ],
};
