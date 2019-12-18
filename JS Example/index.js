const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
function makeGETRequest(url) {
    return new Promise(() => {
        let xhr;
    if (window.XMLHttpRequest) {
        xhr = new window.XMLHttpRequest();
    } else {
        xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const body = JSON.parse(xhr.responseText);
                resolve(body)
            } else {
            reject(xhr.responseText);
            }
        }
    };
    x.oneerror = function () {
        reject()
    };
    xhr.open('GET', url);
    xhr.send();
})

class GoodsItem {
    constructor(title = 'Без имени', price = '') {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item">
                    <h3 class="title goods-title">${this.title}</h3>
                    <p>${this.price} ₽</p>
                </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods(cb)  {
        makeGETRequest(`${API_URL}/catalogData.json`).then((goods) => {
            this.goods = goods;
            cb();
        });
    }
    totalPrice() {
        return this.goods.reduce((accum, item) => {
            if (item.price) accum += item.price;
            return accum;
        }, 0);
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

class Cart extends GoodsList {
    constructor(props) {
        super(props);
    }
    clean() {}
    incGood() {}
    decGood() {}
}

class CartItem extends GoodsItem {
    constructor(props) {
        super(props);
    }
    delete() {}
}

const list = new GoodsList();
list.fetchGoods(() => {
    list.render();
});}
