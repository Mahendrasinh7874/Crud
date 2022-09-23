import axios from "axios";
import React, { useState } from "react";
import { Navigate, useHistory, useNavigate } from "react-router-dom";
import { Form, FormGroup, Button, Label, Input, Checkbox } from "reactstrap";

const Create = () => {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const postDate = (e) => {
    e.preventDefault();

    axios
      .post(`https://63048edc761a3bce77ea472d.mockapi.io/Crud`, {
        firstname,
        lastname,
        checkbox,
      })
      .then(() => {
        navigate("/read");
      });
    alert("success");
    navigate("/read");
    console.log(firstname);
    console.log(lastname);
    console.log(checkbox);
  };

  return (
    <div style={{ margin: "auto", padding: "30px 20rem" , display:'flex' , justifyContent : 'center' , alignItems : 'center' }}>
      <Form inline onSubmit={postDate}>
        <FormGroup>
          <Label for="exampleEmail">FirstName</Label>
          <input
          value={firstname}
            required
            className="input"
            onChange={(e) => setFirstName(e.target.value)}
            id="exampleEmail"
            name="firstname"
            placeholder="Firstname"
            type="text"
          />
        </FormGroup>

        <FormGroup>
          <Label for="examplePassword">Lastname</Label>
          <input
          value={lastname}
            required
            className="input"
            onChange={(e) => setLastName(e.target.value)}
            id="examplePassword"
            name="lastname"
            placeholder="Last Name"
            type="text"
          />
        </FormGroup>
        <FormGroup check inline>
        <Input style={{marginRight : 10,position : 'relative',right : 0}}
        className="input"
        type="checkbox"
        onChange={(e) => setCheckbox(!checkbox)}
      />
          <Label style={{marginRight : 10,position : 'relative',left : 0}} check>label I agree to the Terms and Conditions</Label>
         
        </FormGroup>

        <br />

        <Button type="submit"  className="mt-2">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Create;
