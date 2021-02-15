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
        next()
    },
    beforeRouteUpdate (to, from, next) {
        // ...
        to,from;
        next();
    },
}
</script>