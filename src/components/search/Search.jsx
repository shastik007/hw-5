import React from 'react'

const Search = (props) => {
	const [input, setInput] = React.useState('')

	const onInputHandler = (e) => {
		setInput(e.target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		console.log(input)
		let array = props.statee
		let v = array.filter((el) => el.name == input)
		
		props.onChange(v)
		
	}

	

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={input} onChange={onInputHandler} type='text' />
				<button type='submit'>search</button>
			</form>
		</div>
	)
}

export default Search
