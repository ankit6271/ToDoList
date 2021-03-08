import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import DeleteIcon from '@material-ui/icons/Delete';
function App() {
  var [initial, initialData] = useState("");
  var [set, setD] = useState([]);
  function typeData(event) {
    console.log(event.target.value);
    return initialData(event.target.value);
  }
  function setData() {
    console.log(set);
    setD((poorana) => {
      return [...poorana, initial];
    });
  }
function deleteData(index){
  console.log("deleted"+index);
  setD((poorana)=>{
    return poorana.filter((value,i)=>{
      return index!==i;
    })
  })
}
  return (
    <div className="App">
      <div className="ram">
        <br />
        <h2 className="text-alert" >To Do List</h2>
        <input style={{ marginRight: 10, marginTop: 25 }} type="text" onChange={typeData} placeholder="Add to list" />
        <button className="btn btn-info" onClick={setData}>Set Data</button>
        <ol>
          {
            set.map((values, index) => {
              return (
                <div className="fff">
                  <DeleteIcon onClick={() => {
                    deleteData(index)
                  }
                  } style={{ display: 'inline', float: "left" }} />
                  <li >{values}</li>
                </div>
              )
            })
          }
        </ol>
      </div>

    </div>
  );
}

export default App;
