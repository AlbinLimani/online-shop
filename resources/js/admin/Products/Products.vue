<template>
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-lg-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Collections</h4>
                            <div class="table-responsive rounded rounded-2">
                                <table
                                    class="table rounded rounded-2 overflow-hidden table-hover table-striped table-bordered align-middle mb-0 bg-white">
                                    <thead class="bg-primary text-white">
                                    <tr>
                                        <th>Name</th>
                                        <th>Brand</th>
                                        <th>Price</th>
                                        <th class="nowrap">Description</th>

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
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    async mounted() {
        this.products = await ProductService.getProducts()
    },
    methods: {

    }
}
</script>

<style scoped>
.table th,
table td {
  white-space: normal;
}

.table_desc {
  width: 500px;
}
</style>
