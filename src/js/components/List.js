import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
	return {articles: state.articles}
};

const ConnectList = ({articles}) => {
	return 	(
		<ul className="list-group list-group-flush">
			{articles.map(el => (
					<li className="list-group-item" key={el.id}>
						{el.title}
					</li>
				))}
		</ul>
	)
};

const List = connect(mapStateToProps)(ConnectList);

export default List;