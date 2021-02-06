<template>
    <div>
        {{$route.params.num}}{{$route.params.kind}}
    </div>
</template>

<script>
export default {
    name:'kind',
    data() {
        return {
            
        }
    },
    props:['kind','num',],
    beforeRouteUpdate (to, from, next) {
        // ...
        console.log(3);
        next();
    }
}
</script>