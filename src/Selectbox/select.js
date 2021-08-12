import React from 'react';
import './select.scss';

const select = () => {

    const options = ["Basic","Intermediate","Advanced","All"];
    
    return (
        <div>
            <select onChange={e => e.target.value} className="input-field">
                {options.map(option => {
                    return <option value={option} key={option} className="op" >{option}</option>
                })}
            </select>


        </div>
    )
}

export default select;
