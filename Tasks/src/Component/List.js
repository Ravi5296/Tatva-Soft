import React from 'react'
import '../css/style.css'

function List() {
    const List = [
        {
            id : '1',
            title : 'this title t1',
            description : 'this is description d1'
        },
        {
            id : '2',
            title : 'this title t2',
            description : 'this is description d2'
        }
    ]

    const myList = List.map(
        List => <div key={List.id}>
                <h1 className='primary'>id : {List.id}</h1>
                <h1 className='sec'>Title : {List.title}</h1>
                <h1 className='thi'>description : {List.description}</h1>
            </div>
    )
  return (
    <div>
        {myList}
    </div>
  )
}

export default List