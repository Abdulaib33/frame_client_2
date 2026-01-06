

export default class DB {
    static setApiURL(url) {
        this.apiURL = url
    }

    static async findAllProducts() {
        const res = await fetch(this.apiURL + 'products')
        return res.json()
    }
}