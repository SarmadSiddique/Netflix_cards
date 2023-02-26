import React from 'react'

function Common(prop) {
    const img = {
        height: "100%",
        width: "100%"
    }
    const card2 = {
        height: "203px"
    }

    
    return (
        <>
            {/* <div className=" col-lg-6  col-md-12 col-sm-12">
                <div className="row mt-5">
                    <div style={card} className="ml-auto mr-auto  col-md-11 col-sm-12 card2">
                        <div className="row content ">
                            <div className=" col-md-4 col-sm-5 m-0 p-0" >
                                <img className='img-fluid img ' style={img} src={prop.image} alt="" />
                            </div>
                            <div className="col-md-8 col-sm-12 pt-2 content2">
                                <h4 className='heading'>{prop.heading}</h4>
                                <span>{prop.recip}</span>
                                <div className="d-flex justify-content-between pt-4 content2">
                                    <button className='btn btn-success btn-md'>
                                        Order Now
                                    </button>
                                    <span className='mt-2 prize'>Price :{prop.price}</span>
                                </div>
                                <p className='para mt-3 text-start '>Lorem ipsum dolor sit amet</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div> */}
            
            <div className=" col-lg-6  col-md-12 col-sm-12">
                <div   className="card2 row m-0 p-0 mt-4 mb-2" >
                    <div style={card2} className="col-md-4 col-sm-12 m-0 p-0">
                        <img  className='img-fluid img ' style={img} src={prop.image} alt="" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <h4 className='heading'>{prop.heading}</h4>
                        <span>{prop.recip}</span>
                        <div className="d-flex justify-content-between pt-4 content2">
                            <button className='btn btn-success btn-md'>
                                Order Now
                            </button>
                            <span className='mt-2 prize'>Price :{prop.price}</span>
                        </div>
                        <p className='para mt-3 text-start '>Lorem ipsum dolor sit amet</p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Common