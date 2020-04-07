class Key {
    constructor(code, valueOpt, displayOptions) {
        this._code = code;
        this._displayOptions = displayOptions;
        this._displayElement = this.createElement();
        this._displayElement.addEventListener('mousedown', (e) => {
            this._onMouseDown();
        })
        this._displayElement.addEventListener('mouseup', (e) => {
            this._onMouseUp();
        })
        this._value = valueOpt
    }

    changeKey(layout, useAlt) {
        let currentValue = "";

        if (this._value.value) {
            currentValue = this._value.value;
        } else {
            let currentLayout = this._value.layouts[layout];
            currentValue = useAlt ? currentLayout.altValue : currentLayout.value; 
        }

        this._displayElement.innerHTML = `<H1>${currentValue}</H1>`;
    }

    getElement() {
        return this._displayElement;
    }

    down() {
        this._displayElement.style.backgroundColor = "blue";
    }

    up() {
        this._displayElement.style.backgroundColor = this._displayOptions.color;
    }

    _onMouseDown() {
        document.dispatchEvent(new KeyboardEvent('keydown',{'keyCode': this._code }));
    }

    _onMouseUp() {
        document.dispatchEvent(new KeyboardEvent('keyup',{'keyCode': this._code }));
    }

    createElement() {
        let element = document.createElement("div");
        element.style.width = this._displayOptions.width;
        element.style.height = this._displayOptions.height;
        element.style.backgroundColor = this._displayOptions.color;

        return element;
    }
}

