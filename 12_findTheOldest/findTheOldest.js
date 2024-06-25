const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();

    const greatestAge = array.reduce((mayor, persona) => {
        const edadActual = persona.yearOfDeath ? persona.yearOfDeath - persona.yearOfBirth : currentYear - persona.yearOfBirth;
        const mayorEdad = mayor.yearOfDeath ? mayor.yearOfDeath - mayor.yearOfBirth : currentYear - mayor.yearOfBirth;

        return edadActual > mayorEdad ? persona : mayor;
    });

    return greatestAge;
};

// Do not edit below this line
module.exports = findTheOldest;
