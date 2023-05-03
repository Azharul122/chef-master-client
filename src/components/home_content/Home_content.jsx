import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faExper } from '@fortawesome/free-solid-svg-icons'
const Home_content = () => {
    const [chef,setchef]=useState([]);
    // const [chefName,chefExperience,chefId,numberOfreciepe,likes,chefPhoto]=chef
    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res=>res.json())
        .then(data=>setchef(data))
    },[])


   
    return (
        <div>
            <section className=' md:container md:mx-auto grid grid-cols-3 gap-4'>
                {

                    chef.map(ch=>
                        
                        <div className="card border p-2 md:p-5 shadow shadow-blue-500" key={ch.chefId} >
                            {/* {
                                console.log(ch)
                            } */}
                        <img src={ch.chefPhoto} alt="" className='mb-2 h-[200px] w-[80%] md:w-[90%] mx-auto' />
                             <h2 className='text-xl md:text-2xl mb-2'>{ch.chefName}</h2>
                             <div className="flex justify-between items-center mb-2">
                                 <p>reciepe makes: {4}</p>
                                 <p>Experience:{ch.chefExperience}</p>
                             </div>
                             <div className="flex justify-between items-center">
                                 <p>Likes:{ch.likes}</p>
                                 <Link className="bg-[#1F2937] py-2 px-2 " to={`/chef-reciepies/${ch.chefId}`}>View reciepe</Link>
                             </div>
                        </div>
                    )
                }
            </section>
        </div>
    );
};

export default Home_content;