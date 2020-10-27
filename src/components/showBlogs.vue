<template>
    <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <div v-for="blog in blogs" :key="blog" class="single-blog">
            <h2>{{blog.title}}</h2>
            <article>{{blog.body}}</article>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        
    },
    data () {
        return {
            blogs: []
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
    background: rgb(224, 224, 224);
}
</style>