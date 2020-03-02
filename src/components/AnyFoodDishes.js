import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { foodDishes } from './../constants';

const AnyFoodDishes = ({ getData }) => (
    <Grid item xs={ 12 } sm={ 6 }>
        <Paper className="paper">
            <Autocomplete
                id="AnyFoodDishes"
                freeSolo
                options={ foodDishes.map(foodDish => foodDish.title) }
                renderInput={ params => (
                    <TextField
                        { ...params }
                        label="Food"
                        margin="normal"
                        variant="outlined"
                    />
                )}
            />
            <IconButton
                onClick={
                    () => getData(document.querySelector('#AnyFoodDishes').value.trim())
                }
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    </Grid>
);

AnyFoodDishes.displayName = 'AnyFoodDishes';

export default AnyFoodDishes;