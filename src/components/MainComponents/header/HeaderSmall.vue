<script setup>
</script>

<template>
  <div class="header-small">
    <div class="header-container">
      <div class="header-left">
        <router-link to="/" class="btn"><img src="https://i.ibb.co/1KNDQpw/Freelee-icon.png" alt="" class="img"></router-link>
      </div>
      <logo-title class="pl-0" />
      <div class="icons">
        <i class="mdi mdi-magnify" />
      </div>
    </div>
    </div>
</template>

<style scoped>
.header-small {
  width: 100%;
  background-color: #006B63; 
  margin: 0;
  height: 4em;
}

.header-container {
  width: 100%;
  max-width: 1460px;
  margin: 0 auto; 
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center; 
}

.header-left {
  display: flex;
}

.img {
  width: 60px;
  height: 60px;
}

.icons {
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1.7rem;
  color: white;
}
</style>
