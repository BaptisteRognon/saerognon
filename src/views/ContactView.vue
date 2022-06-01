<template>
  <headerView></headerView>
 
<div class="flex flex-col m-5 items-center text-center">
  <img src="../assets/ligne.png" class="">
  <p class="font-prata text-blanc text-xl:">- CONTACTEZ NOUS -</p>
  <img src="../assets/ligne.png">
  </div>



<figure class="flex flex-col mx-8  my-5 bg-white rounded-lg" >
      <h1>Formulaire de contact</h1>
      
            <div>
               <td>
                  <label>
                     Votre nom <span class="required">*</span>
                  </label>
               </td>
               
               <td>
                  <input type="text" name="name" class="long"/>
                  <span class="error" id="errorname"></span>
               </td>
            </div>
            <div>
               <td>
                  <label>
                     Votre adresse e-mail <span class="required">*</span>
                  </label>
               </td>
               <td>
                  <input type="email" name="email" class="long"/>
                  <span class="error" id="erroremail"></span>
               </td>
            </div>
            <div>
               <td>
                  <label>
                     Message <span class="required">*</span>
                  </label>
               </td>
               <td>
                  <textarea name="message" class="long field-textarea"></textarea>
                  <span class="error" id="errormsg"></span>
               </td>
            </div>
            
               <div>
               <button>
                  <input type="submit" value="Envoyer">   
                </button>
                <button>   
                  <input type="reset" value="Réinitialiser"> 
               </button>
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