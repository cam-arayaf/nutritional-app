import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { foodDishes } from './../constants';

const PredefinedFoodDishes = ({ getData }) => (
    <Grid item xs={ 12 } sm={ 6 }>
        <Paper className="paper">
            {
                foodDishes.map(foodDish => {
                    const { title } = foodDish;
                    return (
                        <Button
                            key={ title }
                            id={ title }
                            value={ title }
                            variant="contained"
                            onClick={
                                () => getData(document.querySelector(`#${ title }`).value.trim())
                            }
                        >
                            { title }
                        </Button>
                    );
                })
            }
        </Paper>
    </Grid>
);

PredefinedFoodDishes.displayName = 'PredefinedFoodDishes';

export default PredefinedFoodDishes;