import React, { useContext} from 'react';
import { AppBar, Toolbar, makeStyles, Box} from '@material-ui/core';


import { AccountContext } from '../context/AccountProvide';

import Login from './account/Login';
import ChatBox from './ChatBox';

const useStyles = makeStyles({
    component:{
        height: '100vh',
        background:'#DCDCDC',
    },
    loginHeader: {
        background: '#00bfa5',
        height: 200,
        boxShadow: 'none'
    },
    header: {
        background: '#128C7E',
        height: 115,
        boxShadow: 'none'
    },
})
const Messenger = () => {
    const classes = useStyles();
    const { account } = useContext(AccountContext);
    return(
        <Box className={classes.component}>
            <AppBar className={account ? classes.header : classes.loginHeadert}>
            <Toolbar
            ></Toolbar>
          </AppBar>
        
         { account ? <ChatBox/> : <Login /> }
        </Box>
    )
}
export default Messenger;