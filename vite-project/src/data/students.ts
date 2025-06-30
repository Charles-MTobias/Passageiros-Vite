export type Passageiro = {
  aluno: string;
  sala: number;
  veio: boolean;
  id: number
};

export type Props={
        id:number,
        checked: boolean,
        linha: string,
        motorista: string,
        placa?: string,
        passageiro:Passageiro[]
}

export const Students:Props[] =[
    {
        id:1,
        checked: false,
        linha: 'Alexandria',
        motorista: 'Reginaldo',
        placa: '',
        passageiro:[
            {aluno: 'Eduarda', sala: 4, veio:false, id:1},
            {aluno: 'Helen', sala: 7, veio:false, id:2 },
            {aluno: 'Jasmin Olmido', sala: 7, veio:false, id:3 },
            {aluno: 'Kelvin', sala: 8, veio:false, id:45 },
        ]
    },
    {
        id:2,
        checked: false,
        linha: 'Novo Horizonte',
        motorista: 'graxa - Dailzo',
        placa: '00M7J91',
        passageiro:[
            {aluno: 'Valdwelmisson', sala: 9, veio:false, id:4},
            {aluno: 'Davi', sala: 7, veio:false, id:5 },
        ]
    },
    {
        id:3,
        checked: false,
        linha: 'Sertao Aldeia Amambai',
        motorista: 'Teodoro',
        placa: '000790',
        passageiro:[
            {aluno: 'Jesuelisson', sala: 6, veio:false, id:6},
            {aluno: 'Sueng Monik', sala: 1, veio:false, id:7 },
        ]
    },
    {
        id:4,
        checked: false,
        linha: 'Piquinique',
        motorista: 'Lourenço',
        placa: 'KVO-1399',
        passageiro:[
            {aluno: 'Laura', sala: 9, veio:false, id:8},
            {aluno: 'Gabriela', sala: 9, veio:false, id:9 },
            {aluno: 'Amanda', sala: 6, veio:false, id:10 },
            {aluno: 'Lorena', sala: 4, veio:false, id:11 },
            {aluno: 'Guilierme (dorival)', sala: 1, veio:false, id:12 },
            {aluno: 'Gustavo', sala: 6, veio:false, id:13 },
            {aluno: 'Maria Clara', sala: 8, veio:false, id:14 },
            {aluno: 'Gustavo', sala: 1, veio:false, id:15 },
        ]
    },
    {
        id:5,
        checked: false,
        linha: 'Sertaozinho',
        motorista: 'Rogério',
        placa: 'RWD-5A33',
        passageiro:[
            {aluno: 'Weldel', sala: 1, veio:false, id:16},
            {aluno: 'Ana Vitória', sala: 6, veio:false, id:17 },
            {aluno: 'Ana Heloisa', sala: 6, veio:false, id:18 },
            {aluno: 'Isaak', sala: 4, veio:false, id:19 },
            {aluno: 'Débora', sala: 4, veio:false, id:20 },
            {aluno: 'Anthony', sala: 4, veio:false, id:21 },
            {aluno: 'Alan', sala: 2, veio:false, id:22 },
            {aluno: 'Emanuelly', sala: 8, veio:false, id:23 },
            {aluno: 'Arthur', sala: 4, veio:false, id:24 },
            {aluno: 'Lizabeth', sala: 2, veio:false, id:25 },
            {aluno: 'Micheila', sala: 7, veio:false, id:26 },
            {aluno: 'Mariane', sala: 7, veio:false, id:27 },
        ]
    },
    {
        id:6,
        checked: false,
        linha: 'Caarapó',	
        motorista: 'José Pereira',
        placa: 'ARLOE81',
        passageiro:[
            {aluno: 'Luara', sala: 6, veio:false, id:28},
        ]
    },
    {
        id:7,
        checked: false,
        linha: 'Curussumba',
        motorista: 'Anivaldo',
        placa: 'DAJ-8694',
        passageiro:[
            {aluno: 'Yasmin', sala: 2, veio:false, id:29},
            {aluno: 'Vicente', sala: 8, veio:false, id:30 },
            {aluno: 'Gabriel', sala: 9, veio:false, id:31 },
        ]
    },
    {
        id:8,
        checked: false,
        linha: 'Cascata',
        motorista: 'Silvio',
        placa: 'NRL-8818',
        passageiro:[
            {aluno: 'João Pedro', sala: 4, veio:false, id:32},
            {aluno: 'Quemiula', sala: 4, veio:false, id:33 },
            {aluno: 'Reinaldo', sala: 7, veio:false, id:34 },
            {aluno: 'Gabriel', sala: 7, veio:false, id:46 },
        ]
    },
    {
        id:9,
        checked: false,
        linha: 'Madama',
        motorista: 'João',
        placa: '',
        passageiro:[
            {aluno: 'Richarles', sala: 4, veio:false, id:35},

        ]
    },
    {
        id:10,
        checked: false,
        linha: 'Nova Esperança',
        motorista: 'Paulo',
        placa: 'ARL-0B94',
        passageiro:[
            {aluno: 'Eloa', sala: 1, veio:false, id:36},
            {aluno: 'Lorena', sala: 4, veio:false, id:37 },
        ]
    },
    {
        id:11,
        checked: false,
        linha: 'Bom Jardim',
        motorista: 'Andrei',
        placa: '',
        passageiro:[
            {aluno: 'Kaleb', sala: 4, veio:false, id:38},
            {aluno: 'Bryan', sala: 4, veio:false, id:39 },
        ]
    },
    {
        id:12,
        checked: false,
        linha: 'Limão Verde',
        motorista: 'Jorge',
        placa: '',
        passageiro:[
            {aluno: 'Haniel', sala: 4, veio:false, id:40},
        ]
    },
    {
        id:13,
        checked: false,
        linha: 'Estrela',
        motorista: 'Luiz Antônio',
        placa: 'HOR-5759',
        passageiro:[
            {aluno: 'David Arthur', sala: 2, veio:false, id:41},
        ]
    },
    {
        id:14,
        checked: false,
        linha: 'Hipica',
        motorista: '',
        placa: '',
        passageiro:[
            {aluno: 'Adrian Fernando', sala: 1, veio:false, id:42},
        ]
    },
    {
        id:15,
        checked: false,
        linha: 'Primavera',
        motorista: 'Marcelo',
        placa: '',
        passageiro:[
            {aluno: 'Ana Gabriely', sala: 9, veio:false, id:43},
        ]
    },
    {
        id:16,
        checked: false,
        linha: 'Flecha',
        motorista: 'Marcio',
        placa: 'ARS8-A46',
        passageiro:[
            {aluno: 'Nicole', sala: 9, veio:false, id:44},
            {aluno: 'João  Miguel', sala: 6, veio:false, id:45 },
        ]
    },
]

// 47