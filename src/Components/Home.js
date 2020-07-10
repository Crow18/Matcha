import React from 'react';

import '../Styles/Home.css';

export default function Home() {
    return (
        <div className="page">
            <div className="Left">
                <h1>Find a match for you!</h1>
                <h2>Find the match you want not the match you need</h2>
                <div className="L-form">
                    <p>I am a</p>
                    <div className="select">
                        <select className="select" name="targetAge" id="targetAge">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    <p>looking for a</p>
                    <div className="select">
                        <select className="select" name="targetAge" id="targetAge">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="Right">
                <div className="Form">
                    <h2>Find love today</h2>
                    <div className="Inputs">
                        <div className="F-left">
                            <label>First Name *</label>
                            <input />

                            <label>Date of birth *</label>
                            <input className="DOB" type="date"/>

                            <label>Sex (not Gender) *</label>
                            <div className="select">
                                <select className="select" name="targetAge" id="targetAge">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            <label>Email *</label>
                            <input type="text" />
                        </div>

                        <div className="F-right">
                            <label>Last Name *</label>
                            <input type="text"/>

                            <label>Age range *</label>
                            <div className="select">
                                <select className="select" name="targetAge" id="targetAge">
                                    <option value="0-3">0-3 yrs</option>
                                    <option value="4-7">4-7 yrs</option>
                                    <option value="7-10">7-10 yrs</option>
                                    <option value="11-14">11-14 yrs</option>
                                    <option value="15-18">15-18 yrs</option>
                                    <option value="19-22" selected>19-22 yrs</option>
                                    <option value="23-26">23-26 yrs</option>
                                    <option value="27-30">27-30 yrs</option>
                                    <option value="31-34">31-34 yrs</option>
                                    <option value="35-38">35-38 yrs</option>
                                    <option value="36-39">36-39 yrs</option>
                                    <option value="40-43">40-43 yrs</option>
                                    <option value="44-47">44-47 yrs</option>
                                    <option value="48-51">48-51 yrs</option>
                                    <option value="52-55">52-55 yrs</option>
                                    <option value="56-59">56-59 yrs</option>
                                    <option value="old">Dinosaur</option>
                                    <option value="old">Fossil</option>
                                </select>
                            </div>
                            
                            <label>I am looking for... *</label>
                            <div className="select">
                                <select className="select" name="targetAge" id="targetAge">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Both">Both</option>
                                    <option value="None">None</option>
                                </select>
                            </div>

                            <label>Password *</label>
                            <input type="password" />
                        </div>
                    </div>
                        <button>Sign Up</button>
                </div>
            </div>          
        </div>
    )
}