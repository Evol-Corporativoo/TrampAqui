export default function signin(data){

    let url = 'http://localhost/trampaqui/controller/ControllerUsuario.php'
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(url, options)
    .then(response => response.json())
    .then(response =>{
        return response;
    })
    .catch(error=>{
        console.error('Explodiu o negócio aqui: ',error)
    })

}