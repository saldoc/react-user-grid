import React from 'react'
import './card.style.css'

export const Card = (props) => {
	return (
		<div className="card">
			<img src={props.user.picture.large} alt="user" />
			<h3>
				{props.user.name.first} {props.user.name.last}
			</h3>
			<address>
				{props.user.location.city}{' '}
				<strong>{props.user.location.country}</strong>
			</address>
			<span>{props.user.email}</span>
		</div>
	)
}
