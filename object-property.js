const students = [
    {id: 21, name: "omor sunny"},
    {id: 31, name: "maannnnaaaaa"},
    {id: 41, name: "moyuris"},
    {id: 71, name: "dipjol"},
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>40);
const bigger1 = students.find(s => s.id>40);
console.log(bigger1);