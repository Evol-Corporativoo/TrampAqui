export default function numberFormat(id){

    let i = String(id)
    while(i.length<4){
        i = '0'+i
    }
    return i
    
}