import React from 'react';
import {connect} from 'react-redux';
import uuidv1 from 'uuid';
import {addArticle, deleteArticle} from '../actions/index';

const mapDispatchToProps = dispatch => {
	return {
		addArticle: article => dispatch(addArticle(article)),
		deleteArticle: () => dispatch(deleteArticle())
	};
};

class ConnectedForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault();
		const {title} = this.state;
		const id = uuidv1();
		this.props.addArticle({title, id});
		this.setState({title: ''})
	}

	handleReset(event) {
		event.preventDefault();
		this.props.deleteArticle();
		this.setState({title: ''})
	}

	render() {
		const {title} = this.state;
		return (
			<form onSubmit={this.handleSubmit} onReset={this.handleReset}>
				<div className='form-group'>
					<label htmlFor='title'>Title</label>
					<input type="text" className="form-control" id="title" value={title} onChange={this.handleChange} />
				</div>
				<button type="submit" className="btn btn-success btn-lg">SAVE</button>&nbsp;
				<button type="reset" className="btn btn-error btn-lg">RESET</button>
			</form>
		);
	}

}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;

