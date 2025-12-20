/**
 * JavaScript 応用レッスン
 * 非同期処理、モジュール、エラーハンドリングなど
 */
export const jsAdvanced = {
  id: "js-advanced",
  title: "JavaScript 応用",
  description:
    "非同期処理、モジュールシステム、エラーハンドリングなど、実践的なJavaScriptを学びます。",
  category: "js",
  content: `
    <div class="content-section">
      <h2 class="section-title">🔄 非同期処理とは</h2>
      <p class="content-text">
        JavaScriptは<strong>シングルスレッド</strong>で動作しますが、非同期処理により時間のかかる操作（ネットワークリクエスト、ファイル読み込みなど）を効率的に処理できます。
      </p>
      
      <div class="info-box">
        <div class="info-box-icon">💡</div>
        <div class="info-box-content">
          <div class="info-box-title">同期 vs 非同期</div>
          <div class="info-box-text">同期処理は上から順番に実行されますが、非同期処理は「待つ間に別の処理を進める」ことができます。</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">📦 Promise</h2>
      <p class="content-text">
        Promiseは非同期処理の結果を表すオブジェクトです。成功（resolve）または失敗（reject）の状態を持ちます。
      </p>
      
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JavaScript</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
          <pre><code><span class="comment">// Promiseの基本</span>
<span class="keyword">const</span> <span class="function">fetchData</span> = () => {
  <span class="keyword">return new</span> <span class="function">Promise</span>((<span class="attr">resolve</span>, <span class="attr">reject</span>) => {
    <span class="function">setTimeout</span>(() => {
      <span class="keyword">const</span> success = <span class="keyword">true</span>;
      <span class="keyword">if</span> (success) {
        <span class="function">resolve</span>({ data: <span class="string">"データ取得成功!"</span> });
      } <span class="keyword">else</span> {
        <span class="function">reject</span>(<span class="keyword">new</span> <span class="function">Error</span>(<span class="string">"取得失敗"</span>));
      }
    }, <span class="number">1000</span>);
  });
};

<span class="comment">// Promiseの使用</span>
<span class="function">fetchData</span>()
  .<span class="function">then</span>(result => <span class="function">console.log</span>(result.data))
  .<span class="function">catch</span>(error => <span class="function">console.error</span>(error))
  .<span class="function">finally</span>(() => <span class="function">console.log</span>(<span class="string">"処理完了"</span>));</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">⏳ async/await</h2>
      <p class="content-text">
        <code>async/await</code>はPromiseをより読みやすく書くための構文です。まるで同期処理のように非同期コードを書けます。
      </p>
      
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JavaScript</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
          <pre><code><span class="comment">// async/awaitを使った非同期処理</span>
<span class="keyword">async function</span> <span class="function">loadUserData</span>() {
  <span class="keyword">try</span> {
    <span class="function">console.log</span>(<span class="string">"データ取得中..."</span>);
    
    <span class="keyword">const</span> response = <span class="keyword">await</span> <span class="function">fetch</span>(<span class="string">'https://api.example.com/user'</span>);
    <span class="keyword">const</span> user = <span class="keyword">await</span> response.<span class="function">json</span>();
    
    <span class="function">console.log</span>(<span class="string">"ユーザー:"</span>, user.name);
    <span class="keyword">return</span> user;
  } <span class="keyword">catch</span> (error) {
    <span class="function">console.error</span>(<span class="string">"エラー:"</span>, error.message);
    <span class="keyword">throw</span> error;
  }
}

<span class="comment">// 複数の非同期処理を並列実行</span>
<span class="keyword">async function</span> <span class="function">loadAllData</span>() {
  <span class="keyword">const</span> [users, posts] = <span class="keyword">await</span> <span class="function">Promise.all</span>([
    <span class="function">fetch</span>(<span class="string">'/api/users'</span>).<span class="function">then</span>(r => r.<span class="function">json</span>()),
    <span class="function">fetch</span>(<span class="string">'/api/posts'</span>).<span class="function">then</span>(r => r.<span class="function">json</span>())
  ]);
  <span class="keyword">return</span> { users, posts };
}</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">📁 モジュールシステム</h2>
      <p class="content-text">
        ES Modulesを使って、コードを複数のファイルに分割し、再利用可能にします。
      </p>
      
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JavaScript (math.js)</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
          <pre><code><span class="comment">// 名前付きエクスポート</span>
<span class="keyword">export const</span> PI = <span class="number">3.14159</span>;

<span class="keyword">export function</span> <span class="function">add</span>(<span class="attr">a</span>, <span class="attr">b</span>) {
  <span class="keyword">return</span> a + b;
}

<span class="keyword">export function</span> <span class="function">multiply</span>(<span class="attr">a</span>, <span class="attr">b</span>) {
  <span class="keyword">return</span> a * b;
}

<span class="comment">// デフォルトエクスポート</span>
<span class="keyword">export default class</span> <span class="function">Calculator</span> {
  <span class="function">calculate</span>(expression) {
    <span class="keyword">return</span> <span class="function">eval</span>(expression);
  }
}</code></pre>
        </div>
      </div>
      
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JavaScript (main.js)</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
          <pre><code><span class="comment">// インポート</span>
<span class="keyword">import</span> Calculator, { PI, add, multiply } <span class="keyword">from</span> <span class="string">'./math.js'</span>;

<span class="function">console.log</span>(PI);                  <span class="comment">// 3.14159</span>
<span class="function">console.log</span>(<span class="function">add</span>(<span class="number">2</span>, <span class="number">3</span>));           <span class="comment">// 5</span>
<span class="function">console.log</span>(<span class="function">multiply</span>(<span class="number">4</span>, <span class="number">5</span>));     <span class="comment">// 20</span>

<span class="keyword">const</span> calc = <span class="keyword">new</span> <span class="function">Calculator</span>();
<span class="function">console.log</span>(calc.<span class="function">calculate</span>(<span class="string">'2 + 2'</span>)); <span class="comment">// 4</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">⚠️ エラーハンドリング</h2>
      <p class="content-text">
        堅牢なアプリケーションのためには、適切なエラーハンドリングが不可欠です。
      </p>
      
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JavaScript</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
          <pre><code><span class="comment">// カスタムエラークラス</span>
<span class="keyword">class</span> <span class="function">ValidationError</span> <span class="keyword">extends</span> Error {
  <span class="function">constructor</span>(<span class="attr">message</span>, <span class="attr">field</span>) {
    <span class="keyword">super</span>(message);
    <span class="keyword">this</span>.name = <span class="string">'ValidationError'</span>;
    <span class="keyword">this</span>.field = field;
  }
}

<span class="comment">// エラーをスローして捕捉</span>
<span class="keyword">function</span> <span class="function">validateAge</span>(<span class="attr">age</span>) {
  <span class="keyword">if</span> (<span class="keyword">typeof</span> age !== <span class="string">'number'</span>) {
    <span class="keyword">throw new</span> <span class="function">ValidationError</span>(<span class="string">'年齢は数値で入力してください'</span>, <span class="string">'age'</span>);
  }
  <span class="keyword">if</span> (age < <span class="number">0</span> || age > <span class="number">150</span>) {
    <span class="keyword">throw new</span> <span class="function">ValidationError</span>(<span class="string">'有効な年齢を入力してください'</span>, <span class="string">'age'</span>);
  }
  <span class="keyword">return</span> <span class="keyword">true</span>;
}

<span class="keyword">try</span> {
  <span class="function">validateAge</span>(<span class="string">'二十歳'</span>);
} <span class="keyword">catch</span> (error) {
  <span class="keyword">if</span> (error <span class="keyword">instanceof</span> ValidationError) {
    <span class="function">console.error</span>(<span class="string">\`フィールド: \${error.field}, メッセージ: \${error.message}\`</span>);
  } <span class="keyword">else</span> {
    <span class="keyword">throw</span> error; <span class="comment">// 予期しないエラーは再スロー</span>
  }
}</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">🔧 実践的なパターン</h2>
      
      <h3 style="margin: 1rem 0 0.5rem; color: var(--text-primary);">デバウンスとスロットリング</h3>
      <p class="content-text">
        パフォーマンス最適化のための重要なテクニックです。
      </p>
      
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JavaScript</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
          <pre><code><span class="comment">// デバウンス: 最後の呼び出しから一定時間後に実行</span>
<span class="keyword">function</span> <span class="function">debounce</span>(<span class="attr">func</span>, <span class="attr">wait</span>) {
  <span class="keyword">let</span> timeout;
  <span class="keyword">return function</span> (...<span class="attr">args</span>) {
    <span class="function">clearTimeout</span>(timeout);
    timeout = <span class="function">setTimeout</span>(() => <span class="function">func.apply</span>(<span class="keyword">this</span>, args), wait);
  };
}

<span class="comment">// 使用例: 検索入力</span>
<span class="keyword">const</span> searchInput = document.<span class="function">getElementById</span>(<span class="string">'search'</span>);
searchInput.<span class="function">addEventListener</span>(<span class="string">'input'</span>, <span class="function">debounce</span>((e) => {
  <span class="function">console.log</span>(<span class="string">'検索:'</span>, e.target.value);
}, <span class="number">300</span>));

<span class="comment">// スロットリング: 一定間隔で実行</span>
<span class="keyword">function</span> <span class="function">throttle</span>(<span class="attr">func</span>, <span class="attr">limit</span>) {
  <span class="keyword">let</span> inThrottle;
  <span class="keyword">return function</span> (...<span class="attr">args</span>) {
    <span class="keyword">if</span> (!inThrottle) {
      <span class="function">func.apply</span>(<span class="keyword">this</span>, args);
      inThrottle = <span class="keyword">true</span>;
      <span class="function">setTimeout</span>(() => inThrottle = <span class="keyword">false</span>, limit);
    }
  };
}

<span class="comment">// 使用例: スクロールイベント</span>
window.<span class="function">addEventListener</span>(<span class="string">'scroll'</span>, <span class="function">throttle</span>(() => {
  <span class="function">console.log</span>(<span class="string">'スクロール位置:'</span>, window.scrollY);
}, <span class="number">100</span>));</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">📝 まとめ</h2>
      <ul>
        <li><strong>Promise</strong>: 非同期処理の結果を表すオブジェクト</li>
        <li><strong>async/await</strong>: Promiseをより読みやすく書くシンタックスシュガー</li>
        <li><strong>ES Modules</strong>: コードを分割して再利用可能にする</li>
        <li><strong>エラーハンドリング</strong>: try/catchで適切にエラーを処理</li>
        <li><strong>デバウンス/スロットリング</strong>: パフォーマンス最適化のテクニック</li>
      </ul>
    </div>
  `,
  exercises: [
    {
      question: "async関数は何を返しますか？",
      options: ["undefined", "Promise", "boolean", "Object"],
      answer: 1,
      explanation:
        "async関数は常にPromiseを返します。戻り値は自動的にPromise.resolve()でラップされます。",
    },
    {
      question: "Promise.all()の動作として正しいのはどれですか？",
      options: [
        "最初に完了したPromiseの結果を返す",
        "すべてのPromiseが完了するまで待ち、結果を配列で返す",
        "順番にPromiseを実行する",
        "エラーが発生しても処理を続ける",
      ],
      answer: 1,
      explanation:
        "Promise.all()はすべてのPromiseが解決されるまで待ち、結果を配列として返します。一つでも失敗すると全体が失敗します。",
    },
    {
      question: "デバウンスの主な用途として適切なのはどれですか？",
      options: [
        "APIレスポンスの高速化",
        "検索入力時のAPI呼び出し回数を減らす",
        "ページ読み込み速度の向上",
        "メモリ使用量の削減",
      ],
      answer: 1,
      explanation:
        "デバウンスは、ユーザーの入力が止まってから処理を実行するため、検索入力時のAPI呼び出し回数を減らすのに最適です。",
    },
  ],
};
