export const webIntro = {
  id: "web-intro",
  category: "intro",
  title: "Web開発入門",
  description: "Webの仕組みと開発に必要な技術の全体像を理解しましょう",
  content: `
    <div class="content-section">
      <h2 class="section-title">Webサイトはどう動いているの？</h2>
      <p class="content-text">
        私たちが普段使っているWebサイトは、<strong>クライアント（ブラウザ）</strong>と<strong>サーバー</strong>の間でデータをやり取りすることで動いています。
      </p>
      <div class="info-box">
        <span class="info-box-icon">🌐</span>
        <div class="info-box-content">
          <div class="info-box-title">Webの基本的な流れ</div>
          <div class="info-box-text">
            1. ユーザーがブラウザでURLを入力<br>
            2. ブラウザがサーバーにリクエストを送信<br>
            3. サーバーがHTML/CSS/JSなどのファイルを返す<br>
            4. ブラウザがファイルを解析してページを表示
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">フロントエンドとバックエンド</h2>
      <p class="content-text">
        Web開発は大きく<strong>フロントエンド</strong>と<strong>バックエンド</strong>の2つに分けられます。
      </p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>領域</th><th>役割</th><th>使用技術</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>フロントエンド</strong></td>
              <td>ユーザーが直接見て操作する部分</td>
              <td>HTML, CSS, JavaScript</td>
            </tr>
            <tr>
              <td><strong>バックエンド</strong></td>
              <td>データ処理やサーバー側の処理</td>
              <td>Node.js, Python, PHP, データベースなど</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="content-text">
        このサイトでは<strong>フロントエンド</strong>の技術を中心に学びます。
        フロントエンドだけでも、見た目が美しく、動きのあるWebサイトを作ることができます。
      </p>
    </div>

    <div class="content-section">
      <h2 class="section-title">Web開発の3つの柱</h2>
      <p class="content-text">
        Webページは主に3つの技術で構成されています。それぞれが異なる役割を持っています。
      </p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>技術</th><th>役割</th><th>例え</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>HTML</strong></td>
              <td>構造・骨格</td>
              <td>家でいう骨組み、柱</td>
            </tr>
            <tr>
              <td><strong>CSS</strong></td>
              <td>見た目・装飾</td>
              <td>家でいう外壁、内装</td>
            </tr>
            <tr>
              <td><strong>JavaScript</strong></td>
              <td>動き・機能</td>
              <td>家でいう電気、水道</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="info-box">
        <span class="info-box-icon">💡</span>
        <div class="info-box-content">
          <div class="info-box-title">ポイント</div>
          <div class="info-box-text">HTMLだけでもWebページは作れますが、CSSがないと見た目が質素で、JavaScriptがないと動きがありません。3つを組み合わせることで、魅力的なWebサイトが完成します。</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">開発に必要なツール</h2>
      <p class="content-text">Web開発を始めるには、以下のツールを準備しましょう。</p>
      <ul>
        <li><strong>テキストエディタ</strong> - コードを書くためのツール（VS Code推奨）</li>
        <li><strong>Webブラウザ</strong> - 作ったサイトを確認（Chrome、Firefox推奨）</li>
        <li><strong>開発者ツール</strong> - ブラウザに内蔵（F12キーで開く）</li>
      </ul>
      <div class="info-box">
        <span class="info-box-icon">🛠️</span>
        <div class="info-box-content">
          <div class="info-box-title">VS Codeのおすすめ拡張機能</div>
          <div class="info-box-text">
            • Live Server - 変更を自動で反映<br>
            • Prettier - コードを自動整形<br>
            • Auto Rename Tag - HTMLタグを自動で閉じる
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">学習の進め方</h2>
      <p class="content-text">このサイトでは、以下の順番で学習することをおすすめします。</p>
      <ol>
        <li><strong>HTMLを学ぶ</strong> - Webページの構造を理解</li>
        <li><strong>CSSを学ぶ</strong> - 見た目を装飾する方法を習得</li>
        <li><strong>JavaScriptを学ぶ</strong> - 動的な機能を実装</li>
        <li><strong>React</strong> - 効率的なUI構築（オプション）</li>
        <li><strong>Tailwind CSS</strong> - 高速なスタイリング（オプション）</li>
      </ol>
      <p class="content-text">
        各レッスンにはコード例が含まれています。<strong>実際に手を動かして書いてみる</strong>ことで、理解が深まります。
      </p>
    </div>

    <div class="content-section">
      <h2 class="section-title">モダンWeb開発とは？</h2>
      <p class="content-text">
        現在のWeb開発では、HTML/CSS/JavaScriptに加えて、様々な<strong>フレームワーク</strong>や<strong>ツール</strong>が使われています。
      </p>
      <ul>
        <li><strong>React, Vue, Angular</strong> - UIを効率的に構築するJavaScriptライブラリ/フレームワーク</li>
        <li><strong>Tailwind CSS, Bootstrap</strong> - CSSを効率的に書くためのフレームワーク</li>
        <li><strong>npm, Vite</strong> - パッケージ管理と開発環境のツール</li>
        <li><strong>Git, GitHub</strong> - コードのバージョン管理と共有</li>
      </ul>
      <p class="content-text">
        これらは基礎を理解してから学ぶことで、より効果的に活用できます。
        まずはHTML, CSS, JavaScriptの基礎をしっかり身につけましょう！
      </p>
    </div>
  `,
  exercises: [
    {
      question: "ユーザーが直接見て操作するWebサイトの部分を何と呼びますか？",
      options: ["バックエンド", "フロントエンド", "データベース", "サーバー"],
      answer: 1,
      explanation: "ユーザーが直接目にする部分はフロントエンドと呼ばれます。",
    },
    {
      question: "Webサイトの「骨組み（構造）」を担当する言語はどれですか？",
      options: ["JavaScript", "CSS", "HTML", "PHP"],
      answer: 2,
      explanation: "HTMLはWebサイトの構造や骨組みを担当します。",
    },
  ],
};
