<script setup>
import { FooterComponent, HeaderComponent, CardsComponent, CardServicos, CardsPrestadores, CarouselOne, CardsFeitos } from "@/components";
</script>

<template>
  <HeaderComponent/>
  <main>
    <CarouselOne/>
    <CardsComponent/>
    <CardServicos/>
    <CardsPrestadores/>
    <CardsFeitos/>
  </main>
  <footer>
    <FooterComponent/>    
  </footer>
</template>

<style scoped>
#layout-large {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'aside header'
    'aside footer';
  min-height: 100vh;
}

header {
  display: flex;
  widows: 100vw;
  justify-content: flex-end;
  padding: 1.5rem;
  grid-area: header;
}

main {
  min-height: 80%;
  padding: 2rem;
  grid-area: main;
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  background-color: #eeeeee;
  grid-area: footer;
}
</style>