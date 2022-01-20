import React from 'react'
import numbers from '../data/numbers'
import classes from './inputForm.module.css'
import Modal from '../ui/Modal'
import BackDrop from '../ui/BackDrop'

const InputForms = (props) => {
	const [select, setSelect] = React.useState()
	const [defNubmer, setDefNumber] = React.useState()
	const [img, setImg] = React.useState()
	const [modal, setModal] = React.useState(false)

	const [obj, setObj] = React.useState({
		name: '',
		email: '',
		number: '',
		comment: '',
	})

	const onChangeSelect = (e) => {
		setSelect(e.target.value)
		console.log(e.target.value)
	}

	React.useEffect(() => {
		console.log('def')
		getDefaultValue()
		getFlag()
	}, [select])

	const getDefaultValue = () => {
		numbers.map((el) =>
			el.country == select ? setDefNumber(el.num) : console.log('hello'),
		)
	}

	const getFlag = () => {
		numbers.map((el) =>
			el.country == select
				? setImg(el.img) || setDefNumber(el.num)
				: console.log('hello'),
		)
	}

	const onChangeInputs = (event) => {
		let key = event.target.name
		setObj({
			...obj,
			[key]: event.target.value,
			id: Math.random().toString(),
		})
	}

	const onSumbmit = (e) => {
		e.preventDefault()

		if (obj.name && obj.email && obj.number && obj.comment) {
			props.onGetObj(obj)
		} else {
			setModal(true)
		}
	}

	return (
		<form onSubmit={onSumbmit}>
			{modal && <Modal setModal={setModal} />}
			{modal && <BackDrop />}
			<fieldset>
				<legend>leave feedback</legend>
				<p>
					<label name='name'>
						Name <em>*</em>
					</label>
					<input
						value={obj.name}
						onChange={onChangeInputs}
						name='name'
						type='text'
						id='name'
					/>
				</p>
				<p>
					<label>E-mail</label>
					<input
						value={obj.email}
						onChange={onChangeInputs}
						name='email'
						type='email'
						id='email'
					/>
				</p>
				<p>
					<label>Number</label>
					<select value={select} onChange={onChangeSelect}>
						{numbers.map((el) => (
							<option value={el.country} id={el.num}>
								{el.country}
							</option>
						))}
					</select>
					<img src={img} alt='' className={classes.flag} />
					<input
						// value={defNubmer}
						onChange={onChangeInputs}
						name='number'
						type='tel'
						defaultValue={defNubmer}
					/>
				</p>
				<p>
					<label>comment</label>
					<textarea
						value={obj.comment}
						onChange={onChangeInputs}
						name='comment'
					></textarea>
				</p>
			</fieldset>
			<p>
				<button className={classes.button} type='submit'>send</button>
			</p>
		</form>
	)
}

export default InputForms
