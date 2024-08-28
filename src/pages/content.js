import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, DialogActions, DialogContent } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
function Content() {
  const addStyle = {
    marginTop: "40%",
  };
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [input,setInput]=useState('')
  const handleChange=(e)=>{
    setInput(e.target.value)

  }
  return (
    <>
      <Box
        padding={5}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 300,
            height: 350,
          },
        }}
      >
        <Paper elevation={4}>
          <div className=" d-flex justify-content-center">
            <Button style={addStyle} onClick={handleClickOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
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
            <Dialog
             open={open} onClose={handleClose} maxWidth={"lg"}>
              <DialogTitle>
                {"Create Feedback Form"}
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
                  value={input}
                  onChange={handleChange}
                />
              </DialogContent>
              <DialogActions>
                <Link to="/second" state={input} className="text-decoration-none" style={{color:"#4caf50"}}>CREATE</Link>                
              <Button onClick={handleClose} style={{color:"grey"}}>Cancel</Button>
              </DialogActions>
            </Dialog>
          </div>
          <h1 className="text-center mt-4">New form</h1>
        </Paper>
      </Box>
    </>
  );
}
export default Content;
