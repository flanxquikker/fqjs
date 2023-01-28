/*
QuikkerJS Library
v0.0.3

A library written in JavaScript for creating webpage and webapp for rapid development.
Created by Yerenzter
*/

/* The state or the life cycle of the webapp */
let state = () => {
    OnCreate();
    OnOffline();
    OnOnline();
};

/* App utitily widget */
class App {
    addChild(child) {
        return document.body.appendChild(child.el());
    }
    createLayout(type) {
        let body = document.querySelector("body");
        body.style.margin = 0;
        body.style.padding = 0;
        let elem = document.createElement("div");
        elem.style.boxSizing = "border-box";
        elem.style.display = "grid";
        elem.style.width = "100vw";
        elem.style.height = "100vh";
        elem.style.textAlign = "center";
        elem.style.overflowX = "scroll";
        elem.style.overflowY = "scroll";
        switch (type) {
            case "Center":
                elem.style.justifyItems = "center",
                elem.style.alignContent = "center";
                break;
            case "TopCenter":
                elem.style.justifyItems = "center",
                elem.style.alignContent = "flex-start";
                break;
            default: elem.style.justifyItems = "center",
                elem.style.alignContent = "center";
        }

        let prop = {
            el: () => elem,
            addChild: (child) => elem.appendChild(child.el()),
            destroyChild: (child) => elem.removeChild(child.el()),
            setBgColor: (color) => elem.style.backgroundColor = color
        };

        return prop;
    }
    destroyChild(child) {
        return document.body.removeChild(child.el());
    }
}

