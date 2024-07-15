import React from 'react';
import Banner from '../../../../components/Banner';
import './styles.scss'
import PhotoForm from '../../../components/PhotoFrom';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useNavigate, useParams } from 'react-router-dom';
function AddEditPage (){
    const text = 'Pick your amazing photo'
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {photoId} = useParams()
    
    const isAddMode = !photoId;
 const editedPhoto = useSelector (state => {
    
    const resulte= state.photos.find(photo => {  
return photo.id === +photoId
    })
    return resulte 
 })

 const  initialValues = isAddMode ? { 
    title : '',
    categoryId: null,
    photo: ''
  }: editedPhoto

   
    const handleSubmit = (values) => {
        console.log('Form submit', values);
        if(isAddMode){
            const action = addPhoto(values)
            console.log( action);
            dispatch(action);
        }else {
             const action = updatePhoto(values)
             dispatch(action);

        }
        navigate('/photos')
    }
    return (
       <div className='photo-edit'>
        <Banner title= {text} ></Banner>
        <div className='photo-edit_from '>

        </div>
        <PhotoForm
        isAddMode = { isAddMode }
        initialValues = {initialValues}
        
        onSubmit={handleSubmit} />

       </div>
    )
}
export default AddEditPage;