import React from 'react'
import Header from '../components/Header'

import IpTracker from '../components/IpTracker'
import { Container } from 'react-bootstrap'


const Home = () => {
    let title = "GO LOCATOTR"
  return (
    <>
    <Header/>
    
    <Container style={{marginTop: '2rem'}}>
    <h2 style={{fontSize:'1.5rem'}}>Welcome to <span style={{color: 'blue', fontWeight: 800}}>{title}</span> , your go-to tool for discovering the geographical location of any IP address.
      Whether you're tracing the source of a website visitor, troubleshooting network issues, or simply curious about the origin of an IP, 
     our user-friendly interface makes it easy to get accurate location data.</h2>
     <ul style={{ marginTop: '2rem'}}>
        <li>
        <h4>How it Works:</h4>
        <p>Enter an IP Address: In the input field provided, type in the IP address you want to locate.
      It could be an IPv4 or IPv6 address. If you don't have an IP address to input, 
     you can use the default 'Search' button to explore a random IP location.</p>
        </li>

        <li>
        <h4>Click 'Search'::</h4>
        <p>Once you've entered the IP address, 
            hit the 'Search' button. 
            Our powerful system will then process your request and retrieve the location data associated with the provided IP..</p>
        </li>

        <li>
        <h4>Explore on the Map:</h4>
        <p>After a quick processing time, the map will display the precise location of the IP address you've entered.
            You can zoom in and out, drag the map, and even switch between different map views
             (e.g., satellite, terrain, or street view) to get a better understanding of the location.</p>
        </li>

        <li>
        <h4>Detailed Information:</h4>
        <p>Detailed Information:</p>
        <ul>
            <li><span style={{fontWeight: 700}}>IP Address: </span>The specific coordinates of the IP location.</li>
            <li><span style={{fontWeight: 700}}>Country/City: </span>The country where the IP address is registered and the city or region within the country.</li>
            <li><span style={{fontWeight: 700}}>TimeZone: </span>The time zone of the location.</li>
            <li><span style={{fontWeight: 700}}>ISP: </span>(Internet Service Provider): The provider associated with the IP</li>
            
        </ul>
        </li>

     </ul>
     

    <IpTracker/>
    </Container>
    </>
   
  )
}

export default Home