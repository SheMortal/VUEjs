<template>
    <!-- using directives with binding -->
    <div v-theme:column="'narrow'" id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs">
        <div v-for="blog in filteredBlogs" :key="blog" class="single-blog">

            <!-- using directives(rainbow) -->
            <!-- using filers (| filter-name) -->
            <!-- <h2 v-rainbow>{{blog.title | to-uppercase}}</h2> -->

            <!-- using routes -->
            <router-link v-bind:to="'/blog/'+ blog.id"><h2>{{blog.title | to-uppercase}}</h2></router-link>
            <article>{{blog.content | snippet}}</article>
        </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';
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
    // get-requests with life-cycle hooks
    created(){
        this.$http.get("https://blog-vue2020.firebaseio.com/posts.json").then(function(data){
            // take the first 10
            // this.blogs = data.body.slice(0,10);
            return data.json();
        }).then(function(data){
            var blogsArray = [];
            for(let key in data){
                data[key].id = key;
                blogsArray.push(data[key])
            };
            this.blogs = blogsArray;
        });
    },

    // custom search filter
    computed:{
        // filteredBlogs: function(){
        //     return this.blogs.filter((blog)=>{
        //         return blog.title.match(this.search);
        //     });
        // }
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
    },
    mixins: [searchMixin]
}
</script>

<style scoped>
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