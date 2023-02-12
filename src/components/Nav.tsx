import React,{useState} from 'react';
import {Link} from "react-router-dom";
import logo from '../img/logoN.png';
import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import AddBusinessIcon from '@mui/icons-material/AddBusiness';
const Nav = (props: { nom: string, setNom: (nom: string) => void ,id: string,setId: (id: string) => void,role: string,setRole: (role: string) => void,prenom: string, setPrenom: (prenom: string) => void}) => {
    const logout = async () => {
        
        await fetch('http://localhost:8080/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        
        props.setNom('');
        props.setId('');
        props.setPrenom('');
        props.setRole('');
        
    }
    const [value, setValue] = useState(0);
    const [value1, setValue1] = useState(0);
    let menu;
    let menuA;
    
    if (props.id === '') {
        menu = (
            <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                
                textColor="inherit"
                value={value1}
                 onChange={(e, value1) => setValue1(value1)}
                 TabIndicatorProps={{
                    style: {
                      backgroundColor: "#0288d1"
                     }
                    }}>
            <Tab label="login" sx={{ marginLeft: "auto" }} component={Link} to={'/login'} />
            <Tab label="signup" sx={{ marginLeft: "10px" }} component={Link} to={'/register'}/>
            </Tabs>
        )
    
    
    }else {
      menu = (
            <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                
                textColor="inherit"
                value={value1}
                 onChange={(e, value1) => setValue1(value1)}
                 TabIndicatorProps={{
                    style: {
                      backgroundColor: "#0288d1"
                     }
                    }}>
            <Tab label="logout" sx={{ marginLeft: "10px" }} component={Link} to={'/login'} onClick={logout}/>
            </Tabs>
        )
      if(props.role === 'utilisateur'){
        menuA = (
          <Tabs
          sx={{ marginLeft: "auto" }}
          indicatorColor="secondary"
          textColor="inherit"
          value={value}
          onChange={(e, value) => setValue(value)}
          TabIndicatorProps={{
              style: {
                backgroundColor: "#0288d1"
               }
              }}
        >
          <Tab label="Home"  component={Link} to={'/'}/>
          <Tab label="Todo" component={Link} to={'/userTodo'}/>
          
          
          
        </Tabs>
  )  
      }
      
    }
    
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
    return (
        <React.Fragment>
      <AppBar sx={{ background: "#39444f" }}>
        <Toolbar>
          <Link to={`/`}><img src={logo} height="30" width="auto" /></Link>
          {isMatch ? (
            <>
              
              
            </>
          ) : (
            <>
              {menuA}
              {menu}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Nav;