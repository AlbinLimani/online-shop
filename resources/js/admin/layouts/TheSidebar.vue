<template>
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
            <li class="nav-item">
                <router-link to="/" class="nav-link">
                    <i class="menu-icon mdi mdi-grid-large"></i>
                    <span class="menu-title">Dashboard</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link
                    class="nav-link"
                    to="/products"
                    href="pages/forms/basic_elements.html"
                >
                    <i class="menu-icon mdi mdi-account-school"></i>
                    <span class="menu-title">Products</span>
                </router-link>
            </li>
          
        </ul>

    </nav>
</template>

<script>


export default {
    data() {
        return {
            subMenuName: "",
            activeSubMenu: ""
        }
    },
    methods: {
        toggleSubMenu(subMenuName) {
            if (this.activeSubMenu === subMenuName) {
                this.activeSubMenu = '';
            } else {
                this.activeSubMenu = subMenuName;
            }
        }
    }
}
</script>

