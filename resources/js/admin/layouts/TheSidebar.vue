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
            <li class="nav-item nav-category">Educations</li>

            <li class="nav-item">
                <a
                    class="nav-link"
                    data-bs-toggle="collapse"
                    href="#educations"
                    aria-expanded="false"
                    aria-controls="form-elements"
                    @click="toggleSubMenu('educations')"
                >
                    <i class="menu-icon mdi mdi-card-text-outline"></i>
                    <span class="menu-title">Educations</span>
                    <i class="mdi mdi-arrow-right-thin ms-auto"></i>
                </a>
                <div class="collapse" :class="{ show: activeSubMenu === 'educations' }" id="educations">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                to="/collections"
                                href="pages/forms/basic_elements.html"
                            >
                                Collections
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                to="/trainings"
                                href="pages/forms/basic_elements.html"
                            >
                                Trainings
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="nav-item">
                <a
                    class="nav-link"
                    data-bs-toggle="collapse"
                    href="#authorization"
                    aria-expanded="false"
                    aria-controls="form-elements"
                    @click="toggleSubMenu('authorization')"
                >
                    <i class="menu-icon mdi mdi-cogs"></i>
                    <span class="menu-title">Settings</span>
                    <i class="mdi mdi-arrow-right-thin ms-auto"></i>
                </a>
                <div class="collapse" :class="{ show: activeSubMenu === 'authorization' }" id="authorization">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                to="/users"
                                href="pages/forms/basic_elements.html"
                            >
                                Users
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                to="/trainers"
                                href="pages/forms/basic_elements.html"
                            >
                                Trainers
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                to="/employees"
                                href="pages/forms/basic_elements.html      ">
                                Employees
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                to="/roles"
                                href="pages/forms/basic_elements.html      ">
                                Roles
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                class="nav-link"
                                to="/companies"
                                href="pages/forms/basic_elements.html"
                            >
                                Company
                            </router-link>
                        </li>
                    </ul>
                </div>

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

