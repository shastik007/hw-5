import classes from './wrapper.module.css'
import React from 'react'
import InputForms from '../inputsForms/InputForms'
import Search from '../search/Search'
import List from '../listOfReviews/List'

const Wrapper = (props) => {
	const [state, setState] = React.useState([])

	const getObj = (info) => {
		setState([...state, info])
	}

	// const chageState = (info) =>{
	// 	console.log(info);
	// 	setState(info)
	// }

	return (
		<div className={classes.wrapper}>
			<h1>list of reviews</h1>
			<InputForms onGetObj={getObj} />
			<div>
				{/* <Search onChange={chageState} statee={state} /> */}
				<List data={state}/>
			</div>
		</div>
	)
}

export default Wrapper
