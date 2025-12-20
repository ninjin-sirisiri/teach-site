/**
 * デプロイガイドレッスン
 * Webサイトを公開する方法を解説
 */
export const deployGuide = {
  id: "deploy-guide",
  title: "Webサイトのデプロイ",
  description:
    "作成したWebサイトをインターネットに公開する方法を学びます。GitHub Pages、Vercel、Netlifyを解説します。",
  category: "intro",
  content: `
    <div class="content-section">
      <h2 class="section-title">🌐 デプロイとは</h2>
      <p class="content-text">
        <strong>デプロイ</strong>とは、作成したWebサイトやアプリケーションをサーバーに配置し、インターネット上で公開することです。
        開発環境（ローカル）で動いていたものを、誰でもアクセスできる状態にします。
      </p>
      
      <div class="info-box">
        <div class="info-box-icon">🚀</div>
        <div class="info-box-content">
          <div class="info-box-title">無料でデプロイできる！</div>
          <div class="info-box-text">GitHub Pages、Vercel、Netlifyなど、静的サイトなら無料で簡単にデプロイできるサービスがあります。</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">📚 GitHub Pages</h2>
      <p class="content-text">
        GitHubのリポジトリから直接Webサイトをホスティングできる無料サービスです。静的サイトに最適です。
      </p>
      
      <h3 style="margin: 1rem 0 0.5rem; color: var(--text-primary);">手動でデプロイ</h3>
      <ol>
        <li>GitHubにリポジトリを作成</li>
        <li>コードをプッシュ</li>
        <li>Settings → Pages に移動</li>
        <li>Source を「Deploy from a branch」に設定</li>
        <li>Branch を「main」（または「gh-pages」）に選択</li>
      </ol>
      
      <h3 style="margin: 1.5rem 0 0.5rem; color: var(--text-primary);">GitHub Actionsで自動デプロイ</h3>
      <p class="content-text">
        Viteなどのビルドツールを使っている場合は、GitHub Actionsで自動ビルド＆デプロイを設定します。
      </p>
      
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">.github/workflows/deploy.yml</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
          <pre><code><span class="attr">name</span>: <span class="string">Deploy to GitHub Pages</span>

<span class="attr">on</span>:
  <span class="attr">push</span>:
    <span class="attr">branches</span>: [<span class="string">main</span>]

<span class="attr">permissions</span>:
  <span class="attr">contents</span>: <span class="string">read</span>
  <span class="attr">pages</span>: <span class="string">write</span>
  <span class="attr">id-token</span>: <span class="string">write</span>

<span class="attr">jobs</span>:
  <span class="attr">build</span>:
    <span class="attr">runs-on</span>: <span class="string">ubuntu-latest</span>
    <span class="attr">steps</span>:
      - <span class="attr">uses</span>: <span class="string">actions/checkout@v4</span>
      
      - <span class="attr">name</span>: <span class="string">Setup Node.js</span>
        <span class="attr">uses</span>: <span class="string">actions/setup-node@v4</span>
        <span class="attr">with</span>:
          <span class="attr">node-version</span>: <span class="string">'20'</span>
          <span class="attr">cache</span>: <span class="string">'npm'</span>
      
      - <span class="attr">name</span>: <span class="string">Install dependencies</span>
        <span class="attr">run</span>: <span class="string">npm ci</span>
      
      - <span class="attr">name</span>: <span class="string">Build</span>
        <span class="attr">run</span>: <span class="string">npm run build</span>
      
      - <span class="attr">name</span>: <span class="string">Upload artifact</span>
        <span class="attr">uses</span>: <span class="string">actions/upload-pages-artifact@v3</span>
        <span class="attr">with</span>:
          <span class="attr">path</span>: <span class="string">'./dist'</span>

  <span class="attr">deploy</span>:
    <span class="attr">needs</span>: <span class="string">build</span>
    <span class="attr">runs-on</span>: <span class="string">ubuntu-latest</span>
    <span class="attr">environment</span>:
      <span class="attr">name</span>: <span class="string">github-pages</span>
      <span class="attr">url</span>: <span class="string">\${{ steps.deployment.outputs.page_url }}</span>
    <span class="attr">steps</span>:
      - <span class="attr">name</span>: <span class="string">Deploy to GitHub Pages</span>
        <span class="attr">id</span>: <span class="string">deployment</span>
        <span class="attr">uses</span>: <span class="string">actions/deploy-pages@v4</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">▲ Vercel</h2>
      <p class="content-text">
        Vercelは、特にNext.jsプロジェクトに最適化されたホスティングサービスですが、あらゆるフロントエンドプロジェクトをデプロイできます。
      </p>
      
      <h3 style="margin: 1rem 0 0.5rem; color: var(--text-primary);">Vercelの特徴</h3>
      <ul>
        <li>GitHub連携で自動デプロイ</li>
        <li>プルリクエストごとにプレビュー環境を自動作成</li>
        <li>サーバーレスファンクション対応</li>
        <li>エッジネットワークによる高速配信</li>
      </ul>
      
      <h3 style="margin: 1.5rem 0 0.5rem; color: var(--text-primary);">デプロイ手順</h3>
      <ol>
        <li><a href="https://vercel.com" target="_blank">vercel.com</a> でアカウント作成</li>
        <li>「New Project」をクリック</li>
        <li>GitHubリポジトリを選択</li>
        <li>ビルド設定を確認（Viteなら自動検出）</li>
        <li>「Deploy」をクリック</li>
      </ol>
      
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">Terminal</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
          <pre><code><span class="comment"># Vercel CLIでデプロイ</span>
npm install -g vercel
vercel

<span class="comment"># 本番環境にデプロイ</span>
vercel --prod</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">🔷 Netlify</h2>
      <p class="content-text">
        Netlifyも人気のホスティングサービスで、静的サイトからサーバーレスアプリまで対応しています。
      </p>
      
      <h3 style="margin: 1rem 0 0.5rem; color: var(--text-primary);">Netlifyの特徴</h3>
      <ul>
        <li>ドラッグ&ドロップでデプロイ可能</li>
        <li>フォーム機能が組み込み</li>
        <li>分割テスト（A/Bテスト）機能</li>
        <li>無料のSSL証明書</li>
      </ul>
      
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">netlify.toml</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
          <pre><code><span class="comment"># Netlify設定ファイル</span>
[<span class="attr">build</span>]
  <span class="attr">command</span> = <span class="string">"npm run build"</span>
  <span class="attr">publish</span> = <span class="string">"dist"</span>

[[<span class="attr">redirects</span>]]
  <span class="attr">from</span> = <span class="string">"/*"</span>
  <span class="attr">to</span> = <span class="string">"/index.html"</span>
  <span class="attr">status</span> = <span class="number">200</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">🔧 Viteプロジェクトの設定</h2>
      <p class="content-text">
        Viteを使っている場合、デプロイ先のパスに合わせて<code>base</code>を設定する必要があります。
      </p>
      
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">vite.config.js</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
          <pre><code><span class="keyword">import</span> { defineConfig } <span class="keyword">from</span> <span class="string">'vite'</span>;

<span class="keyword">export default</span> <span class="function">defineConfig</span>({
  <span class="comment">// GitHub Pagesの場合（リポジトリ名に合わせる）</span>
  <span class="attr">base</span>: <span class="string">'/my-repository/'</span>,
  
  <span class="comment">// Vercel/Netlifyの場合（ルートにデプロイ）</span>
  <span class="comment">// base: '/',</span>
});</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">🔒 カスタムドメインの設定</h2>
      <p class="content-text">
        独自ドメインを使いたい場合は、DNSレコードの設定が必要です。
      </p>
      
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>サービス</th>
              <th>設定方法</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GitHub Pages</td>
              <td>Settings → Pages → Custom domain でドメインを入力</td>
            </tr>
            <tr>
              <td>Vercel</td>
              <td>Project Settings → Domains でドメイン追加</td>
            </tr>
            <tr>
              <td>Netlify</td>
              <td>Domain settings → Add custom domain</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="info-box">
        <div class="info-box-icon">📌</div>
        <div class="info-box-content">
          <div class="info-box-title">DNS設定</div>
          <div class="info-box-text">CNAMEレコードまたはAレコードをドメインレジストラで設定します。各サービスのドキュメントで確認してください。</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">📊 サービス比較</h2>
      
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>機能</th>
              <th>GitHub Pages</th>
              <th>Vercel</th>
              <th>Netlify</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>無料プラン</td>
              <td>✅</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>自動デプロイ</td>
              <td>✅ (Actions)</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>プレビュー環境</td>
              <td>❌</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>サーバーレス関数</td>
              <td>❌</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>学習コスト</td>
              <td>低</td>
              <td>低</td>
              <td>低</td>
            </tr>
            <tr>
              <td>おすすめ用途</td>
              <td>個人サイト、ポートフォリオ</td>
              <td>Next.js、React</td>
              <td>静的サイト、JAMstack</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">📝 まとめ</h2>
      <ul>
        <li><strong>GitHub Pages</strong>: GitHubと連携、静的サイトに最適</li>
        <li><strong>Vercel</strong>: Next.js最適化、自動プレビュー環境</li>
        <li><strong>Netlify</strong>: ドラッグ&ドロップ対応、フォーム機能内蔵</li>
        <li><strong>Vite</strong>: <code>base</code>オプションでパスを設定</li>
        <li><strong>カスタムドメイン</strong>: DNS設定で独自ドメインを使用可能</li>
      </ul>
    </div>
  `,
  exercises: [
    {
      question:
        "GitHub Pagesで静的サイトをホストする場合、どのブランチがデフォルトで使われますか？",
      options: ["develop", "gh-pages または main", "deploy", "release"],
      answer: 1,
      explanation:
        "GitHub Pagesでは通常、mainブランチまたはgh-pagesブランチからデプロイします。Settingsで選択できます。",
    },
    {
      question: "Viteプロジェクトをサブディレクトリにデプロイする場合、どの設定が必要ですか？",
      options: [
        "publicPath を設定",
        "base オプションを設定",
        "output を設定",
        "deploy オプションを設定",
      ],
      answer: 1,
      explanation: "Viteでは vite.config.js の base オプションでデプロイ先のパスを設定します。",
    },
    {
      question: "プルリクエストごとに自動でプレビュー環境を作成できるサービスはどれですか？",
      options: ["GitHub Pages のみ", "Vercel と Netlify", "Netlify のみ", "すべてのサービス"],
      answer: 1,
      explanation:
        "VercelとNetlifyは、プルリクエストごとに自動でプレビュー環境を作成します。GitHub Pagesにはこの機能はありません。",
    },
  ],
};
