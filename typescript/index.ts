
// types
// interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    domestico: boolean
}

interface IFelinos extends IAnimal{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande'
}

type IDomestico = ICanino | IFelinos

const cachorro: IDomestico = {
    nome: 'Rufus',
    tipo: 'terrestre',
    porte: 'medio',
    domestico: true,
    visaoNoturna: false
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    domestico: false
}

const gato: IFelinos = {
    nome: 'Chico',
    tipo: 'terrestre',
    visaoNoturna: true,
    domestico: true
}
