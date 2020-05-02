import React from 'react'

function CartList(props){

    return(
        <div>
             <h6>Following are the items in your list:</h6>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            props.list.map((item,i)=>{
                                return <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.qty}</td>
                                    <td><button onClick={()=>{props.handleClick(item)}}>Delete</button></td>
                                    <td><button onClick={()=>{props.handlePurchase(item)}}>Purchase Done</button></td>
                                </tr>
                            
                            })
                        }
                
                </tbody>
            </table>
        </div>
    )
}

export default CartList