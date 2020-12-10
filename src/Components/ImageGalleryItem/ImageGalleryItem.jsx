import s from './ImageGalleryItem.module.css';
import React from 'react';

export default function ImageGalleryItem({props}) {
    return (<li className={s.ImageGalleryItem} onClick={() => props.onClick()}>
        <img src="" alt="" className={s.ImageGalleryItemImage} />
</li>
    )
}