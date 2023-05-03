import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';
import { TbChefHat } from "react-icons/tb";
import Team from './Team';
const Home = () => {
    const [isLoading,setIsLoading]=useState(true);
    const datas = useLoaderData();
    // console.log(data)
    useEffect(() => {
        // simulate loading data
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }, []);
    if(isLoading){
        
        return <progress className="progress w-56"></progress>
    }
    return (
        <div className='pb-16'>
            <Banner></Banner>
            <div className='text-center py-9'>
                <h1 className='text-3xl font-bold mt-24'>WELCOME TO INDIAN CHEF</h1>
                <div className=' text-purple-600 my-5 flex-col w-2/4 mx-auto border-opacity-50 text-6xl'>
                        <div className="divider"><TbChefHat ></TbChefHat></div>
                    </div>

                <p className='px-12 text-xl'>Indian Chef Take-Out Express Motto is to bring to your home the aroma of India's rich culture, flavor, and culinary heritage. The eatery features selections of Indian meals to choose from and is the best choice for tasty Indian dishes. They come up with great and flavorful meals at worth-able prices, with outstanding experiences for patrons of all ages and historic towns like Umatilla. Whether you're craving a quick bite or looking to treat yourself to a delicious meal, you can order your Indian Chef Take-Out Express favorites for takeaway or delivery, available on all platforms Uber Eats, Doordash, Grubhub and Toast.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 px-12 justify-center gap-4'>
            {
                datas.map(data => <ChefCard
                    key={data.id}
                    data={data}
                ></ChefCard>)
            }
            </div>
            <Team></Team>
        </div>
    );
};

export default Home;