class Keyboard {
    constructor(state) {
        debugger;

        let squareDisplayOpt = {
            width: '50px',
            height: '50px',
            color: 'red'
        };

        this._state = state;
        this._keysMap = new Map();
        
        //#region 
        this._keysMap.set(9, new Key(9, {  
            value: "TAB"
        }, { width: '70px', height: '50px', color: 'red'}));
        this._keysMap.set(81, new Key(81, {  
            layouts : { en: { value: "q", altValue: "Q" }, ru: { value: "й", altValue: "Й" },}
        }, squareDisplayOpt));
        this._keysMap.set(87, new Key(87, {  
            layouts : { en: { value: "w", altValue: "W" }, ru: { value: "ц", altValue: "Ц" },}
        }, squareDisplayOpt));
        this._keysMap.set(69, new Key(69, {  
            layouts : { en: { value: "e", altValue: "E" }, ru: { value: "у", altValue: "У" },}
        }, squareDisplayOpt));
        this._keysMap.set(82, new Key(82, {  
            layouts : { en: { value: "r", altValue: "R" }, ru: { value: "к", altValue: "К" },}
        }, squareDisplayOpt));
        this._keysMap.set(84, new Key(84, {  
            layouts : { en: { value: "t", altValue: "T" }, ru: { value: "е", altValue: "Е" },}
        }, squareDisplayOpt));
        this._keysMap.set(89, new Key(89, {  
            layouts : { en: { value: "y", altValue: "Y" }, ru: { value: "н", altValue: "Н" },}
        }, squareDisplayOpt));
        this._keysMap.set(85, new Key(85, {  
            layouts : { en: { value: "u", altValue: "U" }, ru: { value: "г", altValue: "Г" },}
        }, squareDisplayOpt));
        this._keysMap.set(73, new Key(73, {  
            layouts : { en: { value: "i", altValue: "I" }, ru: { value: "ш", altValue: "Ш" },}
        }, squareDisplayOpt));
        this._keysMap.set(79, new Key(79, {  
            layouts : { en: { value: "o", altValue: "O" }, ru: { value: "щ", altValue: "Щ" },}
        }, squareDisplayOpt));
        this._keysMap.set(80, new Key(80, {  
            layouts : { en: { value: "p", altValue: "P" }, ru: { value: "з", altValue: "З" },}
        }, squareDisplayOpt));
        this._keysMap.set(219, new Key(219, {  
            layouts : { en: { value: "[", altValue: "{" }, ru: { value: "х", altValue: "Х" },}
        }, squareDisplayOpt));
        this._keysMap.set(221, new Key(221, {  
            layouts : { en: { value: "]", altValue: "}" }, ru: { value: "ъ", altValue: "Ъ" },}
        }, squareDisplayOpt));
        this._keysMap.set(220, new Key(220, {  
            layouts : { en: { value: "\\", altValue: "|" }, ru: { value: "\\", altValue: "/" },}
        }, squareDisplayOpt));
        //#endregion       
        //#region 
        this._keysMap.set(20, new Key(20, {  
            value: "Capslock"
        }, { width: '70px', height: '50px', color: 'red'}));
        this._keysMap.set(65, new Key(65, {  
            layouts : { en: { value: "a", altValue: "A" }, ru: { value: "ф", altValue: "Ф" },}
        }, squareDisplayOpt));
        this._keysMap.set(83, new Key(83, {  
            layouts : { en: { value: "s", altValue: "S" }, ru: { value: "ы", altValue: "Ы" },}
        }, squareDisplayOpt));
        this._keysMap.set(68, new Key(68, {  
            layouts : { en: { value: "d", altValue: "D" }, ru: { value: "в", altValue: "В" },}
        }, squareDisplayOpt));
        this._keysMap.set(70, new Key(70, {  
            layouts : { en: { value: "f", altValue: "F" }, ru: { value: "а", altValue: "А" },}
        }, squareDisplayOpt));
        this._keysMap.set(71, new Key(71, {  
            layouts : { en: { value: "g", altValue: "G" }, ru: { value: "п", altValue: "П" },}
        }, squareDisplayOpt));
        this._keysMap.set(72, new Key(72, {  
            layouts : { en: { value: "h", altValue: "H" }, ru: { value: "р", altValue: "Р" },}
        }, squareDisplayOpt));
        this._keysMap.set(74, new Key(74, {  
            layouts : { en: { value: "j", altValue: "J" }, ru: { value: "о", altValue: "О" },}
        }, squareDisplayOpt));
        this._keysMap.set(75, new Key(75, {  
            layouts : { en: { value: "k", altValue: "K" }, ru: { value: "л", altValue: "Л" },}
        }, squareDisplayOpt));
        this._keysMap.set(76, new Key(76, {  
            layouts : { en: { value: "l", altValue: "L" }, ru: { value: "д", altValue: "Д" },}
        }, squareDisplayOpt));
        this._keysMap.set(186, new Key(186, {  
            layouts : { en: { value: ";", altValue: ":" }, ru: { value: "ж", altValue: "Ж" },}
        }, squareDisplayOpt));
        this._keysMap.set(222, new Key(222, {  
            layouts : { en: { value: "'", altValue: "\"" }, ru: { value: "э", altValue: "Э" },}
        }, squareDisplayOpt));
        this._keysMap.set(13, new Key(13, {  
            value: "ENTER"
        }, { width: '70px', height: '50px', color: 'red'}));
        //#endregion
        //#region 
        this._keysMap.set(16, new Key(16, {  
            value: "SHIFT"
        }, { width: '70px', height: '50px', color: 'red'}));
        this._keysMap.set(90, new Key(90, {  
            layouts : { en: { value: "z", altValue: "Z" }, ru: { value: "я", altValue: "Я" },}
        }, squareDisplayOpt));
        this._keysMap.set(88, new Key(88, {  
            layouts : { en: { value: "x", altValue: "X" }, ru: { value: "ч", altValue: "Ч" },}
        }, squareDisplayOpt));
        this._keysMap.set(67, new Key(67, {  
            layouts : { en: { value: "c", altValue: "C" }, ru: { value: "с", altValue: "С" },}
        }, squareDisplayOpt));
        this._keysMap.set(86, new Key(86, {  
            layouts : { en: { value: "v", altValue: "V" }, ru: { value: "м", altValue: "М" },}
        }, squareDisplayOpt));
        this._keysMap.set(66, new Key(66, {  
            layouts : { en: { value: "b", altValue: "B" }, ru: { value: "и", altValue: "И" },}
        }, squareDisplayOpt));
        this._keysMap.set(78, new Key(78, {  
            layouts : { en: { value: "n", altValue: "N" }, ru: { value: "т", altValue: "Т" },}
        }, squareDisplayOpt));
        this._keysMap.set(77, new Key(77, {  
            layouts : { en: { value: "m", altValue: "m" }, ru: { value: "ь", altValue: "Ь" },}
        }, squareDisplayOpt));
        this._keysMap.set(188, new Key(188, {  
            layouts : { en: { value: ",", altValue: "<" }, ru: { value: "б", altValue: "Б" },}
        }, squareDisplayOpt));
        this._keysMap.set(190, new Key(190, {  
            layouts : { en: { value: ".", altValue: ">" }, ru: { value: "ю", altValue: "Ю" },}
        }, squareDisplayOpt));
        this._keysMap.set(191, new Key(191, {  
            layouts : { en: { value: "/", altValue: "?" }, ru: { value: ".", altValue: "," },}
        }, squareDisplayOpt));
//#endregion
        //#region 
        this._keysMap.set(17, new Key(17, {  
            value: "CTRL"
        }, { width: '70px', height: '50px', color: 'red'}));
        this._keysMap.set(18, new Key(18, {  
            value: "ALT"
        }, { width: '70px', height: '50px', color: 'red'}));
        this._keysMap.set(32, new Key(32, {  
            value: "SPACE"
        }, { width: '200px', height: '50px', color: 'red'}));
        //#endregion
        this.draw(this.getTable(), this._keysMap);
        this.refreshLayout(this._keysMap);

        document.addEventListener('keydown', (e) => {
            if (e.repeat)
              logMessage(`Key "${e.key}" pressed  [event: keydown]`);
            else {
                var refresh = false;
                this._shortcuts = new Map();
                switch(e.keyCode) {
                    case 20: 
                      if (event.getModifierState("CapsLock")) {
                        this._state.alt = true;
                      } else {
                        this._state.alt = false;
                      }
                    refresh = true;
                    break;
                }

                if (refresh) this.refreshLayout(this._keysMap);

                this._keysMap.get(e.keyCode).down();
            }
          });

        document.addEventListener('keyup', (e) => {
                this._keysMap.get(e.keyCode).up();
                this._pressed.delete(e.keyCode);

                this._
        });
    }

    getTable() {
        return [
            [9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220],
            [20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13],
            [16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191],
            [17, 18, 32]
        ]
    }

    refreshLayout(keyMap) {
        keyMap.forEach((value, key, map) => {
            value.changeKey(this._state.layout, this._state.alt);
        });
    }

    draw(table, keyMap) {
        const tableElement = document.createElement("table");
        for (let rowIndex = 0; rowIndex < table.length; rowIndex++) {
            const row = table[rowIndex];
            const trElement = document.createElement("tr");
            
            for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
                const key = row[columnIndex];
                const item = keyMap.get(key);
                const tdElement = document.createElement("td");
                tdElement.appendChild(item.getElement());
                trElement.appendChild(tdElement);
            }
            tableElement.appendChild(trElement);
        }

        document.body.appendChild(tableElement);
    }
}

var keyboard = new Keyboard({layout: "ru", alt: false});

// 