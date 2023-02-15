<template>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <img alt="Hey" src="../assets/sold.gif">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "KonamiCode",
  data() {
    return {
      showGif: false,
      konamiCode: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13],
      enteredCode: [],
      modal:null,
      message: "Bravo pour avoir tapé le Konami Code Secret !"
    };
  },
  methods: {
    closeModal(){
      this.modal.style.display = "none";
    },
    handleKeydown(event) {
      this.enteredCode.push(event.keyCode);
      if (this.enteredCode.toString().indexOf(this.konamiCode) >= 0) {
        console.log("Konami Code entered!");
        this.showGif = true;
        this.modal = document.getElementById("myModal");
        this.modal.style.display = "block";
        this.enteredCode = [];
      }
    }
  },
  mounted() {
    window.addEventListener("keydown", this.handleKeydown);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeydown);
  }
}
</script>

<style scoped>
img{
  margin:auto;
}
</style>