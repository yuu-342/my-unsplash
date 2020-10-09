import React from 'react';
import axios from 'axios';
import SaveButton from 'components/atoms/SaveButton';
import 'assets/css/containers/organisms/AddItemForm.css';
import { useForm } from 'react-hook-form';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import SaveItemListForm from 'components/molecules/SaveItemListForm';

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

type FormData = {
  name: string;
  note: string;
  image_url: string;
  category: string;
}

const AddItemFrom = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit((data: FormData) => {
    axios.post('http://localhost:3001/items', { items: data })
  });

  return (
    <div className='add-item-form'>
      <h2>Add a new item</h2>
      <form className={classes.root} noValidate autoComplete='off' onSubmit={onSubmit}>
        <TextField id='outlined-basic' label='Name' variant='outlined' inputRef={register} name='name'/>
        <TextField id='outlined-textarea'
                   variant='outlined'
                   label='Note'
                   multiline
                   rowsMax={4}
                   inputRef={register}
                   name='note'/>
        <TextField id='outlined-basic' label='ImageUrl' variant='outlined' inputRef={register} name='image_url' />
        <TextField id='outlined-basic' label='Category' variant='outlined' inputRef={register} name='category'/>
        <SaveButton onClick={onSubmit}></SaveButton>
      </form>
      <SaveItemListForm/>
    </div>
  )
};

export default AddItemFrom;