import {Box, Container, Typography} from '@material-ui/core';


const Haiku = (props ) => {
    return (
        <Box color='secondary.dark'
             bgcolor='primary.main'
             borderRadius={ 5 }
             border={ 12 }
             borderLeft={ 12 }
             borderTop={ 3 }
             borderRight={ 0 }
             borderBottom={ 3 }
             borderColor = 'primary.light'
        >
            <Container>
                <Box pt='12px' textAlign='center'>
                    <Typography variant='body1' noWrap={true}>
                        { props.haiku.text1 }
                        <br />
                        { props.haiku.text2 }
                        <br />
                        { props.haiku.text3 }
                    </Typography>
                </Box>
                <Box  py='12px' textAlign='center'>
                    <Typography variant='caption' color='textPrimary'>
                        { `— ${props.haiku.author}` }
                    </Typography >
                </Box>
            </Container>
        </Box>
    );
};

export default Haiku;
