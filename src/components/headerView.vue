<template >
<RouterView/>
  <div class="bg-noir">
  <div class="bg-[url('/src/assets/fond_fontaine.png')] bg-no-repeat bg-cover h-screen">
  <div class="flex justify-between   ">
    <img class="p-4" src="src/assets/lys.svg" />
    <img class="p-4" src="src/assets/menu.svg" />
  </div>

    <div class="flex flex-grow-0 flex-shrink-0  py-3">
      <div class="font-inter flex-grow space-x-3">
        <nav class="hidden lg:flex lg:gap-8">
          <ul class="flex-grow flex space-x-7 text-base font-medium mt-3 ml-11 text-blanc">
            <li>
              <router-link to="/">Contact</router-link>
            </li>
            <li>
              <router-link to="/">Événement</router-link>
            </li>
            <li>
              <router-link to="/">Artistes </router-link>
            </li>
            <li>
              <router-link to="/">Concert</router-link>
            </li>
          </ul>
        </nav>
      </div>
  </div>
 
  <div class="my-5">
    <h1 class="font-prata font-bold text-center text-blanc text-3xl m-8">
LYS    </h1>
<h1 class="font-prata font-bold text-center text-blanc text-2xl m-8">
ÉVÉNEMENT DE L'ÉtÉ ROYALE</h1>
  </div>
  <div class=" flex justify-center">
       <FlecheIcon/>
    </div>
      <div class=" flex justify-center">
       <FlecheIcon/>
    </div>

</div>

</div>
</template>