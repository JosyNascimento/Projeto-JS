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


