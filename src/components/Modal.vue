<template>
  <div @click.self="closeModal" class="backdrop fade-in fade-out">
    <div class="modal">
      <!-- default slot -->
      <slot>Default content for slot</slot>

      <!-- name slot -->
      <slot name="links"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [],

  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
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
  height: 100px;
  margin: 50px auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
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

.fade-in {
  -webkit-animation: fade-in 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>