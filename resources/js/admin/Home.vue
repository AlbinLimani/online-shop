<template>
    <div>
        <TheHeader></TheHeader>
        <div class="container-fluid page-body-wrapper">
            <TheSidebar></TheSidebar>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import TheSidebar from "./layouts/TheSidebar.vue";
import TheHeader from "./layouts/TheHeader.vue";
export default {
    name: "Home",
    components: {
        TheSidebar,
        TheHeader
    }
}
</script>

<style scoped>

</style>
