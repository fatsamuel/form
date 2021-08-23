import React, {Component} from "react"
import FormComponent from "./FormComponent"
import App from "./App"

class Form extends Component {
        constructor() {
            super ()
            this.state = {
            firstName: "",
            lastName: "",
            age: "",
            //isFriendly: false,
            gender: "",
            //favColor: "red",
            destination: "",
                isVegan: false,
                isKosher: false,
                isLactoseFree: false
            
            
            }
            this.handleChange = this.handleChange.bind(this)

        }
        

        handleChange(event) {    //checkbox
        const {name, value, type, checked} = event.target
            type === "checkbox" ?
            this.setState ({
                
                [name]: checked
                
            }) 
            :
            this.setState({[name]: value})
        }

        render() {
            return
            <FormComponent 
            handleChange={this.handleChange}
            data={this.state}

            />
        
        }


            
}







                          /**   First example

                      </main>   

                        render () {
                          return (
                            
                                <form onSubmit={this.handleSubmit}>
                                  <input type="text" value={this.state.firstName} 
                                  name="firstName" 
                                  placeholder="First Name" 
                                  onChange={this.handleChange}></input>
                                  <br />
                                  <input type="text" value={this.state.lastName} 
                                  name="lastName" 
                                  placeholder="Last Name" 
                                  onChange={this.handleChange}></input>

                                  

                                  <h1>{this.state.firstName} {this.state.lastName}</h1>


                                  <textarea 
                                  value={"Some value"}
                                  onChange={this.handleChange}
                                  />  
                                  <br/> 
                                    <label>
                                        <input 
                                            type="checkbox"
                                            name="isFriendly"
                                            checked={this.state.isFriendly}
                                            onChange={this.handleChange}
                                        /> Is friendly?
                                    </label>
                                    <br/> 
                                    <label>
                                        <input 
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            checked={this.state.gender === "male"}
                                            onChange={this.handleChange}
                                        /> Male?
                                    </label>
                                    <br/> 
                                    <label>
                                        <input 
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            checked={this.state.gender === "female"}
                                            onChange={this.handleChange}
                                        /> Female?
                                      
                                    </label> 
                                    <br/>
                                    <label>Favorite Color: </label>
                                      <select 
                                        value={this.state.favColor}>
                                        onChange={this.handleChange}
                                        name="favColor"
                                        <option value="blue">Blue</option>
                                        <option value="green">Green</option>
                                        <option value="red">Red</option>
                                        <option value="yellow">Yellow</option>
                                      </select>



                                    <h2>You are a {this.state.gender}</h2>

                                    <h2>Your favorite color is {this.state.favColor}</h2>
                                    <button>Submit</button>
                                </form>
                            
                          )
                        } */
          
          
                        
                        
export default Form

