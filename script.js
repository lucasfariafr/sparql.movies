// création du graphe à barres
$(document).ready(function(){

    var data = {
        labels: ["Catégorie 1", "Catégorie 2", "Catégorie 3"], // noms des catégories
        datasets: [{
            label: 'Valeurs',
            data: [10, 20, 15], // valeurs correspondant aux catégories
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    };

    // créer le graphe à barres
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
