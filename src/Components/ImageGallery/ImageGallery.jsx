import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ pictures, onClick }) {
    return (<ul className={s.ImageGallery}>
        {pictures && pictures.map(({ id, webformatURL, largeImageURL }) => (<li key={id} className={s.ImageGalleryItem} onClick={() => onClick(largeImageURL)}>
                <ImageGalleryItem userImageURL={webformatURL} />
            </li>
            )) 
        }
        </ul>);    
};


