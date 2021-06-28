let dom = document.querySelector('#root');
let element = React.createElement(
    'p', {}, 'Hello React!'
);
ReactDOM.render(element, dom);


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


let dom3 = document.querySelector("#root3");
let element3 = React.createElement(
    "div", {}, [
        React.createElement("h2", {}, "Hello!"),
        React.createElement("h3", {}, "React sample page."),
        React.createElement(
            "ul", {}, [
                React.createElement("li", {}, "First item"),
                React.createElement("li", {}, "Second item"),
                React.createElement("li", {}, "Third item"),
            ]
        ),
        React.createElement("h4", {className: "alert alert-primary"}, "React sample page."),
    ]
);
ReactDOM.render(element3, dom3);
