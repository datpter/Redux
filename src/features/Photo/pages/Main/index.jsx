import React from "react";
import Banner from "../../../../components/Banner";
import Imgaes from "../../../../contanst/img";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import PhotoList from "features/components/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";
import { useNavigate } from 'react-router-dom';
function MainPage  (props)
{
  const navigate = useNavigate();
  const dispatch = useDispatch()
const photos =useSelector (state => state.photos)
console.log(photos, 'listening');

   const hanlePhotoEditClick = (photo) => {
    console.log('Edit', photo);

    navigate(`/photos/${photo.id}`)
   }
   const handlePhotoRemoveClick = (photo) => {
    const removePhotoId = photo.id
   const action = removePhoto (removePhotoId)
   dispatch (action)
 
    
   }

    return ( 
      <div className="photo-main">
        <Banner title= "Your awesome photod" backgroundUrl= {Imgaes.Blue}></Banner>
        <Container className="text-center">
          <div className="py-5">
            <Link to= '/photos/add'>Add new photo</Link>
            </div>
            <PhotoList 
            photoList = {photos}
            onPhotoEditClick = {hanlePhotoEditClick}
            onPhotoRemoveClick = {handlePhotoRemoveClick}
            >
              
            </PhotoList>
        </Container>

      </div>
    )
}
export default MainPage;