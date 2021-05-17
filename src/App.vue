<template>
  <h1>{{ title }}</h1>

  <Modal
    v-if="showModal"
    :title="modalTitle"
    :items="modalItems"
    :theme="modalTheme"
    @close-modal="toggleModal"
  />

  <p>Welcome</p>

  <button @click="toggleModal">Show Modal</button>
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
      showModal: false,
    };
  },

  components: {
    ModalAutoScaling,
    Modal,
  },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>