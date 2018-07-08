<template>
    <div class='app_name'>
        {{m}}
        <div class="b"></div>
    </div>
</template>
<script>
export default {
    name: 'Tab_router_slipe1',
    data () {
    	return {
    		m :'fuck u'
    	}
    }
}
</script>
<style scoped>
.app_name {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.app_name div.b{
    width: 400px;
    height: 200px;  
    background: red;
    margin: 10px auto;
}
</style>
