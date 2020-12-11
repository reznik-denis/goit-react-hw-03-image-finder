import React from 'react';
import s from './LoadMore.module.css';

export default function LoadMore({onClick}) {
    return (
        <button type='button' className={s.Button} onClick={() => onClick()}>Load more</button>
    )
}
