
async function fetchCertificadosPorOrigem(origem, containerId) {
    const certificados = await fetchCertificados();
    const certificadosFiltrados = certificados.filter(certificado => certificado.origem === origem);
    exibirCertificados(certificadosFiltrados, containerId, 3);
}

async function fetchUltimosCertificados(numCertificados, containerId) {
    const certificados = await fetchCertificados();
    const certificadosOrdenados = certificados.sort((a, b) => b.id - a.id).slice(0, numCertificados);
    exibirCertificados(certificadosOrdenados, containerId, 3);
}

async function fetchCertificados() {
    const response = await fetch('https://api.sheety.co/10a45f76a1e7e57d0e6db8c4159c3a1d/developerApi/certificados');
    const data = await response.json();
    return data.certificados;
}

function exibirCertificados(certificados, containerId, itemsPorBloco) {
    const certificadosContainer = document.getElementById(containerId);

    for (let i = 0; i < certificados.length; i += itemsPorBloco) {
        const divCertificadosContent = document.createElement('div');
        divCertificadosContent.classList.add('certificados__content', 'grid');

        for (let j = i; j < i + itemsPorBloco && j < certificados.length; j++) {
            const imgCertificado = document.createElement('img');
            imgCertificado.src = certificados[j].img;
            imgCertificado.alt = '';
            imgCertificado.classList.add('certificados__img');

            const divCertificadosData = document.createElement('div');
            divCertificadosData.classList.add('certificados__data');
            divCertificadosData.appendChild(imgCertificado);

            if (j + 1 < certificados.length) {
                const imgCertificado2 = document.createElement('img');
                imgCertificado2.src = certificados[j + 1].img;
                imgCertificado2.alt = '';
                imgCertificado2.classList.add('certificados__img');
                divCertificadosData.appendChild(imgCertificado2);
            }

            if (j + 2 < certificados.length) {
                const imgCertificado3 = document.createElement('img');
                imgCertificado3.src = certificados[j + 2].img;
                imgCertificado3.alt = '';
                imgCertificado3.classList.add('certificados__img');
                divCertificadosData.appendChild(imgCertificado3);
            }

            divCertificadosContent.appendChild(divCertificadosData);
            j += 2;
        }

        // Adiciona o conteúdo completo ao contêiner principal
        certificadosContainer.appendChild(divCertificadosContent);
    }
}

// Listar os certificados para 'fsphp'
fetchCertificadosPorOrigem('fsphp', 'certificados-fsphp');

// Listar os certificados para 'b7web'
fetchCertificadosPorOrigem('b7web', 'certificados-b7web');

// Listar os certificados para 'dio'
fetchCertificadosPorOrigem('dio', 'certificados-dio');

// Listar os 8 últimos certificados independentemente da origem
fetchUltimosCertificados(8, 'certificados-atuais');
