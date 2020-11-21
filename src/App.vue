<template>
  <div>

    <div>
      <button 
        class="btn" 
        :class="{selected: type=== 'orders'}"
        @click.prevent="changeType('orders')"
      >
        Orders  
      </button>
      <button 
        class="btn" 
        :class="{selected: type=== 'scan'}"
        @click.prevent="changeType('scan')"
      >
        ScanBarCode
      </button>
    </div>

    <Orders v-if="type === 'orders'"/>
    <ScanBarCode v-if="type === 'scan'"/>



  </div>
</template>

<script>
import Orders from './components/Orders.vue'
import ScanBarCode from './components/ScanBarCode.vue'

export default {
  name: 'App',
  components: {
    Orders,
    ScanBarCode
  },
  data () {
    return {
      type: 'orders',
    }
  },
  methods: {
    changeType(type) {
      this.type = type
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  cursor: pointer;
  height: 50px;
  width: 250px;
  background-color: white;
}

.selected {
  color: white;
  background-color:black;
}

.selected:hover {
  color: white !important;  
}

</style>
