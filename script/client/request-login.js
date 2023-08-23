export default function login(data){

    let url = 'http://localhost/trampaqui/controller/login.php'
    let options = {
        method: 'POST',
        mode: 'no-cors',
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