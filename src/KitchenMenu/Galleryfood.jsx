import React, { useState } from 'react'
import "./Gallery.css"
import Data from "./Data"
import Common from "./Common"

function Galleryfood() {
    const [state, setstate] = useState(Data)
    const filterfunc = (catelem) => {
        const item = Data.filter((current) => {
            return current.category === catelem ;
        })
        setstate(item);
        console.log(item);
    }

    return (
        <>
            <div className="container">
                <h3 className='text-center head'>Order Your Favourite Dish</h3>
                <hr />
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <button className=" btn btn-md bg-warning" onClick={() => filterfunc('breakfast')} >BreakFast</button>
                        <button className=" btn btn-md bg-warning" onClick={() => filterfunc('evening')}>Evening</button>
                        <button className=" btn btn-md bg-warning" onClick={() => filterfunc('lunch')}>Lunch</button>
                        <button className=" btn btn-md bg-warning" onClick={() => filterfunc('dinner')}>Dinner</button>
                        <button className=" btn btn-md bg-warning" onClick={() => setstate(Data) } >All</button>
                    </div>

                </div>


                <div className="row">
                    {state.map((val) => {
                        return (
                            <>
                                <Common
                                    image={val.image}
                                    heading={val.name}
                                    recip={val.description}
                                    price={val.price}
                                />

                            </>


                        )
                    })}
                 
                </div>


            </div>
        </>
    )
}

export default Galleryfood