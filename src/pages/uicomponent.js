import Container from "react-bootstrap/esm/Container"
import Button from "react-bootstrap/Button"
import TextField from '@mui/material/TextField';
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/esm/Col";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from "react";
import { useNavigate } from "react-router-dom";




function UComponents(props){
  const navigate=useNavigate()
  const [input,setInput]=useState(props.comment)
  const handleBackSlash=()=>{
    navigate("/third")
  }
  const handleCancel=()=>{
    navigate("/third")
    
  }
  const handleChange=(event)=>{
    setInput(event.target.value)
    
  }
 

    return(
      <>
       <Container>
        <div
          class="offcanvas offcanvas-end show "
          tabindex="-1"
          id="offcanvas"
          aria-labelledby="offcanvasLabel"
          style={{ marginTop: "4%", width: "20rem" }}
        >
          <div class="offcanvas-header">
          <Button style={{width:"40px", backgroundColor:"white",border:"none"}} onClick={handleBackSlash}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-chevron-left float-start"
                      viewBox="0 0 16 16"
                      style={{ color: "black" }}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                      />
                    </svg>
                  </Button>
            <h5 class="offcanvas-title fs-6" id="offcanvasLabel">
              Back to Add Fields
            </h5>
          </div>
          <div class="offcanvas-body overflow-hidden">
            <Row>
              <Col>
              <TextField id="standard-basic" variant="standard" className="w-100" value={input} onChange={(e)=>handleChange(e)} />
              </Col>
            </Row>
            <Row>
              <Col className="mt-3">
              <FormControlLabel control={<Switch defaultChecked />} label="Required" />
              </Col>
            </Row>
            <Row>
              <Col className="mt-3">
              <TextField id="standard-basic" label="Error message" variant="standard" className="w-100" value={"Value"} />
              </Col>
            </Row>
            <Row>
              <Col className="mt-3 col-auto">
              <Button
              style={{ backgroundColor: "#2196f3", color: "white",width:"80px",fontWeight:"500" }}
            
            >
              Save
            </Button>
              </Col>
              <Col className="mt-3">
              <Button
              style={{ backgroundColor: "white", color: "black",border:"none",width:"100px" }}
              className="shadow  mb-5 bg-body-tertiary rounded" onClick={handleCancel}
            > 
              Cancel
            </Button>
              </Col>
            </Row>

            </div>

          </div>
          </Container>
      </>
    )
    
  }
  export default UComponents