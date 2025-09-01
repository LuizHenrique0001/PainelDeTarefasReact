import {useState} from "react";

function AddTasks({onAddTask}){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return(
        <div className=" space-y-4 p-6 bg-slate-200 flex flex-col rounded-md shadow">
            <input className="w-full p-2 text-left bg-white outline-slate-400 rounded-sm" placeholder='Titulo da tarefa' type="text" value={title} onChange={(event) => setTitle(event.target.value)} id=""/>
            <input className="w-full p-2 text-left bg-white rounded-sm" placeholder='Descrição da tarefa' type="text" value={description} onChange={(event) => setDescription(event.target.value)} id=""/>
            <button onClick={
                ()=>{
                if (!title.trim() || !description.trim())
                {
                    return alert("Preencha todos os dados")
                }
                onAddTask(title, description)
                setTitle("")
                setDescription("")

            }} className='w-full p-2 bg-slate-500 text-white rounded-sm '>
                Adicionar
            </button>
        </div>
    )
}
export default AddTasks;