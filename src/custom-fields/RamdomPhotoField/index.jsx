
import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import RandomPhoto from 'components/RamdomPhoto';


function RandomPhotoField(props) {
    const { field, form, label } = props;
    const { name, value, onBlur } = field;
   
     
    const handleImageUrlChange = (newImageUrl) => {
      form.setFieldValue(name, newImageUrl)
    }
  
    return (
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}
  
        <RandomPhoto
          name={name}
          imageUrl={value}
          onImageUrlChange={handleImageUrlChange}
          onRandomButtonBlur={onBlur}
        />
  

      </FormGroup>
    );
  }
  
  export default RandomPhotoField;