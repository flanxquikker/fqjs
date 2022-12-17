/*
Flanx Quikker JavaScript Library.
v0.0.2

- Flanx Quikker also known as FQJS is a JavaScript library which is the main objective is to write, style and function the webpage using only JavaScript that does not need to use multiple files and languages like fq & fq to achieve a better performance and also it can also integrate with other frameworks like Bootstrap, Tailwind etc.

Created by Yerenzter
*/
// fq BUILT-IN PROPERTY VALUE (IMMUTABLE)
const block = "block";
const borderBox = "border-box";
const center = "center";
const fillX = "100vw";
const fillY = "100vh";
const flex = "flex";
const flexEnd = "flex-end";
const flexStart = "flex-start";
const grid = "grid";
const inherit = "inherit";
const initial = 0;
const none = "none";
const root = "fq-root";
const table = "table";
const spaceAround = "space-around";
const spaceBetween = "space-between";

// FQ UTILITY FUNCT8ONS
let out = (fq, parent) => {
    let body = document.querySelector("body");
    body.style.margin = 0;
    body.style.padding = 0;
    body.style.perspective = "1px";
    body.style.transform = "preserve-3d";

    let fqRoot = document.querySelector("#fq-root");
    fqRoot.style.display = "";
    fqRoot.style.justifyItems = "center";
    fqRoot.style.alignContent = "flex-start";
    fqRoot.style.margin = "0 auto";
    fqRoot.style.padding = 0;
    fqRoot.style.width = "100vw";
    fqRoot.style.height = "100vh";
    fqRoot.style.overflowX = "hidden";
    fqRoot.style.overflowY = "scroll";

    let onHTML = () => {
        let pe = document.querySelector(`#${parent}`);
        let html = {};
        let select = document.querySelector(`#${fq.html.select}`);
        let elem = document.createElement(fq.html.elem);
        elem.textContent = fq.html.text;

        elem.acceptCharset = fq.html.acceptCharset;
        // elem.accessKey = !fq.html.accessKey ? "": fq.html.accessKey;
        elem.action = fq.html.action;
        // elem.align = fq.html.align;
        elem.alt = fq.html.alt;
        elem.async = fq.html.async;
        elem.autoComplete = fq.html.autoComplete;
        elem.autoFocus = fq.html.autoFocus;
        elem.autoPlay = fq.html.autoPlay;
        elem.bgColor = fq.html.bgColor;
        elem.border = fq.html.border;
        elem.charset = fq.html.charset;
        elem.checked = fq.html.checked;
        elem.cite = fq.html.cite;
        elem.className = fq.html.class;
        elem.color = fq.html.color;
        elem.colspan = fq.html.colspan;
        elem.content = fq.html.content;
        elem.contentEditable = !fq.html.contentEditable ? false: fq.html.contentEditable;
        elem.controls = fq.html.controls;
        elem.coords = fq.html.coords;
        elem.data = fq.html.data;
        elem.dateTime = fq.html.dateTime;
        elem.default = fq.html.default;
        elem.defer = fq.html.defer;
        // elem.dir = !fq.html.dir ? "": fq.html.dir;
        // elem.dirName = !fq.html.dirName ? "": fq.html.dirName;
        elem.disabled = fq.html.disabled;
        elem.download = fq.html.download;
        // elem.draggable = !fq.html.draggable ? false: fq.html.draggable;
        elem.enctype = fq.html.enctype;
        elem.for = fq.html.for;
        elem.form = fq.html.form;
        // elem.formAction = !fq.html.formAction ? "": fq.html.formAction;
        elem.headers = fq.html.headers;
        elem.height = fq.html.height;
        elem.hidden = fq.html.hidden;
        elem.high = fq.html.high;
        elem.href = fq.html.href;
        elem.hrefLang = fq.html.hrefLang;
        elem.httpEquiv = fq.html.httpEquiv;
        elem.id = fq.html.id;
        elem.isMap = fq.html.isMap;
        elem.kind = fq.html.kind;
        elem.label = fq.html.label;
        // elem.lang = fq.html.lang;
        elem.list = fq.html.list;
        elem.loop = fq.html.loop;
        elem.low = fq.html.low;
        // elem.max = !fq.html.max ? "": fq.html.max;
        // elem.maxLength = !fq.html.maxLength ? "": fq.html.maxLength;
        elem.media = fq.html.media;
        elem.method = fq.html.method;
        // elem.min = !fq.html.min ? "": fq.html.min;
        elem.multiple = fq.html.multiple;
        elem.muted = fq.html.muted;
        elem.name = fq.html.name;
        elem.noValidate = fq.html.noValidate;
        elem.onabort = fq.html.onabort;
        elem.onafterprint = fq.html.onafterprint;
        elem.onbeforeprint = fq.html.onbeforeprint;
        elem.onbeforeunload = fq.html.onbeforeunload;
        elem.onblur = fq.html.onblur;
        elem.oncanplay = fq.html.oncanplay;
        elem.oncanplaythrough = fq.html.oncanplaythrough;
        elem.onchange = fq.html.onchange;
        elem.onclick = fq.html.onclick;
        elem.oncontextmenu = fq.html.oncontextmenu;
        elem.oncopy = fq.html.oncopy;
        elem.oncuechange = fq.html.oncuechange;
        elem.oncut = fq.html.oncut;
        elem.ondbclick = fq.html.ondbclick;
        elem.ondrag = fq.html.ondrag;
        elem.ondragend = fq.html.ondragend;
        elem.ondragend = fq.html.ondragend;
        elem.ondragleave = fq.html.ondragleave;
        elem.ondragover = fq.html.ondragover;
        elem.ondragstart = fq.html.ondragstart;
        elem.ondurationchange = fq.html.ondurationchange;
        elem.onemptied = fq.html.onemptied;
        elem.onended = fq.html.onended;
        elem.onerror = fq.html.onerror;
        elem.onfocus = fq.html.onfocus;
        elem.onhaschange = fq.html.onhaschange;
        elem.oninput = fq.html.oninput;
        elem.oninvalid = fq.html.oninvalid;
        elem.onkeydown = fq.html.onkeydown;
        elem.onkeypress = fq.html.onkeypress;
        elem.onkeyup = fq.html.onkeyup;
        elem.onload = fq.html.onload;
        elem.onloadeddata = fq.html.onloadeddata;
        elem.onloadedmetadata = fq.html.onloadedmetadata;
        elem.onloadstart = fq.html.onloadstart;
        elem.onmousedown = fq.html.onmousedown;
        elem.onmousemove = fq.html.onmousemove;
        elem.onmouseout = fq.html.onmouseout;
        elem.onmouseover = fq.html.onmouseover;
        elem.onmouseup = fq.html.onmouseup;
        elem.onmousewheel = fq.html.onmousewheel;
        elem.onoffline = fq.html.onoffline;
        elem.ononline = fq.html.ononline;
        elem.onpagehide = fq.html.onpagehide;
        elem.onpageshow = fq.html.onpageshow;
        elem.onpaste = fq.html.onpaste;
        elem.onpause = fq.html.onpause;
        elem.onplay = fq.html.onplay;
        elem.onplaying = fq.html.onplaying;
        elem.onpopstate = fq.html.onpopstate;
        elem.onprogress = fq.html.onprogress;
        elem.onratechange = fq.html.onratechange;
        elem.onreset = fq.html.onreset;
        elem.onresize = fq.html.onresize;
        elem.onscroll = fq.html.onscroll;
        elem.onsearch = fq.html.onsearch;
        elem.onseeked = fq.html.onseeked;
        elem.onseeking = fq.html.onseeking;
        elem.onselect = fq.html.onselect;
        elem.onstalled = fq.html.onstalled;
        elem.onstorage = fq.html.onstorage;
        elem.onsubmit = fq.html.onsubmit;
        elem.onsuspend = fq.html.onsuspend;
        elem.ontimeupdate = fq.html.ontimeupdate;
        elem.ontoggle = fq.html.ontoggle;
        elem.onunload = fq.html.onunload;
        elem.onvolumechange = fq.html.onvolumechange;
        elem.onwaiting = fq.html.onwaiting;
        elem.onwheel = fq.html.onwheel;
        elem.open = fq.html.open;
        elem.optimum = fq.html.optimum;
        // elem.pattern = !fq.html.pattern ? "": fq.html.pattern;
        elem.placeholder = !fq.html.placeholder ? "": fq.html.placeholder;
        elem.poster = fq.html.poster;
        elem.preload = fq.html.preload;
        elem.readOnly = fq.html.readOnly;
        elem.rel = fq.html.rel;
        elem.required = fq.html.required;
        elem.reversed = fq.html.reversed;
        elem.rows = fq.html.rows;
        elem.rowspan = fq.html.rowspan;
        elem.sandbox = fq.html.sandbox;
        elem.scope = fq.html.scope;
        elem.selected = fq.html.selected;
        elem.shape = fq.html.shape;
        // elem.size = fq.html.size;
        elem.sizes = fq.html.sizes;
        elem.span = fq.html.span;
        elem.spellCheck = fq.html.spellCheck;
        elem.src = !fq.html.src ? "": fq.html.src;
        elem.srcDoc = fq.html.srcDoc;
        elem.srcLang = fq.html.srcLang;
        elem.srcSet = fq.html.srcSet;
        elem.start = fq.html.start;
        // elem.step = !fq.html.step ? "": fq.html.step;
        elem.style = fq.html.style;
        // elem.tabIndex = !fq.html.tabIndex ? "": fq.html.tabIndex;
        elem.target = fq.html.target;
        elem.title = fq.html.title;
        // elem.translate = fq.html.translate;
        elem.type = fq.html.type;
        // elem.useMap = !fq.html.useMap ? "": fq.html.useMap;
        elem.value = !fq.html.value ? null: fq.html.value;
        elem.width = fq.html.width;
        elem.wrap = fq.html.wrap;
        !fq.html.select ? false: select.appendChild(elem);
        !parent ? false: pe.appendChild(elem);
    };

    let onCSS = () => {
        let css = {};
        let id = document.querySelector(`#${fq.css.id}`);
        let className = document.querySelector(`.${fq.css.class}`);

        let query = (selector) => {
            selector.style.accentColor = fq.css.accentColor;
            selector.style.alignContent = fq.css.alignContent;
            selector.style.alignItems = fq.css.alignItems;
            selector.style.alignSelf = fq.css.alignSelf;
            selector.style.all = fq.css.all;
            selector.style.animation = fq.css.animation;
            selector.style.animationDelay = fq.css.animationDelay;
            selector.style.animationDirection = fq.css.animationDirection;
            selector.style.animationDuration = fq.css.animationDuration;
            selector.style.animationFillMode = fq.css.animationFillMode;
            selector.style.animationIterationCount = fq.css.animationIterationCount;
            selector.style.animationName = fq.css.animationName;
            selector.style.animationPlayState = fq.css.animationPlayState;
            selector.style.animationTimingFunction = fq.css.animationTimingFunction;
            selector.style.backdropFilter = fq.css.backdropFilter;
            selector.style.backfaceVisibility = fq.css.backfaceVisibility;
            selector.style.background = fq.css.background;
            selector.style.backgroundAttachment = fq.css.backgroundAttachment;
            selector.style.backgroundBlendMode = fq.css.backgroundBlendMode;
            selector.style.backgroundClip = fq.css.backgroundClip;
            selector.style.backgroundColor = fq.css.backgroundColor;
            selector.style.backgroundImage = fq.css.backgroundImage;
            selector.style.backgroundOrigin = fq.css.backgroundOrigin;
            selector.style.backgroundPosition = fq.css.backgroundPosition;
            selector.style.backgroundRepeat = fq.css.backgroundRepeat;
            selector.style.backgroundSize = fq.css.backgroundSize;
            selector.style.border = fq.css.border;
            selector.style.borderBottom = fq.css.borderBottom;
            selector.style.borderBottomColor = fq.css.borderBottomColor;
            selector.style.borderBottomLeftRadius = fq.css.borderBottomLeftRadius;
            selector.style.borderBottomRightRadius = fq.css.borderBottomRightRadius;
            selector.style.borderBottomStyle = fq.css.borderBottomStyle;
            selector.style.borderBottomWidth = fq.css.borderBottomWidth;
            selector.style.borderCollapse = fq.css.borderCollapse;
            selector.style.borderColor = fq.css.borderColor;
            selector.style.borderImage = fq.css.borderImage;
            selector.style.borderImageOutset = fq.css.borderImageOutset;
            selector.style.borderImageRepeat = fq.css.borderImageRepeat;
            selector.style.borderImageSlice = fq.css.borderImageSlice;
            selector.style.borderImageSource = fq.css.borderImageSource;
            selector.style.borderImageWidth = fq.css.borderImageWidth;
            selector.style.borderLeft = fq.css.borderLeft;
            selector.style.borderLeftColor = fq.css.borderLeftColor;
            selector.style.borderLeftStyle = fq.css.borderLeftStyle;
            selector.style.borderLeftWidth = fq.css.borderLeftWidth;
            selector.style.borderRadius = fq.css.borderRadius;
            selector.style.borderRight = fq.css.borderRight;
            selector.style.borderRightColor = fq.css.borderRightColor;
            selector.style.borderRightStyle = fq.css.borderRightStyle;
            selector.style.borderRightWidth = fq.css.borderRightWidth;
            selector.style.borderSpacing = fq.css.borderSpacing;
            selector.style.borderStyle = fq.css.borderStyle;
            selector.style.borderTop = fq.css.borderTop;
            selector.style.borderTopColor = fq.css.borderTopColor;
            selector.style.borderTopLeftRadius = fq.css.borderTopLeftRadius;
            selector.style.borderTopRightRadius = fq.css.borderTopRightRadius;
            selector.style.borderTopStyle = fq.css.borderTopStyle;
            selector.style.borderTopWidth = fq.css.borderTopWidth;
            selector.style.borderWidth = fq.css.borderWidth;
            selector.style.bottom = fq.css.bottom;
            selector.style.boxDecorationBreak = fq.css.boxDecorationBreak;
            selector.style.boxShadow = fq.css.boxShadow;
            selector.style.boxSizing = fq.css.boxSizing;
            selector.style.breakAfter = fq.css.breakAfter;
            selector.style.breakBefore = fq.css.breakBefore;
            selector.style.breakInside = fq.css.breakInside;
            selector.style.captionSide = fq.css.captionSide;
            selector.style.caretColor = fq.css.caretColor;
            /* THIS LINE HAS LEAVE BLANK FOR @CHARSET PROPERTY */
            selector.style.clear = fq.css.clear;
            selector.style.clip = fq.css.clip;
            selector.style.color = fq.css.color;
            selector.style.columnCount = fq.css.columnCount;
            selector.style.columnFill = fq.css.columnFill;
            selector.style.columnGap = fq.css.columnGap;
            selector.style.columnRule = fq.css.columnRule;
            selector.style.columnRuleColor = fq.css.columnRuleColor;
            selector.style.columnRuleStyle = fq.css.columnRuleStyle;
            selector.style.columnRuleWidth = fq.css.columnRuleWidth;
            selector.style.columnSpan = fq.css.columnSpan;
            selector.style.columnWidth = fq.css.columnWidth;
            selector.style.columns = fq.css.columns;
            selector.style.content = fq.css.content;
            selector.style.counterIncrement = fq.css.counterIncrement;
            selector.style.counterReset = fq.css.counterReset;
            selector.style.cursor = fq.css.cursor;
            selector.style.direction = fq.css.direction;
            selector.style.display = fq.css.display;
            selector.style.emptyCells = fq.css.emptyCells;
            selector.style.filter = fq.css.filter;
            selector.style.flex = fq.css.flex;
            selector.style.flexBasis = fq.css.flexBasis;
            selector.style.flexDirection = fq.css.flexDirection;
            selector.style.flexFlow = fq.css.flexFlow;
            selector.style.flexGrow = fq.css.flexGrow;
            selector.style.flexShrink = fq.css.flexShrink;
            selector.style.flexWrap = fq.css.flexWrap;
            selector.style.float = fq.css.float;
            selector.style.font = fq.css.font;
            /* THIS LINE LEAVE BLANK FOR @FONTFACE PROPERTY */
            selector.style.fontFamily = fq.css.fontFamily;
            selector.style.fontFeatureSettings = fq.css.fontFeatureSettings;
            /* THIS LINE LEAVE BLANK FOR @FONTFEATUREVALUES PROPERTY */
            selector.style.fontKerning = fq.css.fontKerning;
            selector.style.fontLanguageOverride = fq.css.fontLanguageOverride;
            selector.style.fontSize = fq.css.fontSize;
            selector.style.fontSizeAdjust = fq.css.fontSizeAdjust;
            selector.style.fontStretch = fq.css.fontStretch;
            selector.style.fontStyle = fq.css.fontStyle;
            selector.style.fontSynthesis = fq.css.fontSynthesis;
            selector.style.fontVariant = fq.css.fontVariant;
            selector.style.fontVariantAlternates = fq.css.fontVariantAlternates;
            selector.style.fontVariantCaps = fq.css.fontVariantCaps;
            selector.style.fontVariantEastAsian = fq.css.fontVariantEastAsian;
            selector.style.fontVariantLigatures = fq.css.fontVariantLigatures;
            selector.style.fontVariantNumeric = fq.css.fontVariantNumeric;
            selector.style.fontVariantPosition = fq.css.fontVariantPosition;
            selector.style.fontWeight = fq.css.fontWeight;
            selector.style.gap = fq.css.gap;
            selector.style.grid = fq.css.grid;
            selector.style.gridArea = fq.css.gridArea;
            selector.style.gridAutoColumns = fq.css.gridAutoColumns;
            selector.style.gridAutoFlow = fq.css.gridAutoFlow;
            selector.style.gridAutoRows = fq.css.gridAutoRows;
            selector.style.gridColumn = fq.css.gridColumn;
            selector.style.gridColumnEnd = fq.css.gridColumnEnd;
            selector.style.gridRowGap = fq.css.gridRowGap;
            selector.style.gridRowStart = fq.css.gridRowStart;
            selector.style.gridTemplate = fq.css.gridTemplate;
            selector.style.gridTemplateAreas = fq.css.gridTemplateAreas;
            selector.style.gridTemplateColumns = fq.css.gridTemplateColumns;
            selector.style.gridTemplateRows = fq.css.gridTemplateRows;
            selector.style.hangingPunctuation = fq.css.hangingPunctuation;
            selector.style.height = fq.css.height;
            selector.style.hypens = fq.css.hypens;
            selector.style.imageRendering = fq.css.imageRendering;
            /* THIS LINE LEAVE BLANK FOR @IMPORT PROPERTY */
            selector.style.isolation = fq.css.isolation;
            selector.style.justifyContent = fq.css.justifyContent;
            /* THIS LINE LEAVE BLANK FOR @KEYFRAMES PROPERTY */
            selector.style.left = fq.css.left;
            selector.style.letterSpacing = fq.css.letterSpacing;
            selector.style.lineBreak = fq.css.lineBreak;
            selector.style.lineHeight = fq.css.lineHeight;
            selector.style.listStyle = fq.css.listStyle;
            selector.style.listStyleImage = fq.css.listStyleImage;
            selector.style.listStylePosition = fq.css.listStylePosition;
            selector.style.listStyleType = fq.css.listStyleType;
            selector.style.margin = fq.css.margin;
            selector.style.marginBottom = fq.css.marginBottom;
            selector.style.marginLeft = fq.css.marginLeft;
            selector.style.marginRight = fq.css.marginRight;
            selector.style.marginTop = fq.css.marginTop;
            selector.style.mask = fq.css.mask;
            selector.style.maskClip = fq.css.maskClip;
            selector.style.maskComposite = fq.css.maskComposite;
            selector.style.maskImage = fq.css.maskImage;
            selector.style.maskMode = fq.css.maskMode;
            selector.style.maskOrigin = fq.css.maskOrigin;
            selector.style.maskPosition = fq.css.maskPosition;
            selector.style.maskRepeat = fq.css.maskRepeat;
            selector.style.maskSize = fq.css.maskSize;
            selector.style.maskType = fq.css.maskType;
            selector.style.maxHeight = fq.css.maxHeight;
            selector.style.maxWidth = fq.css.maxWidth;
            /* THIS LINE LEAVE BLANK FOR @MEDIA PROPERTY */
            selector.style.minHeight = fq.css.minHeight;
            selector.style.minWidth = fq.css.minWidth;
            selector.style.mixBlendMode = fq.css.mixBlendMode;
            selector.style.objectFit = fq.css.objectFit;
            selector.style.objectPosition = fq.css.objectPosition;
            selector.style.opacity = fq.css.opacity;
            selector.style.order = fq.css.order;
            selector.style.orphans = fq.css.orphans;
            selector.style.outline = fq.css.outline;
            selector.style.outlineColor = fq.css.outlineColor;
            selector.style.outlineOffset = fq.css.outlineOffset;
            selector.style.outlineStyle = fq.css.outlineStyle;
            selector.style.outlineWidth = fq.css.outlineWidth;
            selector.style.overflow = fq.css.overflow;
            selector.style.overflowWrap = fq.css.overflowWrap;
            selector.style.overflowX = fq.css.overflowX;
            selector.style.overflowY = fq.css.overflowY;
            selector.style.padding = fq.css.padding;
            selector.style.paddingBottom = fq.css.paddingBottom;
            selector.style.paddingLeft = fq.css.paddingLeft;
            selector.style.paddingRight = fq.css.paddingRight;
            selector.style.paddingTop = fq.css.paddingTop;
            selector.style.pageBreakAfter = fq.css.pageBreakAfter;
            selector.style.pageBreakBefore = fq.css.pageBreakBefore;
            selector.style.pageBreakInside = fq.css.pageBreakInside;
            selector.style.perspective = fq.css.perspective;
            selector.style.perspectiveOrigin = fq.css.perspectiveOrigin;
            // selector.style.placeContent = fq.css.placeContent;
            selector.style.pointerEvents = fq.css.pointerEvents;
            selector.style.position = fq.css.position;
            selector.style.quotes = fq.css.quotes;
            selector.style.resize = fq.css.resize;
            selector.style.right = fq.css.right;
            selector.style.rowGap = fq.css.rowGap;
            selector.style.scrollBehavior = fq.css.scrollBehavior;
            selector.style.tabSize = fq.css.tabSize;
            selector.style.tableLayout = fq.css.tableLayout;
            selector.style.textAlign = fq.css.textAlign;
            selector.style.textAlignLast = fq.css.textAlignLast;
            selector.style.textCombineUpright = fq.css.textCombineUpright;
            selector.style.textDecoration = fq.css.textDecoration;
            selector.style.textDecorationColor = fq.css.textDecorationColor;
            selector.style.textDecorationLine = fq.css.textDecorationLine;
            selector.style.textDecorationStyle = fq.css.textDecorationStyle;
            selector.style.textDecorationThickness = fq.css.textDecorationThickness;
            selector.style.textEmphasis = fq.css.textEmphasis;
            selector.style.textIndent = fq.css.textIndent;
            selector.style.textJustify = fq.css.textJustify;
            selector.style.textOrientation = fq.css.textOrientation;
            selector.style.textoverflow = fq.css.textoverflow;
            selector.style.textShadow = fq.css.textShadow;
            selector.style.textTransform = fq.css.textTransform;
            selector.style.textUnderlinePosition = fq.css.textUnderlinePosition;
            selector.style.top = fq.css.top;
            selector.style.transform = fq.css.transform;
            selector.style.transformOrigin = fq.css.transformOrigin;
            selector.style.transformStyle = fq.css.transformStyle;
            selector.style.transition = fq.css.transition;
            selector.style.transitionDelay = fq.css.transitionDelay;
            selector.style.transitionDuration = fq.css.transitionDuration;
            selector.style.transitionProperty = fq.css.transitionProperty;
            selector.style.transitionTimingFunction = fq.css.transitionTimingFunction;
            selector.style.unicodeBidi = fq.css.unicodeBidi;
            selector.style.userSelect = fq.css.userSelect;
            selector.style.verticalAlign = fq.css.verticalAlign;
            selector.style.visibility = fq.css.visibility;
            selector.style.whiteSpace = fq.css.whiteSpace;
            selector.style.widows = fq.css.widows;
            selector.style.width = fq.css.width;
            selector.style.wordBreak = fq.css.wordBreak;
            selector.style.wordSpacing = fq.css.wordSpacing;
            selector.style.wordWrap = fq.css.wordWrap;
            selector.style.writingMode = fq.css.writingMode;
            selector.style.zIndex = fq.css.zIndex;
        }

        !fq.css.id ? query(className): query(id);
    };

    if (!fq.css) {
        onHTML();
    } else if (!fq.html) {
        onCSS();
    } else {
        onHTML(),
        onCSS();
    }
};

let loop = (min, max, run) => {
    for (r = min; r < max; r++) {
        run();
    }
};

let render = (data, parent) => {
    for (r = 0; r < data.length; r++) {
        out(data[r], parent);
    }
};

let removeUI = (parent, child) => {
    pe = document.querySelector(`#${parent}`);
    ce = document.querySelector(`#${child}`);
    pe.removeChild(ce);
}

let media = (id, query, run) => {
    let mediaQuery = (x) => {
        let selector = document.querySelector(`#${id}`);

        run(x);
    };

    let queryScreen = window.matchMedia(`(max-width:${query})`);

    mediaQuery(queryScreen);

    queryScreen.addListener(mediaQuery);
};

let loadJSON = (file) => {
    json = {
        run: () => {
            let init = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                cache: 'default'
            };

            let parseJSON = new Request(`./${file}`, init);

            fetch(parseJSON).then((r) => {
                return r.json();
            }).then((y) => {
                loop(0, y.length, () => {
                    out(y[r]);
                });
            });
        },
    }

    return json;
};
