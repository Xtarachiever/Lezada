<template>
  <div class="pagination">
    <button :disabled="!hasPrev" @click="changePage(currentPage - 1)"><v-icon name="bi-arrow-left-square" scale="1.6"></v-icon></button>

    <button
      v-for="page in visiblePages"
      :key="page"
      :class="{ active: page === currentPage }"
      @click="changePage(page)"
    >
      {{ page }}
    </button>

    <span v-if="lastPage > maxVisible && visiblePages.at(-1) < lastPage">...</span>

    <button :disabled="!hasNext" @click="changePage(currentPage + 1)"><v-icon name="bi-arrow-right-square" scale="1.6"></v-icon></button>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  props:['details', 'currentPage', 'definedMaxVisible'],
  emit: (['page-change','update:currentPage']),
  setup(props, { emit }){
    const maxVisible = ref(props.definedMaxVisible ?? 5);
    const lastPage = computed(() =>
      Math.ceil(props.details.total / props.details.per_page)
    );

    const hasPrev = computed(() => props.currentPage > 1);
    const hasNext = computed(() => props.currentPage < lastPage.value);

    const visiblePages = computed(() => {
    const half = Math.floor(maxVisible.value / 2);
    let start = Math.max(1, props.currentPage - half);
    let end = start + maxVisible.value - 1;

    if (end > lastPage.value) {
      end = lastPage;
      start = Math.max(1, end - maxVisible.value + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  });

  function changePage(page) {
  if (page >= 1 && page <= props.details.last_page && page !== props.currentPage) {
    console.log(page, props.currentPage)
    emit('update:currentPage', page)
    emit('page-change',page)
  }

}

  return {
    visiblePages,
    changePage,
    hasNext,
    hasPrev,
    lastPage,
    maxVisible
  }
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  gap: 1.4rem;
  align-items: center;
  justify-content: center;
}
button.active {
  font-weight: bold;
  text-decoration: underline;
}
button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
