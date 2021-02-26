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
                Êtes-vous sur de vouloir supprimer le poste ?
              </h2>
              <form
                class="media_formulaire"
                method="POST"
                @submit.prevent="submit"
              >
                <div class="form">
                  <label class="form_lab" for="name">Intitulé du poste :</label>
                  <input type="text" name="Nom" v-model="poste.nom" required />
                </div>
                <div>
                  <label for="date_deb">Disponible du :</label>
                  <input
                    name="date_deb"
                    type="date"
                    v-model="poste.periode_deb"
                    required
                  />
                  <label for="date_fin">au :</label>
                  <input
                    name="date_fin"
                    type="date"
                    v-model="poste.periode_fin"
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
  name: "DeletePoste",
  data() {
    return {
      poste: {
        id: 0,
        nom: null,
        periode_deb: null,
        periode_fin: null
      }
    };
  },
  created() {
    // get id poste via route
    this.poste.id = this.$route.params.id;
    // Object FormData to set parameters
    let params = new FormData();
    params.append("id", this.poste.id);
    app
      .get("getPoste", params)
      .then(promise => {
        this.poste = promise;
      })
      .catch(error => console.log(error));
  },
  methods: {
    submit: function() {
      // Object FormData to set parameters
      let params = new FormData();
      params.append("id", this.poste.id);
      params.append("nom", this.poste.nom);
      params.append("periode_deb", this.poste.periode_deb);
      params.append("periode_fin", this.poste.periode_fin);

      // Call Ajax service
      app
        .maj("deletePoste", params)
        .then(promise => {
          this.poste = promise;
          // Redirect to admin page
          this.$router.push("/admin");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
<style scoped></style>
