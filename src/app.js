import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import './styles/styles.scss'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));





// class OldSyntax {
//     constructor() {
//         this.name = 'mike'
//         this.getGreeting = this.getGreeting.bind(this)
//     }
//     getGreeting() {
//         return `Hi. my name is ${this.name}.`
//     }
// }
// const oldSyntax = new OldSyntax()
// const getGreeting = oldSyntax.getGreeting
// console.log(getGreeting())

// // ---------new class properties syntax

// class NewSyntax {
//     name = 'jen'
//     getGreeting = () => {
//         return `Hi. my name is ${this.name}.`
//     }
// }
// const newSyntax = new NewSyntax()
// const newGetGreeting = newSyntax.getGreeting
// console.log(newGetGreeting())