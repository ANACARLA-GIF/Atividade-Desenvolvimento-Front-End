document.getElementById('buscar').addEventListener('click', function() {
    const cep = document.getElementById('cep').value;
    const resultadoDiv = document.getElementById('resultado');

    fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('CEP não encontrado');
            }
            return response.json();
        })
        .then(data => {
            resultadoDiv.innerHTML = `
                <h3>Resultado:</h3>
                <p>Logradouro: ${data.street}</p>
                <p>Bairro: ${data.neighborhood}</p>
                <p>Cidade: ${data.city}</p>
                <p>Estado: ${data.state}</p>
            `;
        })
        .catch(error => {
            resultadoDiv.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
        });
});