const cadastro = [
    {
        nome: "Miqueias",
        email: "miqueias.sc@hotmail.com"
    },
    {
        nome: "Pedro",
        email: "pedro@hotmail.com"
    }
]

const assinantes = [];

export const listaCadastros = () => cadastro;

export const assinar = (funcao) =>{
    assinantes.push(funcao);
}

export const desassinar = (funcao) => {
    let index = assinantes.indexOf(funcao);
    assinantes.splice(index, 1);
}

export const  cadastrar = (dado) => {
    cadastro.push(dado);   
    notificar();
}

const notificar = () => {
    assinantes.forEach(a => {
        a(cadastro)
    })
}