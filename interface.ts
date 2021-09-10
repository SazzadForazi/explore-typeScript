interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string,
    previousClub?: string[]
}
const shakib: Player = {
    name: 'Shakibul Hasan',
    club: 'Dhaka gladitious',
    salary: 50000,
    wife: 'shisihir'
}
const hannan: Player = {
    name: 'A. Hannan',
    club: 'kolabagan',
    salary: 5000
}
interface Employee {
    name: string,
    designation: string,
    salary: number,
    age: number
}
interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typingSpeed: number
}
const sazzad: Developer = {
    name: 'Sazzad',
    salary: 1010000,
    age: 24,
    designation: 'Engineer',
    language: 'js',
    codeEditor: 'vs code',
    typingSpeed: 30
}