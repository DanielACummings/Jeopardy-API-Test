export default class Question {
  constructor(data) {
    this.question = data.question
    this.answer = data.anwer
  }

  getTemplate(index) {
    return /*html*/`
    <h3>${this.question}</h3>
    <p>${this.answer}</p>`
  }
}