<template>
    <div class="logo">
            <img src="../assets/logo.png" alt="logo">
    </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style>
    .logo {
        position: absolute;
        grid-area: logo;
        padding: 25px 24px;
    }
    img {
        width: 160px;
        height: auto;
    }
</style>
