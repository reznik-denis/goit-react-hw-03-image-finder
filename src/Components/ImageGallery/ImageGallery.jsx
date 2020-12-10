import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery ({onClick}) {
    return (<ul className={s.ImageGallery}>
        <ImageGalleryItem onClick={onClick}/>
        </ul>);
}

