import { useState } from "react";
import { Box, Grid } from '@material-ui/core';
import SubmitButton from "./SubmitButton"
import setUnknownAuthor from "../utility/setUnknownAuthor"
import syllable from 'syllable';
import Filter from 'bad-words'
import AddFormLine from "./AddFormLine";
import AddFormNameLine from "./AddFormNameLine";

const AddForm = ( props ) => {
    const [line1, setLine1] = useState('')
    const [line2, setLine2] = useState('')
    const [line3, setLine3] = useState('')
    const [name, setName] = useState('')

    const onSubmit = ( e ) => {
        e.preventDefault()

        const clearLines = () => {
            setLine1('')
            setLine2('')
            setLine3('')
            setName('')
            document.getElementById('check1').style.opacity = '0'
            document.getElementById('check2').style.opacity = '0'
            document.getElementById('check3').style.opacity = '0'
        }

        if ( !((syllable(line1) >= 5 && syllable(line1) <= 6)
            && (syllable(line2) >= 7 && syllable(line2) <= 8)
            && (syllable(line3) >= 4 && syllable(line3) <= 6)) )
        {
            clearLines()
            return
        }

        const filter = new Filter();
        let text1 = filter.clean(line1);
        let text2 = filter.clean(line2);
        let text3 = filter.clean(line3);

        let author;
        name ? author = filter.clean(name) : author = setUnknownAuthor()

        props.onAdd({ text1, text2, text3, author })
        props.onClick()

        clearLines()
    }

    return (
        <form className='add-form' onSubmit={ onSubmit }>
            <Box color='secondary.dark' bgcolor='primary.main'>
                <Box p='24px'>
                    <Grid container direction='column'>
                        <Grid item>
                            <Box mx='20px'>
                                <Grid container justify='space-between'>
                                    <Grid item >
                                        <Box>
                                            <AddFormLine label='Five syllables ...'
                                                         getValue={ line1 }
                                                         setVal={ setLine1 }
                                                         n1={ 5 }
                                                         n2={ 6 }
                                                         id='1'
                                            />
                                            <AddFormLine label='Seven syllables ...'
                                                         getValue={ line2 }
                                                         setVal={ setLine2 }
                                                         n1={ 7 }
                                                         n2={ 8 }
                                                         id='2'
                                            />
                                            <AddFormLine label='Five syllables ...'
                                                         getValue={ line3 }
                                                         setVal={ setLine3 }
                                                         n1={ 4 }
                                                         n2={ 6 }
                                                         id='3'
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Box m='20px'>
                            <Grid container justify="space-between" grid="nowrap" >
                                <Box maxWidth='36ch' mb='12px'>
                                    <AddFormNameLine name={ name } setName={ setName } />
                                </Box>
                                <SubmitButton />
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </form>
    );
};

export default AddForm;
