import React, {Component} from "react";
import ToDoList from "C:\\Users\\vladOS\\react-apps\\todo\\src\\components\\todoList\\todo-list.js";
import Header from "C:/Users/vladOS/react-apps/todo/src/components/header/header.js";
import SearchPanel from "C:\\Users\\vladOS\\react-apps\\todo\\src\\components\\SearchPanel\\Search-panel.js"
import AddItem from "../addItem/addItem";
import './app.css'

export default class App extends Component{
    newID = 100;
    state = {
        toDoData: [
            this.createItem("Drink Coffee"),
            this.createItem("Make Awesome App"),
            this.createItem("Have a lunch")
        ],
        temp: ""
    }
    createItem (label) {
        const newItem = {
            label: label,
            important: false,
            done: false,
            id:this.newID++
        }
        return newItem;
    }
    onToggleProperty(arr, id, property) {
        const idItem = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idItem];
        const newItem = {...oldItem, [property]: !oldItem[property]}
        return [...arr.slice(0, idItem), newItem, ...arr.slice(idItem + 1)];
    }
    onTogleImportant = (id) => {
        this.setState(({toDoData}) => {
            return {
                toDoData: this.onToggleProperty(toDoData, id, "important")
            }
        })
    }
    onToggleDone = (id) => {
        this.setState(({toDoData}) => {
            return {
                toDoData: this.onToggleProperty(toDoData, id, "done")
            }
        })
    }
    onDeleteItem = (id) => {
        this.setState(({toDoData}) => {
            const idItem = toDoData.findIndex((el)=>el.id === id)
            const newArray = [...toDoData.slice(0, idItem),...toDoData.slice(idItem+1)]
            return {
                toDoData: newArray
            };
        })
    }
    addItem = (text) => {

        this.setState(({toDoData}) => {
            let newItem = this.createItem(text);
            let newArr = [...toDoData,newItem];
            return{
                toDoData: newArr
            }
        })
    }
    onFilterSearch = (label) => {
      this.setState({temp:label});
    }
    // groupSearchElments = () => {
    //     if (this.state.temp.length === 0) {
    //         return this.state.toDoData
    //     }
    //     const newArr = [...this.state.toDoData]
    //     return newArr.filter((el) => {
    //         if (el.label.toLowerCase().indexOf(this.state.temp.toLowerCase()) >= 0) {
    //             return el
    //         }
    //     })
    // }
    render() {
        const countDone = this.state.toDoData.filter((el) => el.done).length;
        const countToDo = this.state.toDoData.length - countDone;
        //const elements = this.groupSearchElments()
        return (
            <div className="todo-app">
                <Header moreToDo={countToDo} done={countDone}/>
                <div className="top-panel d-flex"><SearchPanel/></div>
                <ToDoList todos = {this.state.toDoData} onDeleted = {this.onDeleteItem} onToggleIm = {this.onTogleImportant} onToggleDo = {this.onToggleDone}/>
                <AddItem addItem = {this.addItem}/>
            </div>
        )
    }
};