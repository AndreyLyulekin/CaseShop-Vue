<template>
  <div class="loader">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'WhileLoading',
};
</script>

<style scoped>
.loader {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
}

.spinner {
  color: rgb(0, 0, 0);
}

.spinner:after {
  animation: changeContent 0.8s linear infinite;
  display: block;
  content: '⠋';
  font-size: 80px;
}

@keyframes changeContent {
  10% {
    content: '⠙';
  }
  20% {
    content: '⠹';
  }
  30% {
    content: '⠸';
  }
  40% {
    content: '⠼';
  }
  50% {
    content: '⠴';
  }
  60% {
    content: '⠦';
  }
  70% {
    content: '⠧';
  }
  80% {
    content: '⠇';
  }
  90% {
    content: '⠏';
  }
}
</style>
