import classes from './list.module.css'
import React from 'react'

const List = (props) => {
	return (
		<ul>
			{props.data.map((el) => {
				return (
					<li className={classes.li} key={el.id}>
						<label>{el.name}</label>
						<label>{el.number}</label>
						<label>{el.email}</label>
						<label>{el.comment}</label>
						
					</li>
				)
			})}
		</ul>
	)
}

export default List
