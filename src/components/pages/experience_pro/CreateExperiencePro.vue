<template>
  <div class="app">
    <header class="app-header">
      <div class="navBar">
        <img
          src="https://fontmeme.com/permalink/210202/b945f0e9f64093815a159c180d95b46b.png"
          alt="polices-gothiques"
        />
        <h1>| Curriculum Vitae - Make Application Great Again</h1>
        <div class="btn_actions_experiencePro">
          <div
            class="btn_actions_delete"
            title="Supprimer les experiences de la personne"
          >
            <router-link to="/dExperiencePro">
              <i class="fa fa-times fa-lg faPave"></i>
            </router-link>
          </div>
          <div
            class="btn_actions_update"
            title="Modifier les experiences de la personne"
          >
            <router-link to="/uExperiencePro">
              <i class="fa fa-edit fa-lg faPave"></i>
            </router-link>
          </div>
        </div>
      </div>
      <div class="navigation">
        <div class="nav_menu_crud">
          <nav class="navla">
            <ul class="nav">
              <li class="menu_prhpeofc">
                <a href="/cPersonne">Personne</a>
              </li>
              <li class="menu_prhpeofc">
                <a href="/cReseau"> Reseaux</a>
              </li>
              <li class="menu_prhpeofc">
                <a href="/cHobbie">Hobbies</a>
              </li>
              <li class="menu_prhpeofc">
                <a href="/cPoste">Poste</a>
              </li>
              <li class="menu_prhpeofc">
                <a href="/cExperiencePro">Expériences Pro</a>
              </li>
              <li class="menu_prhpeofc">
                <a href="/cOutil">Outils</a>
              </li>
              <li class="menu_prhpeofc">
                <a href="/cFormation">Formations</a>
              </li>
              <li class="menu_prhpeofc cv">
                <a href="/admin">See Your CV</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main class="app-main">
      <div class="container">
        <section class="card card-marketing">
          <div class="media">
            <div class="media_body">
              <h2 class="media_title">
                Informations concernant votre expérience professionnelle
              </h2>
              <div>
                <form
                  class="media_formulaire"
                  method="POST"
                  @submit.prevent="submit"
                >
                  <div class="form">
                    <label class="form_lab" for="nom"
                      >Intitulé du poste :
                    </label>
                    <input
                      type="text"
                      name="nom"
                      placeholder="Conducteur"
                      v-model="experience.nom"
                      required
                    />
                    <label class="form_lab" for="entreprise"
                      >Nom de l'entreprise:</label
                    >
                    <input
                      type="text"
                      name="entreprise"
                      placeholder="SAS exmple"
                      v-model="experience.entreprise"
                      required
                    />
                  </div>
                  <div class="form">
                    <label class="form_lab" for="activite"
                      >Activite réalisé:</label
                    >
                    <textarea
                      name="activite"
                      placeholder="Conduite...."
                      v-model="experience.activite"
                      required
                    ></textarea>
                  </div>
                  <div class="form">
                    <label class="form_lab" for="date_début"
                      >Date de début :</label
                    >
                    <input
                      type="date"
                      name="date_début"
                      v-model="experience.periode_deb"
                      required
                    />
                    <label class="form_lab" for="l_name">Date de fin :</label>
                    <input
                      type="date"
                      name="date_fin"
                      v-model="experience.periode_fin"
                      required
                    />
                  </div>
                  <div>
                    <button class="favorite styled" type="submit">
                      Ajouter
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <footer class="app-footer">
      <p class="footer_cop">© Clément ISELIN <span id="year"> </span></p>
    </footer>
  </div>
</template>
<script>
import app from "@/services/app";

export default {
  name: "CreateExperiencePro",
  data() {
    return {
      experience: {
        nom: null,
        entreprise: null,
        activite: null,
        periode_deb: null,
        periode_fin: null
      }
    };
  },
  methods: {
    submit: function() {
      let params = new FormData();
      params.append("nom", this.experience.nom);
      params.append("entreprise", this.experience.entreprise);
      params.append("activite", this.experience.activite);
      params.append("periode_deb", this.experience.periode_deb);
      params.append("periode_fin", this.experience.periode_fin);
      app
        .maj("createExperiencePro", params)
        .then(promise => {
          console.log(promise);
          this.$router.push("/admin");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
<style scoped></style>
