<template>
    <div class="row">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Brand</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.name }}</td>
                <td>{{ product.brand }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.description }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import ProductService from "../Services/ProductService";

export default {
    name: "Products",
    data() {
        return {
            products: []
        }
    },
    mounted() {
        this.getProducts()
    },
    methods: {
        async getProducts() {
            this.products = await ProductService.getProducts();
            console.log(this.products)
        }
    }
}
</script>

<style scoped>

</style>
