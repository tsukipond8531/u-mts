<template>
  <header class="shadow navbar navbar-expand-lg navbar-light" :class="scroll ? 'bg-light' : 'text-white'">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="Logo" style="width: auto; height: 60px;"><span style="font-style: italic;color: #120137 ;" :style="!scroll ? 'color: #fff;' :'color: #120137'"><b>CONTRATAÇÕES</b></span>
      </a>

      <p-nav class="ms-auto me-5">
        <template #default>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" id="servicosDropdown" data-bs-toggle="dropdown" aria-expanded="false" :style="!scroll ? 'color: #fff;' :'color: #120137'">
                SERVIÇOS
              </a>
              <ul class="dropdown-menu" aria-labelledby="servicosDropdown">
                <li><a class="dropdown-item" @click="navigateTo('/terceirizacao')">Terceirização</a></li>
                <li><a class="dropdown-item" @click="navigateTo('/temporarios')">Temporários</a></li>
                <li><a class="dropdown-item" @click="navigateTo('/recrutamento-selecao')">Recrutamento e Seleção</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/" :style="!scroll ? 'color: #fff;' :'color: #120137'"> COMO FUNCIONA </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/" :style="!scroll ? 'color: #fff;' :'color: #120137'"> CONTATO </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/" :style="!scroll ? 'color: #fff;' :'color: #120137'"> VAGAS </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active me-2" to="/" :style="!scroll ? 'color: #fff;' :'color: #120137'"> FRANQUIAS </router-link>
            </li>
            <li class="nav-item">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Pesquisar">
                <button class="btn btn-outline-secondary" type="button">
                  <i class="pi pi-search"></i>
                </button>
              </div>
            </li>

            <li class="nav-item me-3">
              <router-link class="nav-link active" to="/" :style="!scroll ? 'color: #fff;' :'color: #120137'"> LOGIN <i class="pi pi-user" style="font-size: 1rem"></i></router-link>
              
            </li>

            <li class="nav-item">
              <i class="pi pi-shopping-cart mt-2" style="font-size: 1.5rem; color: #120137" :style="!scroll ? 'color: #fff;' :'color: #120137'"></i>
              <Badge value="0" severity="danger" style="position: absolute; top: 17px; right: 40px;"></Badge>
            </li>
          </ul>
        </template>
      </p-nav>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

const router = useRouter();

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

const scroll = ref(false);

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 100) {
    console.log('Rolagem detectada para baixo!');
    scroll.value = true;
  } else if (scrollTop <= 0) {
    console.log('Rolagem detectada para o topo!');
    scroll.value = false;
  }
};

</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999; /* Garante que o header esteja acima de qualquer outro conteúdo */
}

/* Estilos adicionais para a barra de pesquisa */
.input-group {
  display: flex;
  align-items: center;
}

.input-group input {
  flex: 1;
}

.input-group button {
  border: none;
  background-color: transparent;
}
</style>
