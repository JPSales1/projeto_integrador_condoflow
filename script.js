document.addEventListener('DOMContentLoaded', () => {
    const addAvisoButton = document.getElementById('addAviso');
    const avisosContainer = document.getElementById('avisosContainer');

    addAvisoButton?.addEventListener('click', () => {
        const aviso = prompt("Digite o conteúdo do novo aviso:");
        if (aviso) {
            const avisoElement = document.createElement('div');
            avisoElement.classList.add('aviso-card');
            avisoElement.textContent = aviso;
            avisosContainer.appendChild(avisoElement);
        }
    });
});

function mostrarDetalhes(nome) {
    const detalhes = {
        "Augusto Gabriel Rodrigues dos Santos": {
            unidade: "Bloco C, Apt 305",
            veiculo: "Moto - XYZ-5678",
            cpf: "555.555.555-00",
            email: "carlos@example.com",
            telefone: "(33) 5555-5555",
            engajamento: "Inativo"
        },
        // Adicione outros moradores aqui se necessário
    };

    const registroDetalhes = document.getElementById('registroDetalhes');
    const morador = detalhes[nome];

    registroDetalhes.innerHTML = `
        <h2>${nome}</h2>
        <p>Unidade: ${morador.unidade}</p>
        <p>Veículo: ${morador.veiculo}</p>
        <p>CPF: ${morador.cpf}</p>
        <p>Email: ${morador.email}</p>
        <p>Telefone: ${morador.telefone}</p>
        <p>Engajamento: ${morador.engajamento}</p>
        <button>Adicionar Veículo</button>
    `;
}