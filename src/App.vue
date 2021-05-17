<template>
  <h1>{{ title }}</h1>

  <Modal v-if="showModal" @close-modal="toggleModal">
    <template v-slot:links>
      <br>
      <a href="#">Sign Up now</a>
      <br />
      <a href="#">More Info</a>
    </template>

    <!-- <div>
      <h1>Sign up modal</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        fugiat eos sunt itaque consectetur at sint possimus, alias natus tenetur
        voluptatem quam nihil soluta, blanditiis earum ab dignissimos atque
        quod.
      </p>
    </div> -->
  </Modal>

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
      showModal: true,
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