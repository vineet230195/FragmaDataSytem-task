import React from 'react'
import CartList from './CartList'
import CartFinal from './CartFinal'

class CartForm extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            qty:'',
            cart:[],
            finalcart:[]
        }
    }

    handlePurchase=(cur)=>{
        const final=this.state.cart.find(item=>item.name==cur.name)
        this.setState({
            finalcart:this.state.finalcart.concat(final)
        })
    }

    handleClick=(val)=>{
        this.setState(prevstate=>({
            cart:prevstate.cart.filter(item=>item.name!=val.name),
            finalcart:prevstate.cart.filter(item=>item.name!=val.name)
        }))
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClear=()=>{
        this.setState({
            name:'',
            qty:''
        })
    }

    handleSumbit=(e)=>{
        const {name,qty}=this.state
        e.preventDefault()
        const formData={
            name,
            qty
        }
        console.log(formData)
    this.setState({
        cart:this.state.cart.concat(formData)
    })
    this.handleClear()

    }
    render(){
        console.log(this.state)
        return(
            <div>
                <form onSubmit={this.handleSumbit}>
                    <label htmlFor='name'>Enter an item to add to your purchase list:</label>
                    <input type='text' id='name' name='name' value={this.state.name} onChange={this.handleChange}/>
                    <label htmlFor='qty'>Qty:</label>
                    <input type='text' id='qty' name='qty' value={this.state.qty} onChange={this.handleChange}/>
                    <input type='submit' value='Add to List'/>
                </form>

            {this.state.cart.length!==0 && <CartList handlePurchase={this.handlePurchase} handleClick={this.handleClick} list={this.state.cart}/>}

            {this.state.finalcart.length!==0 && <CartFinal handleClick={this.handleClick} items={this.state.finalcart}/>}

            </div>
        )
    }
}

export default CartForm