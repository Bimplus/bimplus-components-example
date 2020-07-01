export class BimplusLanguageMenu {
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
    static get style() { return "/**style-placeholder:bimplus-language-menu:**/"; }
}
