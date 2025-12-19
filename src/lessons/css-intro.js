export const cssIntro = {
  id: "css-intro",
  category: "css",
  title: "CSSとは",
  description: "CSSの役割と仕組み、なぜ必要なのかを理解しましょう",
  content: `
    <div class="content-section">
      <h2 class="section-title">CSSとは何か？</h2>
      <p class="content-text">
        <strong>CSS（Cascading Style Sheets）</strong>は、Webページの「見た目」を定義するためのスタイルシート言語です。
        HTMLが「何を表示するか」を決めるのに対し、CSSは「どのように見せるか」を決めます。
      </p>
      <div class="info-box">
        <span class="info-box-icon">🎨</span>
        <div class="info-box-content">
          <div class="info-box-title">名前の意味</div>
          <div class="info-box-text">
            <strong>Cascading</strong> = 滝のように連なる（スタイルが上書きされる仕組み）<br>
            <strong>Style Sheets</strong> = スタイルを記述したシート
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">なぜCSSが必要なのか？</h2>
      <p class="content-text">
        HTMLだけでもWebページは作れますが、見た目は非常にシンプル（質素）になります。
        CSSを使うことで以下のことができます：
      </p>
      <ul>
        <li><strong>色の変更</strong> - テキストの色、背景色</li>
        <li><strong>レイアウト</strong> - 要素の配置、サイズ</li>
        <li><strong>フォント</strong> - 文字の種類、大きさ、スタイル</li>
        <li><strong>アニメーション</strong> - 動きのあるエフェクト</li>
        <li><strong>レスポンシブデザイン</strong> - 画面サイズに応じた表示調整</li>
      </ul>
    </div>

    <div class="content-section">
      <h2 class="section-title">HTMLとCSSの分離</h2>
      <p class="content-text">
        かつてはHTMLの中に直接見た目を指定していましたが、現在は<strong>HTMLとCSSを分離</strong>するのが標準です。
      </p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>方式</th><th>メリット</th><th>デメリット</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>分離（現在の標準）</strong></td>
              <td>保守しやすい、再利用可能、役割が明確</td>
              <td>ファイルが増える</td>
            </tr>
            <tr>
              <td>混在（古い方法）</td>
              <td>1ファイルで完結</td>
              <td>変更が大変、重複が多い</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box">
        <span class="info-box-icon">💡</span>
        <div class="info-box-content">
          <div class="info-box-title">関心の分離</div>
          <div class="info-box-text">HTML = 構造、CSS = 見た目、JavaScript = 動き、と役割を分けることで、変更しやすく、チームでの開発もスムーズになります。</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">CSSの仕組み：カスケード</h2>
      <p class="content-text">
        CSSの「Cascading（カスケード）」は、複数のスタイルが適用されたときの<strong>優先順位</strong>を決める仕組みです。
      </p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">CSS</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">/* 優先順位（低い順） */</span>

<span class="comment">/* 1. ブラウザのデフォルトスタイル */</span>

<span class="comment">/* 2. 要素セレクタ */</span>
<span class="tag">p</span> { <span class="property">color</span>: <span class="value">black</span>; }

<span class="comment">/* 3. クラスセレクタ */</span>
<span class="tag">.text</span> { <span class="property">color</span>: <span class="value">blue</span>; }

<span class="comment">/* 4. IDセレクタ */</span>
<span class="tag">#main</span> { <span class="property">color</span>: <span class="value">red</span>; }

<span class="comment">/* 5. インラインスタイル（HTML内のstyle属性） */</span>

<span class="comment">/* 6. !important（最優先、ただし非推奨） */</span>
<span class="tag">p</span> { <span class="property">color</span>: <span class="value">green</span> <span class="keyword">!important</span>; }</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">CSSの仕組み：継承</h2>
      <p class="content-text">
        一部のCSSプロパティは、親要素から子要素に<strong>継承</strong>されます。
      </p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">CSS</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">/* 継承されるプロパティ */</span>
<span class="tag">body</span> {
  <span class="property">font-family</span>: <span class="value">Arial</span>;  <span class="comment">/* 全ての子要素に適用 */</span>
  <span class="property">color</span>: <span class="value">#333</span>;          <span class="comment">/* 全ての子要素に適用 */</span>
}

<span class="comment">/* 継承されないプロパティ */</span>
<span class="tag">.parent</span> {
  <span class="property">border</span>: <span class="value">1px solid black</span>;  <span class="comment">/* 子には適用されない */</span>
  <span class="property">padding</span>: <span class="value">20px</span>;             <span class="comment">/* 子には適用されない */</span>
}</code></pre>
        </div>
      </div>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>継承される</th><th>継承されない</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>color, font-family, font-size, line-height, text-align</td>
              <td>border, padding, margin, width, height, background</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">ブラウザの開発者ツール</h2>
      <p class="content-text">
        CSSを学ぶ上で、ブラウザの<strong>開発者ツール（DevTools）</strong>は必須のツールです。
      </p>
      <ul>
        <li><strong>開き方</strong> - F12キー、または右クリック →「検証」</li>
        <li><strong>要素の確認</strong> - HTMLとCSSの構造を確認</li>
        <li><strong>リアルタイム編集</strong> - CSSを変更してプレビュー</li>
        <li><strong>計算済みスタイル</strong> - 実際に適用されているスタイルを確認</li>
      </ul>
      <div class="info-box">
        <span class="info-box-icon">🛠️</span>
        <div class="info-box-content">
          <div class="info-box-title">学習のコツ</div>
          <div class="info-box-text">気になるWebサイトを開発者ツールで調べると、どのようにCSSが書かれているか学べます。</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">CSSの進化</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>年代</th><th>技術</th><th>特徴</th></tr>
          </thead>
          <tbody>
            <tr><td>1996</td><td>CSS1</td><td>基本的なスタイリング</td></tr>
            <tr><td>2011</td><td>CSS3</td><td>アニメーション、角丸、影など</td></tr>
            <tr><td>2017〜</td><td>Flexbox/Grid</td><td>強力なレイアウト機能</td></tr>
            <tr><td>現在</td><td>CSS変数、コンテナクエリ</td><td>より柔軟なスタイリング</td></tr>
          </tbody>
        </table>
      </div>
      <p class="content-text">
        CSSは現在も進化を続けており、新しい機能が次々と追加されています。
        基本をしっかり押さえつつ、新しい機能も学んでいきましょう。
      </p>
    </div>
  `,
  exercises: [
    {
      question: "CSSは何の略称ですか？",
      options: [
        "Colorful Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
      ],
      answer: 1,
      explanation:
        "CSSはCascading Style Sheetsの略で、滝のようにスタイルが上書きされていく仕組み（カスケード）を指します。",
    },
    {
      question: "以下のうち、一般的に親要素から子要素に「継承される」プロパティはどれですか？",
      options: ["border (枠線)", "margin (余白)", "color (文字色)", "padding (内側の余白)"],
      answer: 2,
      explanation:
        "文字色 (color) やフォントサイズなどは親要素の設定が子要素に引き継がれますが、枠線や余白は継承されません。",
    },
  ],
};
