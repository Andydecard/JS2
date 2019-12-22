
const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
        isVisibleCart: ''
    },
    computed: {
        filterGoods() {
            let items = this.filteredGoods;
            let searchLine = this.searchLine;
            if(!searchLine) {
                return items;
            }
            searchLine = searchLine.trim().toLowerCase();
            items = items.filter(item => {
                if(item.product_name.toLowerCase().indexOf(searchLine) !== -1){
                    return item;
                }
            });
        return items;
        }},
        methods: {
    makeGETRequest(url, callback) {
        const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

        var xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                callback(xhr.responseText);
            }
        };

        xhr.open('GET', url, true);
        xhr.send();
    },
            mounted() {
                this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
                    this.goods = goods;
                    this.filteredGoods = goods;
                });
}}});
