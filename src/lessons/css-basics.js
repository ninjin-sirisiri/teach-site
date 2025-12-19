export const cssBasics = {
  id: "css-basics",
  category: "css",
  title: "CSS基礎",
  description: "CSSの基本からFlexbox、Grid、アニメーションまで学びましょう",
  content: `
    <div class="content-section">
      <h2 class="section-title">CSSとは？</h2>
      <p class="content-text">
        <strong>CSS (Cascading Style Sheets)</strong>は、HTMLで作成した要素の見た目を装飾するためのスタイルシート言語です。
        色、フォント、レイアウト、アニメーションなどを定義できます。
      </p>
    </div>

    <div class="content-section">
      <h2 class="section-title">CSSの書き方3種類</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">HTML/CSS</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">&lt;!-- 1. 外部CSS（推奨） --&gt;</span>
<span class="tag">&lt;link</span> <span class="attr">rel</span>=<span class="string">"stylesheet"</span> <span class="attr">href</span>=<span class="string">"style.css"</span><span class="tag">&gt;</span>

<span class="comment">&lt;!-- 2. 内部CSS --&gt;</span>
<span class="tag">&lt;style&gt;</span>
  h1 { color: blue; }
<span class="tag">&lt;/style&gt;</span>

<span class="comment">&lt;!-- 3. インラインCSS（避ける） --&gt;</span>
<span class="tag">&lt;p</span> <span class="attr">style</span>=<span class="string">"color: red;"</span><span class="tag">&gt;</span>テキスト<span class="tag">&lt;/p&gt;</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">セレクタの種類</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">CSS</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">/* 要素セレクタ */</span>
<span class="tag">p</span> { <span class="property">color</span>: <span class="value">#333</span>; }

<span class="comment">/* クラスセレクタ（最もよく使う） */</span>
<span class="tag">.button</span> { <span class="property">background</span>: <span class="value">blue</span>; }

<span class="comment">/* IDセレクタ（一意の要素） */</span>
<span class="tag">#header</span> { <span class="property">height</span>: <span class="value">60px</span>; }

<span class="comment">/* 子孫セレクタ */</span>
<span class="tag">.nav a</span> { <span class="property">color</span>: <span class="value">white</span>; }

<span class="comment">/* 直接の子要素 */</span>
<span class="tag">.list > li</span> { <span class="property">margin</span>: <span class="value">10px</span>; }

<span class="comment">/* 複数セレクタ */</span>
<span class="tag">h1, h2, h3</span> { <span class="property">font-weight</span>: <span class="value">bold</span>; }

<span class="comment">/* 擬似クラス */</span>
<span class="tag">a:hover</span> { <span class="property">color</span>: <span class="value">red</span>; }
<span class="tag">li:first-child</span> { <span class="property">font-weight</span>: <span class="value">bold</span>; }
<span class="tag">li:nth-child(2)</span> { <span class="property">background</span>: <span class="value">#eee</span>; }</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">ボックスモデル</h2>
      <p class="content-text">すべてのHTML要素は「ボックス」として扱われます。内側から<strong>content → padding → border → margin</strong>の順です。</p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">CSS</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="tag">.card</span> {
  <span class="comment">/* コンテンツのサイズ */</span>
  <span class="property">width</span>: <span class="value">300px</span>;
  <span class="property">height</span>: <span class="value">auto</span>;
  
  <span class="comment">/* 内側の余白 */</span>
  <span class="property">padding</span>: <span class="value">20px</span>;
  <span class="property">padding</span>: <span class="value">10px 20px</span>; <span class="comment">/* 上下 左右 */</span>
  <span class="property">padding</span>: <span class="value">10px 20px 15px 20px</span>; <span class="comment">/* 上 右 下 左 */</span>
  
  <span class="comment">/* 枠線 */</span>
  <span class="property">border</span>: <span class="value">1px solid #ddd</span>;
  <span class="property">border-radius</span>: <span class="value">8px</span>;
  
  <span class="comment">/* 外側の余白 */</span>
  <span class="property">margin</span>: <span class="value">20px auto</span>; <span class="comment">/* 中央寄せ */</span>
  
  <span class="comment">/* box-sizingでpadding込みの計算に */</span>
  <span class="property">box-sizing</span>: <span class="value">border-box</span>;
}</code></pre>
        </div>
      </div>
      <div class="info-box">
        <span class="info-box-icon">💡</span>
        <div class="info-box-content">
          <div class="info-box-title">ベストプラクティス</div>
          <div class="info-box-text">全要素に <code>box-sizing: border-box</code> を設定すると、widthにpadding/borderが含まれて計算が楽になります。</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">Flexbox（1次元レイアウト）</h2>
      <p class="content-text">横並びや縦並びのレイアウトに最適。ナビゲーションやカード配置によく使います。</p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">CSS</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">/* 親要素（コンテナ） */</span>
<span class="tag">.container</span> {
  <span class="property">display</span>: <span class="value">flex</span>;
  
  <span class="comment">/* 主軸の方向 */</span>
  <span class="property">flex-direction</span>: <span class="value">row</span>;      <span class="comment">/* 横（デフォルト） */</span>
  <span class="property">flex-direction</span>: <span class="value">column</span>;   <span class="comment">/* 縦 */</span>
  
  <span class="comment">/* 主軸の配置 */</span>
  <span class="property">justify-content</span>: <span class="value">flex-start</span>;   <span class="comment">/* 左寄せ */</span>
  <span class="property">justify-content</span>: <span class="value">center</span>;       <span class="comment">/* 中央 */</span>
  <span class="property">justify-content</span>: <span class="value">space-between</span>; <span class="comment">/* 両端揃え */</span>
  
  <span class="comment">/* 交差軸の配置 */</span>
  <span class="property">align-items</span>: <span class="value">center</span>;    <span class="comment">/* 垂直中央 */</span>
  <span class="property">align-items</span>: <span class="value">stretch</span>;   <span class="comment">/* 高さを揃える */</span>
  
  <span class="comment">/* 折り返し */</span>
  <span class="property">flex-wrap</span>: <span class="value">wrap</span>;
  <span class="property">gap</span>: <span class="value">20px</span>; <span class="comment">/* 要素間の隙間 */</span>
}

<span class="comment">/* 子要素 */</span>
<span class="tag">.item</span> {
  <span class="property">flex</span>: <span class="value">1</span>;  <span class="comment">/* 均等に伸びる */</span>
}</code></pre>
        </div>
      </div>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">実用例：ナビゲーション</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="tag">.navbar</span> {
  <span class="property">display</span>: <span class="value">flex</span>;
  <span class="property">justify-content</span>: <span class="value">space-between</span>;
  <span class="property">align-items</span>: <span class="value">center</span>;
  <span class="property">padding</span>: <span class="value">0 20px</span>;
  <span class="property">height</span>: <span class="value">60px</span>;
  <span class="property">background</span>: <span class="value">#333</span>;
}

<span class="tag">.nav-links</span> {
  <span class="property">display</span>: <span class="value">flex</span>;
  <span class="property">gap</span>: <span class="value">30px</span>;
  <span class="property">list-style</span>: <span class="value">none</span>;
}</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">CSS Grid（2次元レイアウト）</h2>
      <p class="content-text">行と列の2次元グリッドでレイアウト。カードグリッドや複雑なレイアウトに最適。</p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">CSS</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="tag">.grid</span> {
  <span class="property">display</span>: <span class="value">grid</span>;
  
  <span class="comment">/* 列の定義 */</span>
  <span class="property">grid-template-columns</span>: <span class="value">1fr 1fr 1fr</span>;  <span class="comment">/* 3等分 */</span>
  <span class="property">grid-template-columns</span>: <span class="value">repeat(3, 1fr)</span>; <span class="comment">/* 同じ意味 */</span>
  <span class="property">grid-template-columns</span>: <span class="value">200px 1fr 200px</span>; <span class="comment">/* 固定+可変 */</span>
  
  <span class="comment">/* レスポンシブなグリッド */</span>
  <span class="property">grid-template-columns</span>: <span class="value">repeat(auto-fit, minmax(280px, 1fr))</span>;
  
  <span class="property">gap</span>: <span class="value">20px</span>;
}

<span class="comment">/* 特定のアイテムを大きく */</span>
<span class="tag">.featured</span> {
  <span class="property">grid-column</span>: <span class="value">span 2</span>; <span class="comment">/* 2列分 */</span>
  <span class="property">grid-row</span>: <span class="value">span 2</span>;    <span class="comment">/* 2行分 */</span>
}</code></pre>
        </div>
      </div>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">実用例：カードグリッド</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="tag">.card-grid</span> {
  <span class="property">display</span>: <span class="value">grid</span>;
  <span class="property">grid-template-columns</span>: <span class="value">repeat(auto-fit, minmax(300px, 1fr))</span>;
  <span class="property">gap</span>: <span class="value">24px</span>;
  <span class="property">padding</span>: <span class="value">20px</span>;
}</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">レスポンシブデザイン</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">CSS</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">/* モバイルファースト */</span>
<span class="tag">.container</span> {
  <span class="property">width</span>: <span class="value">100%</span>;
  <span class="property">padding</span>: <span class="value">15px</span>;
}

<span class="comment">/* タブレット以上 */</span>
<span class="keyword">@media</span> (min-width: <span class="number">768px</span>) {
  <span class="tag">.container</span> {
    <span class="property">max-width</span>: <span class="value">720px</span>;
    <span class="property">margin</span>: <span class="value">0 auto</span>;
  }
}

<span class="comment">/* PC以上 */</span>
<span class="keyword">@media</span> (min-width: <span class="number">1024px</span>) {
  <span class="tag">.container</span> {
    <span class="property">max-width</span>: <span class="value">960px</span>;
  }
  
  <span class="tag">.mobile-menu</span> {
    <span class="property">display</span>: <span class="value">none</span>;
  }
}</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">トランジションとアニメーション</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">CSS</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">/* トランジション（状態変化をスムーズに） */</span>
<span class="tag">.button</span> {
  <span class="property">background</span>: <span class="value">#3b82f6</span>;
  <span class="property">transform</span>: <span class="value">scale(1)</span>;
  <span class="property">transition</span>: <span class="value">all 0.3s ease</span>;
}

<span class="tag">.button:hover</span> {
  <span class="property">background</span>: <span class="value">#2563eb</span>;
  <span class="property">transform</span>: <span class="value">scale(1.05)</span>;
}

<span class="comment">/* アニメーション（自動的に動く） */</span>
<span class="keyword">@keyframes</span> fadeIn {
  <span class="keyword">from</span> {
    <span class="property">opacity</span>: <span class="value">0</span>;
    <span class="property">transform</span>: <span class="value">translateY(20px)</span>;
  }
  <span class="keyword">to</span> {
    <span class="property">opacity</span>: <span class="value">1</span>;
    <span class="property">transform</span>: <span class="value">translateY(0)</span>;
  }
}

<span class="tag">.card</span> {
  <span class="property">animation</span>: <span class="value">fadeIn 0.5s ease forwards</span>;
}</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">CSS変数（カスタムプロパティ）</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">CSS</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">/* 変数を定義 */</span>
<span class="tag">:root</span> {
  <span class="property">--primary</span>: <span class="value">#3b82f6</span>;
  <span class="property">--secondary</span>: <span class="value">#10b981</span>;
  <span class="property">--text</span>: <span class="value">#1f2937</span>;
  <span class="property">--bg</span>: <span class="value">#f9fafb</span>;
  <span class="property">--radius</span>: <span class="value">8px</span>;
  <span class="property">--shadow</span>: <span class="value">0 4px 6px rgba(0,0,0,0.1)</span>;
}

<span class="comment">/* 変数を使用 */</span>
<span class="tag">.button</span> {
  <span class="property">background</span>: <span class="value">var(--primary)</span>;
  <span class="property">border-radius</span>: <span class="value">var(--radius)</span>;
  <span class="property">box-shadow</span>: <span class="value">var(--shadow)</span>;
}

<span class="comment">/* ダークモード */</span>
<span class="keyword">@media</span> (prefers-color-scheme: dark) {
  <span class="tag">:root</span> {
    <span class="property">--text</span>: <span class="value">#f9fafb</span>;
    <span class="property">--bg</span>: <span class="value">#1f2937</span>;
  }
}</code></pre>
        </div>
      </div>
    </div>
  `,
  exercises: [
    {
      question: "要素の外側の余白を指定するプロパティはどれですか？",
      options: ["padding", "margin", "border", "spacing"],
      answer: 1,
      explanation: "marginは要素の外側、paddingは要素の内側の余白を指定します。",
    },
    {
      question:
        "Flexboxにおいて、アイテムを「横並びに中央寄せ」にするためのプロパティの組み合わせはどれですか？（主軸が横の場合）",
      options: [
        "display: block; text-align: center;",
        "display: flex; justify-content: center;",
        "display: grid; align-items: center;",
        "display: flex; flex-direction: column;",
      ],
      answer: 1,
      explanation:
        "display: flexでFlexboxを開始し、justify-content: centerで主軸（横）方向の中央に配置します。",
    },
    {
      question:
        "画面サイズに応じてスタイルを切り替える（レスポンシブ）ために使用する機能は何ですか？",
      options: ["@transform", "@animation", "@media (メディアクエリ)", "@import"],
      answer: 2,
      explanation:
        "メディアクエリ (@media) を使うことで、スマホやPCなどの画面幅に応じたスタイルの適用が可能になります。",
    },
  ],
};
