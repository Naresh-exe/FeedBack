import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Divider from "@mui/material/Divider";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import { useState } from "react";
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}
function getTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}
function FeedBackDetail() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isLoading = currentPath === "/feedBack";
  console.log(isLoading);
  const [currentDate, setCurrentDate] = useState(getDate());
  const currentTime = useState(getTime());

  return (
    <>
      <Container fluid className="mt-5">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 1770,
              height: 1200,
            },
          }}
        >
          <Paper elevation={4}>
            <Container
              fluid
              style={{
                backgroundColor: "#5578F4",
                color: "white",
                padding: "10px",
                width: "auto",
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
                      class="bi bi-chevron-left mt-2"
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
                <Col className="col-auto mt-2">
                  <h6 className="fw-bolder">Generic Website Rating</h6>
                </Col>
                <Col className="mt-2">
                  <p className="float-end me-4">Created Date:{currentDate}</p>
                </Col>
              </Row>
            </Container>
            <Divider />
            <Container>
              <Row>
                <Col className="col-auto" style={{ marginRight: "20%" }}>
                  <Row>
                    <p
                      className="fw-bolder"
                      style={{
                        fontSize: "90px",
                        padding: "0px",
                        margin: "0px",
                        marginLeft: "15px",
                      }}
                    >
                      40
                    </p>
                  </Row>
                  <Row>
                    <p className="fs-1 fw-lighter text-uppercase">views</p>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <p
                      className="fw-bolder"
                      style={{
                        fontSize: "90px",
                        padding: "0px",
                        margin: "0px",
                        marginLeft: "70px",
                      }}
                    >
                      3
                    </p>
                  </Row>
                  <Row>
                    <p className="fs-1 fw-lighter">Submitted</p>
                  </Row>
                </Col>
              </Row>
            </Container>
            <Container fluid className="p-4 mt-3">
              <Row>
                <p className="fw-bold">Page URL contains example.com/about</p>
              </Row>
              <Row>
                <p className="fw-bold">Date: {currentDate}</p>
              </Row>
              <Row>
                <p className="fw-bolder">Time: {currentTime} </p>
              </Row>
            </Container>
            <Container fluid className="p-4">
              <h2>Feedback List</h2>
            </Container>
            <Container fluid className="p-5">
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: 2000,
                    height: 550,
                  },
                }}
              >
                <Paper elevation={3}>
                    <Container fluid className="p-4">
                    <p className="fw-bold fs-6 text-primary">Feedback 1</p>
                  <Row>
                    <p>Would you like to add a comment?</p>
                  </Row>
                  <Row>
                    <p>
                      The website is user-friendly and easy to navigate. I found
                      exactly what I was looking for without any hassle. The
                      checkout process was quick, and I appreciate the seamless
                      online shopping experience.
                    </p>
                  </Row>
                  <Row>
                    <p>
                      How likely is it that you will recommend us to your family
                      and friends?
                    </p>
                  </Row>
                  <Row>
                    <p>5</p>
                  </Row>
                  <Row>
                    <p>Give a star rating for the website.</p>
                  </Row>
                  <Row>
                    <p>2</p>
                  </Row>
                  <Row>
                    <p>Do you have any suggestions to improve our website?</p>
                  </Row>
                  <Row>
                    <p>
                      The website is user-friendly and easy to navigate. I found
                      exactly what I was looking for without any hassle. The
                      checkout process was quick, and I appreciate the seamless
                      online shopping experience.
                    </p>
                  </Row>
                  <Row>
                    <p>Multiple choice - 1 answer</p>
                  </Row>
                  <Row>
                    <p>Radio 1</p>
                  </Row>
                  <Row>
                    <p>Pick a subject and provide your feedback:</p>
                  </Row>
                  <Row>
                    <p>Bug</p>
                  </Row>
                    </Container>
                </Paper>
              </Box>
            </Container>
          </Paper>
        </Box>
      </Container>
    </>
  );
}
export default FeedBackDetail;
