import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import './App.css';
import 'semantic-ui-css/semantic.min.css'
import ReactList from 'react-list';

const axios = require('axios');

var name = "";
var employeeID = null;

function App() {

  const [employees, setEmployees] = useState([])

  function createEmployee() {

    if (name === "" || employeeID == null) {
      console.log("invalid input")
      return
    }
    var params = { name: name, id: employeeID }

    console.log(name, employeeID)
    const res = axios.post('/createEmployee', {
      params: params
    }).then((msg) => {
      console.log(msg);
      name = ""
      employeeID = ""
    })
  }

  async function getEmployees() {
    const res = await axios.get('/getAllEmployees')
    var temp = JSON.parse(res.data)
    setEmployees(temp);
  }

  function renderItem(index, key) {
    return (<div key={key} style={{ color: "black" }}>
      <div class="ui animated button" style={{ width: "400px", height: "55px", backgroundColor: "#DCDCDC", margin: "2px" }}>
        <div style={{ color: "#778899" }}>{employees[index].properties.emp_id.low}</div>
        <div style={{ margin: "2px" }}>{employees[index].properties.name}</div>
      </div>
    </div>);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{
          backgroundImage: 'url(' + require('./images/Background.jpg') + ')',
          backgroundSize: 'cover',
          height: '100vh',
          width: '100%',
          opacity: '1'
        }}>
          <h1 style={{ color: "#2F4F4F", fontSize: "45px", margin: "20px" }}>Employee Portal</h1>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <div class="ui left icon input" id="enterName">
                  <input type="text" placeholder="Enter name" onChange={(val) => { name = val.target.value }}></input>
                  <i class="users icon"></i>
                </div>

                <div class="ui input" id="enterID">
                  <input type="text" placeholder="Enter ID" onChange={(val) => { employeeID = parseInt(val.target.value) }}></input>
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2} style={{ margin: " 20px" }}>
                <div class="ui animated button" tabindex="0" onClick={() => { createEmployee() }}
                  style={{ backgroundColor: "#2F4F4F	", width: "150px", height: "60px", color: "white" }}>
                  <div class="visible content" style={{ color: "white", marginTop: "10px" }}>Create a Record</div>
                  <div class="hidden content">
                    <i class="right arrow icon" style={{ color: "white" }}></i>
                  </div>
                </div>
                <button class="ui secondary button" onClick={() => { getEmployees() }}
                  style={{ width: "150px", height: "60px" }}>
                  Get All Records
          </button>
              </Grid>
            </Grid>
            <Grid item xs={12}>


              {/* {employees} */}
              <div style={{ overflow: 'auto', maxHeight: 400 }}>
                <ReactList
                  itemRenderer={renderItem}
                  length={employees.length}
                  type='uniform'
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </header>
    </div>
  );
}

export default App;
