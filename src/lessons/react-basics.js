export const reactBasics = {
  id: "react-basics",
  category: "react",
  title: "React入門",
  description: "Reactの基本概念からHooks、状態管理、実践的なコンポーネント設計まで学びましょう",
  content: `
    <div class="content-section">
      <h2 class="section-title">Reactとは？</h2>
      <p class="content-text">
        <strong>React</strong>は、Facebookが開発したUIライブラリです。
        コンポーネントベースのアーキテクチャで、再利用可能なUI部品を作成できます。
      </p>
      <div class="info-box">
        <span class="info-box-icon">⚛️</span>
        <div class="info-box-content">
          <div class="info-box-title">Reactの特徴</div>
          <div class="info-box-text">仮想DOM、JSX構文、単方向データフロー、豊富なエコシステム</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">プロジェクトの作成</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">Terminal</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment"># Vite + React（推奨）</span>
npm create vite@latest my-app -- --template react

<span class="comment"># ディレクトリに移動してインストール</span>
cd my-app
npm install
npm run dev</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">JSX構文</h2>
      <p class="content-text">JSXはJavaScript内でHTMLライクな構文を書ける拡張です。</p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JSX</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// JSXの基本ルール</span>
<span class="keyword">function</span> <span class="function">MyComponent</span>() {
  <span class="keyword">const</span> name = <span class="string">'田中'</span>;
  <span class="keyword">const</span> isLoggedIn = <span class="keyword">true</span>;
  <span class="keyword">const</span> items = [<span class="string">'A'</span>, <span class="string">'B'</span>, <span class="string">'C'</span>];

  <span class="keyword">return</span> (
    <span class="comment">{/* 1. 単一の親要素で囲む */}</span>
    <span class="tag">&lt;div&gt;</span>
      <span class="comment">{/* 2. JSはで{}囲む */}</span>
      <span class="tag">&lt;h1&gt;</span>Hello, {name}!<span class="tag">&lt;/h1&gt;</span>
      
      <span class="comment">{/* 3. classはclassName */}</span>
      <span class="tag">&lt;div</span> <span class="attr">className</span>=<span class="string">"container"</span><span class="tag">&gt;</span>
      
        <span class="comment">{/* 4. 条件付きレンダリング */}</span>
        {isLoggedIn && <span class="tag">&lt;p&gt;</span>ログイン中<span class="tag">&lt;/p&gt;</span>}
        {isLoggedIn ? <span class="tag">&lt;p&gt;</span>Welcome<span class="tag">&lt;/p&gt;</span> : <span class="tag">&lt;p&gt;</span>Please login<span class="tag">&lt;/p&gt;</span>}
        
        <span class="comment">{/* 5. リストのレンダリング */}</span>
        <span class="tag">&lt;ul&gt;</span>
          {items.map((item, index) => (
            <span class="tag">&lt;li</span> <span class="attr">key</span>={index}<span class="tag">&gt;</span>{item}<span class="tag">&lt;/li&gt;</span>
          ))}
        <span class="tag">&lt;/ul&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
    <span class="tag">&lt;/div&gt;</span>
  );
}</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">コンポーネント</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JSX</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// 関数コンポーネント（推奨）</span>
<span class="keyword">function</span> <span class="function">Welcome</span>({ name }) {
  <span class="keyword">return</span> <span class="tag">&lt;h1&gt;</span>Hello, {name}<span class="tag">&lt;/h1&gt;</span>;
}

<span class="comment">// アロー関数でも書ける</span>
<span class="keyword">const</span> <span class="function">Button</span> = ({ label, onClick, variant = <span class="string">'primary'</span> }) => {
  <span class="keyword">return</span> (
    <span class="tag">&lt;button</span> 
      <span class="attr">className</span>={<span class="string">\`btn btn-\${variant}\`</span>}
      <span class="attr">onClick</span>={onClick}
    <span class="tag">&gt;</span>
      {label}
    <span class="tag">&lt;/button&gt;</span>
  );
};

<span class="comment">// childrenを使ったコンポーネント</span>
<span class="keyword">const</span> <span class="function">Card</span> = ({ title, children }) => {
  <span class="keyword">return</span> (
    <span class="tag">&lt;div</span> <span class="attr">className</span>=<span class="string">"card"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;h2&gt;</span>{title}<span class="tag">&lt;/h2&gt;</span>
      <span class="tag">&lt;div</span> <span class="attr">className</span>=<span class="string">"card-body"</span><span class="tag">&gt;</span>
        {children}
      <span class="tag">&lt;/div&gt;</span>
    <span class="tag">&lt;/div&gt;</span>
  );
};

<span class="comment">// 使用例</span>
<span class="tag">&lt;Card</span> <span class="attr">title</span>=<span class="string">"お知らせ"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;p&gt;</span>ここに内容が入ります<span class="tag">&lt;/p&gt;</span>
<span class="tag">&lt;/Card&gt;</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">useState - 状態管理</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JSX</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="keyword">import</span> { useState } <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">function</span> <span class="function">Counter</span>() {
  <span class="comment">// [現在の値, 更新関数] = useState(初期値)</span>
  <span class="keyword">const</span> [count, setCount] = useState(<span class="number">0</span>);

  <span class="keyword">return</span> (
    <span class="tag">&lt;div&gt;</span>
      <span class="tag">&lt;p&gt;</span>カウント: {count}<span class="tag">&lt;/p&gt;</span>
      <span class="tag">&lt;button</span> <span class="attr">onClick</span>={() => setCount(count + <span class="number">1</span>)}<span class="tag">&gt;</span>+1<span class="tag">&lt;/button&gt;</span>
      <span class="tag">&lt;button</span> <span class="attr">onClick</span>={() => setCount(c => c - <span class="number">1</span>)}<span class="tag">&gt;</span>-1<span class="tag">&lt;/button&gt;</span>
    <span class="tag">&lt;/div&gt;</span>
  );
}

<span class="comment">// オブジェクトの状態</span>
<span class="keyword">function</span> <span class="function">UserForm</span>() {
  <span class="keyword">const</span> [user, setUser] = useState({ name: <span class="string">''</span>, email: <span class="string">''</span> });

  <span class="keyword">const</span> handleChange = (e) => {
    <span class="keyword">const</span> { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  <span class="keyword">return</span> (
    <span class="tag">&lt;form&gt;</span>
      <span class="tag">&lt;input</span> <span class="attr">name</span>=<span class="string">"name"</span> <span class="attr">value</span>={user.name} <span class="attr">onChange</span>={handleChange} <span class="tag">/&gt;</span>
      <span class="tag">&lt;input</span> <span class="attr">name</span>=<span class="string">"email"</span> <span class="attr">value</span>={user.email} <span class="attr">onChange</span>={handleChange} <span class="tag">/&gt;</span>
    <span class="tag">&lt;/form&gt;</span>
  );
}</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">useEffect - 副作用</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JSX</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="keyword">import</span> { useState, useEffect } <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">function</span> <span class="function">UserProfile</span>({ userId }) {
  <span class="keyword">const</span> [user, setUser] = useState(<span class="keyword">null</span>);
  <span class="keyword">const</span> [loading, setLoading] = useState(<span class="keyword">true</span>);

  <span class="comment">// userIdが変わるたびに実行</span>
  useEffect(() => {
    <span class="keyword">const</span> fetchUser = <span class="keyword">async</span> () => {
      setLoading(<span class="keyword">true</span>);
      <span class="keyword">const</span> res = <span class="keyword">await</span> fetch(<span class="string">\`/api/users/\${userId}\`</span>);
      <span class="keyword">const</span> data = <span class="keyword">await</span> res.json();
      setUser(data);
      setLoading(<span class="keyword">false</span>);
    };
    fetchUser();
  }, [userId]); <span class="comment">// 依存配列</span>

  <span class="keyword">if</span> (loading) <span class="keyword">return</span> <span class="tag">&lt;p&gt;</span>Loading...<span class="tag">&lt;/p&gt;</span>;
  <span class="keyword">return</span> <span class="tag">&lt;p&gt;</span>{user?.name}<span class="tag">&lt;/p&gt;</span>;
}

<span class="comment">// クリーンアップ（イベントリスナーの解除など）</span>
useEffect(() => {
  <span class="keyword">const</span> handleResize = () => console.log(window.innerWidth);
  window.addEventListener(<span class="string">'resize'</span>, handleResize);
  
  <span class="comment">// クリーンアップ関数</span>
  <span class="keyword">return</span> () => {
    window.removeEventListener(<span class="string">'resize'</span>, handleResize);
  };
}, []);</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">イベント処理</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JSX</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="keyword">function</span> <span class="function">Form</span>() {
  <span class="keyword">const</span> [value, setValue] = useState(<span class="string">''</span>);

  <span class="keyword">const</span> handleSubmit = (e) => {
    e.preventDefault();
    console.log(<span class="string">'送信:'</span>, value);
  };

  <span class="keyword">return</span> (
    <span class="tag">&lt;form</span> <span class="attr">onSubmit</span>={handleSubmit}<span class="tag">&gt;</span>
      <span class="tag">&lt;input</span>
        <span class="attr">type</span>=<span class="string">"text"</span>
        <span class="attr">value</span>={value}
        <span class="attr">onChange</span>={(e) => setValue(e.target.value)}
        <span class="attr">placeholder</span>=<span class="string">"入力してください"</span>
      <span class="tag">/&gt;</span>
      <span class="tag">&lt;button</span> <span class="attr">type</span>=<span class="string">"submit"</span><span class="tag">&gt;</span>送信<span class="tag">&lt;/button&gt;</span>
    <span class="tag">&lt;/form&gt;</span>
  );
}</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">実践：Todoリスト</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">JSX</span>
          <button class="code-copy" onclick="copyCode(this)">コピー</button>
        </div>
        <div class="code-content">
<pre><code><span class="keyword">import</span> { useState } <span class="keyword">from</span> <span class="string">'react'</span>;

<span class="keyword">function</span> <span class="function">TodoApp</span>() {
  <span class="keyword">const</span> [todos, setTodos] = useState([]);
  <span class="keyword">const</span> [input, setInput] = useState(<span class="string">''</span>);

  <span class="keyword">const</span> addTodo = () => {
    <span class="keyword">if</span> (!input.trim()) <span class="keyword">return</span>;
    setTodos([...todos, { id: Date.now(), text: input, done: <span class="keyword">false</span> }]);
    setInput(<span class="string">''</span>);
  };

  <span class="keyword">const</span> toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  <span class="keyword">const</span> deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  <span class="keyword">return</span> (
    <span class="tag">&lt;div</span> <span class="attr">className</span>=<span class="string">"todo-app"</span><span class="tag">&gt;</span>
      <span class="tag">&lt;h1&gt;</span>Todo List<span class="tag">&lt;/h1&gt;</span>
      <span class="tag">&lt;div</span> <span class="attr">className</span>=<span class="string">"input-group"</span><span class="tag">&gt;</span>
        <span class="tag">&lt;input</span>
          <span class="attr">value</span>={input}
          <span class="attr">onChange</span>={(e) => setInput(e.target.value)}
          <span class="attr">onKeyPress</span>={(e) => e.key === <span class="string">'Enter'</span> && addTodo()}
        <span class="tag">/&gt;</span>
        <span class="tag">&lt;button</span> <span class="attr">onClick</span>={addTodo}<span class="tag">&gt;</span>追加<span class="tag">&lt;/button&gt;</span>
      <span class="tag">&lt;/div&gt;</span>
      <span class="tag">&lt;ul&gt;</span>
        {todos.map(todo => (
          <span class="tag">&lt;li</span> <span class="attr">key</span>={todo.id} <span class="attr">className</span>={todo.done ? <span class="string">'done'</span> : <span class="string">''</span>}<span class="tag">&gt;</span>
            <span class="tag">&lt;span</span> <span class="attr">onClick</span>={() => toggleTodo(todo.id)}<span class="tag">&gt;</span>
              {todo.text}
            <span class="tag">&lt;/span&gt;</span>
            <span class="tag">&lt;button</span> <span class="attr">onClick</span>={() => deleteTodo(todo.id)}<span class="tag">&gt;</span>削除<span class="tag">&lt;/button&gt;</span>
          <span class="tag">&lt;/li&gt;</span>
        ))}
      <span class="tag">&lt;/ul&gt;</span>
    <span class="tag">&lt;/div&gt;</span>
  );
}</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">コンポーネント分割のベストプラクティス</h2>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">ファイル構成</span>
        </div>
        <div class="code-content">
<pre><code>src/
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   └── Header.jsx
├── pages/
│   ├── Home.jsx
│   └── About.jsx
├── hooks/
│   └── useFetch.js
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx</code></pre>
        </div>
      </div>
      <div class="info-box">
        <span class="info-box-icon">💡</span>
        <div class="info-box-content">
          <div class="info-box-title">ポイント</div>
          <div class="info-box-text">1ファイル1コンポーネント、再利用可能な部品は components/ に、ページ単位は pages/ に配置しましょう。</div>
        </div>
      </div>
    </div>
  `,
  exercises: [
    {
      question:
        "Reactにおいて、ボタンのクリック回数などの「時間とともに変化するデータ」を管理するために使うHookは何ですか？",
      options: ["useEffect", "useState", "useContext", "useRef"],
      answer: 1,
      explanation:
        "useStateは、コンポーネント内で「状態（state）」を管理し、その変化に応じてUIを再描画するために使用します。",
    },
    {
      question: "JSXにおいて、HTMLの class 属性を指定する際に使用する名前は何ですか？",
      options: ["class", "className", "classList", "cssClass"],
      answer: 1,
      explanation: "JavaScriptの予約語との衝突を避けるため、JSXでは className を使用します。",
    },
    {
      question:
        "データの取得やタイマーの設定など、レンダリング以外の処理（副作用）を記述するために使うHookは何ですか？",
      options: ["useState", "useEffect", "useMemo", "useCallback"],
      answer: 1,
      explanation:
        "useEffectは、レンダリング後に実行される副作用（API呼び出しなど）を記述するために使用します。",
    },
  ],
};
