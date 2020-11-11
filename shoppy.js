let axios = require('axios');
class ShoppyGG {

    /**
     * @param {String} Token API Token retreived from shoppy.gg's settings page.
     * @param {String} Version In Next Release
     */
    constructor(token) {
        this.base_url = 'https://shoppy.gg/api';
        this.api_key = token;
        this.version = "v1";
        this.headers = {
            //'Content-Type': 'application/json',
            Authorization: this.api_key,
            "User-Agent": 'ShoppyGG/1.0 - CyberCDN & Bankcordia Development'
        };
    };


    /**
     * @param {String} id Order ID for getting orders by ID
     * @returns {Object} JSON Object of information about the order.
     */
    async getSpecificOrder(id) {
        let opts = {
            method: "GET",
            headers: this.headers,
            url: `${this.base_url}/${this.version}/orders/${id}`
        };

        let res = await axios(opts).catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        });
        return res.data;
    };

    /**
     * @returns {Object} ALL Orders into a JSON Object of information about each order (1-25 per object).
     */
    async getAllOrders() {
        let opts = {
            method: "GET",
            headers: this.headers,
            url: `${this.base_url}/${this.version}/orders`
        };

        let res = await axios(opts).catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        });
        return res.data;
    };

    /**
     * @param {String} id Query ID from Shoppy.gg
     * @param {String} reply Query Response from seller 
     * @returns {*} unsure as to unable to test
     */
    async getAllQueries() {
        let opts = {
            method: "GET",
            headers: this.headers,
            url: `${this.base_url}/v1/queries`
        };

        let res = await axios(opts).catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        });
        return res.data;
    };

    /**
     * @deprecated Unsure as to whether this is deprecated by Shoppy or their endpoint is confused.
     * @param {String} id Query ID from Shoppy.gg
     * @param {String} reply Query Response from seller 
     * @returns {*} unsure as to unable to test
     */
    async replyToQuery(id, reply) {
        // let opts = {
        //     method: "POST",
        //     headers: this.headers,
        //     data: JSON.stringify({ message: reply }),
        //     url: `${this.base_url}/v1/queries/${id}/reply`
        // };

        // let res = await axios(opts).catch(function(error) {
        //     if (error.response) {
        //         console.log(error.response.data);
        //         console.log(error.response.status);
        //         console.log(error.response.headers);
        //     }
        // });
        return { deprecated: "This endpoint is potentially deprecated(?)" };
    };

    /**
     * @param {String} id Query ID from Shoppy.gg
     * @param {String} reply Query Response from seller 
     * @returns {*} unsure as to unable to test
     */

    /**
     * 
     * @param {String} title Product NAme
     * @param {Number} price Product Price
     * @param {Boolean} unlisted Listed or Unlisted
     * @param {String} type service, file, account or dynamic
     * @param {String} currency Valid exchange_rate currency
     * @param {Number} stockwarn Minimum: 0 Maximum: 10000
     * @param {Number} max Minimum: 1 Maximum: 1000000
     * @param {Number} min Minimum: 1 Maximum: 1000000
     * @param {Boolean} email Send email or not
     */

    async createProduct(title, price, unlisted, type, currency, stockwarn, min, max, email) {
        // let opts = {
        //     method: "PUT",
        //     headers: this.headers,
        //     data: {
        //         "title": title,
        //         "price": price,
        //         "unlisted": unlisted,
        //         "type": type,
        //         "currency": currency,
        //         "stock_warning": stockwarn,
        //         "quantity": {
        //             "min": min,
        //             "max": max
        //         },
        //         "email": {
        //             "enabled": email
        //         }
        //     },
        //     url: `${this.base_url}/v1/products/`
        // };

        // let res = await axios(opts).catch(function (error) {
        //     if (error.response) {
        //         console.log(error.response.data);
        //         console.log(error.response.status);
        //         console.log(error.response.headers);
        //     }
        // });
        return { messageFromDev: "Awaiting better improvement" }; //res.data;
    };


    /**
     * @param {String} product Product Name.
     * @param {Number} price Price of Product. 
     * @returns {Object} Status, Payment URL and ID from payment url. 
     */
    async pay(product, price) {
        let opts = {
            method: "POST",
            headers: this.headers,
            data: JSON.stringify({ title: product, value: price }),
            url: `${this.base_url}/${this.version}/pay`
        };

        let res = await axios(opts).catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        });
        return res.data;
    };




};
module.exports = new ShoppyGG();

(async function test() {
    let shoppy = new ShoppyGG("API TOKEN")
    let orderByID = await shoppy.createProduct();
    console.log(orderByID)
})();