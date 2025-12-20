export const gitIntro = {
  id: "git-intro",
  category: "git",
  title: "Git入門",
  description:
    "バージョン管理システムGitの基本概念と、なぜプログラミングに不可欠なのかを学びましょう",
  content: `
    <div class="content-section">
      <h2 class="section-title">Gitとは何か？</h2>
      <p class="content-text">
        <strong>Git（ギット）</strong>は、ファイルの変更履歴を記録・管理するための「分散型バージョン管理システム」です。
        2005年にLinuxの生みの親であるリーナス・トーバルズによって開発されました。
      </p>
      <div class="info-box">
        <span class="info-box-icon">💡</span>
        <div class="info-box-content">
          <div class="info-box-title">バージョン管理が必要な理由</div>
          <div class="info-box-text">
            「間違えてファイルを消してしまった」「昨日のコードに戻したい」「複数人で同じファイルを編集したい」といった問題を解決するために不可欠なツールです。
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">Gitの主要な概念</h2>
      <p class="content-text">
        Gitを使いこなすために、まずは以下の3つの基礎用語を理解しましょう。
      </p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>用語</th><th>説明</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>リポジトリ (Repository)</strong></td><td>ファイルやフォルダの変更履歴を保存する場所</td></tr>
            <tr><td><strong>コミット (Commit)</strong></td><td>ファイルの追加や変更を履歴として記録（保存）する操作</td></tr>
            <tr><td><strong>ブランチ (Branch)</strong></td><td>履歴の流れを分岐させる機能。機能追加やバグ修正を並行して行える</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">Gitの仕組み（ワークツリー、ステージング、リポジトリ）</h2>
      <p class="content-text">
        Gitで変更を保存するには、3つのエリアを経由します。
      </p>
      <ol>
        <li><strong>ワークツリー（作業ディレクトリ）</strong>：実際にファイルを編集している場所</li>
        <li><strong>ステージングエリア（インデックス）</strong>：コミットするファイルを一時的に登録する場所</li>
        <li><strong>ローカルリポジトリ</strong>：変更履歴が永久に保存される場所</li>
      </ol>
      <div class="info-box">
        <span class="info-box-icon">📝</span>
        <div class="info-box-content">
          <div class="info-box-title">フローの流れ</div>
          <div class="info-box-text">
            編集 (Worktree) → <code>git add</code> (Staging) → <code>git commit</code> (Local Repository)
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">基本的なGitコマンド</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">Bash</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment"># リポジトリを新しく作成する</span>
git init

<span class="comment"># ファイルをステージングエリアに追加する</span>
git add ファイル名
git add . <span class="comment"># 全ての変更を追加</span>

<span class="comment"># 変更を記録（コミット）する</span>
git commit -m "修正内容のメッセージ"

<span class="comment"># 現在の状態（変更されたファイルなど）を確認する</span>
git status

<span class="comment"># 過去のコミット履歴を確認する</span>
git log</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">Gitを使うメリット</h2>
      <ul>
        <li><strong>過去の状態に簡単に戻せる</strong> - 失敗を恐れずに開発できます</li>
        <li><strong>バックアップになる</strong> - 履歴が残るため、データ消失のリスクを減らせます</li>
        <li><strong>複数人での共同開発がスムーズ</strong> - 誰がいつ何を修正したかが明確になります</li>
        <li><strong>ブランチによる並行開発</strong> - 本番環境を汚さずに新機能を開発できます</li>
      </ul>
    </div>
  `,
  exercises: [
    {
      question: "ファイルの変更履歴を保存する場所を何と呼びますか？",
      options: ["リポジトリ", "ディレクトリ", "インデックス", "ステージ"],
      answer: 0,
      explanation: "Gitにおいて、変更履歴を保存する場所を「リポジトリ」と呼びます。",
    },
    {
      question:
        "ファイルをステージングエリア（インデックス）に登録するためのコマンドはどれですか？",
      options: ["git commit", "git push", "git add", "git status"],
      answer: 2,
      explanation:
        "git addコマンドを使用することで、変更したファイルをコミットの対象として登録（ステージング）できます。",
    },
  ],
};
