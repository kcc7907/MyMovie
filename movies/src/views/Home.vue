<template>
    <div>
        {{ $route.params.userId }}
    </div>
</template>

<script>
export default {
    name:'Home',
    beforeRouteEnter (to, from, next) {
        // ...
        to,from;
        console.log(1);
        next()
    },
    beforeRouteUpdate (to, from, next) {
        // ...
        console.log(2);
        to,from;
        next();
    },
}
</script>