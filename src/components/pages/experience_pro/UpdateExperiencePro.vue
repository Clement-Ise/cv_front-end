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
                Modifiez votre expérience professionnelle
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
  name: "UpdateExperiencePro",
  data() {
    return {
      experience: {
        id: 0,
        nom: null,
        entreprise: null,
        activite: null,
        periode_deb: null,
        periode_fin: null
      }
    };
  },
  created() {
    // get id experience via route
    this.experience.id = this.$route.params.id;
    // Object FormData to set parameters
    let params = new FormData();
    params.append("id", this.experience.id);
    app
      .get("getExperiencePro", params)
      .then(promise => {
        this.experience = promise;
      })
      .catch(error => console.log(error));
  },
  methods: {
    submit: function() {
      // Object FormData to set parameters
      let params = new FormData();
      params.append("id", this.experience.id);
      params.append("nom", this.experience.nom);
      params.append("entreprise", this.experience.entreprise);
      params.append("activite", this.experience.activite);
      params.append("periode_deb", this.experience.periode_deb);
      params.append("periode_fin", this.experience.periode_fin);
      // Call Ajax service
      app
        .maj("updateExperiencePro", params)
        .then(promise => {
          this.experience = promise;
          // Redirect to admin page
          this.$router.push("/admin");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
<style scoped></style>
