import _store from "../store.js";
import Question from "../Models/QuestionMod.js"

let _questionApi = axios.create({
  baseURL: ""
  timeout: 3000
})
class QuestionsService {
  delortQuestion(questionIndex) {
    _store.State.questions.splice(questionIndex, 1)
  }
  addQuestion(questionData) {
    let question = new Question(questionData)
    let questions = _store.State.questions.map(q => new Question(q))
    questions.push(question)
    _store.commit("questions", questions)
  }
  loadQuestions() {
    _questionApi.get().then(res => {
      console.log(res)
      let questions = res.data.data.map(q => new Question(q))
      _store.commit("questions", questions)
    })
  }
  constructor() {
    console.log("hello from questino service");
    this.loadQuestions()
  }
}

const QUESTIONSERVICE = new QuestionsService();
export default QUESTIONSERVICE;
