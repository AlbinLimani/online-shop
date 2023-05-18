import axios from "../../plugins/axios"

class ProductService {
    async getProducts() {
        return  (await axios.get('/products')).data;
    };

    async addProducts(){

    }
}

export default new ProductService()
