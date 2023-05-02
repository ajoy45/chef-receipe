import React from 'react';
import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router-dom';
const ChefCard = ({ data }) => {
    // console.log(data)
    const { id,chef_picture, chef_name, number_of_recipes, likes, years_of_experience } = data
    return (
        <div >
            <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                <div className="relative">
                    <img
                        className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                        src={chef_picture}
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                </div>
                <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                    <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                        {chef_name}
                    </h5>
                    <h5 className="mb-5 text-gray-700 font-bold">
                        Years Of experience:{years_of_experience}
                    </h5>
                    <h5 className="mb-5 text-gray-700 font-bold">
                        Number Of Recipes:{number_of_recipes.length}
                    </h5>

                    <div className='flex md:justify-center text-blue-400'>
                        
                        <h5 className="mb-5 text-gray-700 font-bold">
                            Likes:{likes}
                        </h5>
                        <AiFillLike ></AiFillLike>
                    </div>
                    <Link to={`/recipe/${id}`}
                        type="submit"
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide bg-red-500 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        View Recipes
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;