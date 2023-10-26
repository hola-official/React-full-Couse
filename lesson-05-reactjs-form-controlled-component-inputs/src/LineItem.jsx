import React from 'react'
import { BsTrash3 } from 'react-icons/bs'

const LineItem = ({item, handleCheck, handleDelete}) => {
    return (
        <li className="item" key={item.id}>
            <input onChange={() => handleCheck(item.id)} type="checkbox" checked={item.checked} />
            <label style={(item.checked) ? { textDecoration: "line-through" } : null} onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>

            <BsTrash3 role="button" tabIndex="0" onClick={() => handleDelete(item.id)} />
        </li>
    )
}

export default LineItem