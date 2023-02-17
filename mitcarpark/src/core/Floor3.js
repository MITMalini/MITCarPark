import React, { useState, useEffect } from "react";
import "./floor.css";
import Header from "./Header";
import { db } from "./firebase-config.js"
import { collection, getDocs } from "firebase/firestore"

export default function Floor3() {

    const [slots, setSlots] = useState([]);
    const slotCollectionRef = collection(db, "Slot");

    useEffect(() => {
        const getavailability = async () => {
            const data = await getDocs(slotCollectionRef);
            setSlots(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getavailability();
    }, [slots]);

    return (
        <div>
            <Header rootClassName="header-root-class-name"></Header>
            <div className="floor-container">
                <div className="floor-container1"><span className="floor-text"><span>Floor 3</span><br></br></span></div>
                <div className="floor-text2"><a href="/floor4" className="text-color:white">Go to Floor 4</a></div>
                <br></br>
                <div className='floor-container-1'>
                    <div className="floor-container-slotL">
                        {slots.slice(0, 2).map((slot) => {
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
                    <div className="floor-container-slotRS">
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
                        {slots.slice(2, 4).map((slot) => {
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
                        {slots.slice(4, 6).map((slot) => {
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
                        {slots.slice(6, 8).map((slot) => {
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
                        {slots.slice(8, 10).map((slot) => {
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
                        {slots.slice(10, 12).map((slot) => {
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
                        {slots.slice(12, 14).map((slot) => {
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
                        {slots.slice(14, 16).map((slot) => {
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
                        {slots.slice(16, 18).map((slot) => {
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