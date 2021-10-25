import { useEffect, useState } from 'react'

type Question = {
	id: number
	enunciation: string
	alternatives: Array<string>
}

const question = (): JSX.Element => {
	const [question, setQuestion] = useState<Question>()

	useEffect(() => {
		fetch('http://localhost:3000/api/question/100')
			.then((res) => res.json())
			.then(setQuestion)
	}, [])

	const renderAnswers = (): string[] | boolean | JSX.Element[] => {
		if (question) {
			return question.alternatives.map((answer, id) => {
				return <li key={id}>{answer}</li>
			})
		}
		return false
	}

	return (
		<div>
			<h1>Question</h1>
			<div>
				<span>{question?.enunciation}</span>
				<ul>{renderAnswers()}</ul>
			</div>
		</div>
	)
}

export default question
