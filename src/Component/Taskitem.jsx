import React, { useState } from 'react';
// import setlocalStoarage from '../utility/localstorage';


export default function Taskitem({ item, dispatch }) {
    const { text, id } = item
    const [isEdit, setEdit] = useState(false);
    const [upadate, setUpadate] = useState(text);
    const [line, setLine] = useState(false);

    const remove = (id) => {
        dispatch({
            type: "REMOVE_TO_DO",
            payload: id
        })
        // setlocalStoarage()
    }
    const update = () => {
        setEdit(!isEdit)
        dispatch({
            type: "UPDATE_TASK",
            payload: {
                upadate,
                id
            }
        })
    }

    const handleline = () => {
        setLine(!line)
    }

    return (
        <div className="task-item">
            {isEdit ? <input type="text" value={upadate} onChange={(e) => setUpadate(e.target.value)} placeholder='i am aslo input' /> : <h4 className={line && 'line'}>{text}</h4>}
            <div className="btn-group">
                <button onClick={() => (
                    update(id),
                    setUpadate(upadate)
                )}> {isEdit ? "save" : "Edit"}</button>
                <button onClick={() => remove(id)}>delete</button>
                <button onClick={handleline}>Complete</button>
            </div>
        </div>
    );
}

