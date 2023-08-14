// Obtém referências aos elementos do formulário
const form = document.getElementById('form-numbers');
const numeroMenorInput = document.getElementById('numero-menor');
const numeroMaiorInput = document.getElementById('numero-maior');

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Converte os valores dos campos de entrada em números
    const numeroMenor = parseFloat(numeroMenorInput.value);
    const numeroMaior = parseFloat(numeroMaiorInput.value);

    // Verifica se o número à direita é maior que o número à esquerda
    if (numeroMaior > numeroMenor) {
        alert('Formulário válido: O número à direita é maior que o número à esquerda.');
    } else {
        alert('Formulário inválido: O número à direita deve ser maior que o número à esquerda.');
    }

    // Reseta o formulário
    form.reset();
});
