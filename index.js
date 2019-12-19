const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
function makeGETRequest(url) {
    return new Promise((resolve, reject) => {
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
        xhr.onerror = function (err) {
            reject(err);
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
            this.initEvents();
        }
        fetchGoods() {
            return makeGETRequest(`${API_URL}/catalogData.json`)
            .then((goods) => this.goods = goods)
            .catch(e => {
                return e;
            });
        }
        filterGoods(value) {
            //filter
            console.log(value);
        }
        initEvents(){
            const searchForm = document.querySelector('.search-form');
            const searchInput = document.querySelector('.search-input');
            serchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const value = searchInput.value;
                this.filterGoods(value);
            })
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