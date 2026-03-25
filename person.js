const Person = function (fName, lName, dob) {
    this.firstName = fName;
    this.lastName = lName;
    this.dateOfBirth = dob;

    this.toString = () => {
        return `${this.firstName} ${this.lastName} DOB: ${this.dateOfBirth.toDateString()}`;
    }
}

const person1 = new Person('Chris', 'Cusack', new Date(2000, 0, 1));
const person2 = new Person('Justin', 'Cormier', new Date(2000, 0, 2));
const person3 = new Person('Jean', 'Cormier', new Date(1998, 0, 1));
const person4 = new Person('Jennifer', 'Cusack', new Date(1980, 0, 1));
const person5 = new Person('Mac', 'McCormack', new Date(1970, 0, 1));
const person6 = new Person('Hellen', 'Smith', new Date(1968, 0, 1));

// #region People

let people = [person1, person2, person3, person4, person5, person6];

function printPeople(people) {
    console.log('~~~~~~~~~~~~~~~~~');
    console.log(`${people.length} result found`);
    
    for (const person of people) {
        console.log(person.toString());
    }

}

printPeople(people);

console.log('---Filtering----');

let query = people.filter(person => {
    return person.firstName=='Jennifer' || person.lastName == 'Cormier';
});

printPeople(query);


//Partial search

let search = 'Cu';    

// Last Name Search
query = people.filter(person => {
    //Partial starts with
    return person.lastName.toLowerCase().indexOf(search.toLowerCase()) === 0;
    
    //Search anywhere in string
    //return person.lastName.toLowerCase().indexOf(search.toLowerCase()) >= 0;

    //Partial anywhere
    //return person.lastName.indexOf(search) >= 0;
});

printPeople(query);

search = 'Je';
//Always produces a new array

query = people.filter(person => {
    return person.firstName.indexOf(search) === 0;  // this keeps it case sensitive
});

printPeople(query);

if (!!query.length) {
    console.log('Results found');
    
} else {
    console.log('Results not found');
    
}

//Another method of Array
console.log('----Find----');

let find = people.find(person => {
    return person.lastName === 'Cormier';
});

console.log(find);
console.log(!!find); // truthiness check

if (!!find) {
    console.log('Person found');
    console.log(find);
} else {
    console.log('Person not found');
    
}

console.log('---Sorting---');

people.sort((a, b) => {
    //Sort lastName asc
    //return a.lastName > b.lastName ? 1 : -1;

    //Sort lastName desc
    return a.lastName < b.lastName ? 1 : -1;
});
    
printPeople(people);

people.sort((a, b) => {
    
    //DOB Oldest - Youngest
    //return a.dateOfBirth - b.dateOfBirth;

    //DOB Youngest - Oldest
    return b.dateOfBirth - a.dateOfBirth;
});

printPeople(people);


console.log('-----Mapping-----');

const peopleList = people.map(person => {
    return {
        wholeName: `${person.lastName}, ${person.firstName}`,
        dob: person.dateOfBirth.toDateString()
    }
});

console.log(peopleList);


