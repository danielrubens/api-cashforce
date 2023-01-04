<template>
    <div class="hello">
    <div align="center">

    <div v-for="post in posts" v-bind:key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <div class="header">
            <div class="content-title">
                <img class="invoice-img-svg" src="../assets/invoice_2.svg" alt="invoice_2.svg">
                <div class="invoice-label">Notas fiscais</div>
              </div>
              <div class="content-subtitle">
                  Visualize as notas fiscais que você tem.
              </div>
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
          <th></th>
        </tr>
      </thead>
      <tbody v-for="invoice in Invoices" v-bind:key="invoice.id">
        <tr>
          <td>{{invoice.orderNfId }}</td>
          <td>{{invoice.buyer.name }}</td>
          <td>{{invoice.provider.name  }}</td>
          <td>{{invoice.emissionDate.slice(0,10).replaceAll('-', '/')  }}</td>
          <td>R$ {{invoice.value.slice(0, invoice.value.length - 2)  }},{{invoice.value.slice(invoice.value.length-2)}}</td>
          <td>{{['Pendente de confirmação', 'Pedido confirmado', 'Não reconhece o pedido', 'Mercadoria não recebida', 'Recebida com avaria', 'Devolvida', 'Recebida com devolução parcial', 'Recebida e confirmada', 'Pagamento Autorizado']
[Number(invoice.orderStatusBuyer)] }}</td>
          <td>
          <div class="dados-cedente">
               Dados do cedente
            </div>
          </td>

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
  // orderStatus: function (index) {
  //   const array = ['Pendente de confirmação', 'Pedido confirmado', 'Não reconhece o pedido', 'Mercadoria não recebida', 'Recebida com avaria', 'Devolvida', 'Recebida com devolução parcial', 'Recebida e confirmada', 'Pagamento Autorizado']
  //   return array[Number(index)]
  // },
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

.dados-cedente {
        display:flex;
        align-items: center;
        justify-content: flex-end;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 165px;
        height: 32px;
        border: 1px solid #CAD3FF;
        background-color:transparent;
        box-sizing: border-box;
        border-radius: 16px;
        cursor:pointer;
        transition:200ms;
        text-transform: none;
        font-size: 12px;
        line-height: 16px;
        color: #727D94;
        font-weight: bold;
    }

  tr{
        border: 1px solid #DFE2EB;
        border-radius: 20px;
        padding: 7px 30px;
    }

    td{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color:#4D5566;
        text-transform: uppercase;
        padding: 7px 30px;
    }

.header{
  display:flex;
  flex-direction:column;
  margin-bottom:19px;
}

.content-title{
  display:flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding-bottom:5px;
}

.invoice-img-svg{
  width: 24px;
}

.invoice-label{
  font-weight: 700;
  font-size: 24px;
  margin-left: 9px;
  color:#021B51;
}

.content-subtitle{
  color:#727D94;
  font-size: 14px;
}

table {
  padding:0;
  border-collapse: collapse;
  white-space: nowrap;
}

th{
  padding: 3px 30px
}

thead {
  text-align: left;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #A1A8B8;
  padding: 19px 30px 30px 0;
}

</style>
