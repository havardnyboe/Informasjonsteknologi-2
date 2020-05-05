const canvas = document.getElementById('myChart');
const ctx = canvas.getContext('2d');
let myChart

function getChart() {
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: partierNavn,
            datasets: [{
                label: 'Prosent (%) av stemmer',
                data: finnDifferanse(),
                backgroundColor: [
                    'rgba(255, 9, 3, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(75, 192, 122, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}