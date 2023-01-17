import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function List() {

  const [data, setData] = useState([])

  function loadData() {
    axios.get("https://63c663fcd307b76967380f55.mockapi.io/crud")
      .then((res) => {
        setData(res.data);
      })
  }

  function handleDelete(id) {
    axios.delete("https://63c663fcd307b76967380f55.mockapi.io/crud/" + id)
      .then((res) => {
        // console.log(res.data);
        loadData()
      })
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className='container mt-5'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((eachData, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.password}</td>
                  <td>
                    <Link to={'/'+ eachData.id}>
                      <button className='btn btn-success'>Edit</button>
                    </Link>
                    <button className='btn btn-danger ms-2' onClick={() => handleDelete(eachData.id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}
