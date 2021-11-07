/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


import React,{useEffect,useState} from 'react'
import axios from 'axios'
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  CardSubtitle,
  CardImg,
  Row,
  Col,
  Container,
  Button,
} from "reactstrap";


var run_every_seconds=3000

const GNodeBMetrics=()=> {

  function __createTitleCard(title)
  {
    return(
      <Col lg="3" md="6" sm="6">
      <Card className="card-stats">

      <CardBody>
                              <CardTitle tag="h5">{title}</CardTitle>
                              <Button  >Button</Button>
                          </CardBody>
      <CardFooter>
        <hr />

      </CardFooter>
    </Card>
    </Col>
    )
  }

  function __createTimeCard(time)
  {
    return(
      <Col lg="3" md="6" sm="6">
      <Card className="card-stats">

      <CardBody>
                              <CardTitle tag="h5">Timestamp</CardTitle>
                              <CardSubtitle tag="h6" className="mb-2 text-muted">{new Date().toLocaleDateString("el-GR")}</CardSubtitle>
                              <CardText>{new Date().toLocaleTimeString("el-GR")}</CardText>
              
                              {/* <Button  onClick={function(){run_every_seconds=run_every_seconds+1000}}>Button</Button> */}
                          </CardBody>
      <CardFooter>
        <hr />
        <div className="stats">
           Time
        </div>
      </CardFooter>
    </Card>
    </Col>
    )
  }

  function __createValueCard(value, title)
  {
    return(
      <Col lg="3" md="6" sm="6">
      <Card className="card-stats">
      <CardBody>
        <Row>
          <Col md="8" xs="7">
            <div className="numbers">
              <p className="card-category">{title}</p>
              <CardTitle tag="p">{value}</CardTitle>
              <p />
            </div>
          </Col>
        </Row>
      </CardBody>
      <CardFooter>
        <hr />
        <div className="stats">
           Mbps
        </div>
      </CardFooter>
    </Card>
    </Col>
    )
  }

 


//one row
function __createBitrateCharts(data)
{
  return(
    <Container>
    <Row xs={3}>
          {__createTitleCard("BITRATE")}
          {__createTimeCard(data[0])}
          {__createValueCard(data[1],"Downlink Speed")}
          {__createValueCard(data[2],"Uplink Speed")}
    </Row>
</Container>

  )
}


/******************************BITRATE**************************** */

  const [bitrate, setLastBitrate]=useState([])
  const [all_posts, setAllBitrates]=useState([])

  const getBitrate = async () => {
  try {
    const bitrates = await axios.get("http://172.16.10.203:19999/api/v1/data?chart=info_cell.cell_1_bitrate")
 
    console.log(new Date().toLocaleTimeString("el-GR"))
    console.log(bitrates.data["data"][0][0])
    console.log(bitrates.data["data"][0][1])
    console.log(bitrates.data["data"][0][2])
    console.log(run_every_seconds)
    setLastBitrate(bitrates.data["data"][0]);  // set State
    setAllBitrates(bitrates.data["data"]);  // set State

  } catch (err) {
    console.error(err.message);
  }
};




useEffect(()=>{

  getBitrate()

  var interval=setInterval(()=>{
    getBitrate()
   },1000)
     
     
   return()=>clearInterval(interval)



},[])  // includes empty dependency array

/******************************END BITRATE**************************** */



/******************************TRANSMISSION DATA**************************** */
//Lets use usestate
//measure_time is the state we keep, while  a setMEasureTime call will update its value
const [measure_time, setMeasureTime]=useState([])
//tx_transmission is the state we keep, while  a setLastTx call will update its value
const [tx_transmission, setLastTx]=useState([])
//tx_transmission is the state we keep, while  a setLastTx call will update its value
const [rx_transmission, setLastRx]=useState([])

const getTransmissionData = async () => {
  try {
    console.log("Getting TX/RX data")
    const txrx_data = await axios.get("http://172.16.10.203:19999/api/v1/data?chart=info_rf.rf_info_sample_rate")
    //We get a 10 minutes worth of data (1 per second)
    //the 0 index has the latest measurement
    //Each entru has 3 values
    //entry[index][0] is the timestamp
   // console.log(txrx_data.data["data"][0][0])
    //entry[index][1] is the downlink tx
  //  console.log(txrx_data.data["data"][0][1])
    //entry[index][2] is the uplink tx
   // console.log(txrx_data.data["data"][0][2])
    setMeasureTime(txrx_data.data["data"][0][0])
    setLastTx(txrx_data.data["data"][0][1]);  // set last tx state
    setLastRx(txrx_data.data["data"][0][2]);  // set last rx state
  } catch (err) {
    console.error(err.message);
  }
};



//This runs after the page has loaded, and can modify the contents
useEffect(()=>{
//This function will get the data we need regarding RF    
getTransmissionData()
//Lets make sure we get this data periodically (Every 3 seconds)
var interval=setInterval(()=>{
  getTransmissionData()
 },1000)
     
 return()=>clearInterval(interval)


},[])  


//one row
function __createTransmissionCharts()
{
  return(
    <Container>
    <Row xs={3}>
          {__createTitleCard("Packets transmitted")}
          {__createTimeCard(measure_time)} 
          {__createValueCard(tx_transmission,"Tx packets")}
          {__createValueCard(rx_transmission,"Rx packets")}
    </Row>
</Container>

  )
}


/******************************END TRANSMISSION DATA**************************** */


  return (
    <>
     <div className="content">

    <br></br>
  
   {__createBitrateCharts(bitrate)}   
   {__createTransmissionCharts()}   
 
  </div>
  </> 
);
}

export default GNodeBMetrics;
