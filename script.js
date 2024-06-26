// script.js


document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchQuery = document.getElementById('search').value.toLowerCase();
    filterProperties(searchQuery);
});

const properties = [
    {
        id: 1,
        title: 'Casa moderna no centro',
        location: 'Rio de Janeiro, RJ',
        price: 'R$ 750.000,00',
        image: 'https://imgs.search.brave.com/g3JR15toxKEuAaocxuM9oExCtsxHQTZLjY8Hvrw1KVM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I3LzUy/L2YwL2I3NTJmMDAy/MzA0MzEyNDIzZDkx/MzZhM2E1ZWM4ZjMz/LmpwZw'
    },
    {
        id: 2,
        title: 'Apartamento com vista para o mar',
        location: 'Rio de Janeiro, RJ',
        price: 'R$ 1.200.000,00',
        image: 'https://imgs.search.brave.com/EIzP0RUI8RzF-MXhkI00M0Z5E1Sb1RADEE_-AwiR3p8/rs:fit:500:0:0/g:ce/aHR0cDovL2ltYWdl/cy5hcnF1aWRpY2Fz/LmNvbS5ici93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNS8wMi8x/MTE5MDMzMC9jYXNh/LWhpZ2gtdGVjaC5q/cGc'
    },
    {
        id: 3,
        title: 'Chácara espaçosa',
        location: 'Araruama, RJ',
        price: 'R$ 650.000,00',
        image: 'https://imgs.search.brave.com/l5mL-9DB-KvZsaNwLdmHVQrGE_GUQrytNZ1ePZY42PE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aXByb2pldGVpLmNv/bS5ici91cGxvYWQv/MTMyNy84MjN4NDYz/LW1pbmlhdHVyYS5q/cGc'
    },

    {
        id: 4,
        title: 'Casa moderna no Grajaú',
        location: 'Rio de Janeiro, Rj',
        price: 'R$ 850.000,00',
        image: 'https://imgs.search.brave.com/mV7xGsj8Urw3J1r8Sf6-b7o5GsIaKQZUo6mz0M8TGI8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jb25z/dHJ1aW5kb2RlY29y/LmNvbS5ici93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNy8wOC9j/YXNhLWFtZXJpY2Fu/YS5qcGc'
    },
    {
        id: 5,
        title: 'Apartamento com vista para o mar',
        location: 'Rio de Janeiro, Barra da Tijuca RJ',
        price: 'R$ 1.200.000,00',
        image: 'https://imgs.search.brave.com/p04EGGctu0s4SsbzG8nUtZzwJ3GXv6ZLHRnSXpA76Es/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jb25z/dHJ1aW5kb2RlY29y/LmNvbS5ici93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxMi8xMi90/ZW5kZW5jaWEtZGUt/ZGVjb3JhY2FvLWRl/LWFwYXJ0YW1ldG5v/LmpwZw'
    },
];

