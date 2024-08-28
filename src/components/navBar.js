import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function Header(){
    return(
        <>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
        style={{backgroundColor:"white"}}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{color:"black",fontWeight:'600'}}>
            USER FEEDBACK
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
        </>

    )
    
}
export default Header