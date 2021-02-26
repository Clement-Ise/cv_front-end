<template>
  <div class="app">
    <header class="app-header">
      <div class="navBar">
        <img
          src="https://fontmeme.com/permalink/210202/b945f0e9f64093815a159c180d95b46b.png"
          alt="polices-gothiques"
        />
        <h1>| Curriculum Vitae - Make Application Great Again</h1>
        <div class="btn_actions_reseau">
          <div class="btn_actions_add" title="Ajouter le reseau">
            <router-link to="/create">
              <i class="fa fa-times fa-lg faPave"></i>
            </router-link>
          </div>
          <div class="btn_actions_delete" title="Supprimer le reseau">
            <router-link to="/deleteReseau">
              <i class="fa fa-times fa-lg faPave"></i>
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
                Modifiez le réseau
              </h2>
              <div class="reseau">
                <form
                  class="media_formulaire"
                  method="POST"
                  @submit.prevent="submit"
                >
                  <div>
                    <div class="form">
                      <label class="form_lab" for="nom">Identifiant :</label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        placeholder="Exemple-ex"
                        v-model="reseau.nom"
                        required
                      />
                    </div>
                    <div class="form">
                      <label class="form_lab" for="lien">Url :</label>
                      <input
                        type="text"
                        id="lien"
                        name="lien"
                        placeholder="https://www.exemple.com/"
                        v-model="reseau.lien"
                        required
                      />
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="587.003"
                    height="3"
                    viewBox="0 0 587.003 3"
                  >
                    <line
                      id="Ligne_20"
                      data-name="Ligne 20"
                      x2="587"
                      y2="2"
                      transform="translate(0.002 0.5)"
                      fill="none"
                      stroke="#707070"
                      stroke-width="1"
                    />
                  </svg>
                  <fieldset>
                    <button class="favorite styled">
                      <router-link to="/admin">Annuler</router-link>
                    </button>
                    <button class="favorite styled" type="submit">
                      Mettre à jour
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <footer class="app-footer">
      <p class="footer_cop">Clément ISELIN &copy; 2021</p>
    </footer>
  </div>
</template>
<script>
import app from "@/services/app";

export default {
  name: "UpdateReseau",
  data() {
    return {
      reseau: {
        id: 0,
        nom: null,
        lien: null
      }
    };
  },
  created() {
    // get id reseau via route
    this.reseau.id = this.$route.params.id;
    // Object FormData to set parameters
    let params = new FormData();
    params.append("id", this.reseau.id);
    app
      .get("getReseau", params)
      .then(promise => {
        this.reseau = promise;
      })
      .catch(error => console.log(error));
  },
  methods: {
    submit: function() {
      // Object FormData to set parameters
      let params = new FormData();
      params.append("id", this.reseau.id);
      params.append("nom", this.reseau.nom);
      params.append("lien", this.reseau.lien);
      // Call Ajax service
      app
        .maj("updateReseau", params)
        .then(promise => {
          this.reseau = promise;
          // Redirect to admin page
          this.$router.push("/admin");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
<style scoped></style>
