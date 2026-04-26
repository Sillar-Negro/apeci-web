document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('productionChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Dic', 'Ene', 'Feb', 'Mar', 'Abr'],
            datasets: [{
                label: 'Toneladas Métricas (TM)',
                data: [125, 125, 125, 125, 125], // Datos de producción mensual [cite: 11]
                backgroundColor: '#85a947',
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true, title: { display: true, text: 'TM' } }
            }
        }
    });
});