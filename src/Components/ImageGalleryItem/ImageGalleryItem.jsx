import s from './ImageGalleryItem.module.css';
import React from 'react';

export default function ImageGalleryItem({userImageURL}) {
    return <img src={userImageURL} alt="" className={s.ImageGalleryItemImage} />
}