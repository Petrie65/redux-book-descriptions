import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		let book = this.props.activeBook;
		if (book) {
			return (
				<div>
					<h3>{book.title}</h3>
					<p>Pages: {book.pages}</p>
					<p>Description: {book.description}</p>
				</div>
			)
		} 
		return(
			<div>
				<h3>- no book selected -</h3>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		activeBook: state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail);
