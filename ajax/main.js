// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('btn-find-cep').addEventListener('click', function() {
//         const xhttp = new XMLHttpRequest();
//         const cep = document.getElementById('cep').value;
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`;

//         xhttp.open('GET', endpoint);
//         xhttp.send()
//     })
    
// })

$(document).ready(function() {
    $("#cep").mask('00000-000')

    $('#btn-find-cep').click(function(e) {
        e.preventDefault();
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const button = $(this)
        $(button).find('i').addClass('d-none')
        $(button).find('span').removeClass('d-none')

        // $.ajax(endpoint).done(function(resp) {
        //     const logradouro = resp.logradouro;
        //     const bairro = resp.bairro;
        //     const city = resp.localidade;
        //     const estado = resp.uf;
        //     const address = `${logradouro}, ${bairro} - ${city} - ${estado}`;
        //     $('#address').val(address)

        //     setTimeout(function() {
        //         $(button).find('i').removeClass('d-none')
        //         $(button).find('span').addClass('d-none')
        //     },1000)
        // })

        fetch(endpoint)
        .then(function(resp) {
            return resp.json()
        })
        .then((json) => {
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const city = json.localidade;
            const estado = json.uf;
            const address = `${logradouro}, ${bairro} - ${city} - ${estado}`;
            $('#address').val(address)  
        })
        .catch(function(error) {
            alert("ocorreu um erro tente novamete mais tarde.")
        })
        .finally(function() {
            setTimeout(function() {
                $(button).find('i').removeClass('d-none');
                $(button).find('span').addClass('d-none');
            },1000);
        })
    })

    $('#form-pedido').submit(function(e) {
        e.preventDefault();
        
        
        if ($('#name').val().length === 0) {
            throw new Error('Digite o nome');
        }
    })
})