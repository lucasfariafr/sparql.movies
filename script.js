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

function createPieChart() {
  const data = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
      {
        label: "Exemple de Camembert",
        data: [20, 15, 25, 10, 30],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "pie",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  };

  const ctx = document.getElementById("pieChart").getContext("2d");
  new Chart(ctx, config);
}

function loadContent(url, containerId) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erreur de chargement du fichier ${url}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById(containerId).innerHTML = data;
    })
    .catch((error) => {
      console.error(error);
    });
}
