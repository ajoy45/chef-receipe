import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleRecipe from './SingleRecipe';

const Recipe = () => {
    const recipe = useLoaderData();
    const { chef_picture, chef_name, description, likes, years_of_experience, number_of_recipes } = recipe
    return (
        <div>
            <div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                        <div className="relative lg:w-1/2">
                            <img
                                src={chef_picture}
                                alt=""
                                className="object-cover w-full lg:absolute h-80 lg:h-full"
                            />
                            <svg
                                className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                                viewBox="0 0 20 104"
                                fill="currentColor"
                            >
                                <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                            <div>
                                <h1 className="inline-block px-3 py-px mb-4 font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 text-3xl ">
                                    {chef_name}
                                </h1>
                            </div>
                            
                            <p className="mb-5 text-gray-800">
                                {description}
                            </p>
                            <h2 className="mb-5 text-gray-800 text-xl">
                               Number Of Recipe: {number_of_recipes.length}
                            </h2>
                            <h2 className="mb-5 text-gray-800 text-xl">
                               Year Of Experience: {years_of_experience}
                            </h2>
                            <h2 className="mb-5 text-gray-800 text-xl">
                               Likes: {likes}
                            </h2>
                            <div className="flex items-center">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide bg-red-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400  text-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                >
                                    Get started
                                </button>
                                <a
                                    href="/"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                >
                                    Learn More
                                    <svg
                                        className="inline-block w-3 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12"
                                    >
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div>
                <h1 className='text-center text-bold text-3xl '>MY <span className='text-purple-500 italic'>Recipe</span></h1>
             </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-12 py-16 '>
                {
                    number_of_recipes.map(recipe=><SingleRecipe
                       key={recipe.id}
                       recipe={recipe}
                    ></SingleRecipe>)
                }
            </div>
        </div>
    );
};

export default Recipe;