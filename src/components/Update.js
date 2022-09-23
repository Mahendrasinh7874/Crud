
import axios from 'axios'
import {message} from 'antd'
import React , {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {Form,FormGroup,Button,Label} from 'reactstrap'

const Update = () => {
    const navigate = useNavigate() 
    const[firstname, setFirstName] = useState('')
    const [id, setID] = useState(null);

    const[lastname, setLastName] = useState('')
    const[checkbox, setCheckbox] = useState(false)
  

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
}, []);


    
  const postDate = (e) =>{
    let x = document.forms["myForm"]["fname"]["firstname"]["lastname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  
    e.preventDefault();

    axios.put(`https://63048edc761a3bce77ea472d.mockapi.io/Crud/${id}`,{
      firstname,
      lastname,
      checkbox,
      
    })

alert("success");
    navigate('/read')
  }

  

  return (
    
<div style={{margin:"auto",padding:"30px 20rem",display : 'flex',justifyContent : 'center' , alignItems : 'center'}}>

<Form inline onSubmit={postDate} name='myForm'>
  <FormGroup required
  >
    <Label
      for="exampleEmail"
      
    >
      FirstName
    </Label>
    <input
    className='input'
    required
    value={firstname}
    
    onChange={(e) => setFirstName(e.target.value)}
      id="exampleEmail"
      name="firstname"
      // value={firstname}
      placeholder="Firstname"
      type="text"
    />
  </FormGroup>

 
  <FormGroup>
    <Label
      for="examplePassword"
      
    >
      Lastname
    </Label>
    <input
    className='input'

    required={true}
    value={lastname}

    onChange={(e) => setLastName(e.target.value)}
      id="examplePassword"
      name="lastname"
      placeholder="Last Name"
      type="text"
    />
  </FormGroup>
  <FormGroup
  check
  inline
> 
<input value={checkbox} style={{marginRight : 10,position : 'relative',right : 20}} type='checkbox' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}     required={true}
  />
<Label style={{marginRight : 10,position : 'relative',right : 20}} check>
 I agree to the Terms and Conditions
</Label>
  
 
</FormGroup>

<br />

  <Button type='submit'  className='mt-2'>
    Submit
  </Button>
</Form>

  </div>
  )
}

export default Update