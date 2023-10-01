import React from 'react'

function Header({number , increment }) {
    console.log("Header is rendered");
    return (
        <div>
            Header  {number} 
            <hr />
            <hr />
            <button onClick={increment}>increase</button>
            {/* <code>{JSON.stringify(data)}</code> */}
        </div>
    )
}

export default React.memo(Header) 