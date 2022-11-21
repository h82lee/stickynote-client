import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(()=>({
    update:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor:"transparent",
        border: 0,
        padding: "5px",
        outline: "none",
        resize: "none",
    }
})
)

export {useStyles};