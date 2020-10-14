import React from 'react';
import axios from 'axios';
import SaveButton from 'components/atoms/SaveButton';
import CancelButton from 'components/atoms/CancelButton';
import 'assets/css/containers/organisms/AddItemForm.css';
import { useForm } from 'react-hook-form';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    formItem: {
      margin: '20px 0',
      width: '300px'
    }
  }),
);

type FormData = {
  name: string;
  note: string;
  image_url: string;
  category: string;
}

type Category = string;

interface Props {
  categories: Category[],
  func: any
}

const AddItemFrom:React.FC<Props> = ({ categories, func }) => {
  const classes = useStyles();
  const { register, handleSubmit, setValue, control } = useForm<FormData>();
  const onSubmit = handleSubmit((data: FormData) => {
    console.log(data)
    axios.post('http://localhost:3001/items', { items: data })
  });

  return (
    <div className='add-item-form'>
      <form className={`${classes.root} form-area`} noValidate autoComplete='off' onSubmit={onSubmit}>
        <h2 className='form__title'>Add a new item</h2>
        <TextField id='outlined-basic' label='Name' variant='outlined' inputRef={register} name='name' className={classes.formItem}/>
        <TextField id='outlined-textarea'
                   variant='outlined'
                   label='Note'
                   multiline
                   rowsMax={4}
                   inputRef={register}
                   name='note'
                   className={classes.formItem} />
        <TextField id='outlined-basic' label='ImageUrl' variant='outlined' inputRef={register} name='image_url'  className={classes.formItem} />
        <TextField id='outlined-basic'
                   label="Category"
                   variant="outlined"
                   name='category'
                   inputProps={{list: 'categories'}}
                   inputRef={register}
                   className={classes.formItem}
        />
        <datalist id='categories'>
          {
            categories.map((category: Category) => {
              return <option value={category} />
            })
          }
        </datalist>
        <div className='submit-form'>
          <CancelButton onClick={func}/>
          <SaveButton onClick={onSubmit} />
        </div>
      </form>
    </div>
  )
};

export default AddItemFrom;