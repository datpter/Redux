import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
function SelectField(props) {
  const {field, form,type , label, placeholder , disabled,options } = props; 
  const {name , value , onChange,onBlur} = field
  const selectedOption = options.find(option=> option.value === value)
  const handleSelectedOptionChange = (selectedOption)=>{
  
    const selectedValue  = selectedOption ? selectedOption.value : selectedOption


    const changeEvent = {
      target: {
        name: name,
        value : selectedValue
      }
    }
    field.onChange (changeEvent)
  }
  

       return (
        <FormGroup>
       {label && <Label for={name}>{label}</Label> }
       <Select
        id={name}
        value = {selectedOption}
        onBlur={onBlur}
        onChange={handleSelectedOptionChange}
        placeholder={placeholder}
        isDisabled={disabled}
        options={options}

      
      />

      
      </FormGroup>
       )
  }
  
  export default SelectField;