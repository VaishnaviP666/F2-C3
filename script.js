async function fetchDataUsingAsyncAwait() {
    
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false', 
        {mode: 'cors'});
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchDataUsingAsyncAwait().then(data => {
    if(data===undefined){
        data=[
            {
                "id": "bitcoin",
                "symbol": "btc",
                "name": "Bitcoin",
                "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
                "current_price": 26668,
                "market_cap": 516891350468,
                "market_cap_rank": 1,
                "fully_diluted_valuation": 559947500263,
                "total_volume": 10905112627,
                "high_24h": 26857,
                "low_24h": 26616,
                "price_change_24h": 51.95,
                "price_change_percentage_24h": 0.19519,
                "market_cap_change_24h": 1605344359,
                "market_cap_change_percentage_24h": 0.31154,
                "circulating_supply": 19385243,
                "total_supply": 21000000,
                "max_supply": 21000000,
                "ath": 69045,
                "ath_change_percentage": -61.30622,
                "ath_date": "2021-11-10T14:24:11.849Z",
                "atl": 67.81,
                "atl_change_percentage": 39298.94867,
                "atl_date": "2013-07-06T00:00:00.000Z",
                "roi": null,
                "last_updated": "2023-05-27T14:14:07.354Z"
            },
            {
                "id": "ethereum",
                "symbol": "eth",
                "name": "Ethereum",
                "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
                "current_price": 1822.42,
                "market_cap": 219206765645,
                "market_cap_rank": 2,
                "fully_diluted_valuation": 219206765645,
                "total_volume": 5443571496,
                "high_24h": 1838.28,
                "low_24h": 1821.94,
                "price_change_24h": -2.468629199510815,
                "price_change_percentage_24h": -0.13528,
                "market_cap_change_24h": -280038760.3437805,
                "market_cap_change_percentage_24h": -0.12759,
                "circulating_supply": 120256773.085986,
                "total_supply": 120256773.085986,
                "max_supply": null,
                "ath": 4878.26,
                "ath_change_percentage": -62.55069,
                "ath_date": "2021-11-10T14:24:19.604Z",
                "atl": 0.432979,
                "atl_change_percentage": 421831.70894,
                "atl_date": "2015-10-20T00:00:00.000Z",
                "roi": {
                    "times": 90.38588853077984,
                    "currency": "btc",
                    "percentage": 9038.588853077983
                },
                "last_updated": "2023-05-27T14:14:12.821Z"
            },
            {
                "id": "tether",
                "symbol": "usdt",
                "name": "Tether",
                "image": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
                "current_price": 1.002,
                "market_cap": 83284585775,
                "market_cap_rank": 3,
                "fully_diluted_valuation": 83284585775,
                "total_volume": 8383330226,
                "high_24h": 1.002,
                "low_24h": 0.998964,
                "price_change_24h": 0.00170175,
                "price_change_percentage_24h": 0.17013,
                "market_cap_change_24h": 160000398,
                "market_cap_change_percentage_24h": 0.19248,
                "circulating_supply": 83122088781.306,
                "total_supply": 83122088781.306,
                "max_supply": null,
                "ath": 1.32,
                "ath_change_percentage": -24.40091,
                "ath_date": "2018-07-24T00:00:00.000Z",
                "atl": 0.572521,
                "atl_change_percentage": 74.7094,
                "atl_date": "2015-03-02T00:00:00.000Z",
                "roi": null,
                "last_updated": "2023-05-27T14:10:00.487Z"
            },
            {
                "id": "binancecoin",
                "symbol": "bnb",
                "name": "BNB",
                "image": "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
                "current_price": 304.84,
                "market_cap": 48114355936,
                "market_cap_rank": 4,
                "fully_diluted_valuation": 60948115233,
                "total_volume": 478538916,
                "high_24h": 308.76,
                "low_24h": 305.1,
                "price_change_24h": -1.8296426955416223,
                "price_change_percentage_24h": -0.59661,
                "market_cap_change_24h": -291577728.15218353,
                "market_cap_change_percentage_24h": -0.60236,
                "circulating_supply": 157886280,
                "total_supply": 157900174,
                "max_supply": 200000000,
                "ath": 686.31,
                "ath_change_percentage": -55.52725,
                "ath_date": "2021-05-10T07:24:17.097Z",
                "atl": 0.0398177,
                "atl_change_percentage": 766442.09189,
                "atl_date": "2017-10-19T00:00:00.000Z",
                "roi": null,
                "last_updated": "2023-05-27T14:14:06.533Z"
            },
            {
                "id": "usd-coin",
                "symbol": "usdc",
                "name": "USD Coin",
                "image": "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
                "current_price": 0.999881,
                "market_cap": 29087341112,
                "market_cap_rank": 5,
                "fully_diluted_valuation": 29087341112,
                "total_volume": 2407266866,
                "high_24h": 1.005,
                "low_24h": 0.997699,
                "price_change_24h": -0.00076936730856858,
                "price_change_percentage_24h": -0.07689,
                "market_cap_change_24h": -28561674.38607788,
                "market_cap_change_percentage_24h": -0.0981,
                "circulating_supply": 29065710958.6896,
                "total_supply": 29065710958.6896,
                "max_supply": null,
                "ath": 1.17,
                "ath_change_percentage": -14.7487,
                "ath_date": "2019-05-08T00:40:28.300Z",
                "atl": 0.877647,
                "atl_change_percentage": 13.91228,
                "atl_date": "2023-03-11T08:02:13.981Z",
                "roi": null,
                "last_updated": "2023-05-27T14:14:14.656Z"
            },
            {
                "id": "ripple",
                "symbol": "xrp",
                "name": "XRP",
                "image": "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
                "current_price": 0.471551,
                "market_cap": 24504325882,
                "market_cap_rank": 6,
                "fully_diluted_valuation": 47138764452,
                "total_volume": 898171370,
                "high_24h": 0.478057,
                "low_24h": 0.461726,
                "price_change_24h": 0.00646102,
                "price_change_percentage_24h": 1.3892,
                "market_cap_change_24h": 410572328,
                "market_cap_change_percentage_24h": 1.70406,
                "circulating_supply": 51983386003,
                "total_supply": 99988920499,
                "max_supply": 100000000000,
                "ath": 3.4,
                "ath_change_percentage": -86.1246,
                "ath_date": "2018-01-07T00:00:00.000Z",
                "atl": 0.00268621,
                "atl_change_percentage": 17454.44445,
                "atl_date": "2014-05-22T00:00:00.000Z",
                "roi": null,
                "last_updated": "2023-05-27T14:14:11.944Z"
            },
            {
                "id": "cardano",
                "symbol": "ada",
                "name": "Cardano",
                "image": "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
                "current_price": 0.36327,
                "market_cap": 12734673999,
                "market_cap_rank": 7,
                "fully_diluted_valuation": 16352118401,
                "total_volume": 165937066,
                "high_24h": 0.366809,
                "low_24h": 0.358831,
                "price_change_24h": 0.00353257,
                "price_change_percentage_24h": 0.98199,
                "market_cap_change_24h": 130128345,
                "market_cap_change_percentage_24h": 1.03239,
                "circulating_supply": 35045020830.3234,
                "total_supply": 45000000000,
                "max_supply": 45000000000,
                "ath": 3.09,
                "ath_change_percentage": -88.20676,
                "ath_date": "2021-09-02T06:00:10.474Z",
                "atl": 0.01925275,
                "atl_change_percentage": 1790.88193,
                "atl_date": "2020-03-13T02:22:55.044Z",
                "roi": null,
                "last_updated": "2023-05-27T14:14:10.254Z"
            },
            {
                "id": "staked-ether",
                "symbol": "steth",
                "name": "Lido Staked Ether",
                "image": "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546",
                "current_price": 1822.24,
                "market_cap": 12358913203,
                "market_cap_rank": 8,
                "fully_diluted_valuation": 12358913203,
                "total_volume": 2360415,
                "high_24h": 1837.45,
                "low_24h": 1819.84,
                "price_change_24h": 0.569215,
                "price_change_percentage_24h": 0.03125,
                "market_cap_change_24h": 95045956,
                "market_cap_change_percentage_24h": 0.77501,
                "circulating_supply": 6781749.08467575,
                "total_supply": 6781879.7012739,
                "max_supply": 6781749.08467575,
                "ath": 4829.57,
                "ath_change_percentage": -62.15962,
                "ath_date": "2021-11-10T14:40:47.256Z",
                "atl": 482.9,
                "atl_change_percentage": 278.45146,
                "atl_date": "2020-12-22T04:08:21.854Z",
                "roi": null,
                "last_updated": "2023-05-27T14:14:07.910Z"
            },
            {
                "id": "dogecoin",
                "symbol": "doge",
                "name": "Dogecoin",
                "image": "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
                "current_price": 0.071322,
                "market_cap": 9945945858,
                "market_cap_rank": 9,
                "fully_diluted_valuation": null,
                "total_volume": 173132013,
                "high_24h": 0.071865,
                "low_24h": 0.070594,
                "price_change_24h": 0.00013929,
                "price_change_percentage_24h": 0.19568,
                "market_cap_change_24h": 22450338,
                "market_cap_change_percentage_24h": 0.22623,
                "circulating_supply": 139519276383.705,
                "total_supply": null,
                "max_supply": null,
                "ath": 0.731578,
                "ath_change_percentage": -90.2368,
                "ath_date": "2021-05-08T05:08:23.458Z",
                "atl": 0.0000869,
                "atl_change_percentage": 82089.14743,
                "atl_date": "2015-05-06T00:00:00.000Z",
                "roi": null,
                "last_updated": "2023-05-27T14:14:12.211Z"
            },
            {
                "id": "matic-network",
                "symbol": "matic",
                "name": "Polygon",
                "image": "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912",
                "current_price": 0.917534,
                "market_cap": 8513097210,
                "market_cap_rank": 10,
                "fully_diluted_valuation": 9174121005,
                "total_volume": 287301479,
                "high_24h": 0.935874,
                "low_24h": 0.90124,
                "price_change_24h": -0.011847170624748384,
                "price_change_percentage_24h": -1.27474,
                "market_cap_change_24h": -119838702.29462719,
                "market_cap_change_percentage_24h": -1.38816,
                "circulating_supply": 9279469069.28493,
                "total_supply": 10000000000,
                "max_supply": 10000000000,
                "ath": 2.92,
                "ath_change_percentage": -68.51378,
                "ath_date": "2021-12-27T02:08:34.307Z",
                "atl": 0.00314376,
                "atl_change_percentage": 29107.73178,
                "atl_date": "2019-05-10T00:00:00.000Z",
                "roi": {
                    "times": 347.8722292160632,
                    "currency": "usd",
                    "percentage": 34787.22292160632
                },
                "last_updated": "2023-05-27T14:14:06.912Z"
            }
            ]
    }
    const nameSymbol = document.getElementById('name');
    const sort_mkt_cap = document.getElementById('sort-by-mkt-cap');
    const sort_by_pctng = document.getElementById('sort-by-pctng');
    let isAscMkt = true;
    let isAscPct = true;
    console.log(nameSymbol);
    nameSymbol.addEventListener('input', (e) => {
        const inputStr = e.target.value;
        populateData(inputStr);
    })
    sort_mkt_cap.addEventListener('click', () => {
        if (isAscMkt) {
            data.sort((a, b) => a.market_cap - b.market_cap);
        } else {
            data.sort((a, b) => b.market_cap - a.market_cap);
        }
        isAscMkt = !isAscMkt;
        populateData('')
    })
    sort_by_pctng.addEventListener('click', () => {
        if (isAscPct) {
            data.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h);
        } else {
            data.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
        }
        isAscPct = !isAscPct;
        populateData('')
    })

    function populateData(inputStr) {
        const table = document.getElementById('data-table');
        table.innerHTML = '';
        inputStr=inputStr.toUpperCase();
        data.filter((element) => (element.name.toUpperCase().includes(inputStr) || element.symbol.toUpperCase().includes(inputStr))).forEach((e) => {
            const table_row = `
        <tr>
        <td align="left"><span><img src="${e.image}" alt=""></span>${e.name !== null ? e.name : 'NA'}</td>
        <td>${e.symbol !== null ? e.symbol : 'NA'}</td>
        <td>$${e.current_price != null ? e.current_price.toLocaleString() : 'NA'}</td>
        <td>$${e.fully_diluted_valuation !== null ? e.fully_diluted_valuation.toLocaleString() : 'NA'}</td>
        <td style="color:${e.price_change_percentage_24h >= 0 ? 'green' : 'red'}">${e.price_change_percentage_24h !== null ? e.price_change_percentage_24h.toFixed(2) : 'NA'}%</td>
        <td align="right">Mkt Cap:$${e.market_cap !== null ? e.market_cap.toLocaleString() : 'NA'}</td>
        </tr>
        `
            table.innerHTML += table_row;
        });
    }
    populateData('')
});