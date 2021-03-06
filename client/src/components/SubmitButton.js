import { withStyles, Button } from '@material-ui/core';

const StyledButton = withStyles ({
    label: {
        color: 'whitesmoke'
    },
})( Button );

const SubmitButton = () => {
    return (
        <StyledButton variant="contained"
                      type="submit"
                      color='secondary'
                      size='large' >
            submit
        </StyledButton>
    );
};

export default SubmitButton
