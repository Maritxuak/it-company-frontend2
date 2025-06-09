<template>
  <div class="modal fade" id="vacancyModal" tabindex="-1" role="dialog" aria-labelledby="vacancyModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="vacancyModalLabel">{{ vacancy.title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p><strong>Описание:</strong> {{ vacancy.description }}</p>
          <p><strong>Местоположение:</strong> {{ vacancy.location }}</p>
          <p><strong>Зарплата:</strong> {{ vacancy.salaryRangeFrom }} - {{ vacancy.salaryRangeTo }} ₽</p>
          <p><strong>Требуется сотрудников:</strong> {{ vacancy.requiredEmployees }}</p>
          <p v-if="vacancy.isClosed" class="text-danger">
            <strong>Вакансия закрыта</strong>
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VacancyModal",
  props: {
    vacancy: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
/* Add your styles here */
</style>
