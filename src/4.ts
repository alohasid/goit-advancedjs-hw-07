// Key class
class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature(): number {
        return this.signature;
    }
}

// Person class
class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

// Abstract House class
abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];

    constructor(key: Key) {
        this.key = key;
    }

    abstract openDoor(key: Key): void;

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log(`${person.getKey().getSignature()} has entered the house.`);
        } else {
            console.log('The door is closed. Cannot come in.');
        }
    }
}

// MyHouse class
class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('The door is now open.');
        } else {
            console.log('The key does not match. The door remains closed.');
        }
    }
}

// Example usage
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey()); // The door is now open.
house.comeIn(person);           // Person has entered the house.

export { Key, Person, House, MyHouse };