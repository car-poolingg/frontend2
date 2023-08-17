import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import Header from '../../components/global/Header/Header';
import "./RoutePage.css"
import { getTime, getDate } from '../../utils/page.utils';
import { authAxiosInstance, logAxiosResponse } from '../../utils/request';
import { storeData } from '../../utils/api.storage';
import StorageConstants from '../../utils/constants.storage';


const PDriversRoutePage = () => {
    const navigate = useNavigate()

    const [rideData, setRideData] = useState({
        destination: [9.082, 8.6753],
        pickup: [9.082, 8.6753],
        date: new Date(),
        time: ""
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
    const setDate = (ev) => {
        handleRideState({
            [ev.target.name]: ev.target.value
        })
    }

    const handleFindRide = async () => {
        try {
            console.log(rideData)
            const rawResponse = await authAxiosInstance
                .post(
                    "/ride",
                    rideData
                )

            const respData = rawResponse.data.ride
            // BUG: not sure of returned data
            storeData(StorageConstants.AvailableRides, respData.rides)
            navigate("/passengers/availableDrivers")
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
                            <input onChange={setDate} value={rideData.date} type="date" name="date" id="Date" placeholder='Choose date' className='LocationInput' />
                        </div>
                    </div>
                </div>
                <div className='RoutingPage'>
                    <div className='LocationTag'>
                        <div className='LocationName'>
                            <p className='TinyText'>Time</p>
                            <input onChange={setDate} value={rideData.time}
                                type="time" name="time" id="Destination" placeholder='Choose time' className='LocationInput' />
                        </div>

                    </div>
                </div>
                <div className='RoutingPage'>
                    <div className='LocationTag'>
                        <div className='LocationName'>
                            <p className='TinyText'>Passengers</p>
                            <input type="text" name="AvailSeat" id="AvailSeat" placeholder='Total number of passengers' className='LocationInput' />
                        </div>

                    </div>
                </div>

                <input type="button" value="See Available Rides" className='RideButton' onClick={() => handleFindRide()} />
            </div>


        </div>
    )
}

// '/AvailableDrivers')

export default PDriversRoutePage