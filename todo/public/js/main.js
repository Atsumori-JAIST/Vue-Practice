const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),

    data: {
        selectedItem: 1,
        items: [
            { text: 'Real-Time', icon: 'mdi-clock' },
            { text: 'Audience', icon: 'mdi-account' },
            { text: 'Conversions', icon: 'mdi-flag' },
        ]
    }
})