import s from './ImageGalleryItem.module.css';
import React from 'react';

export default function ImageGalleryItem({onClick}) {
    return <li className={s.ImageGalleryItem} onClick={() => onClick()}>
        <img src="" alt="" className={s.ImageGalleryItemImage} />
</li>
}