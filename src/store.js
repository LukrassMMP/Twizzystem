import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        // databaseUrl for local testing
        databaseUrl: 'http://www.twizzy.ch/php/data.php',
        // final databaseUrl
        // databaseUrl: '/php/data.php',
        //userName of current User
        userName: '',
        //userId of current User
        userId: '',
        //Array with all Users
        userNames: '',

        //ID of the actuel Question (starts with QuestionId1)
        questionId: 1,
        //actuel Round (starts with round 1)
        roundNr: 1,
        //total played Rounds
        totalRounds: 6,

        //sets Time the User have to give their answer [s]
        time: 20,
        //Array with the acutel question (incl. ID, CorrectAnswer, answerA-D)
        question: {},
        //set to true, if last Answer was correct
        correctAnswer: false,
        //summary of all correct Answers
        correctAnswers: 0,
        //summary of all given Answers in this round
        answerA: 0,
        answerB: 0,
        answerC: 0,
        answerD: 0,

        //actuel Categories
        categories: '',
        //CategorieId for the Vote
        categorieA: 1,
        //CategorieId for the Vote
        categorieB: 2,
        //all information to the winning categorie
        winnerCategorie: '',
        //answer given by the User
        givenAnswer: '',

        //set true if current User had all answer correctAnswer
        victory: false,

        // topics for the next show
        topics: '',
        // all Information to the winning topic
        winnerTopic: '',

        winner: ''
  },
  mutations: {

  },
  actions: {


  }
})
