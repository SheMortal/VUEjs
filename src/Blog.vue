<template>
    <div>
        <!-- <add-blog></add-blog> -->
        <!-- <show-blogs></show-blogs>
        <list-blogs></list-blogs> -->

        <!-- using routes -->
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
import addBlog from "./components/addBlog";
import showBlogs from "./components/showBlogs";
import listBlogs from "./components/listBlogs";
import Header from "./components/header";
export default {
    components: {
        "add-blog": addBlog,
        'show-blogs': showBlogs,
        'list-blogs': listBlogs,
        'app-header': Header
    },
    data () {
        return {
            
        }
    },
    methods: {
        
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>