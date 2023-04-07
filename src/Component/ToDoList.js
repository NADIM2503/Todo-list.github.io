import React, { useState } from 'react'

const ToDoList = () => {

    const [data, setData] = useState([])
    const [input, setInput] = useState('')

    const addValues = () => {
        if (input) {
            setData([...data, input])
            setInput('')

        } else {

        }
    }

    const removeAll =()=>[
        setData([])
    ]


    const deleteItem = (id) => {
        console.log(id)
        const updatedItems = data.filter((elem, ind) => {
            return ind !== id;

        });

        setData(updatedItems)
    }

    return (
        <>



            <div className='main-div5 text-center container-fluid ' >
                <h1 className='head m-3'>To-Do List</h1>
                <div className='child-div m-3'>
                    <figure><img src='https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png' style={{ height: "170px", width: "210px" }} alt='' />
                        <figcaption> Add Your List Here</figcaption>
                    </figure>

                    <div className='addItems container'>
                        <div className='input-div p-0'>
                            <input type='text' placeholder='Add Items...' className=' add-inp' onChange={(e) => { setInput(e.target.value) }} />
                        </div>
                        <div className='add-btn'>
                            <i className="fa-solid fa-plus p-3 " title='Add Item'
                                onClick={addValues}  ></i>      <br /><br />
                        </div>
                    </div><br />




                    {
                        data.map((elem, ind) => {
                            return (
                                <>
                                    <div className='showItem m-2' >


                                        <div className='eachItem container p-2 ' key={ind}>
                                            <div className='elem'>
                                                <p >{elem}</p>
                                            </div>
                                            <div className='del-btn'>
                                                <i className='far fa-trash-alt  p-2 ' title='Delete Item'
                                                    onClick={() => deleteItem(ind)} style={{ color: "#ff7605;" }}></i><br />
                                            </div>
                                        </div>


                                    </div>

                                </>
                            )
                        })
                    }



                    <div className='showItems'><br /><br />
                        <button className='btn btn-dark rounded effect04' data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST</span></button>
                    </div>
                </div>
            </div>




        </>
    )
}

export default ToDoList