import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery ({toggleModal}) {
    return (<ul className={s.ImageGallery}>
        <ImageGalleryItem onClick={toggleModal}/>
        </ul>);
}

