document.addEventListener('DOMContentLoaded', () => {
    // Função para adicionar avisos
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

    // Função para fazer reservas
    const reserveButton = document.getElementById('reserve');

    reserveButton?.addEventListener('click', () => {
        const area = document.getElementById('area').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        if (area && date && time) {
            alert(`Reserva feita para ${area} no dia ${date} às ${time}.`);
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });

    // Função para adicionar moradores (apenas exemplo, expandir conforme necessário)
    const addMoradorButton = document.getElementById('addMorador');
    const moradoresContainer = document.getElementById('moradoresContainer');

    addMoradorButton?.addEventListener('click', () => {
        const nome = prompt("Digite o nome do morador:");
        if (nome) {
            const moradorElement = document.createElement('div');
            moradorElement.classList.add('morador-card');
            moradorElement.textContent = nome;
            moradoresContainer.appendChild(moradorElement);
        }
    });
});
