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
      <tbody v-for="user in User" v-bind:key="user.id">
        <tr>
          <td> {{ user.orderNfId }}</td>
          <td>{{ user.buyer.name }}</td>
          <td>{{user.provider.name  }}</td>
          <td>{{user.emissionDate.slice(0,10)  }}</td>
          <td>{{user.value  }}</td>
          <td>{{user.orderStatusBuyer  }}</td>
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
      User: {}
    }
  },
  mounted () {
    axios.get('http://localhost:3000/')
      .then((response) => {
        console.log(response.data)
        this.User = response.data
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
