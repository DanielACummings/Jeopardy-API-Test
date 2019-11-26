import _store from "../store.js";
import _questionService from "../Services/QuestionsService.js"

function _drawQuestions() {
  let template = ''
  let questions = _store.State.questions
  questions.forEach((question, i) => template += question.getTemplate(i))
  document.querySelector("questions").innerHTML = template
}
export default class QuestionsController {
  constructor() {
    _store.subscribe("questions", _drawQuestions)
    _drawQuestions()
  }
  addQuestion(event) {
    event.preventDefault()
    let formData = event.target
    let newQuestion = {
      question: formData.question.value,
      answer: formData.answer.value
    }

    _questionService.addQuestion(newQuestion)
    formData.reset()

    console.log(event.target.question.value);
  }
  delortQuestion(questionIndex) {
    _questionService.delortQuestion(questionIndex)
  }
}
