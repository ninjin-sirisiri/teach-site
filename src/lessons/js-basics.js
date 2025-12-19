export const jsBasics = {
  id: "js-basics",
  category: "js",
  title: "JavaScript基礎",
  description: "JavaScriptの基本からDOM操作、イベント処理、非同期処理まで学びましょう",
  content: `
    <div class="content-section">
      <h2 class="section-title">JavaScriptとは？</h2>
      <p class="content-text">
        <strong>JavaScript</strong>は、Webページに動的な機能を追加するためのプログラミング言語です。
        ユーザーの操作に反応したり、データを処理したり、ページの内容を動的に変更できます。
      </p>
    </div>

    <div class="content-section">
      <h2 class="section-title">変数の宣言</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JavaScript</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// const: 再代入不可（推奨）</span>
<span class="keyword">const</span> name = <span class="string">'田中'</span>;
<span class="keyword">const</span> user = { name: <span class="string">'太郎'</span> }; <span class="comment">// オブジェクトの中身は変更可能</span>

<span class="comment">// let: 再代入が必要な時のみ使う</span>
<span class="keyword">let</span> count = <span class="number">0</span>;
count = count + <span class="number">1</span>; <span class="comment">// OK</span>

<span class="comment">// var: 古い書き方（使わない）</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">データ型</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JavaScript</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// プリミティブ型</span>
<span class="keyword">const</span> str = <span class="string">'Hello'</span>;           <span class="comment">// String</span>
<span class="keyword">const</span> num = <span class="number">42</span>;                 <span class="comment">// Number</span>
<span class="keyword">const</span> bool = <span class="keyword">true</span>;              <span class="comment">// Boolean</span>
<span class="keyword">const</span> empty = <span class="keyword">null</span>;             <span class="comment">// Null</span>
<span class="keyword">const</span> notDefined = <span class="keyword">undefined</span>;   <span class="comment">// Undefined</span>

<span class="comment">// 配列</span>
<span class="keyword">const</span> fruits = [<span class="string">'apple'</span>, <span class="string">'banana'</span>, <span class="string">'orange'</span>];
console.log(fruits[<span class="number">0</span>]); <span class="comment">// 'apple'</span>
console.log(fruits.length); <span class="comment">// 3</span>

<span class="comment">// オブジェクト</span>
<span class="keyword">const</span> user = {
  name: <span class="string">'田中'</span>,
  age: <span class="number">25</span>,
  email: <span class="string">'tanaka@example.com'</span>
};
console.log(user.name); <span class="comment">// '田中'</span>
console.log(user[<span class="string">'age'</span>]); <span class="comment">// 25</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">関数</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JavaScript</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// 関数宣言</span>
<span class="keyword">function</span> <span class="function">greet</span>(name) {
  <span class="keyword">return</span> <span class="string">\`こんにちは、\${name}さん！\`</span>;
}

<span class="comment">// アロー関数（モダンな書き方）</span>
<span class="keyword">const</span> <span class="function">add</span> = (a, b) => a + b;

<span class="keyword">const</span> <span class="function">multiply</span> = (a, b) => {
  <span class="keyword">const</span> result = a * b;
  <span class="keyword">return</span> result;
};

<span class="comment">// デフォルト引数</span>
<span class="keyword">const</span> <span class="function">greetUser</span> = (name = <span class="string">'ゲスト'</span>) => {
  <span class="keyword">return</span> <span class="string">\`Hello, \${name}!\`</span>;
};

<span class="comment">// 分割代入を使った引数</span>
<span class="keyword">const</span> <span class="function">printUser</span> = ({ name, age }) => {
  console.log(<span class="string">\`\${name}は\${age}歳\`</span>);
};</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">配列のメソッド</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JavaScript</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="keyword">const</span> numbers = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>];

<span class="comment">// map: 各要素を変換して新しい配列を作る</span>
<span class="keyword">const</span> doubled = numbers.map(n => n * <span class="number">2</span>);
<span class="comment">// [2, 4, 6, 8, 10]</span>

<span class="comment">// filter: 条件に合う要素だけ抽出</span>
<span class="keyword">const</span> evens = numbers.filter(n => n % <span class="number">2</span> === <span class="number">0</span>);
<span class="comment">// [2, 4]</span>

<span class="comment">// find: 条件に合う最初の要素を取得</span>
<span class="keyword">const</span> found = numbers.find(n => n > <span class="number">3</span>);
<span class="comment">// 4</span>

<span class="comment">// reduce: 配列を1つの値にまとめる</span>
<span class="keyword">const</span> sum = numbers.reduce((acc, n) => acc + n, <span class="number">0</span>);
<span class="comment">// 15</span>

<span class="comment">// forEach: 各要素に対して処理（返り値なし）</span>
numbers.forEach(n => console.log(n));

<span class="comment">// some / every: 条件チェック</span>
numbers.some(n => n > <span class="number">4</span>);  <span class="comment">// true（1つでも満たせば）</span>
numbers.every(n => n > <span class="number">0</span>); <span class="comment">// true（全て満たせば）</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">DOM操作</h2>
      <p class="content-text">DOM（Document Object Model）を使って、HTMLの要素を取得・変更できます。</p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JavaScript</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// 要素の取得</span>
<span class="keyword">const</span> element = document.getElementById(<span class="string">'myId'</span>);
<span class="keyword">const</span> element = document.querySelector(<span class="string">'.myClass'</span>); <span class="comment">// 最初の1つ</span>
<span class="keyword">const</span> elements = document.querySelectorAll(<span class="string">'.myClass'</span>); <span class="comment">// 全て</span>

<span class="comment">// テキストの変更</span>
element.textContent = <span class="string">'新しいテキスト'</span>;

<span class="comment">// HTMLの変更</span>
element.innerHTML = <span class="string">'&lt;strong&gt;太字&lt;/strong&gt;'</span>;

<span class="comment">// 属性の操作</span>
element.setAttribute(<span class="string">'href'</span>, <span class="string">'https://example.com'</span>);
element.getAttribute(<span class="string">'href'</span>);

<span class="comment">// クラスの操作</span>
element.classList.add(<span class="string">'active'</span>);
element.classList.remove(<span class="string">'active'</span>);
element.classList.toggle(<span class="string">'active'</span>);
element.classList.contains(<span class="string">'active'</span>); <span class="comment">// true/false</span>

<span class="comment">// スタイルの変更</span>
element.style.color = <span class="string">'red'</span>;
element.style.backgroundColor = <span class="string">'#f0f0f0'</span>;</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">要素の作成と追加</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JavaScript</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// 新しい要素を作成</span>
<span class="keyword">const</span> newDiv = document.createElement(<span class="string">'div'</span>);
newDiv.className = <span class="string">'card'</span>;
newDiv.textContent = <span class="string">'新しいカード'</span>;

<span class="comment">// 親要素に追加</span>
<span class="keyword">const</span> container = document.querySelector(<span class="string">'.container'</span>);
container.appendChild(newDiv);

<span class="comment">// 特定の位置に挿入</span>
container.insertBefore(newDiv, container.firstChild);

<span class="comment">// 要素の削除</span>
element.remove();

<span class="comment">// テンプレートリテラルでHTML生成</span>
<span class="keyword">const</span> items = [<span class="string">'A'</span>, <span class="string">'B'</span>, <span class="string">'C'</span>];
container.innerHTML = items.map(item => <span class="string">\`
  &lt;div class="item"&gt;\${item}&lt;/div&gt;
\`</span>).join(<span class="string">''</span>);</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">イベント処理</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JavaScript</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="keyword">const</span> button = document.querySelector(<span class="string">'#myButton'</span>);

<span class="comment">// クリックイベント</span>
button.addEventListener(<span class="string">'click'</span>, (event) => {
  console.log(<span class="string">'クリックされました'</span>);
  event.preventDefault(); <span class="comment">// デフォルト動作を防ぐ</span>
});

<span class="comment">// よく使うイベント</span>
element.addEventListener(<span class="string">'click'</span>, handler);     <span class="comment">// クリック</span>
element.addEventListener(<span class="string">'submit'</span>, handler);    <span class="comment">// フォーム送信</span>
element.addEventListener(<span class="string">'input'</span>, handler);     <span class="comment">// 入力（リアルタイム）</span>
element.addEventListener(<span class="string">'change'</span>, handler);    <span class="comment">// 変更確定時</span>
element.addEventListener(<span class="string">'keydown'</span>, handler);   <span class="comment">// キー押下</span>
element.addEventListener(<span class="string">'mouseover'</span>, handler); <span class="comment">// ホバー</span>

<span class="comment">// フォームの例</span>
<span class="keyword">const</span> form = document.querySelector(<span class="string">'#myForm'</span>);
form.addEventListener(<span class="string">'submit'</span>, (e) => {
  e.preventDefault();
  <span class="keyword">const</span> formData = <span class="keyword">new</span> FormData(form);
  <span class="keyword">const</span> name = formData.get(<span class="string">'name'</span>);
  console.log(name);
});</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">非同期処理（fetch API）</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JavaScript</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// データを取得（async/await）</span>
<span class="keyword">async function</span> <span class="function">fetchUsers</span>() {
  <span class="keyword">try</span> {
    <span class="keyword">const</span> response = <span class="keyword">await</span> fetch(<span class="string">'https://api.example.com/users'</span>);
    
    <span class="keyword">if</span> (!response.ok) {
      <span class="keyword">throw new</span> Error(<span class="string">'エラーが発生しました'</span>);
    }
    
    <span class="keyword">const</span> users = <span class="keyword">await</span> response.json();
    console.log(users);
    <span class="keyword">return</span> users;
  } <span class="keyword">catch</span> (error) {
    console.error(<span class="string">'Fetch error:'</span>, error);
  }
}

<span class="comment">// データを送信（POST）</span>
<span class="keyword">async function</span> <span class="function">createUser</span>(userData) {
  <span class="keyword">const</span> response = <span class="keyword">await</span> fetch(<span class="string">'https://api.example.com/users'</span>, {
    method: <span class="string">'POST'</span>,
    headers: {
      <span class="string">'Content-Type'</span>: <span class="string">'application/json'</span>,
    },
    body: JSON.stringify(userData),
  });
  <span class="keyword">return</span> response.json();
}</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">ローカルストレージ</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JavaScript</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// 保存</span>
localStorage.setItem(<span class="string">'theme'</span>, <span class="string">'dark'</span>);

<span class="comment">// 取得</span>
<span class="keyword">const</span> theme = localStorage.getItem(<span class="string">'theme'</span>);

<span class="comment">// 削除</span>
localStorage.removeItem(<span class="string">'theme'</span>);

<span class="comment">// オブジェクトの保存（JSON化が必要）</span>
<span class="keyword">const</span> user = { name: <span class="string">'田中'</span>, age: <span class="number">25</span> };
localStorage.setItem(<span class="string">'user'</span>, JSON.stringify(user));

<span class="comment">// オブジェクトの取得</span>
<span class="keyword">const</span> savedUser = JSON.parse(localStorage.getItem(<span class="string">'user'</span>));</code></pre>
        </div>
      </div>
    </div>
  `,
  exercises: [
    {
      question: "再代入が不可能な定数を宣言するためのキーワードはどれですか？",
      options: ["let", "var", "const", "def"],
      answer: 2,
      explanation: "constは定数を宣言するキーワードで、一度代入した値を変更（再代入）できません。",
    },
    {
      question:
        "配列の各要素に対して処理を行い、その結果から新しい配列を作成するメソッドはどれですか？",
      options: ["forEach", "filter", "map", "push"],
      answer: 2,
      explanation:
        "mapメソッドは、元の配列の各要素に関数を適用し、その戻り値で構成される新しい配列を返します。",
    },
    {
      question: "要素のクリック時に処理を実行するために使用するメソッドはどれですか？",
      options: [
        "element.setEvent('click', ...)",
        "element.addEventListener('click', ...)",
        "element.onClick(...)",
        "element.click(...)",
      ],
      answer: 1,
      explanation:
        "addEventListener('click', handler) を使うことで、クリックイベントに対する処理（リスナー）を登録できます。",
    },
  ],
};
