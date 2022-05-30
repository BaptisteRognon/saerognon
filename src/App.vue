<template>
  <header>
    
    <nav class="flex flex-col">
      <RouterLink to="/" class="text-blue-600 underline">Accueil</RouterLink>
      <RouterLink to="/artistes" class="text-blue-600 underline">Artistes</RouterLink>
      <RouterLink to="/artiste" class="text-blue-600 underline">Artiste</RouterLink>
      <RouterLink to="/concert" class="text-blue-600 underline">Concert</RouterLink>
      <RouterLink to="/contact" class="text-blue-600 underline">Contact</RouterLink>
      <RouterLink to="/festival" class="text-blue-600 underline">Festival</RouterLink>
      <RouterLink to="/mentionlegale" class="text-blue-600 underline">Mention Légake</RouterLink>
      <RouterLink to="/programme" class="text-blue-600 underline">Programme</RouterLink>

      <headerView></headerView>
    </nav>
  </header>

  <footerView></footerView>
  <RouterView />
</template>

<script>
 import headerView from './components/headerView.vue';
 import footerView from './components/footerView.vue';
export default {
  components: { headerView, footerView, },
};
</script>