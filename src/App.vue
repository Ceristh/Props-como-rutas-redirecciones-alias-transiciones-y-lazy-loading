<template>
  <div>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
        <div class="container"><a class="navbar-brand">V8</a><button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div
                class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="nav navbar-nav ml-auto" id="menu-v8">
                    <li class="nav-item" role="presentation">
                      <router-link :to="{name: 'inicio'}">portada</router-link> 
                    </li>
                    <li class="nav-item" role="presentation">
                      <router-link :to="{name: 'sobremi'}">sobre mí</router-link> 
                    </li>
                    <li class="nav-item" role="presentation">
                      <router-link to="/contacto">contacto</router-link> 
                    </li>
                    <li class="nav-item" role="presentation">
                      <router-link to="/post/1">último post</router-link> 
                    </li>
                    <li class="nav-item" role="presentation"><router-link :to="{name: 'administrador'}">Administrador</router-link></li>
                </ul>
        </div>
        </div>
    </nav>
    <transition name="animacion" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
  
</template>

<script>

export default {

}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  
}
#menu-v8 a{
  text-shadow: 1px 1px #000;
}
.animacion-enter-active{
  animation: coming 0.5s;
  animation-delay:  .1s;
  opacity: 0;
}
.animacion-leave-active{
  animation: going 0.5s
}
@keyframes coming{
  from{
    transform: translateX(-50px);
    opacity: 0;
  }
  to{
    transform: translateX(0px);
    opacity: 1;
  }
}

  @keyframes going{
  from{
    transform: translateX(0px);
  }
  to{
    transform: translateX(-50px);
    opacity: 0;
  }
}
</style>
