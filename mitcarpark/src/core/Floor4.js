import React, { useState, useEffect } from "react";
import "./floor.css";
import Header from "./Header";
import { db } from "./firebase-config.js"
import { collection, getDocs } from "firebase/firestore"

export default function Floor4() {

    const [slots, setSlots] = useState([]);
    const slotCollectionRef = collection(db, "Slot");

    useEffect(() => {
        const getavailability = async () => {
            const data = await getDocs(slotCollectionRef);
            setSlots(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getavailability();
    }, []);
    return (
        <div>
            <Header rootClassName="header-root-class-name"></Header>
            <div className="floor-container">
                <div className="floor-container1"><span className="floor-text"><span>Floor 4</span><br></br></span></div>
                <div className="floor-text3"><a href="/floor3" className="text-color:white">Go to Floor 3</a></div>
                <br></br>
                <div className='floor-container-1'>
                    <div className="floor-container-slotL">
                        {slots.slice(19, 21).map((slot) => {
                            if (slot.Availability === 1) {
                                return (
                                    <button className="floor-button-1 button">{slot.Lot}</button>)
                            } else {
                                return (
                                    <button className="floor-button-0 button">{slot.Lot}</button>
                                )
                            }
                        })
                        }
                    </div>
                    <div className="floor-container-slotR">
                        {slots.slice(18, 19).map((slot) => {
                            if (slot.Availability === 1) {
                                return (
                                    <button className="floor-button-1 button">{slot.Lot}</button>)
                            } else {
                                return (
                                    <button className="floor-button-0 button">{slot.Lot}</button>
                                )
                            }
                        })
                        }
                    </div>
                </div>
                <br></br>
                <div className='floor-container-1'>
                    <div className="floor-container-slotL">
                        {slots.slice(21, 23).map((slot) => {
                            if (slot.Availability === 1) {
                                return (
                                    <button className="floor-button-1 button">{slot.Lot}</button>)
                            } else {
                                return (
                                    <button className="floor-button-0 button">{slot.Lot}</button>
                                )
                            }
                        })}
                    </div>
                    <div className="floor-container-slotR">
                        {slots.slice(23, 25).map((slot) => {
                            if (slot.Availability === 1) {
                                return (
                                    <button className="floor-button-1 button">{slot.Lot}</button>)
                            } else {
                                return (
                                    <button className="floor-button-0 button">{slot.Lot}</button>
                                )
                            }
                        })
                        }
                    </div>
                </div>
                <br></br>
                <div className='floor-container-1'>
                    <div className="floor-container-slotL">
                        {slots.slice(25, 27).map((slot) => {
                            if (slot.Availability === 1) {
                                return (
                                    <button className="floor-button-1 button">{slot.Lot}</button>)
                            } else {
                                return (
                                    <button className="floor-button-0 button">{slot.Lot}</button>
                                )
                            }
                        })}
                    </div>
                    <div className="floor-container-slotR">
                        {slots.slice(27, 29).map((slot) => {
                            if (slot.Availability === 1) {
                                return (
                                    <button className="floor-button-1 button">{slot.Lot}</button>)
                            } else {
                                return (
                                    <button className="floor-button-0 button">{slot.Lot}</button>
                                )
                            }
                        })
                        }
                    </div>
                </div>
                <br></br>
                <div className='floor-container-1'>
                    <div className="floor-container-slotL">
                        {slots.slice(29, 31).map((slot) => {
                            if (slot.Availability === 1) {
                                return (
                                    <button className="floor-button-1 button">{slot.Lot}</button>)
                            } else {
                                return (
                                    <button className="floor-button-0 button">{slot.Lot}</button>
                                )
                            }
                        })}
                    </div>
                    <div className="floor-container-slotR">
                        {slots.slice(31, 33).map((slot) => {
                            if (slot.Availability === 1) {
                                return (
                                    <button className="floor-button-1 button">{slot.Lot}</button>)
                            } else {
                                return (
                                    <button className="floor-button-0 button">{slot.Lot}</button>
                                )
                            }
                        })
                        }
                    </div>
                </div>
                <br></br>
                <div className='floor-container-1'>
                    <div className="floor-container-slotL">
                        {slots.slice(33, 35).map((slot) => {
                            if (slot.Availability === 1) {
                                return (
                                    <button className="floor-button-1 button">{slot.Lot}</button>)
                            } else {
                                return (
                                    <button className="floor-button-0 button">{slot.Lot}</button>
                                )
                            }
                        })}
                    </div>
                    <div className="floor-container-slotR">
                        {slots.slice(35, 37).map((slot) => {
                            if (slot.Availability === 1) {
                                return (
                                    <button className="floor-button-1 button">{slot.Lot}</button>)
                            } else {
                                return (
                                    <button className="floor-button-0 button">{slot.Lot}</button>
                                )
                            }
                        })
                        }
                    </div>
                </div>
                <br></br>
            </div>
        </div>
    )
};