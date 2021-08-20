import React, {Component} from "react"

class App extends Component {
  constructor() {
    super ()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      isFriendly: false,
      gender: "",
      favColor: "red",
      destination: "",
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false
      }
      
    }
    this.handleChange = this.handleChange.bind(this)
  }

handleChange(event) {    //checkbox
  const {name, value, type, checked} = event.target
    type === "checkbox" ?
      this.setState ({
        dietaryRestrictions: {
          [name]: checked
        }
    }) 
    :
    this.setState({[name]: value})
}




          render () {
            return (
              <main>
                <form>
                  <input name="firstName" 
                  value = {this.state.firstName} 
                  onChange ={this.handleChange} 
                  placeholder= "FirstName" />
                  <br/>
                  <input name="lastName" 
                  value = {this.state.lastName} 
                  onChange ={this.handleChange} 
                  placeholder= "LastName" />
                  <br/>
                  <input name="age" 
                  value = {this.state.age} 
                  onChange ={this.handleChange} 
                  placeholder= "Age" />

                  <br/>
                  <label>
                    <input 
                      type="radio"
                      name="gender"
                      value="male"
                      checked={this.state.gender === "male"}
                      onChange ={this.handleChange} 
                      /> Male
                  </label>
                  <br/>

                  <br/>
                  <label>
                    <input 
                      type="radio"
                      name="gender"
                      value="female"
                      checked={this.state.gender === "female"}
                      onChange ={this.handleChange} 
                      /> Female
                  </label>
                  <br/>

                  <select 
                  value ={this.state.destination} 
                  name="destination" 
                  onChange={this.handleChange}>
                    <option value="">Please put a destination</option>  
                    <option value="Germany">Germany</option>  
                    <option value="Venezuela">Venezuela</option>  
                    <option value="Spain">Spain</option>  
                    <option value="Italy">Italy</option>  
                  </select>
                  <br/>
                    <label>
                      <input
                        type="checkbox"
                        name="isVegan"
                        onChange={this.handleChange}
                        checked={this.state.dietaryRestrictions.isVegan}
                      
                      /> Vegan?
                    </label>
                  <br/>
                  <br/>
                    <label>
                      <input
                        type="checkbox"
                        name="isKosher"
                        onChange={this.handleChange}
                        checked={this.state.dietaryRestrictions.isKosher}
                      
                      /> Kosher?
                    </label>
                  <br/>
                  <br/>
                    <label>
                      <input
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={this.handleChange}
                        checked={this.state.dietaryRestrictions.isLactoseFree}
                      
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
                <p>Your dietary restrictions: {this.state.dietaryRestrictions}</p>
              </main>
            )
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
          }
          

export default App
