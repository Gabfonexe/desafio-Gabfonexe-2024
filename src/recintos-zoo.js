import animaisValidos from './animaisValidos.js';
import recintosExistentes from './recintosExistentes.js';
import tamanhoAnimais from './tamanhoAnimais.js';

class RecintosZoo {
  analisaRecintos(animal, quantidade) {
    if (!this.isAnimalValido(animal, animaisValidos)) {
      return { erro: 'Animal inválido' };
    }

    if (!this.isQuantidadeValida(quantidade)) {
      return { erro: 'Quantidade inválida' };
    }

    let animalUppercase = animal.toUpperCase();

    let resposta = this.adicionarAnimal(
      animalUppercase,
      quantidade,
      recintosExistentes,
    );

    return resposta;
  }

  isAnimalValido(animal, validAnimals) {
    if (animal == null || typeof animal != 'string') {
      return false;
    }

    return validAnimals.includes(animal.toUpperCase());
  }

  isQuantidadeValida(quantidade) {
    if (quantidade === 0 || typeof quantidade != 'number') {
      return false;
    }

    return true;
  }

  adicionarAnimal(animal, quantidade, recintosExistentes) {
    let response = {
      recintosViaveis: [],
    };

    recintosExistentes.forEach((recinto) => {
      let recintoAtual = recinto;

      if (
        this.podeAdicionarAnimalNoRecinto(
          animal,
          quantidade,
          recintoAtual,
          tamanhoAnimais[animal],
        )
      ) {
        let espacoLivre = this.calcularEspacoLivre(
          animal,
          quantidade,
          recintoAtual,
          tamanhoAnimais[animal],
        );

        let recinto = `Recinto ${recintoAtual.numero} (espaço livre: ${espacoLivre} total: ${recintoAtual.total})`;

        response.recintosViaveis.push(recinto);
      }
    });

    if (response.recintosViaveis.length >= 1) {
      return response;
    }

    return { erro: 'Não há recinto viável' };
  }

  podeAdicionarAnimalNoRecinto(animal, quantidade, recinto, tamanhoAnimal) {
    if (!recinto.animaisPossiveis.includes(animal)) {
      return false;
    }

    if (this.animalCabeNoRecinto(animal, quantidade, recinto, tamanhoAnimal)) {
      return false;
    }

    return true;
  }

  animalCabeNoRecinto(animal, quantidade, recinto, tamanhoAnimal) {
    if (recinto.animais.includes(animal) || recinto.animais.length === 0) {
      return recinto.livre < tamanhoAnimal * quantidade;
    } else {
      return recinto.livre - 1 < tamanhoAnimal * quantidade;
    }
  }

  calcularEspacoLivre(animal, quantidade, recinto, tamanhoAnimal) {
    if (recinto.animais.includes(animal) || recinto.animais.length === 0) {
      return recinto.livre - tamanhoAnimal * quantidade;
    } else {
      let novoEspacoLivre = recinto.livre - 1;
      return novoEspacoLivre - tamanhoAnimal * quantidade;
    }
  }
}

export { RecintosZoo as RecintosZoo };
