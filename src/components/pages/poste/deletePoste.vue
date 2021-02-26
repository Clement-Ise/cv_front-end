<template>
  <div class="app">
    <header class="app-header">
      <div class="navBar">
        <img
          src="https://fontmeme.com/permalink/210202/b945f0e9f64093815a159c180d95b46b.png"
          alt="polices-gothiques"
        />
        <h1>| Curriculum Vitae - Make Application Great Again</h1>
        <div class="btn_actions_poste">
          <div class="btn_actions_add" title="Ajouter le poste">
            <router-link to="/createPoste">
              <i class="fa fa-times fa-lg faPave"></i>
            </router-link>
          </div>
          <div class="btn_actions_update" title="Modifier le poste">
            <router-link to="/updatePoste">
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
                <a href="/index.html#Personne">Personne</a>
              </li>
              <li class="menu_prhpeofc">
                <a href="/index.html#Reseaux"> Reseaux</a>
              </li>
              <li class="menu_prhpeofc">
                <a href="/index.html#Hobbies">Hobbies</a>
              </li>
              <li class="menu_prhpeofc">
                <a href="/index.html#Poste">Poste</a>
              </li>
              <li class="menu_prhpeofc">
                <a href="/index.html#Experience_pro">Expériences Pro</a>
              </li>
              <li class="menu_prhpeofc">
                <a href="/index.html#Outils">Outils</a>
              </li>
              <li class="menu_prhpeofc">
                <a href="/index.html#Formations">Formations</a>
              </li>
              <li class="menu_prhpeofc cv">
                <a href="../index.html">See Your CV</a>
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
                Supprimer les informations du poste que vous recherchez
              </h2>
              <ul class="media_formulaire">
                <li class="form">Intitulé du poste :</li>
                <li class="form">
                  Disponibilités : Disponible à partir du 6 juin 2019
                </li>
                <div>
                  <input
                    class="favorite1 styled1"
                    type="button"
                    value="Annuler"
                  />
                  <input
                    class="favorite1 styled1"
                    type="button"
                    value="Supprimer le poste"
                  />
                </div>
              </ul>
            </div>
            <div class="delete_popup">
              <h2 class="delete_title">
                Êtes-vous sur de vouloir supprimer le poste ?
              </h2>
              <a href="../index.html">
                <input
                  class="favorite1 styled1"
                  type="submit"
                  value="Supprimer définitivement"
                />
              </a>
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
export default {};
</script>
<style scoped></style>
