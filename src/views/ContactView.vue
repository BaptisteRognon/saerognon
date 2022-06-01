<template>
  <headerView></headerView>
 
<div class="flex flex-col m-5 items-center text-center">
  <img src="../assets/ligne.png" class="">
  <p class="font-prata text-blanc text-xl:">- CONTACTEZ NOUS -</p>
  <img src="../assets/ligne.png">
  </div>



<figure class="flex flex-col mx-8  my-5 " >
   
      
            <div class="bg-gradient-to-r from-d1 via-d2 to-d3 rounded-[20px] mb-24 mx-[260px]">
    
    <form class="flex flex-col font-Poppins text-black font-normal text-[15px] leading-[26px] tracking-normal">
      <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" type="text" id="lname" name="lastname" placeholder="Nom">

      <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" type="text" id="fname" name="firstname" placeholder="Prénom">

      <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" id="emailAddress" type="email" name="email" placeholder="Adresse e-mail">

      <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" id="country" type="country" name="country" placeholder="Pays">

      <div class="grid grid-cols-2 gap-5">
        <div class="flex flex-col">
        <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] ml-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" id="city" type="city" name="city" placeholder="Ville">
        </div>
        <div class="flex flex-col">
        <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mr-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" id="zipcode" type="zipcode" name="zipcode" placeholder="Code postal">
        </div>
      </div>

      <textarea style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-[114px] rounded-[10px] placeholder:text-black pt-4 pl-6 focus:border-deep-blue" id="adress" name="adress" type="adress" placeholder="Adresse complète"></textarea>

        <div class="grid grid-cols-3 mb-[22px] mx-auto gap-44 text-white font-Poppins font-normal text-base leading-[26px] tracking-normal">
            <div class="space-x-2 flex">
                <input class="h-7 w-7" style="filter:drop-shadow(0px 10px 10px gray)" type="radio" id="formule1" name="formule1" v-model="formule" value="formule 1">
                <label class="my-auto" style="filter:drop-shadow(0px 10px 10px gray)" for="formule1">Formule 1</label>
            </div>

            <div class="space-x-2 flex">
                <input class="h-7 w-7" style="filter:drop-shadow(0px 10px 10px gray)" type="radio" id="formule2" name="formule2" v-model="formule" value="formule 2">
                <label class="my-auto" style="filter:drop-shadow(0px 10px 10px gray)" for="formule2">Formule 2</label>
            </div>

            <div class="space-x-2 flex">
                <input class="h-7 w-7" style="filter:drop-shadow(0px 10px 10px gray)" type="radio" id="formule3" name="formule3" v-model="formule" value="formule 3">
                <label class="my-auto" style="filter:drop-shadow(0px 10px 10px gray)" for="formule3">Formule 3</label>
            </div>
        </div>

      <div v-if="formule !== 'formule 2'" class="contents">
          <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" type="username" id="uname" name="username" placeholder="Nom d'utilisateur">
          
          <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" type="password" id="password" name="password" placeholder="Mot de passe">
          <input style="filter:drop-shadow(0px 10px 10px gray)" class="outline-none focus:ring focus:ring-deep-blue mb-[22px] mx-[74px] h-14 rounded-[10px] placeholder:text-black pl-6" type="password" id="password" name="password" placeholder="Confirmer le mot de passe">
      </div>
        <div class="space-x-4 flex mx-[100px]">
            <input style="filter:drop-shadow(0px 10px 10px gray)" class="my-auto h-7 w-7" type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked>
            <label style="filter:drop-shadow(0px 10px 10px gray)" for="vehicle1"> En cochant cette case, je reconnais avoir pris connaissance des <RouterLink to="/mentionslegales" class="text-deep-blue">Conditions Générales d'Utilisation</RouterLink> du site ainsi que sa <RouterLink to="/mentionslegales" class="text-deep-blue">Politique de Confidentialité</RouterLink> et je les accepte. </label>
        </div>

      <input type="submit" value="S'inscrire" style="filter:drop-shadow(0px 10px 10px gray)" class="text-white uppercase py-2 rounded-[10px] mx-[400px] mt-[22px] mb-12 font-Poppins font-bold text-[15px] leading-[26px] tracking-normal bg-ocean-blue hover:text-black">
      

    </form>
   </div>
</figure>

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

<script>
export default {
    data: function() {
        return {
            formule:"",
        }
    }
}
</script>