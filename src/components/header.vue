<template>
    <nav>
      <ul>
          <!-- router-link intercepts the onlick event-->
          <!-- use exact to make url acitve only if it's exactly the link-->
          <li><router-link to="/" exact>Blog</router-link></li>
          <li><router-link to="/add" exact>Add a New Blog</router-link></li>
        </ul>  
    </nav>
</template>

<script>

export default {
    components: {
        
    },
    data () {
        return {
            
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: #444;
}
</style>