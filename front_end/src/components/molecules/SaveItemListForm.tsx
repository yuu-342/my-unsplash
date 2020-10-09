import React from 'react';
import SaveButton from 'components/atoms/SaveButton';
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

const SaveItemListForm = () => {
  const classes = useStyles();

  const onClick = () => {
    console.log('success')
  }

  return (
    <form className={classes.root} noValidate autoComplete='off' onSubmit={onClick}>
      <TextField id='outlined-basic' label='ItemList' variant='outlined' name='ItemList'>
        <SaveButton onClick={() => onClick()} />
      </TextField>
    </form>
  )
}

export default SaveItemListForm;