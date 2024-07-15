import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import PhotoCard from '../PhotoCard';
function PhotoList(props) {
    const { photoList, onPhotoEditClick, onPhotoRemoveClick } = props;
  
    return (
      <Row>
        {photoList.map(photo => (
          <Col key={photo.title} xs="12" md="6" lg="3">
            <PhotoCard 
              
              photo={photo}
              onEditClick={onPhotoEditClick}
              onRemoveClick={onPhotoRemoveClick}>
            
            </PhotoCard>
         
          
          </Col>
        ))}
      </Row>
    );
  }
  
  export default PhotoList;