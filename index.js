const goods = [
    { title: 'Shirt', price: 150},
    { title: 'Socks', price: 150},
    { title: 'Jacket', price: 150},
    { title: 'Shoes', price: 150},
    ];

class GoodsItem {
    constructor(title = 'Без имени', price = ''){
        this.title = title;
        this.price = price;
    }

    render(){
        return `<div class="goods-item">
    <h3 class="title goods-title">${this.title}</h3>
    <p>${this.price} P</p>
    </div>`
    }
}

class GoodsList {
    constructor () {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150},
            { title: 'Socks', price: 150},
            { title: 'Jacket', price: 150},
            { title: 'Shoes', price: 150},
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    sumGoods() {
        let sum = 0;
        this.goods.forEach( good => {
            sum += good.price;
        });
        return sum;

    }
}

class UserCart {
    constructor() {
        let userCart = [];
    }
    addListener(){
        let item = document.querySelector('.goods-list').children;
        let collection = Array.from(item);
        console.log(collection);
        collection.forEach(function(item,i){
            item.addEventListener('click', function handler(event){
                let t = event.target;
                console.log(event.target);
                cartArr.push(t);
                console.log(cartArr);
            });
        });
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();

// const renderGoodsList = list => {
//     let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
//     document.querySelector('.goods-list').innerHTML = goodsList.join("");}
//     renderGoodsList(goods);

