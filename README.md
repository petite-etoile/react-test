# README

## 紹介
掌田津耶乃著の『Ruby on Rails 6 超入門』で勉強する用のリポジトリ<br><br>

## やったことなどメモ

* `[first.html]` まず, CDNでreactを動かす. headタグ内で以下を打つことでreactに関する記述を読み込む.

    ```html
        <script src="https://unpkg.com/react@17/umd/react.development.js"> </script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"> </script>
    ```

* `[first.html]` Reactの機能を使ってみるscriptを書く

    ```html
        <div id="root" class="test" > wait... </div>
        <script>
            let dom = document.querySelector('#root');
            let element = React.createElement(
                'p', {}, 'Hello React!'
            );
            ReactDOM.render(element, dom);
        </script>
    ```

    * `document.querySelector()`は, 指定したセレクターに一致する, 文書内の最初のElementオブジェクトを返すメソッド.
    * `React.createElement( タグ名, 属性, 中に組み込まれるもの )` で (DOMのではなく, 仮想DOMの)エレメントを作成する. <br>
        エレメントとは, HTMLのタグとして組み込まれているものを, javascriptの中でオブjヘクトとして扱うようにしたもの. 
    * `ReactDOM.render( エレメント, DOM)` 作成したエレメントをレンダリングする.

* `[first.html]` 表示の更新<br>
    クリックしたら, doCountメソッドを呼び出して, Counterをインクリメント. Counterの数を表示.
    
    ```html
        <div id="root2" class="test" onclick="doCount();"> wait... </div>
        <script>
            let counter = 0;
            let dom2 = document.querySelector("#root2");
            doCount();

            function doCount(){
                counter++;
                let element2 = React.createElement(
                    'p', {}, "count: " + counter
                );
                ReactDOM.render(element2, dom2);
            }
        </script>
    ```

    ただし, クリックできるようにcssで`cursor:pointer`をしている

### node.jsの導入
* 適当にnode.jsをインストールする

* Create React Appを使ってプロジェクトの作成
    ```
        $ npx create-react-app プロジェクト名
    ```

    * なお, npmでも同じことができる
    ```
        $ npm init react-app プロジェクト名
    ```

    
* プロジェクトの中身チェック
    * フォルダ関係
        |||
        |----|----|
        |node_modules|npmで管理されるモジュール類(プログラム)がまとめてある|
        |public|公開フォルダ. HTML,CSSなど, 公開されるファイル類を保管|
        |src|ここに, Reactで作成したファイルなどがまとめられる|
    * ファイル関係
        |||
        |----|----|
        |.gitignore|そのまま|
        |package.json|npmでパッケージ管理するための設定情報ファイル|
        |package-lock.jsonまたはyarn.lock|npmあるいはyarnに関する設定情報を記述したファイル|

* プロジェクトのビルド
    ```
        $ npm run build
    ```

    ビルドが完了すると, プロジェクトフォルダの中に「build」というフォルダが作成される.
    herokuなどのサーバーにあげるときはこのフォルダをアップする.

* React Developer Toolsのインストール<br>
    https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi でインストール

* DOMの仕組み<br>
    DOM(Data Object Model)とは, HTMLのタグをスクリプトから利用するための仕組み<br>
    DOMは一つ一つのタグをJavaScriptのオブジェクトとして表す.<br>
    それぞれのタグに, DOMのオブジェクトが用意されていて, そこにタグの表示, 属性などの情報がすべて詰まっている.オブジェクトに用意されている値などを操作すると, そのオブジェクトに対応するタグの表示が変更されるようになっている.<br>
    DOMで用意されるオブジェクトは, 大まかにいうと「エレメント」と「ノード」がある.

* タグ=エレメント？
    エレメント(Elementオブジェクト)とは, HTMLの各タグを扱うオブジェクト.<br>
    これらは, JSではそれぞれのタグに対応するエレメントとして用意されている. このエレメントを操作することで, これらのタグの表示をJSから操作できる

