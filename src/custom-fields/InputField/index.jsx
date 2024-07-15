import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';
function InputField (props){
 const {field, form,
  type , label, placeholder , disabled
 } = props;  
 const {name , value , onChange,onBlur} = field

 return (
    <FormGroup>
   {label && <Label for={name}>{label}</Label> }

    <Input 
     name={name} 
     id={name}
     value={value}
     onChange={onChange}
     disabled = {disabled}
     onBlur={onBlur} 
     type = {type}
     placeholder={placeholder}/>
   
  </FormGroup>
 )
}
export default InputField;