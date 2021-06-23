import React from 'react'
function Cash({moneyType, cash}) {

    return (
        <div className="cashTxt col">Cash {moneyType}{cash}</div>
    )
}

export default Cash
