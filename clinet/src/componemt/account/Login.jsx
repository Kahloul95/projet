import { useContext } from "react";
import { Dialog,withStyles, Box, Typography,makeStyles, ListItem, List } from "@material-ui/core";
import { GoogleLogin, } from 'react-google-login';

import { AccountContext } from "../../context/AccountProvide";
const useStyle = makeStyles({
    component:{
        display: 'flex'
    },
    leftComponent: {
        padding: '56px 0 56px 56px',
    },
    qr: {
        margin: '50px 0 0 50px',
        height: 264,
        width: 264
    },
    title: {
        fontSize: 26,
        marginBottom: 25,
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight: 300   
    },
    list: {
        '&  > *': {
            padding: 0,
            marginTop: 15,
            fontSize: 18,
            lineHeight: '28px',
            color: '#4a4a4a'
        }
    }
    
})
const style = {
    dialogPaper: {
        top: '12%',
        height: '95%',
        width: '92%',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        overflow: 'hidden'
    }
}




const Login = ({ classes }) => {
    const classname = useStyle();
    const url = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const clientId = '29463886656-ipbcmiqlk1obglmbfigfen2svhedtlp5.apps.googleusercontent.com'
    
    const { account, setAccount} = useContext(AccountContext);



    const onLoginSuccess = (res) => {
        console.log(res);
        console.log('login Successfull',res.profileObj);
        setAccount(res.profileObj)
    }

    const onLoginFailure = () => {
        console.log('login Failed');
    }
    return (
        <Dialog
        open={true}
        classes={{ paper: classes.dialogPaper}}
        BackdropProps={{style:{backgroundColor:'unset'}}}
        >
            <Box className={classname.component}>
                <Box className={classname.dialog}>
                    <Typography className={classname.title}>To use whatsApp on your computer:</Typography>
                    <List className={classname.list}>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Box>
                <Box style={{position:'relative'}}>
                <img src={url} alt="QR" className={classname.qr} />
                <Box style={{ position: 'absolute', left:'50%',top:'50%'}}>
                <GoogleLogin
                clientId={clientId}
                buttonText=""
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />
                </Box>
                
                </Box>
                
            </Box>
        </Dialog>
    )
}

export default withStyles(style)(Login);