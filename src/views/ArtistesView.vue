<template>
  <headerView></headerView>
  <div class="flex flex-col items-center justify-center ipad_pro:grid ipad_pro:grid-cols-2">
    <div class="flex items-center">
      
        <img src="src/assets/perso6.png" alt="house" class="mx-8 my-8 rounded-lg bg-white object-cover" />

        <p>
          Né à Paris, Alexandre Tharaud découvre la scène grâce à sa mère (professeur de danse) et son père (patron d'un garage Citroën). Ce
          dernier lui fait faire de la figuration dans les théâtres du nord de la France, où la famille passe de nombreux week-ends. À
          l'initiative de ses parents, il entame l'étude du piano à l'âge de cinq ans et rencontre au conservatoire du 14e arrondissement
          celle qui devient son professeur, Carmen Taccon-Devenat, une élève de Marguerite Long. Il déclare d'elle qu'elle lui a « donné des
          leçons de vie » et lui a appris à « respirer physiquement en faisant parler le piano» [...]
        </p>
      
    </div>

    <div class="flex items-center">
      
        <img src="src/assets/perso1.png" alt="personne" class=" mx-8 my-8 rounded-lg object-cover" />
     
      <p>
        Bertrand Chamayou commence à étudier le piano à huit ans. Peu de temps après, il entre au conservatoire de sa ville natale, d'où il
        sort à l'âge de quinze ans pour rejoindre la classe de Jean-François Heisser au Conservatoire national supérieur de musique de
        Paris. Il donne alors ses premiers concerts, suit les conseils d'artistes tels que Murray Perahia, Leon Fleisher, Dmitri Bachkirov
        ou encore Aldo Ciccolini ; il remporte un deuxième prix au Concours international Krainev en Ukraine, un premier prix de piano au
        Conservatoire, et intègre le cycle de perfectionnement de cet établissement tout en travaillant auprès de Maria Curcio à Londres
        [...]
      </p>
    </div>

    <div class="flex items-center">
      
        <img src="src/assets/perso2.png" alt="house" class="mx-8 my-8 rounded-lg object-cover" />
      
      <p>
        Durant l’événement Lys, des petits comme des grands musiciens feront leurs apparitions pour interpréter leur travail en action.
        Durant l’événement Lys, des petits comme des grands musiciens feront leurs apparitions pour interpréter leur travail en action.
        Durant l’événement Lys, des petits comme des grands musiciens feront leurs apparitions pour interpréter leur travail en action.
        Durant l’événement Lys, des petits comme des grands musiciens feront leurs apparitions pour interpréter leur travail en action.
      </p>
    </div>

    <div class="flex items-center">
     
        <img src="src/assets/perso3.png" alt="house" class="mx-8 my-8 rounded-lg object-cover" />
     
      <p>
        Benjamin Bernheim naît à Paris le 9 juin 1985. Il est binational franco-suisse. Il est le fils adoptif du baryton Antoine Bernheim
        et sans relation avec son père biologique depuis sa prime enfance. Sa mère, fille de la mezzo-soprano Nicole Buloze, est professeur
        de chant. Ses parents divorcent lorsqu'il est encore enfant. Il a une demi-sœur et un demi-frère cadets. Il est un des ambassadeurs
        de la marque Rolex depuis 2017. Il est marié et père d'une fille. Il vit à Zurich [...]
      </p>
    </div>

    <div class="flex items-center">
      
        <img src="src/assets/perso4.png" alt="house" class="mx-8 my-8 rounded-lg object-cover" />
     
      <p>
        Elsa Dreisig est née en 1991. Elle est la fille d'Inge Dreisig, chanteuse d'opéra, et de Gilles Ramade, artiste lyrique, pianiste,
        auteur, compositeur et metteur en scène. Elle fait dix ans de maîtrise, d'abord dans la maîtrise de l'Opéra royal de Wallonie, puis
        dans la maîtrise de l'opéra de Lyon. À l'âge de 17 ans, elle décide d'arrêter la maîtrise et commence à travailler le chant au
        Conservatoire du 12e arrondissement de Paris puis au Conservatoire national supérieur de musique de Paris dans la classe de Valérie
        Guillorit, puis, pendant un an, à la Hochschule für Musik de Leipzig dans la classe de Regina Werner [...]
      </p>
    </div>

    <div class="flex items-center">
      
        <img src="src/assets/perso5.png" alt="house" class="mx-8 my-8 rounded-lg object-cover m-5" />
  
      <p >
        Raphaëlle Moreau a grandi dans une fratrie de musiciens. Elle est la sœur d’Edgar Moreau, violoncelliste, de Jérémie, pianiste nommé
        aux Victoires de la musique classique 2022, et de David, violoniste. Elle commence le violon dès l’âge de 4 ans avec la méthode
        Suzuki. Elle se forme auprès d'Igor Volochine au Conservatoire à rayonnement régional de Paris. Elle intègre à 14 ans le
        Conservatoire national supérieur de musique et de danse de Paris dans la classe de Roland Daugareil et suit en plus l’enseignement
        de Pavel Vernikov à la Scuola di Musica di Fiesole en Italie puis à la Haute École de musique de Lausanne [...]
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