const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),

    data: {
        selectedState: 0,
        status: [
            { value: -1, label: 'すべて' },
            { value:  0, label: '作業中' },
            { value:  1, label: '完了'   }
        ],
        selectedItem: 1,
        items: [
            { text: 'Real-Time', icon: 'mdi-clock' },
            { text: 'Audience', icon: 'mdi-account' },
            { text: 'Conversions', icon: 'mdi-flag' },
        ]
    }
})