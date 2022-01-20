import classes from './Modal.module.css'

import React from 'react'

const Modal = (props) => {
	
	return (
		<div className={classes.div}>
			<div className={classes.flex}>
				<button className={classes.button} onClick={()=>props.setModal(false)}>х</button>
			</div>
			<h1 className={classes.h1}>you have not filled in all the fields</h1>
		</div>
	)
}

export default Modal
