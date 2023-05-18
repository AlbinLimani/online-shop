import axios from "../../plugins/axios"

class ProductService {
    async getProducts() {
        try {
            return  (await axios.get('/products')).data;
        } catch (error) {
            console.error(error)
        }
    };

    async addProducts(payload){
        try {
            const response = await axios.post('/products', payload);
            return response.data;
        } catch (error) {
            console.error(error)
        }
    };

    async editProducts(payload, productId) {
        try {
            const response = await axios.put(`/products/${productId}`, payload)
        } catch (error) {
            console.error(error)
        }
    }

    async deleteProduct(productId) {
        try {
            const response = await axios.delete(`/products/${productId}`);
        } catch (error) {
            console.error(error)
        }
    }
}

export default new ProductService()
