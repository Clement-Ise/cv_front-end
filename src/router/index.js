import Vue from "vue";
import Router from "vue-router";

//Accueil
import Accueil from "@/components/Accueil";

//Admin
import Admin from "@/components/Admin";

// //Personne
// import UpdatePersonne from "@/components/pages/personne/UpdatePersonne";

//Reseau
import CreateReseau from "@/components/pages/reseau/CreateReseau";
import UpdateReseau from "@/components/pages/reseau/UpdateReseau";

//Hobbie
import CreateHobbie from "@/components/pages/hobbie/CreateHobbie";
import UpdateHobbie from "@/components/pages/hobbie/UpdateHobbie";

//Poste
import CreatePoste from "@/components/pages/poste/CreatePoste";
import UpdatePoste from "@/components/pages/poste/UpdatePoste";

//Experience_pro
import CreateExperiencePro from "@/components/pages/experience_pro/CreateExperiencePro";
import UpdateExperiencePro from "@/components/pages/experience_pro/UpdateExperiencePro";

//Outil
import CreateOutil from "@/components/pages/outil/CreateOutil";
import UpdateOutil from "@/components/pages/outil/UpdateOutil";

//Formation
import CreateFormation from "@/components/pages/formation/CreateFormation";
import UpdateFormation from "@/components/pages/formation/UpdateFormation";

Vue.use(Router);

export default new Router({
  routes: [
    //Accueil
    {
      path: "/",
      name: "Accueil",
      component: Accueil
    },
    //Admin
    {
      path: "/admin",
      name: "Admin",
      component: Admin
    },
    // //Personne
    // {
    //   path: "/uPersonne",
    //   name: "UpdatePersonne",
    //   component: UpdatePersonne
    // },
    //Reseau
    {
      path: "/cReseau",
      name: "CreateReseau",
      component: CreateReseau
    },
    {
      path: "/uReseau/:id",
      name: "UpdateReseau",
      component: UpdateReseau
    },
    //Hobbie
    {
      path: "/cHobbie",
      name: "CreateHobbie",
      component: CreateHobbie
    },
    {
      path: "/uHobbie",
      name: "UpdateHobbie",
      component: UpdateHobbie
    },
    //Poste
    {
      path: "/cPoste",
      name: "CreatePoste",
      component: CreatePoste
    },
    {
      path: "/uPoste",
      name: "UpdatePoste",
      component: UpdatePoste
    },
    //Experience Pro
    {
      path: "/cExperiencePro",
      name: "CreateExperiencePro",
      component: CreateExperiencePro
    },
    {
      path: "/uExperiencePro",
      name: "UpdateExperiencePro",
      component: UpdateExperiencePro
    },
    //Outil
    {
      path: "/cOutil",
      name: "CreateOutil",
      component: CreateOutil
    },
    {
      path: "/uOutil",
      name: "UpdateOutil",
      component: UpdateOutil
    },
    //Formation
    {
      path: "/cFormation",
      name: "CreateFormation",
      component: CreateFormation
    },
    {
      path: "/uFormation",
      name: "UpdateFormation",
      component: UpdateFormation
    }
  ]
});
