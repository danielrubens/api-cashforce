<template>
    <div class="aside side-shadow">
    <div class="aside-btn" @onLoad="onLoad">
    <img src="../assets/invoice.svg" class="icon"/>
      <div class="label">Notas Fiscais<slot></slot></div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Aside',
  methods: {
    onLoad () {
      this.$router.push({name: this.page})
    }
  },
  mounted () {
    this.$router.push({name: this.page})
  }
}
</script>

<style>
.aside {
        grid-area: aside;
        display:flex;
        align-items: flex-start;
        justify-content: flex-start;
        background-color: #FBFDFE;
        flex-direction: column;
    }

    .aside-btn {
        width: 288px;
        height: 64px;
        display: flex;
        background-color:transparent;
        flex-direction: row;
        padding-left: 21px;
        border-left:transparent solid 4px;
        transition:200ms;
        cursor:pointer;
    }

    .icon {
        width: 24px;
    }

    .label {
      display:flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 15px;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color:#00AD8C;
    }

</style>
