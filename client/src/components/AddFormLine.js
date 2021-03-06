import {FormControl, Input, InputAdornment, InputLabel, Typography } from "@material-ui/core";
import {teal} from "@material-ui/core/colors";
import Check from "@material-ui/icons/Check";
import syllable from "syllable";


const AddFormLine = ( props ) => {
    return (
        <FormControl fullWidth={ true }>
            <InputLabel htmlFor="heading-input-1" >
                <Typography variant='body2' color='secondary'>
                    { props.label }
                </Typography>
            </InputLabel>
            <Input id="heading-input-1"
                   autoComplete='off'
                   value={ props.getValue }
                   inputProps={{ maxLength: 42 }}
                   onChange={ (e) =>
                   {
                       props.setVal( e.target.value )
                       syllable( e.target.value ) >= props.n1 && syllable(e.target.value) <= props.n2
                           ? document.getElementById(`check${props.id}`).style.opacity = '1'
                           : document.getElementById(`check${props.id}`).style.opacity = '0'
                   }}
                   endAdornment={
                       <InputAdornment position="end">
                           <Check id={`check${props.id}`} style={{ color: teal['A700'], opacity: 0 }} />
                       </InputAdornment>
                   } />
        </FormControl>
    );
};

export default AddFormLine
