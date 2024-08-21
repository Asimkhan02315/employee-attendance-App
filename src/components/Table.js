
import React, { useEffect, useState } from "react";
import Form from "./Form";
import axios from 'axios'
import moment from 'moment';

const  Table = () => {

    const [tableData, setTableData] = useState([])
    const [refresh , setrefresh] = useState(false)
    const [enable,setEnable] = useState(false)

   useEffect(()=>{
    axios.get('http://localhost:5000/employee')
  .then(function (response) {
    // handle success
    console.log(response);
    setTableData(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
   },[refresh])

   const handleClick = (data) => {
    const {id,employee_code, employee_name,date,status,logintime ,logouttime,label} = data
    console.log(id)
    axios.put(`http://localhost:5000/employee/${id}`, {
      'employee_code': employee_code,
        'employee_name': employee_name,
        'date': date,
        'logintime': logintime ,
        'logouttime': logouttime,
        'status': status == 'active' ? 'Inactive' : 'active',
        'label':status == 'active' ? 'Pending' : 'start',
      }).then(() => {
        setrefresh(!refresh)
      })
  }
  
  const enableClick =(enable)=>{
    setEnable(!enable);
  }

  
    return (
      
      <div className="container mt-4">  
            <Form setrefresh={setrefresh} refresh={refresh}/>
      <h1 className="mt-4">Table Data</h1>

  
<div style={{textAlign:'right'}}>
<button onClick={()=>{enableClick(enable)}}
style={{display:'inline-block'}} className='btn btn-primary'>enable button {enable ? 'true' : 'false'}</button>
</div>

      <table className="table">

        <thead>
          <tr>
            <th>Employee_code</th>
            <th>Employee_name</th>
            <th>Date</th>
            <th>Login Time</th>
            <th>Logout Time</th>
            <th>Status</th>
            <th>Label</th>
          </tr>
        </thead>
        <tbody>
          {tableData && tableData?.map((data, index) => {
            return (
            
              <tr key={index}>
                <td>{data.employee_code}</td>
                <td>{data.employee_name}</td>
                <td>{moment(data.date).format("DD/MM/YYYY")}</td>

                <td>{moment(data.time).format("HH:MM a")} </td>

                <td>{data.logouttime}</td>

      <td>
          {enable ? 
            <button className={data.status == 'active' ? 'btn btn-success' : 'btn btn-danger'} 
            onClick={() => handleClick(data)}>
              {data.status }
            </button>
          :
          data.status
          }  
      </td>
  
             <td>{data.label}</td>
              </tr>

            );
          })}
          
        </tbody>
      </table>

</div>
    )
  }
  export default Table;