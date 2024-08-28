import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Divider from "@mui/material/Divider";
import DialogActions from "@mui/material/DialogActions"
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from "@mui/material/DialogContent";
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button';
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

// import UComponents from "./uicomponent";
import { useState } from "react";
import UComponents from "./uicomponent";

function SecondComponent() {
  const [textAreaComment,setText]=useState("Would you like to add a comment?")
  const [editContent,setEdit]=useState(true)
  const location = useLocation();
   const [input,setInput] = useState(location.state);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const StyledRating = styled(Rating)(({ theme }) => ({
    "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
      color: theme.palette.action.disabled,
    },
  }));
  
  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon color="error" />,
      label: "Very Dissatisfied",
    },
    2: {
      icon: <SentimentDissatisfiedIcon color="error" />,
      label: "Dissatisfied",
    },
    3: {
      icon: <SentimentSatisfiedIcon color="warning" />,
      label: "Neutral",
    },
    4: {
      icon: <SentimentSatisfiedAltIcon color="success" />,
      label: "Satisfied",
    },
    5: {
      icon: <SentimentVerySatisfiedIcon color="success" />,
      label: "Very Satisfied",
    },
  };

  const buttons = [
    <Button
      key="1"
      style={{
        backgroundColor: "white",
        color: "black",
        borderColor: "grey",
        padding: "15px",
        borderRadius: "0px",
      }}
    >
      1
    </Button>,
    <Button
      key="2"
      style={{
        backgroundColor: "white",
        color: "black",
        borderColor: "grey",
        padding: "15px",
        borderRadius: "0px",
      }}
    >
      2
    </Button>,
    <Button
      key="3"
      style={{
        backgroundColor: "white",
        color: "black",
        borderColor: "grey",
        padding: "15px",
        borderRadius: "0px",
      }}
    >
      3
    </Button>,
    <Button
      key="4"
      style={{
        backgroundColor: "white",
        color: "black",
        borderColor: "grey",
        padding: "15px",
        borderRadius: "0px",
      }}
    >
      4
    </Button>,
    <Button
      key="5"
      style={{
        backgroundColor: "white",
        color: "black",
        borderColor: "grey",
        padding: "15px",
        borderRadius: "0px",
      }}
    >
      5
    </Button>,
    <Button
      key="6"
      style={{
        backgroundColor: "white",
        color: "black",
        borderColor: "grey",
        padding: "15px",
        borderRadius: "0px",
      }}
    >
      6
    </Button>,
    <Button
      key="7"
      style={{
        backgroundColor: "white",
        color: "black",
        borderColor: "grey",
        padding: "15px",
        borderRadius: "0px",
      }}
    >
      7
    </Button>,
    <Button
      key="8"
      style={{
        backgroundColor: "white",
        color: "black",
        borderColor: "grey",
        padding: "15px",
        borderRadius: "0px",
      }}
    >
      8
    </Button>,
    <Button
      key="9"
      style={{
        backgroundColor: "white",
        color: "black",
        borderColor: "grey",
        padding: "15px",
        borderRadius: "0px",
      }}
    >
      9
    </Button>,
    <Button
      key="10"
      style={{
        backgroundColor: "white",
        color: "black",
        borderColor: "grey",
        padding: "15px",
        borderRadius: "0px",
      }}
    >
      10
    </Button>,
  ];
  const [input1,setInput1]=useState(input)
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const handleEditTxt=()=>{
    setEdit(false)
  }
  const handleTitle=()=>{
    setInput(input1)
    setOpen(false)
    
     
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setInput1(event.target.value)
  };
  const [textarea, setVal] = useState([]);
  const [numericRate, setNum] = useState([]);
  const [smileRate, setSmile] = useState([]);
  const [starRate, setStar] = useState([]);
  const [SingleLine, setSingle] = useState([]);
  const [radioRate, setRadio] = useState([]);
  const [cate, setCate] = useState([]);

  const handleTxtArea = () => {
    setAdd(false);
    setVal([...textarea, {}]);
  };
  const hig = () => {
    setNum([...numericRate, {}]);
  };
  const handleRemoveNum = (index) => {
    setNum(numericRate.filter((_, i) => i !== index));
  };
  const handleRemovTxt = (index) => {
    setVal(textarea.filter((_, i) => i !== index));
    setAdd(true);
  };
  const handleSmile = () => {
    setSmile([...smileRate, {}]);
  };
  const handleRemovSmile = (index) => {
    setSmile(smileRate.filter((_, i) => i !== index));
  };
  const handleStar = () => {
    setStar([...starRate, {}]);
  };
  const handleRemoveStar = (index) => {
    setStar(starRate.filter((_, i) => i !== index));
  };
  const handleSingle = () => {
    setSingle([...SingleLine, {}]);
  };
  const hanndleRemoveSingle = (index) => {
    setSingle(SingleLine.filter((_, i) => i !== index));
  };
  const handleRadio = () => {
    setRadio([...radioRate, {}]);
  };
  const handleRemove = (index) => {
    setRadio(radioRate.filter((_, i) => i !== index));
  };
  const handleCate = () => {
    setCate([...cate, {}]);
  };
  const handleRemoveCat = (index) => {
    setCate(cate.filter((_, i) => i !== index));
  };

  const [addTxt, setAdd] = useState(true);
  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }

  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };

  return (
    <>
      <Container fluid className="d-flex justify-content-center mt-5">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 500,
              height: "auto",
            },
          }}
        >
          <Paper elevation={4}>
            <Container
              style={{
                backgroundColor: "#5578F4",
                color: "white",
                padding: "10px",
              }}
            >
              <Row>
                <Col className="col-auto">
                  <Link to={"/"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-chevron-left mt-1"
                      viewBox="0 0 16 16"
                      style={{ color: "white" }}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                      />
                    </svg>
                  </Link>
                </Col>
                <Col className="col-auto mt-1">
                  <h6 className="fw-bolder">{input}</h6>
                </Col>
                <Col>
                <Button onClick={handleClickOpen}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-fill "
                    viewBox="0 0 16 16"
                    style={{ color: "white" }}
                  >
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                  </svg>
              </Button>
              <Dialog
             open={open} onClose={handleClose} maxWidth={"lg"}>
              <DialogTitle>
                {"Edit"}
              </DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  name="generic"
                  type="text"
                  variant="standard"
                  style={{width:"400px"}}
                  value={input1}
                  onChange={handleChange}
                />
              </DialogContent>
              <DialogActions>
                <Link className="text-decoration-none" style={{color:"#4caf50"}} onClick={()=>handleTitle()}>Save</Link>                
              <Button onClick={handleClose} style={{color:"grey"}}>Cancel</Button>
              </DialogActions>
            </Dialog>
                </Col>
              </Row>
            </Container>
            <Divider />
            {addTxt ? (
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "50%",
                  marginBottom: "50%",
                }}
              >
                Add Fields
              </h3>
            ) : null}
            <Container className="container mt-4 w-100 p-4">
              <Row>
                {textarea.map((data, i) => (
                  <div key={i}>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        "& > :not(style)": {
                          m: 1,
                          width: 600,
                          height: 200,
                        },
                      }}
                    >
                      <Paper elevation={4} style={{ padding: "10px" }}>
                        <p>{textAreaComment}</p>
                        <Textarea
                          disabled={false}
                          minRows={2}
                          size="lg"
                          variant="outlined"
                        />
                        <IconButton
                          aria-label="delete"
                          size="large"
                          className="float-end"
                          onClick={() => handleRemovTxt(i)}
                        >
                          <DeleteIcon fontSize="inherit" />
                        </IconButton>
                        <IconButton
                          aria-label="edit"
                          size="large"
                          className="float-end"
                          onClick={handleEditTxt}
                        >
                          <EditIcon fontSize="inherit" />
                        </IconButton>
                      </Paper>
                    </Box>
                  </div>
                ))}
              </Row>
              <Row>
                {numericRate.map((data, i) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        m: 1,
                        width: 600,
                        height: 200,
                      },
                    }}
                  >
                    <Paper elevation={4} style={{ padding: "10px" }}>
                      <p>
                        How likely is it that you will recommend us to your
                        family and friends?
                      </p>

                      <ButtonGroup
                        size="large"
                        aria-label="Large button group"
                        variant="outlined"
                      >
                        {buttons}
                      </ButtonGroup>
                      <IconButton
                        onClick={() => handleRemoveNum(i)}
                        aria-label="delete"
                        size="large"
                        className="float-end"
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        aria-label="edit"
                        size="large"
                        className="float-end"
                      >
                        <EditIcon fontSize="inherit" />
                      </IconButton>
                    </Paper>
                  </Box>
                ))}
              </Row>
              <Row>
                {starRate.map((data, i) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        m: 1,
                        width: 600,
                        height: 200,
                      },
                    }}
                  >
                    <Paper elevation={4} style={{ padding: "10px" }}>
                      <p>Give a star rating for the website</p>
                      <Container style={{ width: "100%" }}>
                        <Rating name="size-large" size="large" />
                      </Container>
                      <IconButton
                        onClick={() => handleRemoveStar(i)}
                        aria-label="delete"
                        size="large"
                        className="float-end"
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        aria-label="edit"
                        size="large"
                        className="float-end"
                      >
                        <EditIcon fontSize="inherit" />
                      </IconButton>
                    </Paper>
                  </Box>
                ))}
              </Row>
              <Row>
                {smileRate.map((data, i) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        m: 1,
                        width: 600,
                        height: 200,
                      },
                    }}
                  >
                    <Paper elevation={4} style={{ padding: "10px" }}>
                      <p>What is your opinion of this page</p>
                      <Container style={{ width: "100%" }}>
                        <StyledRating
                          name="highlight-selected-only"
                          defaultValue={null}
                          IconContainerComponent={IconContainer}
                          getLabelText={(value) => customIcons[value].label}
                          highlightSelectedOnly
                        />
                      </Container>
                      <IconButton
                        onClick={() => handleRemovSmile(i)}
                        aria-label="delete"
                        size="large"
                        className="float-end"
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        aria-label="edit"
                        size="large"
                        className="float-end"
                      >
                        <EditIcon fontSize="inherit" />
                      </IconButton>
                    </Paper>
                  </Box>
                ))}
              </Row>
              <Row>
                {SingleLine.map((data, i) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        m: 1,
                        width: 600,
                        height: 200,
                      },
                    }}
                  >
                    <Paper elevation={4} style={{ padding: "10px" }}>
                      <p>Do you have any suggestions to improve our website?</p>
                      <Container style={{ width: "100%" }}>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          size="small"
                          className="w-100"
                        />
                      </Container>
                      <IconButton
                        onClick={() => hanndleRemoveSingle(i)}
                        aria-label="delete"
                        size="large"
                        className="float-end"
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        aria-label="edit"
                        size="large"
                        className="float-end"
                      >
                        <EditIcon fontSize="inherit" />
                      </IconButton>
                    </Paper>
                  </Box>
                ))}
              </Row>
              <Row>
                {radioRate.map((data, i) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        m: 1,
                        width: 600,
                        height: 250,
                      },
                    }}
                  >
                    <Paper elevation={4} style={{ padding: "10px" }}>
                      <p>Multiple choice-1 answer</p>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="radio1"
                          control={<Radio />}
                          label="Radio 1"
                        />
                        <FormControlLabel
                          value="radio2"
                          control={<Radio />}
                          label="Radio 2"
                        />
                        <FormControlLabel
                          value="radio3"
                          control={<Radio />}
                          label="Radio 3"
                        />
                      </RadioGroup>

                      <IconButton
                        onClick={() => handleRemove(i)}
                        aria-label="delete"
                        size="large"
                        className="float-end"
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        aria-label="edit"
                        size="large"
                        className="float-end"
                      >
                        <EditIcon fontSize="inherit" />
                      </IconButton>
                    </Paper>
                  </Box>
                ))}
              </Row>
              <Row>
                {cate.map((data, i) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        m: 1,
                        width: 600,
                        height: 200,
                      },
                    }}
                  >
                    <Paper elevation={4} style={{ padding: "10px" }}>
                      <p>Pick a subjectand provide your feedback</p>
                      <Stack spacing={2} direction="row">
                        <Button variant="outlined" style={{borderColor:"grey" ,width:"25%",color:"black"}}>Bug</Button>
                        <Button variant="outlined" style={{borderColor:"grey" ,width:"25%",color:"black"}}>Content</Button>
                        <Button variant="outlined" style={{borderColor:"grey" ,width:"25%",color:"black"}}>Other</Button>
                      </Stack>

                      <IconButton
                        onClick={() => handleRemoveCat(i)}
                        aria-label="delete"
                        size="large"
                        className="float-end"
                      >
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        aria-label="edit"
                        size="large"
                        className="float-end"
                      >
                        <EditIcon fontSize="inherit" />
                      </IconButton>
                    </Paper>
                  </Box>
                ))}
              </Row>
            </Container>
          </Paper>
        </Box>
      </Container>
     {editContent ? <Container fluid>
        <div
          class="offcanvas offcanvas-end show p-2"
          tabindex="-1"
          id="offcanvas"
          aria-labelledby="offcanvasLabel"
          style={{ marginTop: "4%", width: "20rem" }}
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasLabel">
              All fields
            </h5>
          </div>
          <div class="offcanvas-body overflow-hidden">
            <Row>
              <Col className="col-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-textarea-resize mt-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4.5A2.5 2.5 0 0 1 2.5 2h11A2.5 2.5 0 0 1 16 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 11.5zM2.5 3A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3zm10.854 4.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0m0 2.5a.5.5 0 0 1 0 .708l-.5.5a.5.5 0 0 1-.708-.708l.5-.5a.5.5 0 0 1 .708 0" />
                </svg>
              </Col>
              <Col>
                <p className="mt-2" style={{ fontSize: "16px" }}>
                  Textarea
                </p>
              </Col>
              <Col>
                <Button
                  className="bg-light float-end"
                  style={{ color: "blue", border: "none", width: "4rem" }}
                  onClick={() => handleTxtArea()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                  </svg>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="col-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-sort-numeric-down mt-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z" />
                  <path
                    fill-rule="evenodd"
                    d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98"
                  />
                  <path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293z" />
                </svg>
              </Col>
              <Col className=" col-6">
                <p className="mt-2" style={{ fontSize: "16px" }}>
                  Numeric Rating
                </p>
              </Col>
              <Col>
                <Button
                  className="bg-light float-end"
                  style={{ color: "blue", border: "none", width: "4rem" }}
                  onClick={hig}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                  </svg>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="col-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-star mt-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                </svg>
              </Col>
              <Col>
                <p className="mt-2" style={{ fontSize: "16px" }}>
                  Star rating
                </p>
              </Col>
              <Col>
                <Button
                  className="bg-light float-end"
                  style={{ color: "blue", border: "none", width: "4rem" }}
                  onClick={handleStar}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                  </svg>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="col-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-emoji-smile mt-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                </svg>
              </Col>
              <Col className="col-6">
                <p className="mt-2" style={{ fontSize: "16px" }}>
                  Smiley rating
                </p>
              </Col>
              <Col>
                <Button
                  className="bg-light float-end"
                  style={{ color: "blue", border: "none", width: "4rem" }}
                  onClick={handleSmile}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                  </svg>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="col-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-code-slash mt-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                </svg>
              </Col>
              <Col className=" col-6">
                <p className="mt-2" style={{ fontSize: "16px" }}>
                  Single line input
                </p>
              </Col>
              <Col>
                <Button
                  className="bg-light float-end"
                  style={{ color: "blue", border: "none", width: "4rem" }}
                  onClick={handleSingle}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                  </svg>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="col-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-ui-radios mt-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM0 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0m7-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5M3 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                </svg>
              </Col>
              <Col className="col-6">
                <p className="mt-2" style={{ fontSize: "16px" }}>
                  Radio button
                </p>
              </Col>
              <Col>
                <Button
                  className="bg-light float-end"
                  style={{ color: "blue", border: "none", width: "4rem" }}
                  onClick={handleRadio}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                  </svg>
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="col-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-menu-button-wide-fill mt-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
                </svg>
              </Col>
              <Col>
                <p className="mt-2" style={{ fontSize: "16px" }}>
                  Categories
                </p>
              </Col>
              <Col>
                <Button
                  className="bg-light float-end"
                  style={{ color: "blue", border: "none", width: "4rem" }}
                  onClick={handleCate}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                  </svg>
                </Button>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <h5>Add Logic</h5>
              </Col>
              <div className="offcanvas-body">
                <Row>
                  <Col>
                    <p
                      className="mt-2"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Show based on URL conditions{" "}
                    </p>
                  </Col>
                  <Col className="col-1">
                    <Switch {...label} defaultChecked className="float-end " />
                  </Col>
                </Row>
                <Row className=" mb-4">
                  <Col>
                    <TextField
                      id="standard-basic"
                      label="http://"
                      variant="standard"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p
                      className="mt-2"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Show on a specific date{" "}
                    </p>
                  </Col>
                  <Col className="col-1">
                    <Switch {...label} defaultChecked className="float-end " />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TextField
                      id="outlined-basic"
                      label="Start date"
                      variant="outlined"
                      placeholder="MM/DD/YYYY"
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <p
                      className="mt-2"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Show on a specific time{" "}
                    </p>
                  </Col>
                  <Col className="col-1">
                    <Switch {...label} defaultChecked className="float-end " />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <TextField
                      id="outlined-basic"
                      label="Select Time"
                      variant="outlined"
                      placeholder="hh:mm:aa"
                    />
                  </Col>
                </Row>
              </div>
            </Row>
          </div>
        </div>
      </Container> :<UComponents comment={textAreaComment}/>}
    </>
  );
}

export default SecondComponent;
