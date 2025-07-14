import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'


const ViewTodo = () => {
    const [todo, changetodo] = useState(
       {"todos":[],"total":254,"skip":0,"limit":30}
        
    )


    const fetchData=()=>
        axios.get("https://dummyjson.com/todos").then( 
            (response)=>{
                changetodo(response.data)
            }
        ).catch()


         useEffect(()=>{fetchData()},[])


    return (
        <div>

            <div className="container">
                <Nav />
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                                <table class="table">
                                    <thead>

                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">TODO</th>
                                            <th scope="col">COMPLETED</th>
                                            <th scope="col">USER ID</th>
                                           

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {todo.todos.map(
                                            (value, index) => {
                                                return (
                                                    <tr>

                                                        
                                                        
                                                        <th>{value.id}</th>
                                                        <td>{value.todo}</td>
                                                        <td>{value.completed?"true":"false"}</td>

                                                        <td>{value.userId}</td>
                                                      
                                                    </tr>

                                                )
                                            }
                                        )}


                                    </tbody>
                                </table>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTodo