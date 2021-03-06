import {FormControl, Input, InputAdornment, InputLabel, Typography } from "@material-ui/core";


const AddFormNameLine = ( props ) => {
    return (
        <FormControl fullWidth={ false }>
            <InputLabel htmlFor='name-input' >
                <Typography variant='body1' color='secondary'>
                    Author Name
                </Typography>
            </InputLabel>
            <Input id='name-input'
                   autoComplete='off'
                   value={ props.name }
                   inputProps={{ maxLength: 24 }}
                   onChange={ (e) =>
                       props.setName(e.target.value)
                   }
                   startAdornment={
                       <InputAdornment position="start">
                           <i>by</i>
                       </InputAdornment>
                   } />
        </FormControl>
    );
};

export default AddFormNameLine
