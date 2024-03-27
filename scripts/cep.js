async function getAddressByCep() {
  const cep = document.getElementById('cep').value;
  try{
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    console.log(data);
    document.getElementById('rua').innerHTML = data.logradouro;
    document.getElementById('bairro').innerHTML = data.bairro;
    document.getElementById('cidade').innerHTML = data.localidade;
  } catch (error) {
    alert(error.message);
  }
}
