import Button from 'react-bootstrap/Button';    


// eslint-disable-next-line react/prop-types
const ListData = ({list,handleDelete,handleEdit,handleChecked})=>{

const deleteHandler=(index)=>{
    handleDelete(index)
}

const editHandler=(task,index)=>{
    handleEdit(task,index)
}


const checkHandler=(index)=>{
    handleChecked(index)
}


const dateValue = new Date()
const year = dateValue.getFullYear()
let month = (dateValue.getMonth() + 1)
if(month < 10){
    month = "0" + month
}
let day = dateValue.getDate()
if(day < 10){
    day = "0" + day
}
const currentDate = `${year}-${month}-${day}`


const items = list.map((task,index)=>(
    <div className="single_list" key={index}>   
        <div className={task.isChecked ? 'checkVal' : 'title_item'}>
        <b>Title</b> - {task.item}
        <div className='date_sty'>
            {currentDate > task.dateItem ? 
            <>
                {task.dateItem}
                <p>Due date is passed</p>
            </>
            : task.dateItem
            }
        </div>
        </div>
        <div className='main_btn'>
            <Button className='btn-sm' variant="primary" onClick={()=>editHandler(task, index)}>Edit </Button>
            <input type="checkbox" checked={task.isChecked} onClick={()=>checkHandler(index)}/>
            <Button className='btn-sm' variant="danger" onClick={()=>deleteHandler(index)}>Delete</Button>
        </div>
    </div>
))    

    return(
        <div className="list_container">
            <div className="item_list">
                {items}
            </div>
        </div>
    )
}

export default ListData