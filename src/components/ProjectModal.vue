<template>
  <transition name="modal-fade">
    <div v-if="project" class="modal">
      <div class="modal-content">
        <span class="close" @click="$emit('close')">&times;</span>
        <h2>{{ project.name }}</h2>
        <div class="project-details">
          <p><strong>Описание:</strong> {{ project.description }}</p>
          <p><strong>Срок выполнения:</strong> {{ formattedEndDate }}</p>
          <!-- Add more project details as needed -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedEndDate() {
      if (!this.project.endDate) return '';
      const date = new Date(this.project.endDate);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const year = String(date.getFullYear()).slice(-2);
      return `${day} ${month} ${year}`;
    }
  }
}
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  border-radius: 5px;
  position: relative;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity .5s;
}

.modal-fade-enter, .modal-fade-leave-to {
  opacity: 0;
}

.project-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  word-wrap: break-word;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
  text-align: left;
  line-height: 1.5;
  max-width: 100%;
  overflow: auto;
  max-height: 100%;
  height: auto;
}
</style>
