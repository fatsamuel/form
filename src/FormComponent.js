import React, {Component} from "react"


function FormComponent(props) { 
     



          
         
        return (
                            <main>
                                <form>
                                <input name="firstName" 
                                value = {props.data.firstName} 
                                onChange ={props.handleChange} 
                                placeholder= "FirstName" />
                                <br/>
                                <input name="lastName" 
                                value = {props.data.lastName} 
                                onChange ={props.handleChange} 
                                placeholder= "LastName" />
                                <br/>
                                <input name="age" 
                                value = {props.data.age} 
                                onChange ={props.handleChange} 
                                placeholder= "Age" />

                                <br/>
                                <label>
                                    <input 
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={props.data.gender === "male"}
                                    onChange ={props.handleChange} 
                                    /> Male
                                </label>
                                <br/>

                                <br/>
                                <label>
                                    <input 
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={props.data.gender === "female"}
                                    onChange ={props.handleChange} 
                                    /> Female
                                </label>
                                <br/>

                                <select 
                                    value ={props.data.destination} 
                                    name="destination" 
                                    onChange={props.handleChange}>
                                    <option value="">Please put a destination</option>  
                                    <option value="germany">Germany</option>  
                                    <option value="venezuela">Venezuela</option>  
                                    <option value="spain">Spain</option>  
                                    <option value="italy">Italy</option>  
                                </select>
                                <br/>
                                    <label>
                                    <input
                                        type="checkbox"
                                        name="isVegan"
                                        onChange={props.handleChange}
                                        checked={props.data.isVegan}
                                    
                                    /> Vegan?
                                    </label>
                                <br/>
                                <br/>
                                    <label>
                                    <input
                                        type="checkbox"
                                        name="isKosher"
                                        onChange={props.handleChange}
                                        checked={props.data.isKosher}
                                    
                                    /> Kosher?
                                    </label>
                                <br/>
                                <br/>
                                    <label>
                                    <input
                                        type="checkbox"
                                        name="isLactoseFree"
                                        onChange={props.handleChange}
                                        checked={props.data.isLactoseFree}
                                    
                                    /> Lactose Free?
                                    </label>
                                <br/>







                                <br/>
                                <button>Submit</button>
                                </form>
                                <hr />
                                <h2>Entered information:</h2>
                                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                                <p>Your age: {this.state.age}</p>
                                <p>Your gender: {this.state.gender}</p>
                                <p>Your destination: {this.state.destination}</p>
                                <p>Your dietary restrictions: </p>
                                <p> Vegan: {this.state.isVegan ? "Yes" : "No"} </p>
                                <p> Kosher: {this.state.isKosher ? "Yes" : "No"} </p>
                                <p> Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"} </p>
                                
              </main>
     )
}

export default FormComponent