<template>
  <h1>{{ title }}</h1>
  <Modal :title="modalTitle" :items="modalItems" :theme="modalTheme"/>
</template>


<script>
import ModalAutoScaling from "./components/ModalAutoScaling";
import Modal from "./components/Modal";

export default {
  name: "App",
  data() {
    return {
      title: "My first Vue application",
      modalTitle: "Sign up for the Giveaway",
      modalItems: ["phone", "laptop", "monitor"],
      modalTheme: "dark",
    };
  },

  components: {
    ModalAutoScaling,
    Modal,
  },

  methods: {},
};
</script>