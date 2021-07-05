import React from 'react'

function List({ people }) {
    console.log(people)
    return (
        <div className="container">
            {
              
                    people.map((details, index) => {

                    return <div key={index}>
                        <div className="datacontainer">
                            <img src={details.image} className="images" ></img>
                            <div className="name_year">
                                <p className="name">{details.name}</p>
                                <p className="year">Year {details.year}</p>
                            </div>
                        </div>
                    </div>
                })
              
            }

        </div>
    )
}

export default List