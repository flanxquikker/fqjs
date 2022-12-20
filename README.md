# FlanxQuikkerJS

<div align="center"><img src="https://flanxquikker.github.io/main/asset/icon/favicon-192.png"></div>

<b>A minimal JavaScript library for writing HTML DOM elements and CSS selectors.</b>

### Overview 🔭
```
let myText = {
    html: {
        elem: "h1",
        text: "Quikker is awesome!",
        id: "myText"
    },
    css: {
        id: "myText",
        color: "#FE2424"
    }
};

render([myText], root);
```

### Explanation 💡
- So we create first a ```myText``` as an UI element variable.
- The ```html:{…}``` is an UI property which you can able to write HTML tags, attributes and querying the parent element.
- The ```css{…}``` is an UI property which you can able to style your HTML element and selecting first the identitfier of HTML element.
- The ```render()``` is a function which is to render all out UI variables by putting them in array on the first parameter assigning the parent element in the second parameter.
- ```root``` is a built-in variable of FQ which is the root element of the ```id="fq-root"``` in the ```<div>``` element.

### Usage
```
<!DOCTYPE html>
<html>
    <body>
        <div id="fq-root"></div>
        <script src="fq.js" type="text/javascript"></script>
        <script src="main.js" type="text/javascript"></script>
    </body>
</html>
```

Or via CDN

```
<html>
    <body>
        <div id="fq-root"></div>
        <script src="https://www.quikkerjs.tk/lib/fq/fq.js" type="text/javascript"></script>
        <script src="main.js" type="text/javascript"></script>
    </body>
</html>
```
