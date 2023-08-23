export default function signin(data){

    let url = 'http://localhost/trampaqui/controller/cadastrar.php'
    let options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    console.log(options,url)

    fetch(url, options)
    .then(response => response.json())
    .then(response =>{
        console.log(response);
    })
    .catch(error=>{
        console.error('Explodiu o negócio aqui: ',error)
    })

}