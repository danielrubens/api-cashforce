<template>
    <div class="hello">
  <div align="center">

    <div v-for="post in posts" v-bind:key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
          <th>DADOS DO CEDENTE</th>
        </tr>
      </thead>
      <tbody v-for="invoice in Invoices" v-bind:key="invoice.id">
        <tr>
          <td>{{invoice.orderNfId }}</td>
          <td>{{invoice.buyer.name }}</td>
          <td>{{invoice.provider.name  }}</td>
          <td>{{invoice.emissionDate.slice(0,10)  }}</td>
          <td>{{invoice.value  }}</td>
          <td>{{invoice.orderStatusBuyer  }}</td>
        </tr>
      </tbody>
    </table>
  </div>

</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      Invoices: {}
    }
  },
  mounted () {
    axios.get('http://localhost:3000/')
      .then((response) => {
        console.log(response.data)
        this.Invoices = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
