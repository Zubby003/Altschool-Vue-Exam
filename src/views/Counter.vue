<template>
  <div class="main" :mode="mode">
    <div class="head-counter">
      <p class="counter">
        {{ $store.state.counter }}
      </p>
    </div>
    <div class="buttons">
      <button @click="$store.commit('incrementCount')">+</button>
      <button @click="$store.commit('decrementCount')">-</button>
      <button @click="$store.commit('resetCount')">Reset</button>
    </div>
    <div class="setvalue">
      <input
        type="number"
        class="input-field"
        placeholder="Set Value"
        v-model="newValue"
      />
      <button @click="$store.commit('setNumber', newValue)">Set Value</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CounterApp",
  props: ["mode"],
  data() {
    return { newValue: 0 };
  },
};
</script>
<style>
.main {
  width: 400px;
  height: 300px;
  margin: 20px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.head-counter {
  height: 140px;
}
.light .counter {
  color: #000;
}
.counter {
  color: #fff;
  font-size: 24px;
  margin-top: 60px;
}

.setvalue {
  margin: 20px auto;
  height: 40px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.light .main {
  background: #a5cfed;
}
.setvalue button {
  width: 100px;
  height: 50px;
  font-size: 18px;
}
.setvalue button:hover {
  background: gray;
}

input {
  border: none;
  height: 50px;
  padding: 10px;
  width: 160px;
  font-size: 16px;
}
.input-field {
  border-radius: 10px;
  outline: none;
}
.buttons button {
  font-size: 20px;
  width: 80px;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.buttons button:hover {
  background: gray;
}
</style>
