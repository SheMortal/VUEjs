<template>
    <div id="add-blog">
        <h2>Add a new blog post</h2>
        <form v-if="!submitted">
            <label>Blog Post</label>
            <input type="text" v-model.lazy="blog.title" required>
            <label>Blog Content:</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="checkboxes">
                <label>Ninjas</label>
                <input type="checkbox" value="ninjas" v-model="blog.categories">
                <label>Mario</label>
                <input type="checkbox" value="mario" v-model="blog.categories">
                <label>Cheese</label>
                <input type="checkbox" value="cheese" v-model="blog.categories">
                <label>Wizards</label>
                <input type="checkbox" value="wizards" v-model="blog.categories">
                <br>
                <label>Author:</label>
                <!-- binding select boxes -->
                <select v-model="blog.author">
                    <option v-for="author in authors" :key="author">{{author}}</option>
                </select>
            </div>

            <!-- using vue-resource(storing in a database) -->
            <button v-on:click.prevent='post'>Add Blog</button>
        </form>
        <div v-if="submitted">
            <h3>Thank you for adding your post</h3>
        </div>
        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog title: {{blog.title}}</p>
            <p>Blog content:</p>
            <p>{{blog.content}}</p>
            <p>Blog Catergories:</p>
            <ul>
                <li v-for="category in blog.categories" :key="category">{{category}}</li>
            </ul>
            <p>Author: {{blog.author}}</p>
        </div>
    </div>
</template>

<script>

export default {
    components: {
        
    },
    data () {
        return {
            blog:{
                title: '',
                content: '',
                categories:[],
                author: ''
            },
            authors: ['Sam', 'Cahill', 'Caleb'],
            submitted: false 
            
        }
    },
    methods: {
        // using http(vue-resource)
        post: function(){
            // this.$http.type-of-request('to-databses-setUp'), {object of what you want to send}
            this.$http.post("https://jsonplaceholder.typicode.com/posts",{
                title: this.blog.title,
                body: this.blog.title,                userId: 1
            }).then(function(data){
                console.log(data);
                this.submitted = true;
            });
        }
        
    }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>