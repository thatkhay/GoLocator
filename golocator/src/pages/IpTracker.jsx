import React, { useEffect, useState, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { Card, Form, Button, Container } from 'react-bootstrap';
import arrow from '../images/icon-arrow.svg';
import background from '../images/pattern-bg-desktop.png';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import icon from '../icon';

const IpTracker = () => {
  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState('');

  const mapRef = useRef();
  useEffect(() => {
    try {
      const getInitialData = async () => {
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=`);
        const data = await res.json();
        setAddress(data);
        console.log(data);
      };
      getInitialData();
    } catch (error) {
      console.trace(error);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ipAddress}`);
      const data = await res.json();
      setAddress(data);
       if (data.location && data.location.lat && data.location.lng) {
        
        mapRef.current.flyTo([data.location.lat, data.location.lng], 13);
      }
    } catch (error) {
      console.trace(error);
    }
  };

  return (
    <Container className="d-flex container-fluid align-items-center justify-content-center" style={{flexDirection: 'column'}}>
      <h2 style={{margin: '1rem 0'}}>Your IP  Address</h2>
      <Card className="mt-4 w-100" style={{ maxWidth: '1200px', minHeight: '90vh' }}>
        <div className="w-100" style={{ maxWidth: '1200px' }}>
          <img className="w-100 position-absolute" src={background} alt="" style={{ backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '18rem' }} />
        </div>
        <Card.Body className="position-relative">
          <h1 className="text-white text-center mb-4">Go Locator</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.3rem' }}>
                <Form.Control type="input" name="ipaddress" id="ipaddress" placeholder="Search for IP Address " value={ipAddress} onChange={(e) => setIpAddress(e.target.value)} />
                <Button type="submit" style={{ backgroundColor: 'black' }}>
                  <img src={arrow} alt="" />
                </Button>
              </div>
            </Form.Group>
          </Form>

        </Card.Body>

        {address && (
            <>
               <Card className="d-flex align-items-center justify-content-center mt-2 " style={{ flexDirection: 'row', height: '6rem' }}>
        {address?.ip && (
          <Card.Body className="d-flex align-items-center justify-content-center mt-2" style={{ borderRight: '1px solid rgb(221, 218, 218)', height: '4rem', flexDirection: 'column', }}>
            <h2 style={{ fontSize: '1rem' }}>IP Address</h2>
            <p style={{ fontSize: '.6rem' }}>{address.ip}</p>
          </Card.Body>
        )}
        {address?.location?.city && address?.location?.country && (
          <Card.Body className="d-flex align-items-center justify-content-center mt-2" style={{ borderRight: '1px solid rgb(221, 218, 218)', height: '4rem', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '1rem' }}>Location</h2>
            <p style={{ fontSize: '.6rem' }}>{address.location.city}, {address.location.country}</p>
          </Card.Body>
        )}
        {address?.isp && (
          <Card.Body className="d-flex align-items-center justify-content-center mt-2" style={{ borderRight: '1px solid rgb(221, 218, 218)', height: '4rem', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '1rem' }}>Timezone</h2>
            <p style={{ fontSize: '.6rem' }}>{address.location.timezone}</p>
          </Card.Body>
        )}
        {address?.location?.timezone && (
          <Card.Body className="d-flex align-items-center justify-content-center mt-2" style={{ height: '4rem', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '1rem' }}>ISP</h2>
            <p style={{ fontSize: '.6rem' }}>{address.isp}</p>
          </Card.Body>
        )}
      </Card>

             

            </>
          )}
        {address?.location?.lat && address?.location?.lng && (
  <MapContainer ref={mapRef} className='mt-3' center={[address.location.lat, address.location.lng]} zoom={13} scrollWheelZoom={true} style={{ maxWidth: '1200px', height: '60vh' }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker icon={icon} position={[address.location.lat, address.location.lng]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
)}
      </Card>
      
    </Container>
  );
};

export default IpTracker;
