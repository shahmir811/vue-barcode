<template>
  <div>
    <h1 class='scanBarCode-component-title'>ScanBarCode</h1>

    <div class="row">
      <div class="col-md-6 offset-md-3">
        <input type="text" class="form-control" placeholder="Search" v-model="searchOrderNo" />
      </div>
    </div>

  </div>

</template>


<script>

export default {
  name: 'ScanBarCode',
  data() {
    return {
      searchOrderNo: '',
    }
  }
}
</script>


<style>

.scanBarCode-component-title {
  margin: 40px 0px;
  font-weight: bold;
  line-height: 24px;
  text-decoration: underline;
}

</style>