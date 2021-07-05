import React from 'react'

export default function Menubar() {
    return (
        <div>

            <div className="Menubar-container">
                <div className="container">
                    <div className="logo">
                        <h5 className="movielogo">
                            MOVIE
                            <hr className="hrline"></hr>
                        </h5>
                        <h5 className="rentlogo">
                            RENT
                        </h5>
                    </div>
                    <div className="Menubar-contant">
                        <p className="Series">
                            Series
                        </p>
                        <p className="Films">
                            Films
                        </p>
                        <p className="Collection">
                            Collection
                        </p>
                        <div className="searchbar">
                            <input className="inputbox" type="text" ></input>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
