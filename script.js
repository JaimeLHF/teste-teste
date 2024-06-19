const form_acabamento = document.getElementById('form_acabamento');
const btn_submit = document.getElementById('btn_submit');
const acabamento = document.getElementById('acabamento');

form_acabamento.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = acabamento.value;

    try {
        const response = await fetch('https://api.drd.app.br/api/acabamento/new', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome: nome }),
        });

        const text = await response.text();
        try {
            const data = JSON.parse(text);
            if (response.ok) {
                console.log('Sucesso:', data);
            } else {
                console.error('Erro:', data);
            }
        } catch (error) {
            console.error('Resposta não é JSON:', text);
        }
    } catch (error) {
        console.error('Erro:', error);
    }
});
