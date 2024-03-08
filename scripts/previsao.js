async function getPrevisao() {
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

    try{
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`)
        const data = await response.json();
        console.log(data);        
    }catch(error) {
        alert(error.message)
    }
}