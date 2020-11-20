<template>
  <div>
  <h1 class='orders-component-title'>Orders</h1>

  <div class="row">
    <div class="col-md-8 offset-md-2">
      <table class="table table-hover">
        <thead class="table-secondary">
          <th scope="col">S No.</th>
          <th scope="col">Name</th>
          <th scope="col">Order No</th>
          <th scope="col">Generate BarCode</th>
        </thead>
        <tbody>
          <tr v-for="(record, index) in records" :key="record.id">
            <td>{{ ++index }}</td>
            <td>{{ record.name }}</td>
            <td>{{ record.order_no }}</td>
            <td>
              <a 
                href="#" 
                class='black-color'
                @click.prevent="generateAndDownloadBarCode(record.order_no)" 
              >
                <i class="fa fa-barcode fa-2x" aria-hidden="true"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  </div>


</template>


<script>

import {generateAndDownloadBarcodeInPDF} from './generateBarcode'; 

export default {
  name: 'Orders',
  data() {
    return {
      records: [
        { id: 1, name: 'Black leather', order_no: '1023365'},
        { id: 2, name: 'Brown leather', order_no: '2152315'},
        { id: 3, name: 'Black jacket', order_no: '1023654'},
      ]
    }
  }, 
  methods: {
    generateAndDownloadBarCode(orderNo) {
      generateAndDownloadBarcodeInPDF(orderNo);
    }
  }
}
</script>

<style>

.orders-component-title {
  margin: 40px 0px;
  font-weight: bold;
  line-height: 24px;
  text-decoration: underline;
}

.black-color {
  color: black;
}

</style>