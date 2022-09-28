// ES2015 Version
function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}


// Computer Property Names ES2015

let favoriteNumber = 42;
const instructor = {
    firstName: 'Jacob',
    [favoriteNumber]: "That is my favorite!"
}

// Obj Methods ES2015

const instruct = {
    firstName: 'Jacob',
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + "says bye!";
    }
}

// createAnimal Function

const k9 = createAnimal("Dog", "bark", "woof")
const snake = createAnimal("Snake", "snake noise?", "sssssssst")
function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}