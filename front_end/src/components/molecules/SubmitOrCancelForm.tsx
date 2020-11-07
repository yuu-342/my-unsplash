import React from 'react';
import SaveButton from 'components/atoms/SaveButton';
import CancelButton from 'components/atoms/CancelButton';
import 'assets/css/components/molecures/SubmitOrCancelForm.css';

type OnClickFunction = () => void

interface Props {
  onClick: OnClickFunction,
  onSubmit: OnClickFunction
}
const SubmitOrCancelForm:React.FC<Props> = ({ onClick, onSubmit})=> {
  return (
    <div className='submit-form'>
      <CancelButton onClick={onClick}/>
      <SaveButton onClick={onSubmit} />
    </div>
  )
};

export default SubmitOrCancelForm;