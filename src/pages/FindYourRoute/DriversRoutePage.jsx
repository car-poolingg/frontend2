import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import Header from '../../components/global/Header/Header';
import "./RoutePage.css"
import { authAxiosInstance, logAxiosResponse } from '../../utils/request';
import { storeData } from '../../utils/api.storage';
import StorageConstants from '../../utils/constants.storage';


const DriversRoutePage = () => {
    const navigate = useNavigate()

    const [rideData, setRideData] = useState({
        destination: [9.082, 8.6753],
        pickup: [9.082, 8.6753],
        date: new Date(),
        time: "",
        availableSeats: 0,
        rideDetails: ""
    })

    const handleRideState = (obj) => {
        setRideData({
            ...rideData,
            ...obj
        })
    }

    const setLocation = (ev, type) => {
        // type: destination | pickup
        type = type ?? "destination"
        const curr_dest = rideData[type]
        const latIndex = ev.target.name == "lat" ? 0 : 1 // could just use bool straight
        curr_dest[latIndex] = ev.target.value

        handleRideState({ type: curr_dest })
    }

    // cant start reusing now
    const setData = (ev) => {
        handleRideState({
            [ev.target.name]: ev.target.value
        })
    }

    const handleAddRide = async () => {
        try {
            console.log(rideData)
            const rawResponse = await authAxiosInstance
                .post(
                    "/driver-ride",
                    rideData
                )

            const respData = rawResponse.data.ride
            // BUG: not sure of returned data
            storeData(StorageConstants.AvailableRides, respData.rides)
            navigate("/requestRide")
        } catch (errorFindingRide) {
            logAxiosResponse(errorFindingRide)
        }
    }

    return (
        <div>
            <Header title={"Find your Route"} menuType={true} />

            <div className='PageLayout'>
                <div className='RoutingPage'>
                    <div className='LocationTag'>
                        <div className='LocationName'>
                            <p className='TinyText'>Current Location - lat/long</p>
                            <input onChange={(ev) => setLocation(ev, "pickup")} value={rideData["pickup"][0]}
                                type="search" name="lat" id="CurrentLocation" placeholder='Latitude' className='LocationInput' />
                            <input onChange={(ev) => setLocation(ev, "pickup")} value={rideData["pickup"][1]}
                                type="search" name="long" id="CurrentLocation" placeholder='Longitude' className='LocationInput' />
                        </div>
                        <Icon icon="carbon:location" width="30" height="30" className='LocationIcon' />
                    </div>
                </div>

                <div className='RoutingPage'>
                    <div className='LocationTag'>
                        <div className='LocationName'>
                            <p className='TinyText'>Destination - lat/long</p>
                            <input onChange={(ev) => setLocation(ev, "destination")} value={rideData["destination"][0]}
                                type="search" name="lat" id="Destination" placeholder='Lat' className='LocationInput' />
                            <input onChange={(ev) => setLocation(ev, "destination")} value={rideData["destination"][1]}
                                type="search" name="long" id="Destination" placeholder='Long' className='LocationInput' />
                        </div>
                        <Icon icon="carbon:location" width="30" height="30" className='LocationIcon' />
                    </div>
                </div>


                <div className='RoutingPage'>
                    <div className='LocationTag'>
                        <div className='LocationName'>
                            <p className='TinyText'>Date</p>
                            <input type="date" onChange={setData} value={rideData.date} name="date" id="Date" placeholder='Choose date' className='LocationInput' />
                        </div>
                    </div>
                </div>
                <div className='RoutingPage'>
                    <div className='LocationTag'>
                        <div className='LocationName'>
                            <p className='TinyText'>Time</p>
                            <input type="time" onChange={setData} value={rideData.time} name="time" id="Destination" placeholder='Choose time' className='LocationInput' />
                        </div>

                    </div>
                </div>
                <div className='RoutingPage'>
                    <div className='LocationTag'>
                        <div className='LocationName'>
                            <p className='TinyText'>Available Seats</p>
                            <input type="text" name="AvailSeat" onChange={setData} value={rideData.availableSeats} id="AvailSeat" placeholder='How many seats are available' className='LocationInput' />
                        </div>

                    </div>
                </div>
                <div className='RoutingPage'>
                    <div className='LocationTag'>
                        <div className='LocationName'>
                            <p className='TinyText'>Ride Details</p>
                            <input type="text" onChange={setData} value={rideData.rideDetails} name="RideDets" id="RideDets" placeholder='Add Instructions' className='LocationInput' />
                        </div>

                    </div>
                </div>

                <input type="button" onClick={() => handleAddRide()} value="Add new ride" className='RideButton' style={{ marginTop: "30%" }} />
            </div>


        </div>
    )
}

export default DriversRoutePage