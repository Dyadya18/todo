import React, {Component} from 'react';
import SearchPanelFilter from '../SearchPanelFilter/Search-panel-filter'
import "./search-panel.css"

export default class SearchPanel extends Component{

    state = {
        label: ""
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
        this.props.onFilterSearch(this.state.label)
    }

    render() {
        return(
            <div className="search-panel">
                <input className="search" placeholder="search"
                onChange={this.onLabelChange}/>
                <SearchPanelFilter/>
            </div>);
    }
}