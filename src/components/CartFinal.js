import React from 'react'

function CartFinal(props){

    return(
        <div>
            <h6>Following items have been purchased:</h6>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Action</th>
                    
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            props.items.map((item,i)=>{
                                return <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.qty}</td>
                                    <td><button onClick={()=>{props.handleClick(item)}}>Delete</button></td>
                                    
                                </tr>
                            
                            })
                        }
                
                </tbody>
            </table>
        </div>
    )
}

export default CartFinal