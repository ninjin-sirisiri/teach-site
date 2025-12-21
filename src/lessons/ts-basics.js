export const tsBasics = {
  id: "ts-basics",
  category: "ts",
  title: "TypeScript基礎",
  description: "TypeScriptの基本的な型、関数の型付け、インターフェース、Union型を学びましょう",
  content: `
    <div class="content-section">
      <h2 class="section-title">基本的な型（プリミティブ型）</h2>
      <p class="content-text">
        TypeScriptでは、変数や関数に<strong>型注釈（Type Annotation）</strong>を付けることで、
        どのような値が入るかを明示的に指定できます。まずは基本的なプリミティブ型から見ていきましょう。
      </p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">TypeScript</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// string型: 文字列</span>
<span class="keyword">let</span> name: <span class="type">string</span> = <span class="string">"田中太郎"</span>;
<span class="keyword">let</span> greeting: <span class="type">string</span> = <span class="string">\`こんにちは、\${name}さん\`</span>;

<span class="comment">// number型: 数値（整数・小数どちらも）</span>
<span class="keyword">let</span> age: <span class="type">number</span> = <span class="number">25</span>;
<span class="keyword">let</span> price: <span class="type">number</span> = <span class="number">1980.5</span>;
<span class="keyword">let</span> hex: <span class="type">number</span> = <span class="number">0xff</span>; <span class="comment">// 16進数もOK</span>

<span class="comment">// boolean型: 真偽値</span>
<span class="keyword">let</span> isActive: <span class="type">boolean</span> = <span class="keyword">true</span>;
<span class="keyword">let</span> hasPermission: <span class="type">boolean</span> = <span class="keyword">false</span>;

<span class="comment">// null と undefined</span>
<span class="keyword">let</span> empty: <span class="type">null</span> = <span class="keyword">null</span>;
<span class="keyword">let</span> notAssigned: <span class="type">undefined</span> = <span class="keyword">undefined</span>;</code></pre>
        </div>
      </div>
      <div class="info-box">
        <span class="info-box-icon">💡</span>
        <div class="info-box-content">
          <div class="info-box-title">型推論</div>
          <div class="info-box-text">TypeScriptは初期値から型を推論できるため、明らかな場合は型注釈を省略できます。<code>let age = 25;</code> は自動的に number 型と推論されます。</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">配列の型注釈</h2>
      <p class="content-text">
        配列には2つの書き方があります。どちらも同じ意味ですが、チームで統一することが重要です。
      </p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">TypeScript</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// 書き方1: 型名[]</span>
<span class="keyword">let</span> numbers: <span class="type">number[]</span> = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>];
<span class="keyword">let</span> names: <span class="type">string[]</span> = [<span class="string">"田中"</span>, <span class="string">"佐藤"</span>, <span class="string">"鈴木"</span>];

<span class="comment">// 書き方2: Array&lt;型名&gt;（ジェネリクス構文）</span>
<span class="keyword">let</span> scores: <span class="type">Array&lt;number&gt;</span> = [<span class="number">85</span>, <span class="number">90</span>, <span class="number">78</span>];
<span class="keyword">let</span> flags: <span class="type">Array&lt;boolean&gt;</span> = [<span class="keyword">true</span>, <span class="keyword">false</span>, <span class="keyword">true</span>];

<span class="comment">// 配列の操作も型安全</span>
numbers.push(<span class="number">6</span>);      <span class="comment">// OK</span>
<span class="comment">// numbers.push("7"); // エラー: string は number に割り当てられません</span>

<span class="comment">// 空配列の場合は型注釈が必要</span>
<span class="keyword">let</span> items: <span class="type">string[]</span> = [];
items.push(<span class="string">"apple"</span>); <span class="comment">// OK</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">オブジェクトの型注釈</h2>
      <p class="content-text">
        オブジェクトの型は、各プロパティの名前と型を指定して定義します。
      </p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">TypeScript</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// インラインでオブジェクト型を定義</span>
<span class="keyword">let</span> user: { name: <span class="type">string</span>; age: <span class="type">number</span> } = {
  name: <span class="string">"田中"</span>,
  age: <span class="number">25</span>
};

<span class="comment">// オプショナルプロパティ（?をつける）</span>
<span class="keyword">let</span> product: { 
  name: <span class="type">string</span>; 
  price: <span class="type">number</span>; 
  description?: <span class="type">string</span>  <span class="comment">// あってもなくてもOK</span>
} = {
  name: <span class="string">"TypeScript入門書"</span>,
  price: <span class="number">2980</span>
  <span class="comment">// descriptionは省略可能</span>
};

<span class="comment">// 読み取り専用プロパティ</span>
<span class="keyword">let</span> config: { 
  <span class="keyword">readonly</span> apiKey: <span class="type">string</span>; 
  timeout: <span class="type">number</span> 
} = {
  apiKey: <span class="string">"abc123"</span>,
  timeout: <span class="number">5000</span>
};
<span class="comment">// config.apiKey = "xyz"; // エラー: 読み取り専用</span>
config.timeout = <span class="number">3000</span>; <span class="comment">// OK</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">関数の型付け</h2>
      <p class="content-text">
        関数では、<strong>パラメータの型</strong>と<strong>戻り値の型</strong>を指定できます。
        これにより、関数の使い方が明確になり、誤った引数を渡すミスを防げます。
      </p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">TypeScript</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// パラメータ型と戻り値型</span>
<span class="keyword">function</span> <span class="function">add</span>(a: <span class="type">number</span>, b: <span class="type">number</span>): <span class="type">number</span> {
  <span class="keyword">return</span> a + b;
}

<span class="comment">// アロー関数での型付け</span>
<span class="keyword">const</span> <span class="function">multiply</span> = (x: <span class="type">number</span>, y: <span class="type">number</span>): <span class="type">number</span> => x * y;

<span class="comment">// 戻り値がない関数は void</span>
<span class="keyword">function</span> <span class="function">logMessage</span>(message: <span class="type">string</span>): <span class="type">void</span> {
  console.log(message);
}

<span class="comment">// 使用例</span>
<span class="keyword">const</span> result = add(<span class="number">10</span>, <span class="number">20</span>); <span class="comment">// result は number 型</span>
<span class="comment">// add("10", "20"); // エラー: string は number に割り当てられません</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">オプショナル引数とデフォルト引数</h2>
      <p class="content-text">
        関数の引数は、省略可能にしたり、デフォルト値を設定したりできます。
      </p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">TypeScript</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// オプショナル引数（?をつける）</span>
<span class="keyword">function</span> <span class="function">greet</span>(name: <span class="type">string</span>, title?: <span class="type">string</span>): <span class="type">string</span> {
  <span class="keyword">if</span> (title) {
    <span class="keyword">return</span> <span class="string">\`こんにちは、\${title} \${name}さん\`</span>;
  }
  <span class="keyword">return</span> <span class="string">\`こんにちは、\${name}さん\`</span>;
}

greet(<span class="string">"田中"</span>);           <span class="comment">// "こんにちは、田中さん"</span>
greet(<span class="string">"田中"</span>, <span class="string">"部長"</span>);   <span class="comment">// "こんにちは、部長 田中さん"</span>

<span class="comment">// デフォルト引数</span>
<span class="keyword">function</span> <span class="function">createUser</span>(
  name: <span class="type">string</span>,
  role: <span class="type">string</span> = <span class="string">"member"</span>,
  active: <span class="type">boolean</span> = <span class="keyword">true</span>
) {
  <span class="keyword">return</span> { name, role, active };
}

createUser(<span class="string">"田中"</span>);                    <span class="comment">// { name: "田中", role: "member", active: true }</span>
createUser(<span class="string">"佐藤"</span>, <span class="string">"admin"</span>);           <span class="comment">// { name: "佐藤", role: "admin", active: true }</span>
createUser(<span class="string">"鈴木"</span>, <span class="string">"guest"</span>, <span class="keyword">false</span>);   <span class="comment">// { name: "鈴木", role: "guest", active: false }</span></code></pre>
        </div>
      </div>
      <div class="info-box">
        <span class="info-box-icon">⚠️</span>
        <div class="info-box-content">
          <div class="info-box-title">注意</div>
          <div class="info-box-text">オプショナル引数は必須引数の後に配置する必要があります。デフォルト引数がある場合は型注釈を省略できます（型推論される）。</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">インターフェース（interface）</h2>
      <p class="content-text">
        <strong>インターフェース</strong>は、オブジェクトの形状（shape）を定義するための構文です。
        再利用可能な型定義を作成でき、コードの可読性と保守性が向上します。
      </p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">TypeScript</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// インターフェースの定義</span>
<span class="keyword">interface</span> <span class="type">User</span> {
  id: <span class="type">number</span>;
  name: <span class="type">string</span>;
  email: <span class="type">string</span>;
  age?: <span class="type">number</span>;  <span class="comment">// オプショナル</span>
}

<span class="comment">// インターフェースを使用</span>
<span class="keyword">const</span> user: <span class="type">User</span> = {
  id: <span class="number">1</span>,
  name: <span class="string">"田中太郎"</span>,
  email: <span class="string">"tanaka@example.com"</span>
};

<span class="comment">// 関数の引数にも使える</span>
<span class="keyword">function</span> <span class="function">printUser</span>(user: <span class="type">User</span>): <span class="type">void</span> {
  console.log(<span class="string">\`\${user.name} (\${user.email})\`</span>);
}

<span class="comment">// インターフェースの拡張</span>
<span class="keyword">interface</span> <span class="type">Admin</span> <span class="keyword">extends</span> <span class="type">User</span> {
  permissions: <span class="type">string[]</span>;
}

<span class="keyword">const</span> admin: <span class="type">Admin</span> = {
  id: <span class="number">2</span>,
  name: <span class="string">"佐藤管理者"</span>,
  email: <span class="string">"sato@example.com"</span>,
  permissions: [<span class="string">"read"</span>, <span class="string">"write"</span>, <span class="string">"delete"</span>]
};</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">型エイリアス（type）</h2>
      <p class="content-text">
        <strong>型エイリアス</strong>は、型に別名をつける機能です。
        インターフェースと似ていますが、より柔軟な型定義が可能です。
      </p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">TypeScript</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// 型エイリアスの定義</span>
<span class="keyword">type</span> <span class="type">ID</span> = <span class="type">number</span> | <span class="type">string</span>;

<span class="keyword">type</span> <span class="type">Point</span> = {
  x: <span class="type">number</span>;
  y: <span class="type">number</span>;
};

<span class="comment">// 使用例</span>
<span class="keyword">let</span> userId: <span class="type">ID</span> = <span class="number">123</span>;
userId = <span class="string">"user-456"</span>; <span class="comment">// どちらもOK</span>

<span class="keyword">const</span> point: <span class="type">Point</span> = { x: <span class="number">10</span>, y: <span class="number">20</span> };

<span class="comment">// 関数型の定義</span>
<span class="keyword">type</span> <span class="type">Calculator</span> = (a: <span class="type">number</span>, b: <span class="type">number</span>) => <span class="type">number</span>;

<span class="keyword">const</span> add: <span class="type">Calculator</span> = (a, b) => a + b;
<span class="keyword">const</span> subtract: <span class="type">Calculator</span> = (a, b) => a - b;

<span class="comment">// 交差型（Intersection Type）</span>
<span class="keyword">type</span> <span class="type">Named</span> = { name: <span class="type">string</span> };
<span class="keyword">type</span> <span class="type">Aged</span> = { age: <span class="type">number</span> };
<span class="keyword">type</span> <span class="type">Person</span> = <span class="type">Named</span> & <span class="type">Aged</span>;

<span class="keyword">const</span> person: <span class="type">Person</span> = { name: <span class="string">"田中"</span>, age: <span class="number">30</span> };</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">interface vs type の比較</h2>
      <p class="content-text">
        どちらを使うべきか迷うことがありますが、基本的なガイドラインがあります。
      </p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr><th>特徴</th><th>interface</th><th>type</th></tr>
          </thead>
          <tbody>
            <tr><td>オブジェクト型の定義</td><td>✅</td><td>✅</td></tr>
            <tr><td>拡張（extends）</td><td>✅</td><td>交差型（&）で代用</td></tr>
            <tr><td>Union型の定義</td><td>❌</td><td>✅</td></tr>
            <tr><td>プリミティブ型のエイリアス</td><td>❌</td><td>✅</td></tr>
            <tr><td>宣言のマージ</td><td>✅</td><td>❌</td></tr>
          </tbody>
        </table>
      </div>
      <div class="info-box">
        <span class="info-box-icon">📝</span>
        <div class="info-box-content">
          <div class="info-box-title">使い分けの目安</div>
          <div class="info-box-text">オブジェクトの形状を定義する場合は <code>interface</code>、Union型や複雑な型を定義する場合は <code>type</code> を使うのが一般的です。</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">Union型（ユニオン型）</h2>
      <p class="content-text">
        <strong>Union型</strong>は、複数の型のいずれかを許容する型です。
        <code>|</code>（パイプ）で型を区切って定義します。
      </p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">TypeScript</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// Union型の基本</span>
<span class="keyword">let</span> id: <span class="type">string</span> | <span class="type">number</span>;
id = <span class="string">"abc123"</span>;  <span class="comment">// OK</span>
id = <span class="number">456</span>;       <span class="comment">// OK</span>
<span class="comment">// id = true;   // エラー: boolean は割り当てられません</span>

<span class="comment">// 関数の引数にUnion型</span>
<span class="keyword">function</span> <span class="function">printId</span>(id: <span class="type">string</span> | <span class="type">number</span>): <span class="type">void</span> {
  console.log(<span class="string">\`ID: \${id}\`</span>);
}

printId(<span class="string">"user-123"</span>);
printId(<span class="number">456</span>);

<span class="comment">// リテラル型とUnion型の組み合わせ</span>
<span class="keyword">type</span> <span class="type">Status</span> = <span class="string">"pending"</span> | <span class="string">"approved"</span> | <span class="string">"rejected"</span>;

<span class="keyword">function</span> <span class="function">updateStatus</span>(status: <span class="type">Status</span>): <span class="type">void</span> {
  console.log(<span class="string">\`Status updated to: \${status}\`</span>);
}

updateStatus(<span class="string">"approved"</span>);  <span class="comment">// OK</span>
<span class="comment">// updateStatus("unknown"); // エラー: 許可された値以外</span></code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">型の絞り込み（Type Narrowing）</h2>
      <p class="content-text">
        Union型を使う場合、実際にどの型なのかを判定して処理を分岐させる必要があります。
        これを<strong>型の絞り込み</strong>と呼びます。
      </p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">TypeScript</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// typeof による絞り込み</span>
<span class="keyword">function</span> <span class="function">processValue</span>(value: <span class="type">string</span> | <span class="type">number</span>): <span class="type">string</span> {
  <span class="keyword">if</span> (<span class="keyword">typeof</span> value === <span class="string">"string"</span>) {
    <span class="comment">// このブロック内では value は string 型</span>
    <span class="keyword">return</span> value.toUpperCase();
  } <span class="keyword">else</span> {
    <span class="comment">// このブロック内では value は number 型</span>
    <span class="keyword">return</span> value.toFixed(<span class="number">2</span>);
  }
}

console.log(processValue(<span class="string">"hello"</span>));  <span class="comment">// "HELLO"</span>
console.log(processValue(<span class="number">3.14159</span>));  <span class="comment">// "3.14"</span>

<span class="comment">// instanceof による絞り込み（クラスの場合）</span>
<span class="keyword">class</span> <span class="type">Dog</span> {
  bark() { console.log(<span class="string">"ワン！"</span>); }
}

<span class="keyword">class</span> <span class="type">Cat</span> {
  meow() { console.log(<span class="string">"ニャー！"</span>); }
}

<span class="keyword">function</span> <span class="function">makeSound</span>(animal: <span class="type">Dog</span> | <span class="type">Cat</span>): <span class="type">void</span> {
  <span class="keyword">if</span> (animal <span class="keyword">instanceof</span> Dog) {
    animal.bark();  <span class="comment">// Dog型として認識</span>
  } <span class="keyword">else</span> {
    animal.meow();  <span class="comment">// Cat型として認識</span>
  }
}</code></pre>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">実践的な型の絞り込み</h2>
      <p class="content-text">
        より複雑なケースでの型の絞り込み方法を見てみましょう。
      </p>
      <div class="code-block">
        <div class="code-header">
          <span class="code-lang">TypeScript</span>
        </div>
        <div class="code-content">
<pre><code><span class="comment">// in演算子による絞り込み</span>
<span class="keyword">interface</span> <span class="type">Bird</span> {
  fly(): <span class="type">void</span>;
  layEggs(): <span class="type">void</span>;
}

<span class="keyword">interface</span> <span class="type">Fish</span> {
  swim(): <span class="type">void</span>;
  layEggs(): <span class="type">void</span>;
}

<span class="keyword">function</span> <span class="function">move</span>(animal: <span class="type">Bird</span> | <span class="type">Fish</span>): <span class="type">void</span> {
  <span class="keyword">if</span> (<span class="string">"fly"</span> <span class="keyword">in</span> animal) {
    animal.fly();   <span class="comment">// Bird型として認識</span>
  } <span class="keyword">else</span> {
    animal.swim();  <span class="comment">// Fish型として認識</span>
  }
}

<span class="comment">// 判別可能なUnion型（Discriminated Union）</span>
<span class="keyword">interface</span> <span class="type">SuccessResponse</span> {
  status: <span class="string">"success"</span>;
  data: <span class="type">string</span>;
}

<span class="keyword">interface</span> <span class="type">ErrorResponse</span> {
  status: <span class="string">"error"</span>;
  message: <span class="type">string</span>;
}

<span class="keyword">type</span> <span class="type">ApiResponse</span> = <span class="type">SuccessResponse</span> | <span class="type">ErrorResponse</span>;

<span class="keyword">function</span> <span class="function">handleResponse</span>(response: <span class="type">ApiResponse</span>): <span class="type">void</span> {
  <span class="keyword">if</span> (response.status === <span class="string">"success"</span>) {
    console.log(<span class="string">\`データ: \${response.data}\`</span>);
  } <span class="keyword">else</span> {
    console.log(<span class="string">\`エラー: \${response.message}\`</span>);
  }
}</code></pre>
        </div>
      </div>
      <div class="info-box">
        <span class="info-box-icon">🎯</span>
        <div class="info-box-content">
          <div class="info-box-title">判別可能なUnion型</div>
          <div class="info-box-text">共通のプロパティ（上の例では <code>status</code>）を持たせることで、TypeScriptが自動的に型を絞り込めるようになります。APIレスポンスの処理などでよく使われるパターンです。</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2 class="section-title">まとめ</h2>
      <p class="content-text">
        このレッスンで学んだTypeScriptの基礎をまとめます：
      </p>
      <ul>
        <li><strong>プリミティブ型</strong>: string, number, boolean, null, undefined</li>
        <li><strong>配列の型</strong>: <code>number[]</code> または <code>Array&lt;number&gt;</code></li>
        <li><strong>オブジェクトの型</strong>: インラインまたはinterface/typeで定義</li>
        <li><strong>関数の型</strong>: パラメータ型と戻り値型を指定</li>
        <li><strong>interface</strong>: オブジェクトの形状を定義、拡張可能</li>
        <li><strong>type</strong>: 型エイリアス、Union型や複雑な型に対応</li>
        <li><strong>Union型</strong>: 複数の型を許容（<code>A | B</code>）</li>
        <li><strong>型の絞り込み</strong>: typeof, instanceof, in演算子で型を判定</li>
      </ul>
      <p class="content-text">
        これらの基礎を押さえることで、TypeScriptの型システムを活用した安全なコードが書けるようになります。
      </p>
    </div>
  `,
  exercises: [
    {
      question: "TypeScriptで数値型を表すキーワードはどれですか？",
      options: ["int", "integer", "number", "float"],
      answer: 2,
      explanation:
        "TypeScriptでは数値型は 'number' で表します。整数も小数も同じ number 型です。JavaやC#のような int や float の区別はありません。",
    },
    {
      question:
        "以下のコードで、関数の戻り値の型として正しいものはどれですか？\n\nfunction greet(name: string) { return `Hello, ${name}!`; }",
      options: ["void", "any", "string", "undefined"],
      answer: 2,
      explanation:
        "この関数はテンプレートリテラルで文字列を返しているため、戻り値の型は string です。TypeScriptは戻り値の型を推論できますが、明示的に書くと function greet(name: string): string となります。",
    },
    {
      question: "Union型 'string | number' の変数に代入できない値はどれですか？",
      options: ["'hello'", "42", "true", "'123'"],
      answer: 2,
      explanation:
        "string | number 型には文字列か数値のみ代入できます。true は boolean 型なので代入できません。'123' は文字列なので代入可能です。",
    },
    {
      question: "interfaceとtypeの違いについて正しいものはどれですか？",
      options: [
        "interfaceはUnion型を定義できるが、typeはできない",
        "typeはUnion型を定義できるが、interfaceはできない",
        "interfaceとtypeは完全に同じ機能を持つ",
        "typeはオブジェクト型を定義できない",
      ],
      answer: 1,
      explanation:
        "type（型エイリアス）はUnion型（A | B）を定義できますが、interfaceはできません。一方、interfaceは宣言のマージや extends による拡張が可能です。",
    },
  ],
};
