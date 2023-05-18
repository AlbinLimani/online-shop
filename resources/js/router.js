import Home from "./admin/Home.vue";
import Products from "./admin/Products/Products.vue";
import Dashboard from "./admin/Dashboard.vue"

const DashboardRoutes = [
    {
        path: "",
        component: Dashboard
    },
    {
        path: '/products',
        component: Products
    }
]

const routes = [
    {
        path: '/',
        component: Home,
        children: DashboardRoutes
    },


]

export default routes;
