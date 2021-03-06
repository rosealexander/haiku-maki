import { withStyles, Box } from '@material-ui/core'
import Canvas from "./Canvas";


const StyledBox = withStyles ({
    root: { background: 'linear-gradient(180deg, #4D66FF 30%, white 90%)' }
})(Box);

const Background = () => {
    return (
        <StyledBox width='100vw' height='100vh' bgcolor='secondary.main' position='fixed' zIndex='-1' top='0' >
            <Canvas />
        </StyledBox >
    );
};

export default Background;
