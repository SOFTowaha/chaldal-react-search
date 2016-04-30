import React from "react"
import ReactDom from "react-dom"
import Search from "./components/Search"
import Navigation from "./components/Navigation"

class AppComponent extends React.Component{

	constructor() {
		super();


		this.state = {
			searchText: '',
			navigations: undefined
		}

	}

	componentDidMount() {

		// Venila.js ajax - best framework!
		var request = new XMLHttpRequest();
		request.open('GET', 'categories.json', true);
		request.onload = () => {
		  if (request.status >= 200 && request.status < 400) {
		    var data = JSON.parse(request.responseText);

		    this.setState({
				navigations: data
			})

		  } 
		};
		request.send();

	}


	searchNavigation(searchText) {
		this.setState({searchText});
	}

	render() {
		return (
			<div>
				<Search handleChange={this.searchNavigation.bind(this)} searchText={this.state.searchText} />
				<Navigation searchText={this.state.searchText} navigations={this.state.navigations}/>
			</div>
		);
	}
};

const app = document.getElementById('app');

ReactDom.render(
	<AppComponent />,
	app
)