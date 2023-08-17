import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';
import "../../bootstrap.min.css"
// import './Styles.scss';
import Header from '../../components/global/Header/Header';
import "./RoutePage.css"


const PassengersRoutePage = () => {
    const navigate = useNavigate()
  return (
    <div>
        <Header title={"Find your Route"} menuType = {true}/>

       <div className='PageLayout'>
       <div className='RoutingPage'>
            <div  className='LocationTag'>
                <div className='LocationName'>
                    <p className='TinyText'>Current Location</p>
                    <input type="search" name="CurrentLocation" id="CurrentLocation" placeholder='45A JOSEPH STREET' className='LocationInput' />
                </div>
                <Icon icon="carbon:location" width="30" height="30" className='LocationIcon'/>
            </div>
        </div>

        <div className='RoutingPage'>
            <div  className='LocationTag'>
                <div className='LocationName'>
                    <p className='TinyText'>Destination</p>
                    <input type="search" name="Destination" id="Destination" placeholder='Where are you going' className='LocationInput' />
                </div>
                <Icon icon="carbon:location" width="30" height="30" className='LocationIcon'/>
            </div>
        </div>
        <div className='RoutingPage'>
            <div  className='LocationTag'>
                <div className='LocationName'>
                    <p className='TinyText'>Date</p>
                    <input type="date" name="date" id="Date" placeholder='Choose date' className='LocationInput' />
                </div>
                </div>
        </div>
        <div className='RoutingPage'>
            <div  className='LocationTag'>
                <div className='LocationName'>
                    <p className='TinyText'>Time</p>
                    <input type="time" name="time" id="Destination" placeholder='Choose time' className='LocationInput' />
                </div>
                
            </div>
        </div>
        <div className='RoutingPage'>
            <div  className='LocationTag'>
                <div className='LocationName'>
                    <p className='TinyText'>Passengers</p>
                    <input type="text" name="AvailSeat" id="AvailSeat" placeholder='Total number of passengers' className='LocationInput' />
                </div>
                
            </div>
        </div>
        

        <input type="button" value="See Available Rides" className='RideButton' onClick={() => navigate('/AvailableDrivers')}/>
       </div>


    </div>
  )
}

export default PassengersRoutePage