<template>

  <div>

    <div class="container">
      <div class="container-fluid  py-5">
        <div class="row">
          <div class="col-md-6 text-center">
            <h1 class="display-4">2000+ Clientes</h1>
            <p class="lead">Atendidos em mais de 19 anos de mercado</p>
          </div>
          <div class="col-md-6 d-flex align-items-center justify-content-center">
            <img src="https://picsum.photos/200" alt="Banner image" class="img-fluid rounded-circle">
          </div>
        </div>
      </div>
    </div>
 
    <ClientFutter/>

    <div class="container">
      <Divider />
    </div>
    

    <div id="carouselExampleSlidesOnly" class="carousel slide mt-5 container" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://picsum.photos/1920/500" alt="First slide">
          <div class="carousel-caption d-none d-md-block">
            <h3>Os melhores profissionais para obras</h3>
            <p>Quando se trata de empreendimentos de construção, encontrar os profissionais certos pode ser a diferença entre um projeto bem-sucedido e um que enfrenta desafios significativos. Os melhores profissionais para obras são aqueles que combinam habilidade técnica, experiência prática e compromisso com a excelência em cada etapa do processo de construção.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://picsum.photos/1920/500" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://picsum.photos/1920/500" alt="Third slide">
        </div>
      </div>
    </div>

    <div class="container-fluid mt-4">
      <div class="row">
        <div v-for="item in items" :key="item.id" class="col-3 mb-3">
          <Card style="width: 100%; overflow: hidden;">
            <template #header>
              <img alt="user header" src="https://picsum.photos/400/500" />
            </template>
            <template #title>R$: {{item.valor}}</template>
            <template #subtitle>{{item.cargo}}</template>
            <template #content>
              <p class="m-0">
                {{item.descri}}
              </p>
            </template>
            <template #footer>
              <div class="d-flex gap-3 mt-1">
                <button class="btn btn-primary w-100">CONTRATAR<i class="pi pi-shopping-cart" style="font-size: 1rem;margin-left: 10px;"></i></button>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>

    <Footer class="mt-4"/>
    
  </div>

</template>
<script setup>

import Footer from "../components/Footer.vue";
import ClientFutter from '../components/ClientFutter.vue';
import { ref } from "vue";

const items = ref([
  { id: 1, valor: "260,00", cargo: "Repositor", descri: "Responsável por manter organizadas as prateleiras e reposição de produtos." },
  { id: 2, valor: "350,00", cargo: "Desenvolvedor Front-end", descri: "Responsável por criar interfaces de usuário utilizando tecnologias web." },
  { id: 3, valor: "450,00", cargo: "Designer Gráfico", descri: "Responsável por criar e editar elementos visuais para diversos fins." },
  { id: 4, valor: "550,00", cargo: "Engenheiro de Software", descri: "Responsável pelo desenvolvimento e manutenção de software ..." }
])
</script>

<style scoped>

</style>