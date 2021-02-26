<template>
  <div class="app">
    <header class="app-header">
      <div class="navBar">
        <img
          src="https://fontmeme.com/permalink/210202/b945f0e9f64093815a159c180d95b46b.png"
          alt="polices-gothiques"
        />
        <h1>| Curriculum Vitae - Make Application Great Again</h1>
      </div>
    </header>
    <main class="app-main">
      <div class="container">
        <section class="card card-marketing">
          <div class="media">
            <div class="media_body">
              <h2 class="media_title">
                Êtes-vous sur de vouloir supprimer la formation ?
              </h2>
              <div>
                <form
                  class="media_formulaire"
                  method="POST"
                  @submit.prevent="submit"
                >
                  <div class="form">
                    <label class="form_lab" for="annee">Année : </label>
                    <input
                      type="number"
                      min="1900"
                      name="annee"
                      placeholder="XXXX"
                      v-model="formation.annee"
                      required
                    />
                    <label class="form_lab" for="nom"
                      >Intitulé de la formation :
                    </label>
                    <input
                      type="text"
                      name="nom"
                      placeholder="Baccalauréat"
                      v-model="formation.nom"
                      required
                    />
                  </div>
                  <div class="form">
                    <label class="form_lab" for="etablissement"
                      >Nom de l'établissement</label
                    >
                    <input
                      type="text"
                      name="etablissement"
                      placeholder="Lycée exemple"
                      v-model="formation.etablissement"
                      required
                    />
                  </div>
                  <div class="form">
                    <label class="form_lab" for="ville">Ville :</label>
                    <input
                      type="text"
                      name="ville"
                      placeholder="Paris"
                      v-model="formation.ville"
                      required
                    />
                    <label class="form_lab" for="departement"
                      >Département :</label
                    >
                    <input
                      type="text"
                      name="departement"
                      placeholder="XXXXXXX"
                      v-model="formation.departement"
                      required
                    />
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
                    <button class="favorite1 styled1" type="submit">
                      Annuler
                    </button>
                    <button class="favorite1 styled1" type="submit">
                      Supprimer la selection
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
  name: "DeleteFormation",
  data() {
    return {
      formation: {
        id: 0,
        nom: null,
        etablissement: null,
        ville: null,
        departement: null,
        annee: 0
      }
    };
  },
  created() {
    // get id formation via route
    this.formation.id = this.$route.params.id;
    // Object FormData to set parameters
    let params = new FormData();
    params.append("id", this.formation.id);
    app
      .get("getFormation", params)
      .then(promise => {
        this.formation = promise;
      })
      .catch(error => console.log(error));
  },
  methods: {
    submit: function() {
      // Object FormData to set parameters
      let params = new FormData();
      params.append("id", this.formation.id);
      params.append("nom", this.formation.nom);
      params.append("etablissement", this.formation.etablissement);
      params.append("ville", this.formation.ville);
      params.append("departement", this.formation.departement);
      params.append("annee", this.formation.annee);
      // Call Ajax service
      app
        .maj("deleteFormation", params)
        .then(promise => {
          this.formation = promise;
          // Redirect to admin page
          this.$router.push("/admin");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
<style scoped></style>
