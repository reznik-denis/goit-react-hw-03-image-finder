import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ pictures, onClick }) {
    return (<ul className={s.ImageGallery}>
        {pictures.hits.map(({ id, smallImage, largeImageURL }) => (<li key={id} className={s.ImageGalleryItem} onClick={() => onClick()}>
            <ImageGalleryItem smallImageUrl={smallImage} largeImageURL={largeImageURL} />
        </li>
        ))}
        </ul>);    
};

