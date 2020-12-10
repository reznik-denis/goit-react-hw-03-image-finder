import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ pictures, onClick }) {
    return (<ul className={s.ImageGallery}>
        {pictures.map(({ data }) => (<li key={data.hits.id} className={s.ImageGalleryItem} onClick={() => onClick()}>
        {ImageGalleryItem(data.hits.smallImage, data.hits.largeImageURL)}
        </li>
        ))}
        </ul>);    
};

{/* <ImageGalleryItem smallImageUrl={hits.smallImage} largeImageURL={hits.largeImageURL} /> */}