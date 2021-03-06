import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";


const StyledButton = withStyles ({
    label: { color: 'primary.main' }
})( Button );

const StyledText = withStyles ({
    h5: { fontFamily: '"Caveat Brush", sans-serif' }
})( Typography );

const AddButton = ( props ) => {
    return (
        <StyledButton variant="contained"
                      onClick={ props.onClick }
                      color='primary'
                      size='large'
        >
            <StyledText variant='h5' align='center' >
                Add Haiku
            </StyledText>
        </StyledButton >
    );
};

export default AddButton
