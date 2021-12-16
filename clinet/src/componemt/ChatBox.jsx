
import { Box, Dialog, makeStyles, withStyles, } from '@material-ui/core';

import Menu from './menu/Menu';

const useStyles =makeStyles({
    component:{
        display:'flex'
    },
    leftComponent: {
        minWidth: 300
    },
    rightComponent: {
        borderLeft: '1px solid rgba(0, 0, 0, 0.14)'
    }
})
const style = {
    dialogPaper:{
        height:'95%',
        width: '91%',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        overflow: 'hidden'
    }
}
const ChatBox = ({ classes }) => {
    const classname = useStyles();
    return(
        <Dialog
        open={true}
        classes={{ paper: classes.dialogPaper}}
        BackdropProps={{style: {backgroundColor: 'unset'}}}
        >
            <Box className={classname.component}>
                <Box className={classname.leftComponent}>
                    <Menu/>
                </Box>
                <Box className={classname.rightComponent}>
                    hie
                </Box>
                
            </Box>

        </Dialog>
    )
}

export default withStyles(style)(ChatBox);