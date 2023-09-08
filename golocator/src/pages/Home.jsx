import React from 'react'
import Header from '../components/Header'
import inputImg from '../images/input.png'
import infoImg  from '../images/info.png'
import searchButton from '../images/search.png'


import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Home = () => {
    let title = "GO LOCATOTR"
  return (
    <>
    <Header/>
    
    <Container style={{marginTop: '2rem'}}>
    <h2 style={{fontSize:'1.5rem'}}>Welcome to <span style={{color: 'blue', fontWeight: 800}}>{title}</span> , your go-to tool for discovering the geographical location of any IP address.
      Whether you're tracing the source of a website visitor, troubleshooting network issues, or simply curious about the origin of an IP, 
     our user-friendly interface makes it easy to get accurate location data.</h2>
     <h5 style={{color: 'white', marginTop: '1rem', textAlign: 'center'}}>Track your IP <Link to='/ip-tracker'>here</Link></h5>
     <ul style={{ marginTop: '2rem'}}>
        <li>
        <h4>How it Works:</h4>
        <p>Enter an IP Address: In the input field provided, type in the IP address you want to locate.
      It could be an IPv4 or IPv6 address. If you don't have an IP address to input, 
     you can use the default 'Search' button to explore a random IP location.</p>
     <img src={inputImg} alt="" style={{height: "5rem", width: '70%'}}  />
        </li>

        <li>
        <h4>Click 'Search':</h4>
        <p>Once you've entered the IP address, 
            hit the 'Search' button. 
            Our powerful system will then process your request and retrieve the location data associated with the provided IP..</p>
           
            <img src={searchButton} alt="" style={{height: "3rem", width: 'auto'}}  />
        </li>

        <li>
        <h4>Explore on the Map:</h4>
        <p>After a quick processing time, the map will display the precise location of the IP address you've entered.
            You can zoom in and out, drag the map, and even switch between different map views
             (e.g., satellite, terrain, or street view) to get a better understanding of the location.</p>
             <img src={infoImg} alt="" style={{height: "4rem", width: '70%'}}  />
        </li>

        <li>
        <h4>Detailed Information:</h4>
        <p>Detailed Information:</p>
        <ul>
            <li><span style={{fontWeight: 700}}>IP Address: </span>The specific coordinates of the IP location.</li>
            <li><span style={{fontWeight: 700}}>Country/City: </span>The country where the IP address is registered and the city or region within the country.</li>
            <li><span style={{fontWeight: 700}}>TimeZone: </span>The time zone of the location.</li>
            <li><span style={{fontWeight: 700}}>ISP: </span>(Internet Service Provider) The provider associated with the IP</li>
        </ul>
        <img src="" alt=""  style={{height: "3rem", width: 'auto'}} />
        </li>

     </ul>
     

     <h6 style={{color: 'white', marginTop: '1rem', textAlign: 'center'}}>Track your current IP/ inputed IP <Link to='/ip-tracker'>here</Link></h6>
    </Container>

    <Container style={{marginTop: '2rem'}}>
       <h4>Why Use Our Location Finder:</h4>
       <ul>
        <li>
       <h6>Accuracy: </h6> 
          <p>We rely on a vast and constantly updated database to provide you with the most accurate location data available.</p>
        </li>
        <li>
        <h6>User-Friendly </h6> 
          <p> Our interface is designed to be intuitive, ensuring that you can easily find the information you need, even if you're not a tech expert.</p>
        </li>
        <li>
        <h6> Privacy:</h6> 
          <p>Rest assured that we don't store any IP addresses or location data, ensuring your privacy and security.</p>
        </li>
        <li>
        <h6>Free Service: </h6> 
          <p>Our location finder is completely free to use. No subscriptions, no hidden fees.</p>
        </li>
       </ul>
    </Container>

    <Container style={{marginTop: '2rem', paddingBottom: '2rem'}}>
       <h5>Who Can Benefit:</h5>
       <ul>
        <li>
       <p style={{fontWeight:'bold'}}>Website Administrators: </p> 
          <p>Track the location of website visitors for analytics or security purposes.</p>
        </li>
        <li>
        <p style={{fontWeight:'bold'}}>Network Administrators: </p> 
          <p>Diagnose network issues by pinpointing the locations of problematic IPs.</p>
        </li>
        <li>
        <p style={{fontWeight:'bold'}}> Geography Enthusiasts:</p> 
          <p>Explore the origins of IPs from around the world out of sheer curiosity.</p>
        </li>
        <li>
        <p style={{fontWeight:'bold'}}>Anyone: </p> 
          <p>Use it for any legitimate and non-invasive purpose you can think of!</p>
        </li>
       </ul>
    </Container>
    <Container style={{marginTop: '2rem', paddingBottom: '2rem', fontSize: '.8rem'}}>
       <h6>Who Can Benefit:</h6>
      <p>
      Ready to discover the world one IP address at a time? Enter an IP address in the search field and hit 'Search' to get started. 
      Our Location Finder will do the rest, 
      providing you with accurate geographical data in seconds.  
      </p>

      <p>
      Please note that this tool is intended for lawful and ethical use only. 
   We do not support or condone any illegal or harmful activities.
      </p>
  
  </Container>
    </>
   
  )
}

export default Home