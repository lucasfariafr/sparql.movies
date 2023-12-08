function createStick() {
  const data = {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai"],
    datasets: [
      {
        label: "Ventes mensuelles",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: [20, 35, 40, 25, 30],
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  const ctx = document.getElementById("barChart").getContext("2d");
  const myChart = new Chart(ctx, config);
}

function loadContent(url, containerId) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erreur de chargement du fichier ${url}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(containerId).innerHTML = data;
    })
    .catch(error => {
      console.error(error);
    });
}

window.onload = function () {
  loadContent('/view/header.html', 'headerContainer');
  loadContent('/view/navbar.html', 'navbarContainer');
  loadContent('/view/footer.html', 'footerContainer');
  createStick();
};