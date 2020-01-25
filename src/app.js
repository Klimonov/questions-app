import './style.css'
import { isValid } from './utils'
import { Question } from './question'

const form = document.querySelector('#form')
const input = form.querySelector('#questionInput')
const submit = form.querySelector('#submit')

form.addEventListener('submit', submitFormHandler)
input.addEventListener('input', () => {
    submit.disabled = !isValid(input.value)
})

function submitFormHandler(event) {
    event.preventDefault()
    const question = {
        text: input.value.trim(),
        date: new Date().toJSON()
    }
    submit.disabled = true
    Question.create(question)
    .then(() => {
        input.value = ''
        input.classList = ''
    })
}