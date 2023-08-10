export default function realFormat(dinheiro){

    let valorFormatado = dinheiro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorFormatado

}