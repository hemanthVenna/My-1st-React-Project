import React,{ Component } from 'react'
//const Component = React.Component
class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state ={ terms : ""}
	}
    render() {
    	return (
           <input className="search" value={this.state.term} onChange = {event => this.onInputChange(event.target.value)}/> 
    	)
    }
    onInputChange(term){
    	// console.log(event.target.value)
    	// console.log(event)

    	this.setState({term})
    	this.props.onSearchTermChange(term)
    }
}
export default SearchBar;