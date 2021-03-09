import React, {Component} from "react";
import "./Search-panel-filter.css"

export default class SearchPanelFilter extends Component{

    state={
        all:true,
        active:false,
        done:false
    }
    onClickAll = () =>{
        this.setState(() => {
            return {
                all: true,
                active: false,
                done: false
            }
        })
    }
    onClickActive = () => {
        this.setState(() => {
            return{
                all: false,
                active: true,
                done: false
            }
        })
    }
    onClickDone = () => {
        this.setState(() => {
            return{
                all: false,
                active: false,
                done: true
            }
        })
    }
    render(){
        const {all,active,done} = this.state
        const classNames = "btn btn-outline-primary"
        let classAll = classNames
        let classActive = classNames
        let classDone = classNames
        if (all){
            classAll += " active"
        }
        if(active){
            classActive += " active"
        }
        if(done){
            classDone += " active"
        }
        return(
            <div className="btn-group">
                <button type="button" className={classAll} onClick={this.onClickAll}>All</button>
                <button type="button" className={classActive} onClick={this.onClickActive}>Active</button>
                <button type="button" className={classDone} onClick={this.onClickDone}>Done</button>
            </div>
        );
    }
}
