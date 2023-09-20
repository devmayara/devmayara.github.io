
async function fetchCertificados(origem, containerId) {
    const response = await fetch('https://api.sheety.co/10a45f76a1e7e57d0e6db8c4159c3a1d/developerApi/certificados');
    const data = await response.json();

    // Filtrar os certificados com a origem especificada
    const certificados = data.certificados.filter(certificado => certificado.origem === origem);

    const certificadosContainer = document.getElementById(containerId);

    let currentIndex = 0;

    while (currentIndex < certificados.length) {
        const divCertificadosContent = document.createElement('div');
        divCertificadosContent.classList.add('certificados__content', 'grid', 'swiper-slide');

        for (let i = 0; i < 2; i++) {
            if (currentIndex < certificados.length) {
                const divCertificadosData = document.createElement('div');
                divCertificadosData.classList.add('certificados__data');

                const imgCertificado1 = document.createElement('img');
                imgCertificado1.src = certificados[currentIndex].img;
                imgCertificado1.alt = '';
                imgCertificado1.classList.add('certificados__img');

                currentIndex++;

                let imgCertificado2 = null;
                if (currentIndex < certificados.length) {
                    imgCertificado2 = document.createElement('img');
                    imgCertificado2.src = certificados[currentIndex].img;
                    imgCertificado2.alt = '';
                    imgCertificado2.classList.add('certificados__img');

                    currentIndex++;
                }

                divCertificadosData.appendChild(imgCertificado1);
                if (imgCertificado2) {
                    divCertificadosData.appendChild(imgCertificado2);
                }
                divCertificadosContent.appendChild(divCertificadosData);
            }
        }

        certificadosContainer.appendChild(divCertificadosContent);
    }
}

// Listar os certificados para 'fsphp'
fetchCertificados('fsphp', 'certificados-fsphp');

// Listar os certificados para 'b7web'
fetchCertificados('b7web', 'certificados-b7web');

// Listar os certificados para 'dio'
fetchCertificados('dio', 'certificados-dio');
