<template>
    <div class="Simple">
        <header
            class="masthead"
            style="background-image: url('assets/img/home-bg.jpg')"
        >
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto">
                        <div class="site-heading"></div>
                    </div>
                </div>
            </div>
        </header>
        <div class="text-center">
            <router-link class="mr-5" :to="{ name: 'simple' }"
                >Administrador Simple</router-link
            >
            <router-link :to="{ name: 'avanzado' }"
                >Administrador Avanzado</router-link
            >
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "Administrador",
};
</script>

<style scoped>
.adm-simple {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>