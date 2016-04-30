import React from "react"
import _ from "underscore"

export default class Navigation extends React.Component {

	renderNav() {

		if( this.props.navigations == undefined ) return (<p>Loading data...</p>);
		var filteredData = this.filterNav(this.props.navigations, this.props.searchText);
		var navigation = this.generateTree(filteredData);
		return this.generateElem(navigation.children);

	}






	/**
	 * Filter Navigation with search text
	 */
	filterNav(navData, filterText) {

		var searchText = filterText.toLowerCase();
		//var nav = jsonQ(navData);
		if( searchText == '' ) {
			return navData;
		}
		// find all parent items
		var parentNav = [];
		var matchNav = [];
		navData.forEach((nav,key)=>{

			if( nav.ParentCategoryId == 0 ) {
				parentNav.push(nav);
				return;
			}

			if( nav.Name.toLowerCase().indexOf(searchText) !== -1 ) {
				matchNav.push(nav);
			}
			
		});

		// Find parents of matched nav
		var machedParentNav = [];
		
		if( matchNav.length > 0 ) {
			matchNav.forEach((matchedItem)=>{

				// Parent item - don't need find parent
				if( matchedItem.ParentCategoryId == 0 ){
					return;
				}


				var navDataSize = navData.length;
				for( var i = 0; i < navDataSize; i++ ) {
					
					var item = navData[i];

					// Ignore top level items
					if( item.ParentCategoryId == 0 ) {
						continue;
					}
					if( item.Id == matchedItem.ParentCategoryId ) {
						machedParentNav.push(item);
						break;
					}

				}
			})
		}

		var fullData = _.union(parentNav,matchNav,machedParentNav);
		
		console.log(navData);
	
		return fullData;
	}






	/**
	 * Generate Tree JSON tree to produce multi level nav
	 */
	generateTree(data) {

	    // build hierarchical source.
	    var map = {}
	    var dataSize = data.length;
	    for(var i = 0; i < dataSize; i++){
	        var obj = data[i]
	        if(!(obj.Id in map)){
	            map[obj.Id] = obj
	            map[obj.Id].children = []
	        }

	        if(typeof map[obj.Id].Name == 'undefined'){
	            map[obj.Id].Id = obj.Id
	            map[obj.Id].Name = obj.Name
	            map[obj.Id].ParentCategoryId= obj.ParentCategoryId
	        }

	        var parent = obj.ParentCategoryId || '-';
	        if(!(parent in map)){
	            map[parent] = {}
	            map[parent].children = []
	        }

	        map[parent].children.push(map[obj.Id])
	    }
	    return map['-']
	}








	/**
	 *	Generate actual Dom element from JSON Tree
	 */
	generateElem(item) {

		var rows = [];

		item.forEach((nav,key) => {
			var child = '';

			if( nav.children && nav.children.length > 0 ) {
				var child = this.generateElem(nav.children);
			}

			rows.push(<li>{nav.Name}{child}</li>);
		});

		return (<ul>{rows}</ul>)

	}



	render() {
		return (
			<div>
				{this.renderNav()}
			</div>
		);
	}
}