import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import ArtisteView from '../views/ArtisteView.vue'
import ConcertView from '../views/ConcertView.vue'
import ContactView from '../views/ContactView.vue'
import FestivalView from '../views/FestivalView.vue'
import MentionLView from '../views/MentionLView.vue'
import ProgrammeView from '../views/ProgrammeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: 'artistes', name: 'Artistes', component: ArtistesView },
    { path: 'artiste', name: 'Artiste', component: ArtisteView },
    { path: 'concert', name: 'Concert', component: ConcertView },
    { path: 'contact', name: 'Contact', component: ContactView },
    { path: 'festival', name: 'Festival', component: FestivalView },
    { path: 'mentionlegale', name: 'Mention Légale', component: MentionLView },
    { path: 'programme', name: 'Programme', component: ProgrammeView }
  
    // ici les autre routes
  ]
})

export default router
