<template>
  <headerView></headerView>
  
  <div class="flex flex-col m-5 items-center text-center">
  <img src="../assets/ligne.png" class="">
  <p class="font-prata text-blanc text-xl:">- UN MOMENT "CLASSIQUE" -</p>
  <img src="../assets/ligne.png">
  </div>

  <div class="flex flex-col items-center justify-center ipad_pro:grid ipad_pro:grid-cols-2">
    
    <div class="flex items-center">
      
        <img src="../assets/perso6.png" alt="house" class="mx-8 my-8 rounded-lg  object-cover" />

        <p class="font-raleway text-blanc">
          Né à Paris, Alexandre Tharaud découvre la scène grâce à sa mère (professeur de danse) et son père (patron d'un garage Citroën). Ce
          dernier lui fait faire de la figuration dans les théâtres du nord de la France, où la famille passe de nombreux week-ends.[...]
        </p>
      
    </div>

    <div class="flex items-center">
      
        <img src="../assets/perso1.png" alt="personne" class=" mx-8 my-8 rounded-lg object-cover" />
     
      <p class="font-raleway text-blanc">
        Bertrand Chamayou commence à étudier le piano à huit ans. Peu de temps après, il entre au conservatoire de sa ville natale, d'où il
        sort à l'âge de quinze ans pour rejoindre la classe de Jean-François Heisser au Conservatoire national supérieur de musique de
        Paris [...]
      </p>
    </div>

    <div class="flex items-center">
      
        <img src="../assets/perso2.png" alt="house" class="mx-8 my-8 rounded-lg object-cover" />
      
      <p class="font-raleway text-blanc">
        Durant l’événement Lys, des petits comme des grands musiciens feront leurs apparitions pour interpréter leur travail en action.
        
      </p>
    </div>

    <div class="flex items-center">
     
        <img src="../assets/perso3.png" alt="house" class="mx-8 my-8 rounded-xl object-cover" />
     
      <p class="font-raleway text-blanc">
        Benjamin Bernheim naît à Paris le 9 juin 1985. Il est binational franco-suisse. Il est le fils adoptif du baryton Antoine Bernheim
        et sans relation avec son père biologique depuis sa prime enfance. [...]
      </p>
    </div>

    <div class="flex items-center">
      
        <img src="../assets/perso4.png" alt="house" class="mx-8 my-8 rounded-lg object-cover" />
     
      <p class="font-raleway text-blanc">
        Elsa Dreisig est née en 1991. Elle est la fille d'Inge Dreisig, chanteuse d'opéra, et de Gilles Ramade, artiste lyrique, pianiste,
        auteur, compositeur et metteur en scène. Elle fait dix ans de maîtrise, d'abord dans la maîtrise de l'Opéra royal de Wallonie, puis
        dans la maîtrise de l'opéra de Lyon.  [...]
      </p>
    </div>

    <div class="flex items-center">
      
        <img src="../assets/perso5.png" alt="house" class="mx-8 my-8 rounded-lg object-cover m-5" />
  
     <p class="font-raleway text-blanc">
        Raphaëlle Moreau a grandi dans une fratrie de musiciens. Elle est la sœur d’Edgar Moreau, violoncelliste, de Jérémie, pianiste nommé
        aux Victoires de la musique classique 2022, et de David, violoniste. Elle commence le violon dès l’âge de 4 ans avec la méthode
        Suzuki.  [...]
      </p>
    </div>
  </div>

  <footerView></footerView>
</template>







<script>
import headerView from "../components/headerView.vue";
import footerView from "../components/footerView.vue";
import cardView from "../components/cardView.vue";
import menuView from "../components/menuView.vue";
export default {
  components: { headerView, footerView, cardView, menuView },
};
</script>