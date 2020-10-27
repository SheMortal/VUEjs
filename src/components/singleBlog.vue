<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>Author: {{blog.author}}</p>
        <ul>
            <li v-for="category in blog.categories" :key="category">{{category}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    components: {
        
    },
    // using route params
    data () {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created(){
        this.$http.get("https://blog-vue2020.firebaseio.com/posts/" + this.id + ".json").then(function(data){
            return data.json();
        }).then(function(data){
            this.blog = data;
        });

    }
}
</script>

<style scoped>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>