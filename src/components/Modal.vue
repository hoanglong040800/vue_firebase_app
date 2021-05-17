<template>
  <div class="backdrop">
    <div class="modal">
      <h1 :class="{ darkTheme: theme === 'dark' }">
        {{ title }}
      </h1>

      <p v-for="(item, index) in items" :key="index">{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "items", "theme"],
};
</script>


<style scoped>
.backdrop {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}

.modal {
  width: 650px;
  margin: 50px auto;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
}

.darkTheme {
  color: #fff;
  background-color: #2e2e2e;
}

.lightTheme {
  color: #1f1f1f;
  background-color: #eeeeee;
}
</style>