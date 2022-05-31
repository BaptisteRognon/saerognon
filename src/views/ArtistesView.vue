<template>
  <headerView></headerView>
 <div class="ipad_pro:grid ipad_pro:grid-cols-2  flex flex-col items-center justify-center">
     <div class="flex items-center"> 
       <figure class=" mx-8  my-8 bg-white rounded-lg" >
      <img src="src/assets/perso6.png" alt="house" class="rounded-lg object-cover"/>
      </figure>
      <p>ejdhehdezjhzs</p>
      </div>
            
      <div class="flex items-center">       
      <figure class="flex  mx-8  my-8 bg-white rounded-lg" >
      <img src="src/assets/perso1.png"  alt="personne" class="rounded-lg object-cover"/>
      </figure>
      </div>

      <div class="flex items-center"> 
      <figure class="flex  mx-8  my-8 bg-white rounded-lg" >
      <img src="src/assets/perso2.png"  alt="house" class="rounded-lg object-cover"/>
      </figure>
      </div>

      <div class="flex items-center"> 
      <figure class="flex mx-8  my-8 bg-white rounded-lg" >
      <img  src="src/assets/perso3.png"   alt="house"  class="rounded-lg object-cover"/>
      </figure>
      </div>

      <div class="flex items-center"> 
<figure class="flex mx-8  my-5 bg-white rounded-lg" >
    <img
      src="src/assets/perso4.png"
      alt="house"
      class="rounded-lg object-cover"/>
      </figure>
      </div>

      <div class="flex items-center"> 
      <figure class="flex mx-8  my-5 bg-white rounded-lg" >
    <img
      src="src/assets/perso5.png"
      alt="house"
      class="rounded-lg object-cover"/>
      </figure>
      </div>
</div>


  <footerView></footerView>
</template>

<script>
  import headerView from '../components/headerView.vue';
  import footerView from '../components/footerView.vue';
  import cardView from '../components/cardView.vue';
  import menuView from '../components/menuView.vue';
export default {
  components: { headerView, footerView, cardView , menuView },
};
</script>