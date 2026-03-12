const deepEquals = (a, b) => {
    if(a === b) return true;
    if(typeof a != 'object' ||typeof b != 'object' || a == null || b == null) return false;
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if(keysA.length != keysB.length) return false;
    for(let key of keysA){
        if(!deepEquals(a[key], b[key])) return false;
    }
    return true;
}


const person1 = {
    name: 'sanyam',
    college: {
        name: 'usar',
        branch: 'iiot',
        cgpa: 8.63
    },
    profession: 'developer'
}

const person2 = {
    name: 'sanyam',
    college: {
        name: 'usar',
        branch: 'iiot',
        cgpa: 8.63
    },
    profession: 'developer'
}

console.log(deepEquals(person1, person2))