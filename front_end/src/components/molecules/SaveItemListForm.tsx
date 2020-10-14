import React from 'react';
import SaveButton from 'components/atoms/SaveButton';
import 'assets/css/components/molecures/SaveItemListForm.css';

const SaveItemListForm = () => {
  const onClick = () => {
    console.log('success')
  }

  return (
    <form>
      <input type="search" name="list" value=""/>
      <SaveButton onClick={onClick()}/>
    </form>
  )
}

export default SaveItemListForm;