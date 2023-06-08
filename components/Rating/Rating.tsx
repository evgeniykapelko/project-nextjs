import { RatingProps } from "./Rating.props";
import styles from './Rating.module.css';
import cn from 'classnames';
import { useState } from 'react';
import StarIcon from './Vector.svg';

export const Rating = ({isEditable = false, rating, setRating, className, ...props}: RatingProps): JSX.Element => {
    // const { 
    //     ratingArray, 
    //     setRatingArray 
    // } = useState<JSX.Element[]>(new Array(5).fill(<></>));

    // const constructRating = (currentRating: number) => {
    //     const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
    //         return (
    //             <></>
    //         );
    //     }
    // };

    return (
        <div {...props}>

        </div>
    )
};