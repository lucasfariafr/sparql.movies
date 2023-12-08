// Données factices pour le graphique
const data = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
    datasets: [
      {
        label: 'Ventes mensuelles',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        data: [20, 35, 40, 25, 30],
      },
    ],
  };
  
  // Configuration du graphique
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  
  // Récupération du contexte du canevas
  const ctx = document.getElementById('barChart').getContext('2d');
  
  // Création du graphique à barres
  const myChart = new Chart(ctx, config);

  $(document).ready(function () {
    // Charge la barre de navigation
    $("#navbar-container").load("view/navbar.html");
  
    // Charge le pied de page
    $("#footer-container").load("view/footer.html");
  });