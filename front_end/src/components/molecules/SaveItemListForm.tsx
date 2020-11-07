import React, { useCallback } from 'react';
import SaveButton from 'components/atoms/SaveButton';
import 'assets/css/components/molecures/SaveItemListForm.css';

type OnClickFunction = () => void

const SaveItemListForm = () => {
  const onClick: OnClickFunction = useCallback(() => {
  },[]);

  return (
    <form>
      <input type="search" name="list" value=""/>
      <SaveButton onClick={onClick}/>
    </form>
  )
}

export default SaveItemListForm;