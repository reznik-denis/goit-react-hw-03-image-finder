import s from './ImageGalleryItem.module.css';
import React from 'react';

export default function ImageGalleryItem({smallImage, largeImageURL}) {
    return <img src={smallImage} data-large={largeImageURL} alt="" className={s.ImageGalleryItemImage} />

}