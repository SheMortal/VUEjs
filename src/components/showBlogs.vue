<template>
    <!-- using directives with binding -->
    <div v-theme:column="'narrow'" id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs">
        <div v-for="blog in filteredBlogs" :key="blog" class="single-blog">

            <!-- using directives(rainbow) -->
            <!-- using filers (| filter-name) -->
            <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
            <article>{{blog.body | snippet}}</article>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        
    },
    data () {
        return {
            blogs: [],
            search: '',
        }
    },
    methods: {
        
    },
    // get-requests withy life-cycle hooks
    created(){
        this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(data){
            // take the first 10
            this.blogs = data.body.slice(0,10);
        })
    },

    // custom search filter
    computed:{
        filteredBlogs: function(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search);
            })
        }
    },
    // registering filters locally
    filters: {
        'to-lowercase': function(value){
            return value.toLowerCase();
        },
        // toUppercase(value){
        //     return value.toUppercase();
        // }
    },
    // registering directives locally
    directives:{
        'rainbow': {
            bind(el, binding, vnode){
                // random colors(6 digit hex color num)
                el.style.color = "#" + Math.random().toString().slice(2,8);
            }
        }
    }
}
</script>

<style>
#show-blog{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 50px;
    margin: 0 auto;
    box-sizing: border-box;
    background: #eee;
}
</style>