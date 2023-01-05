const ctx = document.getElementById('myChart')

Chart.defaults.font.size = 14;
Chart.defaults.borderColor = '#FFFFFF'
Chart.defaults.color = '#FFFFFF';

Chart.defaults.plugins.legend.position = 'bottom'

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['21', '00', '03', '06', '09', '12', '15', '18'],
        datasets: [{
            label: '高溫(°C)',
            borderColor: 'rgb(255, 172, 28)',
            pointBackgroundColor: 'rgb(255, 172, 28)',
            backgroundColor: 'rgb(255, 172, 28)',
            borderWidth: 2,
            data: [19, 19, 20, 21, 22, 26, 24, 23],
            tension: 0.4
        },
        {
            label: '低溫(°C)',
            borderColor: 'rgb(52, 152, 219 )',
            pointBackgroundColor: 'rgb(52, 152, 219 )',
            backgroundColor: 'rgb(52, 152, 219 )',
            borderWidth: 2,
            data: [13, 14, 15, 17, 16, 15, 13, 2],
            tension: 0.4
        }]
    },
    options: {
        layout: {
            padding: 50
        }
    }
});