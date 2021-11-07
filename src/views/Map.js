/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/radio-management-server-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/radio-management-server-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const position = [38.2878, 21.7894]

function Map() {
  return (
    <>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script>
      <div className="content">
        <div>TODO: Get devices and show them on map through the GPS coordinates</div>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>gNodeBs Location</CardHeader>
              <CardBody>
                <div
                  id="map"
                  className="map"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  {/* Must have style.height to rrender properly */}
                  <MapContainer center={position} zoom={17} scrollWheelZoom={false}  style={{
                            height:"700px"
                        }}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        This represents a gNodeB. <br /> Should be able to select it from map as well.
      </Popup>
    </Marker>
  </MapContainer>
                  {/* <MapWrapper /> */}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Map;
