import React from 'react'

function Venues() {
    const venue = [
        {
            stadium:"Sheikh Zayed Stadium",
            place:"Abu Dhabi"
        },
        {
            stadium:"Dubai International Cricket Stadium",
            place:"Dubai"
        },
        {
            stadium:"Sharjah Cricket Stasium",
            place:"Sharjah"
        }
    ]
    return (
        <div>
            {
                venue.map((data,index)=>{
                    return(
                        <div className="mt-3 ml-3" key={index}>
                            <p className=""> {data.stadium}</p>
                            <p className="w3-small w3-text-gray">{data.place}</p>
                            <hr className="mt-1 mb-1" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Venues
