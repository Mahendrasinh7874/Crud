import React , {useState,useEffect} from "react";
import { Table , Button } from "reactstrap";
import axios from 'axios'
import { Link } from "react-router-dom";

const Read = () => {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get("https://63048edc761a3bce77ea472d.mockapi.io/Crud")
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) =>{
    let { id , firstname , lastname ,checkbox } = data;
    localStorage.setItem('ID',id)
    localStorage.setItem('First Name',firstname)
    localStorage.setItem('Last Name',lastname)
   localStorage.setItem('checkbox value',checkbox)
    console.log(data)
  }
  const getData = () => {
    axios.get(`https://63048edc761a3bce77ea472d.mockapi.io/Crud`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}
  const onDelete = (id) =>{
    axios.delete(`https://63048edc761a3bce77ea472d.mockapi.io/Crud/${id}`)
    .then(() =>{
      getData();
    })
  }
  return (
    <div style={{ width: "60%", margin: "auto" }}>
   <Link to='/'>
   <Button className="btn btn-lg-dark"> Add New</Button><br/><br/>
   </Link>
      <Table bordered={true}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Checked</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {APIData.map((data) => {
                return (
                    <tr>
                    <td>{data.firstname}</td>
                    <td>{data.lastname}</td>
                    <td>{data.checkbox ? 'Checked' : 'Unchecked'}</td>
                    <td> <Link to='/update'> <Button className="btn btn-info " onClick={() => setData(data)}>Update</Button> </Link></td>
                    <td> <Button className="btn btn-danger" onClick={() => onDelete(data.id)}>Delete</Button> </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Read;
