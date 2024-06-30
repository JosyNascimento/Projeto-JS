


document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
  
    // Objeto para armazenar os dados do contato
    let contact = {
      nome: document.getElementById('nome').value,
      telefone: document.getElementById('telefone').value,
      cidade: document.getElementById('cidade').value,
      preco: document.getElementById('preco').value  
    };
  
    // Adiciona o contato na tabela
    addContactToTable(contact);
  
    // Limpa o formulário
    document.getElementById('contactForm').reset();
  });
  
  // Arrow function para adicionar contato na tabela
  const addContactToTable = (contact) => {
    let table = document.getElementById('contactList');
    let row = table.insertRow();
    row.insertCell(0).innerText = contact.nome;
    row.insertCell(1).innerText = contact.telefone;
    row.insertCell(2).innerText = contact.cidade;
    row.insertCell(3).innerText = contact.preco;
  };
  