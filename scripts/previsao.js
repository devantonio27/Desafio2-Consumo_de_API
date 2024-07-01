async function getPrevisao() {
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`);
        
        if (!response.ok) {
            throw new Error('Erro ao buscar previsão do tempo');
        }

        const data = await response.json();
        console.log(data);

        // Aqui você pode manipular os dados e atualizar a interface conforme necessário
        const temperaturaAtual = data.hourly.temperature_2m[0];
        console.log(temperaturaAtual) // Exemplo de como acessar a temperatura atual
        
        // Atualizar elemento HTML com a temperatura
        document.getElementById('tempLocal').innerText = `Previsão do tempo de acordo com a região: ${temperaturaAtual} °C`;

    } catch (error) {
        console.error('Erro na requisição:', error);
        // Tratar erro e informar ao usuário, se necessário
    }
}