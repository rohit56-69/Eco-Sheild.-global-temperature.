 const ctx = document.getElementById('temChart').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2000', '2005', '2010', '2015', '2020', '2025'],
            datasets: [{
                label: 'Temperature Rise',
                data: [0.2, 0.4, 0.6, 0.9, 1.2, 1.5],
                borderColor: 'orange',
                backgroundColor: 'rgba(255,165,0,0.2)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointRadius: 5,
                pointHoverRadius: 8
        
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    enabled: true
                },
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'white'
                    }
                },
                y: {
                    ticks: {
                        color: 'white'
                    }
                }
            }
        }
    });