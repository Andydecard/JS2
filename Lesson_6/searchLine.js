Vue.component('search-component', {
    data() {
        return {
            searchLine: ''
    }
},
    template: `
    <form class="serch-form" @submit.prevent="sendRequest">
    <input type="text" class="serch-input" v-model.trim='serchLine"/>
    </form>
    `,
    metods: {
    sendRequest() {
        this.$emit('request', this.serchLine);
    }
}
});