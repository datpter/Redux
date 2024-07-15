import React from 'react';
import Select from 'react-select';
import { Formik,Form, FastField } from 'formik';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from '../../../contanst/globla';
import Imgaes from '../../../contanst/img';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RamdomPhotoField';

function PhotoForm(props) {
  const {initialValues ,isAddMode} = props
  
    // npm i --save react-select
    // const initialValues = {
    //   title : '',
    //   categoryId: null,
    //   photo: ''
    // }

    return (
    
     <Formik
     initialValues={initialValues}
    //  onSubmit={values=> console.log('Submit',values)}
    onSubmit={props.onSubmit}
     >
        {FormikProps => {
            const {values , errors, touched} = FormikProps
            console.log({values, errors, touched});
            return (
                <Form>
                    <FastField 
                    name = 'title'
                    component= {InputField}

                    label ='Title'
                    placeholder = ' Wow naturehjdchad'
                    > </FastField>


                    <FastField 
                    name = 'categoryId'
                    component= {SelectField}

                    label ='Category'
                    placeholder = 'Whats your photo category?'
                    options={PHOTO_CATEGORY_OPTIONS}
                    ></FastField>

                    <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />
          
                <FormGroup>
                  <Button color="primary">{isAddMode? 'Add to album' : 'Update' }</Button>
                </FormGroup>
              </Form>
            )
        }}
     </Formik>
    );
  }
  
  export default PhotoForm;