// Exemplo de interação com o formulário
document.getElementById('filtro-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const atividade = document.getElementById('atividade').value;
    const distrito = document.getElementById('distrito').value;
    const dimensao = document.getElementById('dimensao').value;
  
    // Simulação de envio de dados
    alert(`Amostra solicitada para: Atividade - ${atividade}, Distrito - ${distrito}, Dimensão - ${dimensao}`);
  });