/* Widget utility toolkit */
class Widget {
    AlertDialog(option) {
        
        let elem = document.createElement("div");
        elem.style.display = "none";
        elem.style.justifyItems = "center";
        elem.style.alignItems= "center";
        elem.style.width = "100vw";
        elem.style.height = "100vh";
        elem.style.backgroundColor = option == "NoDim" ? "#00000000" : option == "Dim" ? "#808080AA" : "#808080AA";
        elem.style.position = "fixed";
        
        elem.style.zIndex = 9999;
        
        let elem_dlg = document.createElement("div");
        elem_dlg.style.display = "grid";
        elem_dlg.style.justifyItems = "center";
        elem_dlg.style.alignItems = "center";
        elem_dlg.style.width = "80vw";
        elem_dlg.style.height = "20vh";
        elem_dlg.style.padding = "1em";
        elem_dlg.style.borderRadius = "4px";
        elem_dlg.style.backgroundColor = "#242424";
        elem_dlg.style.color = "#FFFFFF";
        elem_dlg.overflowY = "scroll";
        elem.appendChild(elem_dlg);
        
        let elem_dlg_title = document.createElement("div");
        elem_dlg_title.style.display = "flex";
        elem_dlg_title.style.justifyContent = "center";
        elem_dlg_title.style.alignItems = "center";
        elem_dlg_title.style.width = "inherit";
        elem_dlg_title.style.height = "5vh";
        elem_dlg_title.style.color = "#FFFFFF";
        elem_dlg_title.textContent = "Title";
        elem_dlg.appendChild(elem_dlg_title);
        
        let elem_dlg_content = document.createElement("div");
        elem_dlg_content.style.display = "grid";
        elem_dlg_content.style.justifyContent = "center";
        elem_dlg_content.style.alignItems = "center";
        elem_dlg_content.style.width = "inherit";
        elem_dlg_content.style.height = "10vh";
        elem_dlg_content.style.color = "#FFFFFF";
        elem_dlg_content.style.overflowY = "scroll";
        elem_dlg.appendChild(elem_dlg_content);
        
        let elem_dlg_action = document.createElement("div");
        elem_dlg_action.style.boxSizing = "border-box";
        elem_dlg_action.style.display = "flex";
        elem_dlg_action.style.justifyContent = "center";
        elem_dlg_action.style.alignItems = "center";
        elem_dlg_action.style.width = "inherit";
        elem_dlg_action.style.height = "5vh";
        elem_dlg.appendChild(elem_dlg_action);
        
        let elem_dlg_action_ok = document.createElement("h3");
        elem_dlg_action_ok.textContent = "OK";
        elem_dlg_action.appendChild(elem_dlg_action_ok);
        
        let prop = {
            el: () => elem,
            addChild: (child) => elem_dlg_content.appendChild(child.el()),
            setBgColor: (color) => elem_dlg.style.backgroundColor = color,
            setBorderRadius: (border) => elem_dlg.style.borderRadius = `${border}px`,
            setHeight: (height) => {
                elem_dlg.style.height = `${height*100}vh`;
                elem_dlg_content.style.height = `${(height*100)/2}vh`;
            },
            setOkButtonColor: (color) => elem_dlg_action_ok.style.color = color,
            setOnOk: (callback) => elem_dlg_action_ok.onclick = callback,
            setText: (text) => elem_dlg_content.textContent = text,
            setTitle: (title) => elem_dlg_title.textContent = title,
            setTitleFontColor: (color) => elem_dlg_title.style.color = color,
            setTitleFontSize: (size) => elem.style.fontSize = `${size}px`,
            setWidth: (width) => elem.style.width = `${width*100}px`,
            show: () => elem.style.display = "grid",
            hide: () => elem.style.display = "none"
        };
        
        return prop;
    }
    AppBar() {
        let elem = document.createElement("div");
        
        let prop = {
            el: () => elem,
            setBgColor: (color) => elem.style.backgroundColor = color
        };
        
        return prop;
    }
    Button() {
        let elem = document.createElement("div");
        elem.type = "button";
        elem.style.display = "flex";
        elem.style.justifyContent = "center";
        elem.style.alignItems = "center";
        elem.style.borderRadius = "8px";
        elem.style.width = "24vw";
        elem.style.height = "6vh";
        elem.style.backgroundColor = "#484848";
        elem.style.color = "#FFFFFFFF";
        
        let prop = {
            el: () => elem,
            getText: () => elem.innerText,
            setBgColor: (bgcolor) => elem.style.backgroundColor = bgcolor,
            setBorder: (border) => elem.style.border= `solid #00000000 {border}px`,
            setBorderColor: (border) => elem.style.borderColor = border,
            setBorderRadius: (border) => elem.style.borderRadius = `${border}px`,
            setColor: (color) => elem.style.color = color,
            setFontSize: (size) => elem.style.fontSize = `${size}px`,
            setHeight: (height) => elem.style.height = `${height}vh`,
            setMargin: (top, right, bottom, left) => elem.style.margin = `${top}em ${right}em ${bottom}em ${left}em`,
            setOnClick: (callback) => elem.onclick = callback,
            setOnDoubleClick: (callback) => elem.ondblclick = callback,
            setPadding: (top, right, bottom, left) => elem.style.padding = `${top}em ${right}em ${bottom} ${left}`,
            setText: (text) => elem.textContent = text,
            setWidth: (width) => elem.style.width = `${width}vw`
        };
        
        return prop;
    }
    Drawer(option) {
        let elem = document.createElement("div");
        elem.style.display = "none";
        elem.style.justifyItems = "left";
        elem.style.alignItems = "center";
        elem.style.width = "100vw";
        elem.style.height = "100vh";
        elem.style.opacity = 
        elem.overflow = "hidden";
        elem.style.backgroundColor = option == "NoDim" ? "#00000000" : option == "Dim" ? "#808080AA" : "#808080AA";
        elem.style.position = "absolute";
        elem.style.zIndex = "999";
        
        let elem_drawer = document.createElement("div");
        elem_drawer.style.display = "grid";
        elem_drawer.style.justifyItems= "center";
        elem_drawer.style.alignItems= "top";
        elem_drawer.style.backgroundColor = "#FFFFFF";
        elem.appendChild(elem_drawer);
        
        let prop = {
            el: () => elem,
            addChild: (child) => elem_drawer.appendChild(child.el()),
            hide: () => {
                elem.style.opacity = 0;
                elem_drawer.style.width = "0vw";
                elem.style.transition = "opacity 0.6s";
                elem_drawer.style.transition = "width 0.6s";
                setTimeout(() => {
                    elem.style.display = "none";
                },500);
            },
            setBorderRadius: (...border) => elem_drawer.style.borderRadius = border,
            setOnClickThrough: (callback) => elem.onclick = callback,
            setSize: (width, height) => {
                elem_drawer.style.width = `${width*100}vw`;
                elem_drawer.style.height = `${height*100}vh`;
            },
            show: () => { 
                setTimeout(() => {
                    elem.style.display = "grid";
                    setTimeout(() => {
                        elem.style.opacity = 1;
                        elem_drawer.style.width = "70vw";
                    
                        elem.style.transition = "opacity 1s";
                        elem_drawer.style.transition = "width 1s";
                },100);
                },100);
            },
                
        };
        
        return prop;
    }
    Heading(level) {
        let elem;
        
        switch (level) {
            case 1:
                elem = document.createElement("h1");
                break;
            case 2:
                elem = document.createElement("h2");
                break;
            case 3:
           	    elem = document.createElement("h3");
                break;
            case 4:
           	    elem = document.createElement("h4");
                break;
            case 5:
                elem = document.createElement("h5");
                break;
            case 6:
                elem = document.createElement("h6");
                break;
            default: elem = document.createElement("h1");
        }

        let prop = {
            el: () => elem,
            getText: () => elem.innerText,
            setColor: (color) => elem.style.color = color,
            setFontSize: (size) => elem.style.fontSize = `${size}`,
            setText: (text) => elem.textContent = text
        };

        return prop;
    }
    Hyperlink(option) {
        let elem = document.createElement("a");
        elem.style.textDecoration = option == "NoUnderline" ? "none" : "underline";
        
        let prop = {
            el: () => elem,
            setColor: (color) => elem.style.color = color,
            setFontSize: (size) => elem.style.fontSize = `${size}px`,
            setText: (text) => elem.textContent = text,
            setUrl: (url) => elem.href = url
        };
        
        return prop;
    }
    Image() {
        let elem = document.createElement("img");
        
        let prop = {
            el: () => elem,
            getImage: (image) => elem.src = image,
            setBorderRadius: (border) => elem.style.borderRadius = `${border}px`,
            setHeight: (height) => elem.style.height = `${height}px`,
            setWidth: (width) => elem.style.width = `${width}px`
        };
        
        return prop;
    }
    Layout(justify, alignment) {
        let elem = document.createElement("div");
        elem.style.display = "grid";
        elem.style.justifyItems = justify;
        elem.style.alignItems = alignment;
        
        let prop = {
            el: ()=> elem,
            addChild: (child) => elem.appendChild(child.el()),
            destroyChild: (child) => elem.removeChild(child),
            setBgColor: (color) => elem.style.backgroundColor = color,
            setBgGradientColor: (type, direction, ...stop) => elem.style.backgroundImage = `${type}(${direction}, ${stop})`,
            setBorderRadius: (border) => elem.style.borderRadius = `${border}px`,
            setHeight: (height) => elem.style.height = `${height*100}vh`,
            setMargin: (...margin) => elem.style.margin = margin,
            setOnClick: (callback) => elem.onclick = callback,
            setOpacity: (opacity) => elem.style.opacity = opacity,
            setPadding: (...padding) => elem.style.padding = `${padding}em`,
            setTransition: (...transition) => elem.style.transition = transition,
            setWidth: (width) => !width ? elem.style.width = "inherit" : elem.style.width = `${width*100}vw`,
        };
        
        return prop;
    }
    Paragraph() {
        let elem = document.createElement("p");

        let prop = {
            el: () => elem,
            getText: () => elem.innerText,
            setColor: (color) => elem.style.color = color,
            setFontSize: (size) => elem.style.fontSize = `${size}px`,
            setText: (text) => elem.textContent = text
        };

        return prop;
    }
    TextEdit() {
        let elem = document.createElement("input");
        elem.type = "text";
        
        let prop = {
            el: () => elem,
            getText: () => elem.value,
            setHint: (hint) => elem.placeholder = hint,
            setOnChange: (callback) => elem.onchange= callback,
            setOnKeydown: (callback) => elem.onkeydown = callback,
            setOnKeyup: (callback) => elem.onkeyup = callback,
            setText: (text) => elem.value = text
        };
        
        return prop;
    }
}

let app = new App();
let widget = new Widget();
