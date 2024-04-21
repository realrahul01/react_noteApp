import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ListData from "./ListData";


const Note=()=>{
const [text, setText] = useState('')
const [list, setList] = useState([])
const [isEdit, setIsEdit] = useState(false)
const [editIndex, setEditIndex] = useState(null)  
const [date, setDate] = useState(null)  


const noteHandler=()=>{
    let textItem = text.trim()
    if(text && textItem){
        setList([
            ...list,
            { 
                item : textItem,
                editItem : textItem,
                dateItem: date,
                isChecked: false
            },
    ])
        setText('')
    }
}


const handleChecked = (index)=>{
    let items = [...list]
    items[index].isChecked = !items[index].isChecked 
    setList(items)
}


const changeHandler=(e)=>{
    let newText = e.target.value
    setText(newText)
    if(editIndex !== null){
        let items = [...list]
        items[editIndex].editItem = newText
        setList(items)
    }
}

const handleDelete=(index)=>{
    let item = [...list]
    item.splice(index,1)
    setList(item)
}


const handleEdit=(task,index)=>{
    setText(task.item)
    setIsEdit(true)
    setEditIndex(index)
}

const saveHandler=()=>{
    let items = [...list]
    items[editIndex].item = items[editIndex].editItem
    setList(items)
    setIsEdit(false)
    setEditIndex(null);
    setText('')
}


const dateHandler=(e)=>{
    setDate(e.target.value)
}



    return(
        <section>
       <div className="container">
            <h1>Note App</h1>
            <input
                className="mx-2"
                type='text'
                placeholder="enter todo.." 
                value={text}
                onChange={changeHandler}
                />
                
            <input 
                className="mx-2"
                type="date" 
                onChange={dateHandler}
            />
            {isEdit && (
                <Button className="btn-sm mx-2" onClick={saveHandler} variant="dark">Save</Button>
            )}
            {!isEdit && (
                <Button className="btn-sm mx-2" onClick={noteHandler} variant="outline-primary">Add Note</Button>
            )}

            <div>
                <ListData list={list} handleDelete={handleDelete} handleEdit={handleEdit} handleChecked={handleChecked}/>
            </div>
       </div>
        </section>
    )
}

export default Note;