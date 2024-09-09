const recintosExistentes = [
  {
    numero: 1,
    tipo: 'savana',
    total: 10,
    livre: 7,
    animais: ['MACACO'],
    animaisPossiveis: ['MACACO', 'GAZELA', 'HIPOPOTAMO'],
  },
  {
    numero: 2,
    tipo: 'floresta',
    total: 5,
    livre: 5,
    animais: [],
    animaisPossiveis: ['MACACO'],
  },
  {
    numero: 3,
    tipo: 'savana e rio',
    total: 7,
    livre: 5,
    animais: ['GAZELA'],
    animaisPossiveis: ['GAZELA', 'MACACO', 'HIPOPOTAMO'],
  },
  {
    numero: 4,
    tipo: 'rio',
    total: 8,
    livre: 8,
    animais: [],
    animaisPossiveis: ['CROCODILO', 'HIPOPOTAMO'],
  },
  {
    numero: 5,
    tipo: 'savana',
    total: 9,
    livre: 6,
    animais: ['LEAO'],
    animaisPossiveis: ['LEAO'],
  },
];

export default recintosExistentes;
