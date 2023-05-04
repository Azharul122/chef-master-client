import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ChefResiepes = () => {

    const { id } = useParams()
    const [reciepsd, setReciepe] = useState([])
    const [chefs,setChefs]=useState([])
    
    useEffect(() => {
        fetch(`http://localhost:5000/chef/${id}`)
            .then(res => res.json())
            .then(data => setReciepe(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/chef/`)
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    // console.log(singlechef.chefExperience)
    const singChef=chefs.filter(che=>che.chefId==id)

//disable button and display toast
    const disbleme=(event)=>{
        toast("Added to favorite")
        event.currentTarget.disabled = true;
        event.currentTarget.style.backgroundColor="red"
        event.currentTarget.style.color="white"
    }
    return (
        <div>
             <ToastContainer />
            <section className="">
                {
                    singChef.map(chef=>
                        <div key={chef.chefId} className='chef md:container md:mx-auto grid grid-cols-1 md:grid-cols-2 items-center py-3'>
                       <div className="">
                        <img src={chef.chefPhoto} alt="" className='text-center h-[200px] md:h-[300px] mx-auto rounded-lg'/>
                       </div>
                       <div className="">
                        <p className=' font-bold text-2xl pb-3 w-[80%] '>{chef.chefName}</p>
                        <p>{chef.sortBio}</p>
                        <p className='pb-3'>Chef Experience: <span>{chef.chefExperience}</span></p>
                        <p className='pb-3'>Number Of Reciepes: <span>{reciepsd.length}</span></p>
                        <p className=''>Likes: <span>{chef.likes}</span></p>
                       </div>
                    </div>
                    
                    
                    )
                }
            </section>
            <section className="recioepe md:container md:mx-auto grid grid-cols-1 md:grid-cols-2">
                {
                    reciepsd.map(rec =>
                        <div className="card border p-2 md:p-5 shadow shadow-blue-500" key={rec.reciepieId} >
                            {/* {
                            console.log(ch)
                        } */}
                            <img src={rec.photo} alt="" className='mb-2 h-[200px] w-[80%] md:w-[90%] mx-auto' />
                            <h2 className='text-xl md:text-2xl mb-2'>{rec.reciepeName}</h2>
                            <small>{rec.cookingMethod}</small>
                            <p className='text-center text-xl py-2 '>Ingredients</p>
                            {
                                rec.ingredients.map(ingr=><ul className='list-disc px-4 md;px-9'>
                                    <li>{ingr}</li>
                                </ul>)
                            }

                            
                            <div className="flex justify-between items-center mt-2">
                                <p>Rating:<span>{rec.rating}</span></p>
                               
                                <button className='py-2 px-2 bg-[#374151]' onClick={disbleme} id='bttn'>Add to wishList</button>
                            </div>
                        </div>
                    )
                }
            </section>
   
        </div>
    );
};

export default ChefResiepes;