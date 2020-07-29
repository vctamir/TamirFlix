import React from 'react'


const FormField = ({caption,name,type,value,onChange}) => {
    return (
        <div>
            <label>{caption}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default FormField