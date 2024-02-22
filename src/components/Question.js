import { useState, useEffect } from 'react'

const Question = ({ question, onAnswered }) => {
	const [timeRemaining, setTimeRemaining] = useState(10)
	// const [count, setCount] = useState(10)

	// useEffect is called every time the component is rendered
	useEffect(() => {
		if (timeRemaining === 0) {
			setTimeRemaining(10)
			onAnswered(false)
			return
		}

		const timer = setTimeout(() => {
			// console.log('this will run after 1 second')
			setTimeRemaining(timeRemaining - 1)
		}, 1000)
		return () => clearTimeout(timer)
	}, [timeRemaining, onAnswered])

	const handleAnswer = (isCorrect) => {
		setTimeRemaining(10)
		onAnswered(isCorrect)
	}

	const { id, prompt, answers, correctIndex } = question

	return (
		<>
			<h1>Question {id}</h1>
			<h3>{prompt}</h3>
			{answers.map((answer, index) => {
				const isCorrect = index === correctIndex
				return (
					<button
						key={answer}
						onClick={() => handleAnswer(isCorrect)}>
						{answer}
					</button>
				)
			})}
			<h5>{timeRemaining} seconds remaining</h5>
		</>
	)
}

export default Question