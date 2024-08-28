import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Header1() {
  const navigate=useNavigate()
  const handleSubmit=()=>{
    navigate("/feedBack")
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "white" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ color: "black", fontWeight: "600" }}
            >
              USER FEEDBACK
            </Typography>
            <Button
              style={{ backgroundColor: "#2196f3", color: "white" }}
              className="me-3"
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button style={{ backgroundColor: "#357a38", color: "white" }}>
              Publish
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
export default Header1;
