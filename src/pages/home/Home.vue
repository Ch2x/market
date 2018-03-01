<template>
    <div>
        <Header></Header>
        <router-link to="/search" class="link_search">
            <input type="search" name="search" placeholder="请输入" class="input_search">
        </router-link>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    data() {
        return {

        }
    },
    components: {
        Header,
        Footer,
    }
}
</script>

<style lang="scss" scoped>
   
</style>
