import { useState } from "react";

const TodoApp = () => {
    //saves the current todo-which is in input
    const [currentTodo, setTodo] = useState("");
    //saves all todos that user entered till so for
    const [allTodos, setAllTodos] = useState([]);

    const [editIndex, setEditIndex] = useState(undefined);

    const handleSubmit = () => {

        if (editIndex != undefined) {
            const newTodos = allTodos.map((todo, index) => {
                if (index == editIndex) return currentTodo;
                return todo;
            })
            setAllTodos(newTodos);
            setTodo("");

        } else {
            if (currentTodo.length > 0) {
                setAllTodos([...allTodos, currentTodo]);
                setTodo("");
            }
        }

    }

    const handleEdit = (eIndex) => {
        setTodo(allTodos[eIndex]);
        setEditIndex(eIndex);

        
    }



    const handleDelete = (dIndex) => {
        const newTodo = allTodos.filter((todo, index) => index != dIndex)
        setAllTodos(newTodo);
    }

    const handleOnChange = (event) => {
        if (currentTodo.length > 100) {
            setTodo("");
        } else {
            setTodo(event.target.value);
        }


    }

    return (
        <div style={{ marginTop: 30, backgroundColor: "#61dafb", height: 200 }}><br></br>

            <h1 style={{ color: "blue", marginRight: 60 }}>TODO APP PROJECT </h1><br></br>

            <input type="text" onChange={handleOnChange} value={currentTodo} style={{ marginRight: 50, width: 400, borderRadius: 10, backgroundColor: "yellow" }}></input><br></br>

            <br></br>
            <button className="btn btn-primary" style={{ marginRight: 40 }} onClick={handleSubmit}>Submit</button>

            <br></br>
            <br></br>
            {
                allTodos.length > 0 ? (
                    <table className="table table-dark" style={{ color: "aqua" }}>
                        <thead>
                            <tr >
                                <th scope="col">SerialNumber</th>
                                <th scope="col">TaskAgent</th>
                                <th scope="col">ActionAgent</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                allTodos.map((todo, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{todo}</td>
                                            <td>
                                                {
                                                    editIndex == index ? null : (
                                                        <button className="btn btn-primary" onClick={() => { handleEdit(index) }}>Edit</button>
                                                    )
                                                }

                                                <button className="btn btn-warning" onClick={() => { handleDelete(index) }}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                ) : (<p style={{ color: "red" }}>No Todos Available Please Add</p>)
            }
        </div>
    )
}


export default TodoApp;






