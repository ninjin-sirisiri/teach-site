export const githubBasics = {
  id: "github-basics",
  category: "git",
  title: "GitHubの基本",
  description: "クラウドでコードを管理・共有するサービスGitHubの使い方を学びましょう",
  content: `
    <div class="content-section">
      <h2 class="section-title">GitHubとは何か？</h2>
      <p class="content-text">
        <strong>GitHub（ギットハブ）</strong>は、Gitを利用した世界最大のソフトウェア開発プラットフォームです。
        Gitのリポジトリをオンライン上に保存（ホスティング）し、世界中の開発者とコードを共有したり、共同開発したりすることができます。
      </p>
      <div class="info-box">
        <span class="info-box-icon">🤝</span>
        <div class="info-box-content">
          <div class="info-box-title">GitとGitHubの違い</div>
          <div class="info-box-text">
            <strong>Git</strong>はツール（ソフトウェア）そのもの。<br>
            <strong>GitHub</strong>はGitを使ったWebサービス（場所）です。
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">リモートリポジトリとの連携</h2>
      <p class="content-text">
        自分のPC（ローカル）にある履歴を、GitHub上（リモート）にアップロードすることでバックアップや共有が可能になります。
      </p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>操作</th><th>コマンド</th><th>説明</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>プッシュ (Push)</strong></td><td><code>git push</code></td><td>ローカルの変更をリモートへ送信</td></tr>
            <tr><td><strong>プル (Pull)</strong></td><td><code>git pull</code></td><td>リモートの最新の状態を手元へ取得</td></tr>
            <tr><td><strong>クローン (Clone)</strong></td><td><code>git clone</code></td><td>GitHub上の既存リポジトリを丸ごとダウンロード</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">GitHubの主要な機能</h2>
      <div class="feature-grid">
        <div class="feature-item">
          <h3>Issues（イシュー）</h3>
          <p>バグの報告や、次にやるべき作業（タスク）を管理する掲示板です。</p>
        </div>
        <div class="feature-item">
          <h3>Pull Requests（プルリクエスト）</h3>
          <p>変更内容を他の開発者に確認（レビュー）してもらい、メインのコードに取り込んでもらうための依頼機能です。</p>
        </div>
        <div class="feature-item">
          <h3>GitHub Actions</h3>
          <p>テストやビルド、デプロイといった作業を自動化する機能です。</p>
        </div>
        <div class="feature-item">
          <h3>GitHub Pages</h3>
          <p>リポジトリのコードから直接Webサイトを公開できる機能です。</p>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">基本的なワークフロー</h2>
      <ol>
        <li>GitHubでリポジトリを作成する</li>
        <li>ローカルのリポジトリを作成、またはクローンする</li>
        <li>ファイルを編集し、コミットする (<code>git commit</code>)</li>
        <li>GitHubへ変更を送信する (<code>git push</code>)</li>
        <li>（共同開発時）プルリクエストを作成し、レビューを受ける</li>
      </ol>
    </div>

    <div class="content-section">
      <h2 class="section-title">エンジニアのポートフォリオとしてのGitHub</h2>
      <p class="content-text">
        エンジニアの採用現場では、GitHubのプロフィールや作成したコードが「どのようなコードを書くのか」「どのような活動をしているのか」を判断する材料（ポートフォリオ）として非常に重視されます。
      </p>
    </div>
  `,
  exercises: [
    {
      question: "ローカルの変更をGitHub上のリモートリポジトリに送信する操作を何と呼びますか？",
      options: ["プル (Pull)", "プッシュ (Push)", "クローン (Clone)", "コミット (Commit)"],
      answer: 1,
      explanation:
        "手元の変更をオンライン（GitHub）に送信する操作を「プッシュ (Push)」と呼びます。",
    },
    {
      question:
        "他の開発者にコードのレビューを依頼し、変更を取り込んでもらうためのGitHubの機能は何ですか？",
      options: ["Issues", "Fork", "Pull Request", "Merge"],
      answer: 2,
      explanation:
        "Pull Request（プルリクエスト）は、変更を提案し、レビューを経てコードを統合するためのGitHubの主要な機能です。",
    },
  ],
};
