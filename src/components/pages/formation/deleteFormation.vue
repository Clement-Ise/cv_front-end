<template>
  <div class="app">
    <header class="app-header">
      <div class="navBar">
        <img
          src="https://fontmeme.com/permalink/210202/b945f0e9f64093815a159c180d95b46b.png"
          alt="polices-gothiques"
        />
        <h1>| Curriculum Vitae - Make Application Great Again</h1>
        <div class="btn_actions_footer">
          <div
            class="btn_actions_add"
            title="Ajouter la formation de la personne"
          >
            <router-link to="/createFormation">
              <i class="fa fa-times fa-lg faPave"></i>
            </router-link>
          </div>
          <div
            class="btn_actions_update"
            title="Modifier la formation de la personne"
          >
            <router-link to="/updateFormation">
              <i class="fa fa-edit fa-lg faPave"></i>
            </router-link>
          </div>
        </div>
      </div>
      <div class="navigation">
        <div class="nav_menu_crud">
          <nav class="navla">
            <ul class="nav">
              <li class="menu_prhpeofc"><a href="">Personne</a></li>
              <li class="menu_prhpeofc"><a href="#">Reseaux</a></li>
              <li class="menu_prhpeofc"><a href="#">Hobbies</a></li>
              <li class="menu_prhpeofc"><a href="#">Poste</a></li>
              <li class="menu_prhpeofc">
                <a href="#">Expériences Pro</a>
              </li>
              <li class="menu_prhpeofc"><a href="#">Outils</a></li>
              <li class="menu_prhpeofc"><a href="#">Formations</a></li>
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
                Supprimer les informations concernant la formation
              </h2>
              <div class="reseau">
                <form class="reseau_delete" action="#" method="post">
                  <div>
                    <input
                      type="checkbox"
                      id="delete"
                      name="deleteChoice1"
                      checked
                    />
                  </div>
                  <div>
                    <ul>
                      <li class="form">Année : XXXX</li>
                      <li class="form">Intitulé de la formation : Bac STAV</li>
                      <li class="form">
                        Nom de l'établissement : Lycée exemple
                      </li>
                      <li class="form">Ville : Paris</li>
                      <li class="form">Département : Ile de france</li>
                    </ul>
                  </div>
                </form>
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
                <div>
                  <input
                    class="favorite1 styled1"
                    type="button"
                    value="Annuler"
                  />
                  <input
                    class="favorite1 styled1"
                    type="button"
                    value="Supprimer la selection"
                  />
                </div>
                <div class="delete_popup_res">
                  <h2 class="delete_title">
                    Êtes-vous sur de vouloir supprimer la selection ?
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
