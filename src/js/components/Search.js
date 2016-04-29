import React from "react"


export default class Search extends React.Component {

	handleChange() {
		const searchText = this.refs.searchInput.value;
		this.props.handleChange(searchText);
	}

	render() {
		return (
			<div>
				<input type="text" onChange={this.handleChange.bind(this)} ref="searchInput" value={this.props.searchText} />
			</div>
		);
	}

}
