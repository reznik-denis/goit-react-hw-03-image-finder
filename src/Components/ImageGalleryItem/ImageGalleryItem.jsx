import s from './ImageGalleryItem.module.css';
import React from 'react';

export default function ImageGalleryItem({smallImage}) {
    return <img src={smallImage} alt="" className={s.ImageGalleryItemImage} />

}