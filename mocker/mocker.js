
const dayjs = require('dayjs');

module.exports = {
    'POST /rest/search'(req, res) {
        return res.json({
            code: 0
        })
    },
    'GET /rest/cities': require('./rest/cities.json'),
    'GET /rest/search'(req, res) {
        const { key } = req.query;
        return res.json({
            result: [{
                key: 'wuhu',
                display: 'wuhu'
            }, {
                key: 'jingangshan',
                display: 'jingangshan',
            }, {
                key: 'tieling',
                display: 'tieling',
            }],
            searchKey: key,
        });
    },
    'GET /rest/query'(req, res) {
        const response = require('./rest/query.json');

        response.dataMap.directTrainInfo.trains = response.dataMap.directTrainInfo.trains.reverse();

        return res.json(response);
    },
    'GET /rest/ticket'(req, res) {
        const { date } = req.query;

        return res.json({
            detail: {
                departTimeStr: '07:15',
                arriveTimeStr: '11:47',
                arriveDate: dayjs(date).valueOf(),
                durationStr: '4:32'
            },
            candidates: [{
                type: '2nd-Class Seat',
                priceMsg: '443.5',
                ticketsLeft: 'Purchasable',
                channels: [{
                    name: 'Fast Booking',
                    desc: 'Includes Booking Guarantee'
                }, {
                    name: 'Normal Booking',
                    desc: 'Maybe Delayed During Peak'
                }]
            }, {
                type: '1st-Class Seat',
                priceMsg: '748.5',
                ticketsLeft: 'Purchasable',
                channels: [{
                    name: 'Fast Booking',
                    desc: 'Includes Booking Guarantee'
                }, {
                    name: 'Normal Booking',
                    desc: 'Maybe Delayed During Peak'
                }]
            }, {
                type: 'Business Seat',
                priceMsg: '1403.5',
                ticketsLeft: '5 Left',
                channels: [{
                    name: 'Fast Booking',
                    desc: 'Includes Booking Guarantee'
                }, {
                    name: 'Normal Booking',
                    desc: 'Maybe Delayed During Peak'
                }]
            }]
        });
    },
    'GET /rest/schedule'(req, res) {
        return res.json([{
            station: 'beijing south',
            arriveTime: null,
            departTime: '07:20',
            stay: null,
        }, {
            station: 'tianjin south',
            arriveTime: '07:54',
            departTime: '07:56',
            stay: 2,
        }, {
            station: 'nanjing south',
            arriveTime: '11:51',
            departTime: '11:53',
            stay: 2,
        }, {
            station: 'shanghai hq',
            arriveTime: '13:08',
            departTime: null,
            stay: null,
        }]);
    },
    'GET /rest/order'(req, res) {
        const { date } = req.query;
        
        return res.json({
            departTimeStr: '07:15',
            arriveTimeStr: '11:47',
            arriveDate: dayjs(date).valueOf(),
            durationStr: '4:32',
            price: 483.5,
        });
    }
};