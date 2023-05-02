import React from 'react';
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const SingleRecipe = ({ recipe }) => {
    const {recipe_name,cooking_method,rating,ingredients}=recipe;
   const ratingStar= Array.from({length:5},(e,index)=>{
        let number=index+0.5;
        return <span key={index}>
           {
            rating>=index+1?<FaStar></FaStar>:rating>=number?<FaStarHalfAlt></FaStarHalfAlt>:<AiOutlineStar></AiOutlineStar>
           }
        </span>
    })
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">

                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name:{recipe_name}</h2>
                    <h2 className="card-title">Cooking:{cooking_method}</h2>
                    <h2 className="card-title">Rating:{ratingStar}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleRecipe;