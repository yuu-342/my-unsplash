import React from 'react';
import SaveButton from 'components/atoms/SaveButton';
import 'assets/css/containers/organisms/AddItemForm.css';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

const AddItemFrom = () => {
  const classes = useStyles();
  return (
    <div className='add-item-form'>
      <h2>Add a new item</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-textarea"
                   variant="outlined"
                   label="Note"
                   multiline
                   rowsMax={4} />
        <TextField id="outlined-basic" label="Image" variant="outlined" />
        <TextField id="outlined-basic" label="Category" variant="outlined" />
        <SaveButton />
      </form>
    </div>
  )
};

export default AddItemFrom;