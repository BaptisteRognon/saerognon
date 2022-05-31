<template>
      <figure class="flex flex-col mx-8  my-5 bg-white rounded-lg" >
    <img
      src="../assets/article1.svg"
      alt="house"
      class="rounded-t-lg w-full h-48 object-cover"
    />
    <figcaption
      class="
        flex
        w-full
        flex-col
        gap-4
        
        border border-indigo-50
        shadow-bold : 
        py-7
        px-5
        
        
      ">
      <div class="flex justify-between rounded-lg">
        <div class="w-2/5">
          <p class="text-2xl font-bold">Début des réservations</p>
        </div>
        <div
          class="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border-2 border-indigo-100
          "
        >
          <HeartIcon class="h-6 text-transparent"></HeartIcon>
        </div>
      </div>
      <p class="text-base font-normal text-gray-900">
Début des réservations pour l’événement musical royal.
L’événement commence du samedi 28 juin de 12 à minuit. 
      </p>
      <div class="w-full border border-indigo-50"></div>
      <div class="flex justify-between">
        <div class="flex items-center gap-2">
          <span class="text-xs text-gray-900">En savoir plus ?</span>
        </div>
      
      </div>
    </figcaption>
  </figure>
</template>