import Vue from "vue";
import Router from "vue-router";

//Accueil
import Accueil from "@/components/Accueil";

//Admin
import Admin from "@/components/Admin";

// //Personne
import UpdatePersonne from "@/components/pages/personne/UpdatePersonne";

//Reseau
import CreateReseau from "@/components/pages/reseau/CreateReseau";
import UpdateReseau from "@/components/pages/reseau/UpdateReseau";
import DeleteReseau from "@/components/pages/reseau/DeleteReseau";

//Hobbie
import CreateHobbie from "@/components/pages/hobbie/CreateHobbie";
import UpdateHobbie from "@/components/pages/hobbie/UpdateHobbie";
import DeleteHobbie from "@/components/pages/hobbie/DeleteHobbie";

//Poste
import CreatePoste from "@/components/pages/poste/CreatePoste";
import UpdatePoste from "@/components/pages/poste/UpdatePoste";
import DeletePoste from "@/components/pages/poste/DeletePoste";

//Experience_pro
import CreateExperiencePro from "@/components/pages/experience_pro/CreateExperiencePro";
import UpdateExperiencePro from "@/components/pages/experience_pro/UpdateExperiencePro";
import DeleteExperiencePro from "@/components/pages/experience_pro/DeleteExperiencePro";

//Outil
import CreateOutil from "@/components/pages/outil/CreateOutil";
import UpdateOutil from "@/components/pages/outil/UpdateOutil";
import DeleteOutil from "@/components/pages/outil/DeleteOutil";

//Formation
import CreateFormation from "@/components/pages/formation/CreateFormation";
import UpdateFormation from "@/components/pages/formation/UpdateFormation";
import DeleteFormation from "@/components/pages/formation/DeleteFormation";

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
    {
      path: "/uPersonne",
      name: "UpdatePersonne",
      component: UpdatePersonne
    },
    //Reseau
    {
      path: "/cReseau",
      name: "CreateReseau",
      component: CreateReseau
    },
    {
      path: "/uReseau/",
      name: "UpdateReseau",
      component: UpdateReseau
    },
    {
      path: "/dReseau/",
      name: "DeleteReseau",
      component: DeleteReseau
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
    {
      path: "/dHobbie",
      name: "DeleteHobbie",
      component: DeleteHobbie
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
    {
      path: "/dPoste",
      name: "DeletePoste",
      component: DeletePoste
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
    {
      path: "/dExperiencePro",
      name: "DeleteExperiencePro",
      component: DeleteExperiencePro
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
    {
      path: "/dOutil",
      name: "DeleteOutil",
      component: DeleteOutil
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
    },
    {
      path: "/dFormation",
      name: "DeleteFormation",
      component: DeleteFormation
    }
  ]
});
