import { h } from '../bimplus.core.js';

class BimplusLanguageMenu {
    constructor() {
        this._languagesList = [
            { symbol: "en", text: "English (UK)" },
            { symbol: "us", text: "English (US)" },
            { symbol: "de", text: "Deutsch" },
            { symbol: "fr", text: "Français" },
            { symbol: "ru", text: "Русский" },
            { symbol: "it", text: "Italiano" },
            { symbol: "es", text: "Español" },
            { symbol: "cs", text: "Čeština" },
            { symbol: "tr", text: "Türkçe" }
        ];
        this.selectedLanguage = 'en';
        this._menuOpened = false;
    }
    _switchLanguage(language) {
        this.bimplusLanguageSelected.emit(language);
    }
    _toggleOpened() {
        this._menuOpened = !this._menuOpened;
    }
    render() {
        let langList = this._languagesList.map(lang => {
            let langId = "portalLanguage" + lang.symbol.charAt(0).toUpperCase() + lang.symbol.slice(1);
            return (h("li", { onClick: this._switchLanguage.bind(this, lang.symbol) },
                h("div", { id: langId, class: "icon icon-flag-" + lang.symbol }),
                h("span", null, lang.text)));
        });
        return [
            h("div", { class: "dropdown " + (this._menuOpened ? "open" : ""), onClick: this._toggleOpened.bind(this) },
                h("div", { class: "dropdown-toggle" },
                    h("div", { class: 'main-icon icon-flag-' + this.selectedLanguage }),
                    h("span", { class: "caret" })),
                h("ul", { class: "dropdown-menu " + (this._menuOpened ? "open" : "") }, langList)),
            h("div", { class: "overlay " + (this._menuOpened ? "open" : ""), onClick: this._toggleOpened.bind(this) })
        ];
    }
    static get is() { return "bimplus-language-menu"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "_menuOpened": {
            "state": true
        },
        "selectedLanguage": {
            "type": String,
            "attr": "selected-language",
            "reflectToAttr": true,
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "bimplusLanguageSelected",
            "method": "bimplusLanguageSelected",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".dropdown{position:relative;width:4.2em;height:3.25em;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center}.dropdown.open{color:#555;background-color:#e7e7e7}.dropdown-toggle{position:relative;margin-left:.44em;margin-right:.44em;background-size:1.4em 1.4em;padding-bottom:.22em;padding-left:.2em}.dropdown-toggle .caret{display:inline-block;width:0;height:0;margin-top:.19em;margin-left:.5em;vertical-align:middle;border-top:.25em dashed;border-top:.25em solid;border-right:.25em solid transparent;border-left:.25em solid transparent}.dropdown-menu{font-family:Source Sans Pro,Helvetica,Arial,tahoma,sans-serif;position:absolute;top:100%;right:0;z-index:1000;display:none;min-width:11.43em;padding:.5em 0 .57em 0;margin:0;font-size:.875em;list-style:none;background-color:#fff;border:thin solid rgba(0,0,0,.15);border-radius:0 0 .29em .29em;-webkit-box-shadow:0 .43em .86em rgba(0,0,0,.175);box-shadow:0 .43em .86em rgba(0,0,0,.175);-webkit-text-decoration-color:#333;text-decoration-color:#333;-webkit-text-decoration-line:none;text-decoration-line:none;-webkit-text-decoration-style:solid;text-decoration-style:solid;line-height:2.71em;font-weight:400}.dropdown-menu div{font-size:1em}.dropdown-menu .noselect{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.dropdown-menu li{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-box-sizing:content-box;box-sizing:content-box;padding:.21em 2.1em}.dropdown-menu li span{display:inline-block;-ms-flex:1 0 auto;flex:1 0 auto;margin-right:1.43em;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.dropdown-menu li:hover{background-color:#f5f5f5}.dropdown-menu li,.dropdown-menu ul{list-style:none}.dropdown-menu.open{display:inline-block}.icon{margin:0 1.36em 0 0;width:1.64em;height:1.64em}.icon,.main-icon{-ms-flex-negative:0;flex-shrink:0;display:inline-block;vertical-align:middle;background-size:contain;background-position:50%;background-repeat:no-repeat}.main-icon{width:1.375em;height:1.375em}.overlay{position:fixed;width:100vw;height:100vh;left:0;top:0;display:none}.overlay.open{display:block;z-index:999}.icon-flag-en{background-image:url(assets/images/bim+_WebIcons_Language_GB.svg)}.icon-flag-de{background-image:url(assets/images/bim+_WebIcons_Language_D.svg)}.icon-flag-fr{background-image:url(assets/images/bim+_WebIcons_Language_F.svg)}.icon-flag-ru{background-image:url(assets/images/bim+_WebIcons_Language_RU.svg)}.icon-flag-it{background-image:url(assets/images/bim+_WebIcons_Language_IT.svg)}.icon-flag-es{background-image:url(assets/images/bim+_WebIcons_Language_ES.svg)}.icon-flag-cs{background-image:url(assets/images/bim+_WebIcons_Language_CS.svg)}.icon-flag-tr{background-image:url(assets/images/bim+_WebIcons_Language_TR.svg)}.icon-flag-us{background-image:url(assets/images/bim+_WebIcons_Language_USA.svg)}"; }
}

export { BimplusLanguageMenu };
