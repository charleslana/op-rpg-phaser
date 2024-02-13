import { characterAokiji, characterPirate } from '../data/charactersAnimation';
import { ICharacterAnimation } from '../interface/ICharacterAnimation';

export function getCharacterAnimation(characterId: number): ICharacterAnimation {
  switch (characterId) {
    case 1:
      return characterAokiji;
    case 2:
      return characterPirate;
    default:
      return characterAokiji;
  }
}
