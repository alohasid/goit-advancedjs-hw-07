// Definition of ICharacter interface
interface ICharacter {
  name: string;
  level: number;
  introduce(phrase: string): void;
  levelUp(): void;
}

// Definition of ISpellCaster interface
interface ISpellCaster {
  castSpell(): void;
}

// Implementation of Wizard class
class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error('Level too low');
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ', ' + this.name);
  }

  castSpell(): void {
    console.log('Casting a spell, behold my power!');
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

// Testing the Wizard class
const wizard = new Wizard('Merlin', 15);

wizard.introduce('I am the mighty wizard');
wizard.castSpell();
wizard.levelUp();  // Level up! New level is 16

export { ICharacter, ISpellCaster, Wizard };