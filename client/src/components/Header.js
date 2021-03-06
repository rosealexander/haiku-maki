import { useState } from "react";
import { Container, Grid, Box, Typography, Dialog, withStyles } from '@material-ui/core';
import AddButton from "./AddButton";
import AddForm from "./AddForm";

const StyledText = withStyles ({
    h2: { fontFamily: '"Permanent Marker", sans-serif' }
})( Typography );


const Header = ( props ) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box color='white'
             width='1'
             my='2vh'
             py='4vh'
        >
            <Container maxWidth="md">
                <Grid container
                      direction="row"
                      justify="space-around"
                      alignItems="center"
                >
                    <Grid item>
                        <Box m='12px'>
                            <StyledText variant="h2" align='center' >
                                haiku maki
                            </StyledText>
                        </Box>
                    </Grid>
                    <Grid item>
                        <AddButton type="button" onClick={ handleOpen } />
                    </Grid>
                </Grid>
                <Dialog maxWidth={'xs'} open={ open } onClose={ handleClose } >
                    <AddForm  onClick={ handleClose } onAdd={ props.onAdd } />
                </Dialog>
            </Container>
        </Box>
    );
}

export default Header;
