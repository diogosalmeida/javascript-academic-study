class Negociacao {
    constructor(data, quantidade, valor) {
        Object.assign(this,{
                 _quantidade: quantidade
                ,_valor: valor
        });
        this._data = new Date(data.getTime())
        Object.freeze(this);

    }
    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}