import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { fromJS } from "immutable";

function App() {
  const [state, setState] = useState(
    fromJS({
      id: 12,
      email: "abc@linuxhint.com",
      contactInfo: {
        name: "Harry",
        address: {
          city: "Berlin",
          country: "Germany",
        },
      },
    })
  );
console.log(state);

  const onchange=(e)=>{
    if(e.target.name==='email'){
      state.set('email', e.target.value)
    }else if(e.target.name==='name'){
      state.setIn(['contactInfo', 'name'], e.target.value)
    }else if(e.target.city){
      state.setIn(['contactInfo', 'address', 'city'], e.target.value)
    }else{
      state.setIn(['contactInfo', 'address', 'country'], e.target.value)
    }
    console.log(state);

  }

  return (
    <div className="App">
      <div className="wrap">
        <div className="flex">
          <p className="name">Name</p>
          <p className="prop">{state.get("contactInfo").get("name")}</p>
        </div>
        <div className="flex">
          <p className="name">Email</p>
          <p className="prop">{state.get("email")}</p>
        </div>
        <div className="flex">
          <p className="name">city</p>
          <p className="prop">
            {state.get("contactInfo").get("address").get("city")}
          </p>
        </div>
        <div className="flex">
          <p className="name">country</p>
          <p className="prop">
            {state.get("contactInfo").get("address").get("country")}
          </p>
        </div>
      </div>
      <div className="input-wrap">
        <div className="flex">
          <p className="name">Name</p>
          <input type="text" className="input" name='name' onChange={(e)=>onchange(e)} />
          {/* {state.get("contactInfo").get("name")} */}
        </div>
        <div className="flex">
          <p className="name">Email</p>
          <input type="text" className="input" name='email' onChange={(e)=>onchange(e)} />
          {/* {state.get("email")}</p> */}
        </div>
        <div className="flex">
          <p className="name">city</p>
          <input type="text" className="input" name='city' onChange={(e)=>onchange(e)} />
          {/* {state.get("contactInfo").get("address").get("city")} */}
        </div>
        <div className="flex">
          <p className="name">country</p>
          <input type="text" className="input" name='country' onChange={(e)=>onchange(e)} />
          {/* {state.get("contactInfo").get("address").get("country")} */}
        </div>
      </div>
    </div>
  );
}

export default App;