function displayProperties(properties) {
    const propertiesList = document.getElementById('propertiesList');
    propertiesList.innerHTML = '';

    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.classList.add('property-card');

        propertyCard.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <div class="details">
                <h3>${property.title}</h3>
                <p>${property.location}</p>
                <p>${property.price}</p>
            </div>
        `;

        propertiesList.appendChild(propertyCard);
    });
}

function filterProperties(query) {
    const filteredProperties = properties.filter(property => 
        property.title.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query)
    );
    displayProperties(filteredProperties);
}

document.addEventListener('DOMContentLoaded', () => {
    displayProperties(properties);
});


//simulador
function financiamentoImovel() {
    let valorImovel = 560000;
      let numParcelas = 120;
      let juros = 0.015; // 1,5% ao mês
      let saldoDevedor = valorImovel;
      let parcelas = [];
      let meses = [];

      for (let i = 1; i <= numParcelas; i++) {
        let parcela = (saldoDevedor * juros) + (saldoDevedor / numParcelas);
        parcelas.push(parcela.toFixed(2));
        meses.push(i);
        saldoDevedor -= parcela;
      }

      let tableBody = document.getElementById("table-body");
      for (let i = 0; i < parcelas.length; i++) {
        let row = document.createElement("tr");
        row.innerHTML = `
          <td>${meses[i]}</td>
          <td>R$ ${parcelas[i]}</td>
          <td>R$ ${((saldoDevedor * juros).toFixed(2))}</td>
          <td>R$ ${((saldoDevedor - parcelas[i]).toFixed(2))}</td>
          <td>R$ ${saldoDevedor.toFixed(2)}</td>`;
        tableBody.appendChild(row);
      }

      }
      
  financiamentoImovel();

  //simulador
  

  function calcularFinanciamento() {
    // Obtendo os valores de entrada do formulário
    const valorImovel = parseFloat(document.getElementById('valor-imovel').value);
    const valorEntrada = parseFloat(document.getElementById('valor-entrada').value);
    const taxaJurosAnual = parseFloat(document.getElementById('taxa-juros').value) / 100;
    const numeroParcelas = parseInt(document.getElementById('numero-parcelas').value);

    // Validações básicas dos valores de entrada
    if (isNaN(valorImovel) || isNaN(valorEntrada) || isNaN(taxaJurosAnual) || isNaN(numeroParcelas)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    if (valorEntrada >= valorImovel) {
        alert('O valor da entrada deve ser menor que o valor do imóvel.');
        return;
    }

    if (taxaJurosAnual <= 0 || numeroParcelas <= 0) {
        alert('A taxa de juros e o número de parcelas devem ser valores positivos.');
        return;
    }

    // Calculando o valor financiado
    const valorFinanciado = valorImovel - valorEntrada;

    // Convertendo a taxa de juros anual para taxa de juros mensal
    const taxaJurosMensal = Math.pow(1 + taxaJurosAnual, 1 / 12) - 1;

    // Fórmula para cálculo da prestação mensal (sistema de amortização Price)
    const prestacaoMensal = (valorFinanciado * taxaJurosMensal) / (1 - Math.pow(1 + taxaJurosMensal, -numeroParcelas));

    // Inicializando variáveis para o cálculo mês a mês
    let saldoDevedor = valorFinanciado;
    let detalhesPrestacoes = [];

    for (let i = 1; i <= numeroParcelas; i++) {
        const juros = saldoDevedor * taxaJurosMensal;
        const amortizacao = prestacaoMensal - juros;
        saldoDevedor -= amortizacao;

        detalhesPrestacoes.push({
            mes: i,
            prestacao: prestacaoMensal,
            juros: juros,
            amortizacao: amortizacao,
            saldoDevedor: saldoDevedor
        });
    }

    // Exibindo o resultado na página
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p><strong>Valor Financiado:</strong> R$ ${valorFinanciado.toFixed(2)}</p>
        <p><strong>Taxa de Juros Mensal:</strong> ${(taxaJurosMensal * 100).toFixed(2)}%</p>
        <p><strong>Número de Parcelas:</strong> ${numeroParcelas}</p>
        <p><strong>Valor da Prestação Mensal:</strong> R$ ${prestacaoMensal.toFixed(2)}</p>
        <h2>Detalhes das Prestações</h2>
        <table>
            <thead>
                <tr>
                    <th>Mês</th>
                    <th>Prestação (R$)</th>
                    <th>Juros (R$)</th>
                    <th>Amortização (R$)</th>
                    <th>Saldo Devedor (R$)</th>
                </tr>
            </thead>
            <tbody>
                ${detalhesPrestacoes.map(prestacao => `
                    <tr>
                        <td>${prestacao.mes}</td>
                        <td>${prestacao.prestacao.toFixed(2)}</td>
                        <td>${prestacao.juros.toFixed(2)}</td>
                        <td>${prestacao.amortizacao.toFixed(2)}</td>
                        <td>${prestacao.saldoDevedor.toFixed(2)}</td>
                    </tr>
                    
                `).join('')}
            </tbody>
        </table>
    `;
}



// Adicionando um listener para o botão de calcular para melhorar a organização do código
document.getElementById('simulador-form').addEventListener('submit', function(event) {
    event.preventDefault();
    calcularFinanciamento();
});


