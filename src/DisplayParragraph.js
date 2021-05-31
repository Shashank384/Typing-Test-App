import React from 'react'

function DisplayParragraph({text, inputValue}) {
    const textArray = text.split('');
    return (
        <div className="border border-info rounded p-4 mb-4" style={{fontSize: "20px"}}>
        { 
            textArray.map((value, index) => {
                let color;
                if (index < inputValue.length) {
                    color = ( value === inputValue[index] ) ? '#78cc6d' : '#f56565';
                }
                return <span key={index} style={{backgroundColor: color}}>{value}</span>
            })
        }
        </div>
    )
}

export default DisplayParragraph
