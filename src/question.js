export class Question {
    static create(question) {
        return fetch('https://question-app-16ba2.firebaseio.com/questions.json', {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            question.id = response.name
            return question
        })
        .then(addToLocalStorage)
    }
}

function addToLocalStorage(question) {
    const questionList = getFromLocalStorage()
    questionList.push(question)
    localStorage.setItem('questions', JSON.stringify(questionList))
}

function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('questions') || '[]')
}