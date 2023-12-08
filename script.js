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

function load(url, idElement) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(idElement).innerHTML = data;
    })
    .catch((error) => console.log("Erreur de chargement : ", error));
}
