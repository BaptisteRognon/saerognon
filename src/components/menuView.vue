<template>
  <nav>
      <div class="">
        <div class="max-w-7xl mx-auto">
            <div class="flex justify-between">
                <!-- Menu -->
                <div class="flex space-x-4">
                    <!-- Logo -->
                    <div class="flex items-center py-5 px-2">
                        <RouterLink to="/"><img src="../../img/logo.png"></RouterLink>
                    </div>
                    <!-- Menu -->
                    <div class="hidden text-white ipad_pro:flex items-center space-x-1">
                        <RouterLink to="/" class="text-blue-600 underline">Accueil</RouterLink>
      <RouterLink to="/artistes" class="py-5 px-2 hover:text-Gris">Artistes</RouterLink>
      <RouterLink to="/artiste" class="py-5 px-2 hover:text-Gris">Artiste</RouterLink>
      <RouterLink to="/concert" class="py-5 px-2 hover:text-Gris">Concert</RouterLink>
      <RouterLink to="/contact" class="py-5 px-2 hover:text-Gris">Contact</RouterLink>
      <RouterLink to="/festival" class="py-5 px-2 hover:text-Gris">Festival</RouterLink>
      <RouterLink to="/mentionlegale" class="py-5 px-2 hover:text-Gris">Mention Légale</RouterLink>
      <RouterLink to="/programme" class="py-5 px-2 hover:text-Gris">Programme</RouterLink>
                    
                    </div>
                </div>
                <div class="hidden text-white ipad_pro:flex items-center space-x-1">
                    <RouterLink class="py-5 px-2 hover:text-Gris" to="/bar">Le Bar</RouterLink> 
                    <RouterLink class="py-5 px-2 hover:text-Gris" to="/concert">Concerts</RouterLink>
                </div>

                <!-- Bouton menu -->
                <div class="ipad_pro:hidden flex items-center">
                    <button @click="menuVisible = !menuVisible" class=" py-5 px-2 "> 
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                
            </div>
        </div>
      </div>
      <!-- Menu mobile -->
      <div class="text-white bg-black ipad_pro:hidden" :class="{hidden: menuVisible}">
        <RouterLink class="block py-2 px-4 hover:text-Gris bg-black " to="/">Accueil</RouterLink>
        <RouterLink class="block py-2 px-4 hover:text-Gris bg-black " to="/programme">Programme</RouterLink>
        <RouterLink class="block py-2 px-4 hover:text-Gris bg-black " to="/artistes">Groupe</RouterLink>
        <RouterLink class="block py-2 px-4 hover:text-Gris bg-black " to="/artiste">Artistes</RouterLink>
        <RouterLink class="block py-2 px-4 hover:text-Gris bg-black " to="/bar">Le Bar</RouterLink> 
        <RouterLink class="block py-2 px-4 hover:text-Gris bg-black " to="/concert">Concerts</RouterLink>
        <RouterLink class="block py-2 px-4 hover:text-Gris bg-black " to="/mentions">Mentions</RouterLink> 
      </div>
  </nav>

</template>

<script setup>
import {ref} from 'vue';

const menuVisible = ref(true);


</script>