* 一番小さい単位「ノード」
    ノード(Nodeオブジェクト）とは「開始タグ」「終了タグ」「中に用意されるコンテンツ」など, こうした1つ1つの要素を表すオブジェクトのこと.<br>
    エレメントもノードの一種

* ノードとエレメントの違い
    ```html
        <div>
                <p>Hello</p>
        </div>
    ```
    * `<div>`タグのエレメントの中に組み込まれているエレメントは？ => `<p>`タグのエレメント<br>
    * `<div>`タグのエレメントの中に組み込まれているノードは？ => `<p>`タグのエレメントだけでなく, 「改行とスペースのテキスト」のノードもそう
    

* `[second.html, second.js]`スクリプトの分離<br>
    html側で読み込む. scriptの中は`second.js`の中に移動
    ```html
        <script src="./second.js"></script>
    ```

* `[second.html, second.js]`複雑な表示<br>

* createElementのclass指定
    ```
        React.createElement(タグ, {className:クラス}, コンテンツ);
    ```

### 2章JSX

* JSXとは
    JSXとは, HTMLタグを直接JSのスクリプトに記述する仕組み.<br>
    これを使うことで, 複雑なタグの構造をシンプルに記述できるようになる.

* `[third.html]` ライブラリの読み込み
    ```html
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    ```

* `[third.html]` 使ってみる
    ```html
    <script type="text/babel">
        let dom = document.querySelector("#root");
        
        let el = (
            <div>
                <h2>JSX sample</h2>
                <p> This is sample page</p>
            </div>
        );

        ReactDOM.render(el, dom);
    </script>
    ```

    `<div>`でわざわざくくってるのは, 「renderできるのは1つのエレメントだけ」だから

* `[third.html]`JSXに値を埋め込む
    `
        {変数/値など}
    `
    の形

    ```html
    <div id="root2" class="test"> wait... </div>
    <script type="text/babel">
        let dom2 = document.querySelector("#root2");
        let title = "新タイトル";
        let message = "新しいメッセージです";
        
        let el2 = (
            <div>
                <h2>{title}</h2>
                <p>{message}</p>
            </div>
        );

        ReactDOM.render(el2, dom2);
    </script>
    ```

* `[third.html]`スタイル名をプロパティとしたオブジェクトのリテラルとして記述. font-sizeなどの"-"区切りのスタイル名はCamelCaseで書く. 
    ```html
    (前略)
        const msg_s = {
            fontSize:"20px",
            color:"red",
        };
        
        let el3 = (
            <div>
                <h2>{title}</h2>
                <p style={msg_s}>
                    {message} <br/>
                </p>
            </div>
        );
    ```

* `[fourth.html]` 関数でJSXを作る
    ```html
        <h1 class="bg-primary text-white display-4"> React </h1>
        <div id="root" class="test"> wait... </div>

        <script type="text/babel">
            let dom = document.querySelector("#root");

            let title = "React page.";
            let message = "メッセージを表示します";
            
            const msg = {
                fontSize:"20px",
                fontWeight:"bold",
                color:"red"
            }

            let printMsg = function(msg, size, color){
                const style = {
                    fontSize: size + "pt",
                    fontWeight:'700',
                    color: color,
                }
                return <p style={style}>{msg}</p>
            }
            
            let el = (
                <div>
                    <h2>{title}</h2>
                    <p>{message}</p>
                    <div className="alert alert-secondary mt-3">
                        {printMsg("最初のメッセージ", 36, "#FFF")}
                        {printMsg("次のメッセージ", 24, "#AAA")}
                        {printMsg("最後のメッセージ", 12, "#666")}
                    </div>
                </div>
            );

            ReactDOM.render(el, dom);
        </script>
    ```

* 条件で表示する1
    ```
        {真偽値 && ・・・JSXの記述・・・}
    ```

* 条件で表示する2
    ```
        {真偽値 ? true時のJSX : false時のJSX}
    ```

* `[fourth.html]` 配列によるリストの表示
    ```html
    <script type="text/babel">
        let dom = document.querySelector("#root2");
        
        let title = "React page";
        let message = "メッセージを表示します"

        let data = [
            <li className="list-group-item">One</li>,
            <li className="list-group-item">Two</li>,
            <li className="list-group-item">Three</li>,
            <li className="list-group-item">Four</li>,
        ]

        let el = (
            <div>
                <h4>{title}</h4>
                <h6>{message}</h6>
                <ul className="list-group mt-4">
                    {data}
                </ul>
            </div>
        )
        ReactDOM.render(el, dom);
    </script>
    ```

* `[fourth.html]` mapを使った表示の繰り返し
    * mapの使い方. 配列を元に新たな配列を返す.
        ```
        配列.map( (value) => 新しい項目);
        ```

    * mapでリスト項目を作る.
        ```html
        <script type="text/babel">
            let dom3 = document.querySelector("#root3");
            
            let title = "React page";
            let message = "メッセージを表示します"

            let data = [
                {name:"Taro", mail:"t@g", age:45},
                {name:"Hana", mail:"h@g", age:1321231},
                {name:"Ken", mail:"k@g", age:12},
            ]

            let el3 = (
                <div>
                    <h4>{title}</h4>
                    <h6>{message}</h6>
                    <table className="table table-table-striped mt-4">
                        <thead>
                            <tr>
                                <th> name </th>
                                <th> mail </th>
                                <th> age </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((value) => (
                                <tr>
                                    <td>{value.name}</td>
                                    <td>{value.mail}</td>
                                    <td>{value.age}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
            ReactDOM.render(el3, dom3);
        </script>
        ```

* アロー関数の活用. その場で書いてその場で実行される関数は以下のように書く.
    ```js
    ( ()=>{・・・処理・・・} )()
    //( 関数 )()
    ```

* アロー関数を用いてJSX
    ```html
    <script type="text/babel">
        let dom4 = document.querySelector("#root4");
        
        let title = "React page";
        let message = "メッセージを表示します"

        let data = {
            url:"http:google.com",
            title:"Google",
            caption:"※これは, Googleの検索サイトです."
        }

        let el4 = (
            <div>
                <h4>{title}</h4>
                <h6>{message}</h6>
                {
                    (() => 
                        <div className="card mt-4">
                            <div className="card-header">
                                {data.title}
                            </div>
                            <div className="card-body">
                                {data.caption}
                            </div>
                            <div className="card-footer">
                                <a href={data.url}>{data.title}に移動</a>
                            </div>
                        </div>
                    )()
                }
            </div>
        )
        ReactDOM.render(el4, dom4);
    </script>
    ```

* `[fifth.html]` 表示の更新
    * setInterval関数
        ```js
            setInterval(メソッド, 間隔(ms))
        ```
    * renderで更新
        ```html
        <script type="text/babel">
            let dom = document.querySelector("#root");

            let title = "React page.";
            let message = "メッセージを表示します";
            
            let counter = 0
            
            setInterval(() => {
                counter++

                let el = (
                    <div>
                        <h4> {title} </h4>
                        <h6> {message} </h6>
                        <h5 className="alert alert-primary">
                            count: {counter}
                        </h5>
                    </div>
                )
                ReactDOM.render(el, dom);
            }, 1000)
        </script>
        ```

    * クリックして更新
        ```html
        <script type="text/babel">
            let dom2 = document.querySelector("#root2");

            let title = "React page.";
            let message = "メッセージを表示します";
            
            let counter2 = 0
            
            let doAction = function(event){
                counter2++
                let el2 = (
                    <div>
                        <h4> {title} </h4>
                        <h6> {message} </h6>
                        <h5 className="alert alert-primary" onClick={doAction}>
                            count: {counter2}
                        </h5>
                    </div>
                )
                ReactDOM.render(el2, dom2);
            }

            doAction()
        </script>
        ```

* `[fifth.html]` フォームの値を利用(JavaScriptで一般的に行ってるやり方と同じ)
    ```html
    <script type="text/babel">
        let dom3 = document.querySelector("#root3");

        let title = "React page.";
        let message = "名前を入力";
        let in_val = "";

        let doChange = (event)=>{
            in_val = event.target.value
            message = "こんにちは, " + in_val + "さん"
        }
        
        
        let doAction = function(event){
            console.log("clicked")
            let el3 = (
                <div>
                    <h4> {title} </h4>
                    <h6> {message} </h6>
                    <div className="form-group">
                        <input type="text" className="form-control" id="input" onChange={doChange} />
                        <button onClick={doAction} className="btn btn-primary"> Click </button>
                    </div>
                </div>
            )
            ReactDOM.render(el3, dom3);
        }

        doAction()
    </script>
    ```

### 3章コンポーネント
* コンポーネントとは<br>
    Reactで画面に表示される「部品」のこと. 表示の内容, 必要なデータ, 処理などの一つのオブジェクトをまとめたもの.  <br>
    コンポーネントとして表示する部品を用意することでいつでも簡単にその表示を組み込み利用することが可能に.

* シンプルな「関数」コンポーネント
    書き方はいくつかあって, オブジェクトとして定義するやり方もある. けど, 一番単純なのは「関数」として作成する方法.
    ```js
        function コンポーネント名 (引数){
            return ・・・JSXによる表示・・・
        }
    ```

* コンポーネントの利用
    JSXの中でこうかくだけ
    ```
    <コンポーネント名/>
    ```

* コンポーネント名は, 必ず頭文字を大文字にする.

* `[sixth.html]`コンポーネントで表示
    ```html
    <script type="text/babel">
        let dom = document.querySelector("#root");
        let message = "React component page.";
        
        //関数コンポーネント
        function Welcome(props){
            return (
                <div className="alert alert-primary"> 
                    <p className="h4">Hello React!!</p>
                </div>
            )
        }

        let el = (
            <div>
                    <h4> {message} </h4>
                    <Welcome />
            </div>
        )
        ReactDOM.render(el, dom);
    </script>
    ```

* `[sixth.html]` 属性の利用
    * 関数
        ```js
        function X(props){ ... }
        ```
    * JSX
        関数の引数props.aに"abc"が保管される
        ```html
        <X a="avc" />
        ```
    * 実践
        ```html
        <script type="text/babel">
            let dom2 = document.querySelector("#root2");
            let message = "React component page.";
            
            //関数コンポーネント
            function Welcome(props){
                return (
                    <div className={"props.alert"}> 
                        <p className={props.fontSize}>Hello {props.name}!!</p>
                    </div>
                )
            }

            let el2 = (
                <div>
                        <h4 className="mb-4"> {message} </h4>
                        <Welcome name="Taro" fontSize="h2" alert="alert alert-primary"/>
                        <Welcome name="Hanako" fontSize="h5" alert="alert alert-dark"/>
                </div>
            )
            ReactDOM.render(el2, dom2);
        </script>
        ```

* `[seventh.html]` クラス
    ```js
    class クラス名{
        constructor(props){
            super(props)
            ...初期化処理...
        }
        ...プロパティ, メソッド...

        //この中でメソッドを定義するときはfunctionとつけずにそのまま
        メソッド名( 引数 ){
            ...メソッドの処理...
        }
    }
    ```

    * コンポーネントをクラスで定義(重要)<br>
        React.Componentクラスを継承するので, 次のように書く
        ```js
        class コンポーネント名 extends React.Component{
            ...クラスの内容...
        }
        ```
        ただし, かならずrenderメソッドを定義しなければならない.
        ```js
        render(){ //引数なし
            return ...JSX...
        }
        ```

    *  コンポーネントのクラスを使う
        ```html
        <script type="text/babel">
            let dom = document.querySelector("#root");
            let message = "React component page.";
            
            //クラスコンポーネント
            class Hello extends React.Component{
                constructor(props){
                    super(props)
                }

                render(){
                    return  (
                        <div className="alert alert-primary"> 
                            <p className="h4">  Hello! </p>
                        </div>
                    )
                }
            }

            let el = (
                <div>
                    <h5 className="mb-4"> {message} </h5>
                    <Hello />
                </div>
            )
            ReactDOM.render(el, dom);
        </script>
        ```

    *  属性を利用する
        ```html
        <script type="text/babel">
            let dom = document.querySelector("#root2");
            let message = "React component page.";
            
            //クラスコンポーネント
            class Rect extends React.Component{
                x = 0
                y = 0
                width = 0
                height = 0
                color = "white"
                style = {}
                constructor(props){
                    super(props)
                    this.x = props.x
                    this.y = props.y
                    this.width = props.w
                    this.height = props.h
                    this.color = props.c
                    this.style = {
                        backgroundColor:this.color,
                        position:"absolute",
                        left:this.x + "px",
                        top:this.y + "px",
                        width:this.width + "px",
                        height:this.height + "px"
                    }                    
                }

                render(){
                    return <div style = {this.style}>  </div>
                }
            }

            let el = (
                <div>
                    <h5 className="mb-4"> {message} </h5>
                    <Rect x="200" y="200" w="200" h="200" c="cyan"/>
                    <Rect x="300" y="300" w="200" h="200" c="magenta"/>
                </div>
            )
            ReactDOM.render(el, dom);
        </script>
        ```


### 3.2章 プロジェクトでコンポーネント開発
* フォルダの中身について
    <br>publicフォルダ
    |||
    |----|----|
    |index.html|アクセス時に表示されるHTMLファイル. この中に画面表示に関する基本的な要素がまとめてある|

    srcフォルダ
    |||
    |----|----|
    |index.js|アプリケーションのベースとなるスクリプト|
    |index.css|index.jsで使用するスタイルシート|
    |App.js| indexに組み込まれる, 実際に画面に表示しているコンポーネント|
    |App.css|Appコンポーネントのスタイルシート|

    * アクセスすると, index.htmlが表示される.
    * index.htmlを読み込む際, iondex.jsが読み込まれ, 実行される
    * index.jsの中でAppコンポーネントが読み込まれ, 表示される

* `index.html`について
    * ReactのCDNは書かなくてもいい
    * BootstrapのCDNを記入
    
    

        
    
