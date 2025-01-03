export interface Question {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export interface QuizState {
  currentQuestion: number
  score: number
  showResults: boolean
  questions: Question[]
  answers: string[]
  selectedAnswer: string | null
}

