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
                Modifier la Personne
              </h2>
              <div>
                <form
                  class="media_formulaire"
                  method="POST"
                  @submit.prevent="submit"
                >
                  <div class="form">
                    <label class="form_lab" for="nom">Nom :</label>
                    <input
                      id="nom"
                      name="nom"
                      maxlength="70"
                      type="text"
                      v-model="personne.nom"
                      required
                    />
                  </div>
                  <div class="form">
                    <label class="form_lab" for="prenom">Prénom :</label>
                    <input
                      id="prenom"
                      name="prenom"
                      maxlength="70"
                      type="text"
                      v-model="personne.prenom"
                      required
                    />
                  </div>
                  <div class="form">
                    <label class="form_lab" for="poste">Poste :</label>
                    <input
                      type="text"
                      v-model="personne.qualification"
                      required
                    />
                  </div>
                  <div class="form">
                    <label class="form_lab" for="adresse">Adresse :</label>
                    <input
                      id="adresse"
                      type="text"
                      name="adresse"
                      v-model="personne.adresse"
                      required
                    />
                  </div>
                  <div class="form">
                    <label class="form_lab" for="cp">CP :</label>
                    <input
                      id="cp"
                      type="number"
                      name="cp"
                      min="0"
                      v-model="personne.cp"
                      required
                    />
                  </div>
                  <div class="form">
                    <label class="form_lab" for="ville">Ville :</label>
                    <input
                      id="ville"
                      type="text"
                      name="ville"
                      maxlength="50"
                      v-model="personne.ville"
                      required
                    />
                  </div>
                  <div class="form">
                    <label class="form_lab" for="telephone">Mobile :</label>
                    <input
                      id="telephone"
                      type="number"
                      name="telephone"
                      min="0"
                      v-model="personne.telephone"
                      required
                    />
                  </div>
                  <div class="form">
                    <label class="form_lab" for="mail">E-mail :</label>
                    <input
                      id="mail"
                      type="email"
                      name="mail"
                      v-model="personne.mail"
                      required
                    />
                  </div>
                  <div class="form">
                    <label class="form_lab" for="voiture">Voiture</label>
                    <input
                      id="voiture"
                      type="text"
                      name="voiture"
                      v-model="personne.voiture"
                      required
                    />
                  </div>
                  <div class="form">
                    <label class="form_lab" for="permis">Permis</label>
                    <input
                      id="permis"
                      type="text"
                      name="permis"
                      v-model="personne.permis"
                      required
                    />
                  </div>
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
  name: "UpdatePersonne",
  data() {
    return {
      personne: {
        id: 0,
        nom: null,
        prenom: null,
        departement: null,
        cp: null,
        ville: null,
        adresse: null,
        mail: null,
        telephone: null,
        permis: null,
        voiture: null,
        qualification: null
      }
    };
  },
  created() {
    // get id reseau via route
    this.personne.id = 1;
    // Object FormData to set parameters
    let params = new FormData();
    params.append("id", this.personne.id);
    app
      .get("getPersonne", params)
      .then(promise => {
        this.personne = promise;
      })
      .catch(error => console.log(error));
  },
  methods: {
    submit: function() {
      // Object FormData to set parameters
      let params = new FormData();
      params.append("id", this.personne.id);
      params.append("nom", this.personne.nom);
      params.append("prenom", this.personne.prenom);
      params.append("departement", this.personne.departement);
      params.append("cp", this.personne.cp);
      params.append("ville", this.personne.ville);
      params.append("adresse", this.personne.adresse);
      params.append("mail", this.personne.mail);
      params.append("telephone", this.personne.telephone);
      params.append("permis", this.personne.permis);
      params.append("voiture", this.personne.voiture);
      params.append("qualification", this.personne.qualification);

      // Call Ajax service
      app
        .maj("updatePersonne", params)
        .then(promise => {
          this.personne = promise;
          // Redirect to admin page
          this.$router.push("/admin");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
<style scoped></style>
