interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
    if('cargo' in usuario) {
        // redirecionar para a area de administração
    }
    // redirecionar para a area do usuario
}





// types
// interfaces

// interface IAnimal {
//     nome: string;
//     tipo: 'terrestre' | 'aquatico';
//     domestico: boolean
// }

// interface IFelinos extends IAnimal{
//     visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal{
//     porte: 'pequeno' | 'medio' | 'grande'
// }

// type IDomestico = ICanino | IFelinos

// const cachorro: IDomestico = {
//     nome: 'Rufus',
//     tipo: 'terrestre',
//     porte: 'medio',
//     domestico: true,
//     visaoNoturna: false
// }

// const animal: IAnimal = {
//     nome: 'Elefante',
//     tipo: 'terrestre',
//     domestico: false
// }

// const gato: IFelinos = {
//     nome: 'Chico',
//     tipo: 'terrestre',
//     visaoNoturna: true,
//     domestico: true
// }





// const input = document.getElementById('input') as HTMLInputElement;
// input.addEventListener('input', (event) => {
//     const i = event.currentTarget as HTMLInputElement;
//     console.log(i.value);
// });






// Generic types
// function preencherlista<NaoSei>(array: any[], value: NaoSei) {
//     return array.map(item => item + value);
// }


// preencherlista([1, 2, 3], 4);
