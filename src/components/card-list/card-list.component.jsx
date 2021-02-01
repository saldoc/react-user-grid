import React from 'react'
import { Card } from './../card/card.component'

import './card-list.styles.css'

export const CardList = (props) => {
	return (
		<div className="card-list">
			{props.userList.map((user) => (
				<Card key={user.login.uuid} user={user} />
			))}
		</div>
	)
}
