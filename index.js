const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
function makeGETRequest(url, callback) {
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new window.XMLHttpRequest();
    } else {
        xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 150) {
            const body = JSON.parse(xhr.responseText);
            callback(body)
        }
    };
    xhr.open('GET', url);
    xhr.send();
}

class GoodsItem {
    constructor(title = 'Без имени', price = ''){
        this.title = title;
        this.price = price;
    }

    render(){
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
    fetchGoods() {
        makeGETRequest(`${API_URL}/catalogData.json`)
            .then((goods) => {
                this.goods = goods;
                list.render();
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
UserCart.prototype.addListener();

function userCartTotal() {

}

userCartTotal()
{
    let priceString = document.querySelector('.total-price');
    let totalPrice = cartArr.forEach(function(i) {
        cartArr.shift();
        totalSum = Number(totalSum + i.price);
    });
    priceString.innerHTML = 'Сумма:' + totalSum + '₽';
};

let cartArr = [];
let totalSum = '';
class UserCart {
    constructor(title = title, price = price) {
        this.title = title;
        this.price = Number(price.slice(0, -1));
    }
    addListener() {
        let item = document.querySelector('.goods-list').children;
        let collection = Array.from(item);
        let cartButton = document.querySelector('.cart-button');
        cartButton.addEventListener('click', function() {
            if (document.querySelector('.userCartList').style.display === 'block') {
                document.querySelector('.userCartList').style.display = 'none';
            } else {
                document.querySelector('.userCartList').style.display = 'block';
            };
        });
        collection.forEach(function(i) {
            i.addEventListener('click', function handler(event) {
                let newObj = new UserCart(this.children[0].innerText, this.children[1].innerText);
                cartArr.push(newObj);
                UserCart.prototype.renderUserCart();
            });
        });
    }
    renderUserCart() {
        let userCartList = document.querySelector('.userCartList');
        if (cartArr.length === 0) {
            let createUl = document.createElement('ul');
            userCartList.insertAdjacentElement('afterbegin', createUl);
            createUl.classList.add('cartUl');
        } else {
            let cartUl = document.querySelector('.cartUl');
            cartUl.innerHTML += '<li>' + (String(event.target.innerText)) + '</li>';
            GoodsList.prototype.userCartTotal();
        };
    }
};

const list = new GoodsList();
list.fetchGoods();
list.render();
UserCart.prototype.renderUserCart();