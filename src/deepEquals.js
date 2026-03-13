const deepEquals = (a, b) => {
  if (a === b) return true;
  if (typeof a != "object" || typeof b != "object" || a == null || b == null)
    return false;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length != keysB.length) return false;
  for (let key of keysA) {
    if (!deepEquals(a[key], b[key])) return false;
  }
  return true;
};

const person1 = {
  name: "sanyam",
  college: {
    name: "usar",
    branch: "iiot",
    cgpa: 8.63,
  },
  profession: "developer",
};

const person2 = {
  name: "sanyam",
  college: {
    name: "usar",
    branch: "iiot",
    cgpa: 8.63,
  },
  profession: "developer",
};

console.log(deepEquals(person1, person2));

// ___________________________________currying functions in js___________________________________

// const add = (a, b) => a + b;
// const curriedAdd = (a) => (b) => a + b;

// console.log(add(2, 3));

function add(a) {
  return function (b) {
    return a + b;
  };
}

const curriedAdd2 = add(2);
console.log(curriedAdd2(3));

// ______________________Practice_______________________________

const users = [
  { id: 1, name: "Sanyam", active: true },
  { id: 2, name: "Rahul", active: false },
  { id: 3, name: "Amit", active: true },
];

console.log(
  users.filter((user) => user.active === true).map((user) => user.name),
);

const users2 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
];

// const unique = [...new Map(users2.map((user) => [user.id, user])).values];
// console.log(unique);

const users3 = [
  { name: "A", age: 25 },
  { name: "B", age: 20 },
  { name: "C", age: 30 },
];

users3.sort((a, b) => a.age);
console.log(users3);

const arr = [2, [2, 3, [3, 4]], [4, 3]];
console.log(arr.flat(Infinity));