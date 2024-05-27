function confirmPresence() {
    var confirmationMsg = document.getElementById('confirmationMsg');
    confirmationMsg.classList.add('show');

    // Salvando informações no localStorage
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var endereco = document.getElementById('endereco').value;

    var formData = {
        nome: nome,
        telefone: telefone,
        endereco: endereco
    };

    localStorage.setItem('formData', JSON.stringify(formData));
}
