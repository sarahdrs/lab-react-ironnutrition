import React, { Component } from 'react';



class FoodForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "name": "",
            "calories": "",
            "image": "",
            "quantity": "",
            "className": "FoodForm"
        }
    }
    toggleForm = () => {
        this.setState({
            className: this.state.className === "FoodForm" ? "" : "FoodForm"
        })
    }

    handleChange(event) {
        let { name, value } = event.target;
        
        this.setState({ [name]: value });
    }
    handleFormSubmit = (event) => {
        event.preventDefault();//prevents the browser from reloading
        this.props.addFood(this.state);//callback function this.state=movieObj
        this.setState({     
            "name": "",
            "calories": "",
            "image": "",
            "quantity": "",
            "className": "FoodForm"
        })     
      }


    render() {
        return (
            <div>
                <button onClick={() => this.toggleForm()}>Add Form</button>


                <form className={this.state.className} onSubmit={this.handleFormSubmit}>

                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />

                    <label>Calories:</label>
                    <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />

                    <label>Image:</label>
                    <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)} />

                    <label>Quantity:</label>
                    <input type="text" name="quantity" value={this.state.quantity} onChange={(e) => this.handleChange(e)} />


                    <input onClick={() => this.toggleForm()} type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default FoodForm