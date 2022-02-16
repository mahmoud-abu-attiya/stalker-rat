import React, { Component } from 'react'
import "./Footer.scss"
export default class Footer extends Component {
	render() {
		return (
			<footer>
				<p className="cr">
					Developed by
					<a href='https://www.linkedin.com/in/mahmoud-abu-attiya-978496210' target="_blank" rel="noreferrer"><strong> Mahmoud Abu-Attiya </strong></a>
					&#38;
					<a href='https://www.linkedin.com/in/ahmedyasser54/' target="_blank" rel="noreferrer"><strong> Ahmed Yasser </strong></a>
					&copy;
					<span> {new Date().getFullYear()} </span>
				</p>
				<div className="fo-links">
					<a href='/'>About</a>
					<a href='/'>Terms &#38; Policies</a>
				</div>
			</footer>
		)
	}
}
