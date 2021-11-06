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

import GaugeChart from 'react-gauge-chart'


const GNodeBMetrics=()=> {

  function __createTimeCard(time)
  {
    return(
      <Col lg="3" md="6" sm="6">
      <Card className="card-stats">

      <CardBody>
                              <CardTitle tag="h5">Timestamp</CardTitle>
                              <CardSubtitle tag="h6" className="mb-2 text-muted">{new Date().toLocaleDateString("el-GR")}</CardSubtitle>
                              <CardText>{new Date().toLocaleTimeString("el-GR")}</CardText>
              
                              <Button>Button</Button>
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

  function __createDL_BitrateCard(dl_bitrate)
  {
    return(
      <Col lg="3" md="6" sm="6">
      <Card className="card-stats">
      <CardBody>
        <Row>
          <Col md="8" xs="7">
            <div className="numbers">
              <p className="card-category">Downlink Speed</p>
              <CardTitle tag="p">{dl_bitrate}</CardTitle>
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


  function __createUL_BitrateCard(ul_bitrate)
  {
    return(
      <Col lg="3" md="6" sm="6">
      <Card className="card-stats">
      <CardBody>
        <Row>
          <Col md="8" xs="7">
            <div className="numbers">
              <p className="card-category">Uplink Speed</p>
              <CardTitle tag="p">{ul_bitrate}</CardTitle>
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
function __createCharts(data)
{
  return(
    <Container>
    <Row xs={3}>
          {__createTimeCard(data[0])}
          {__createDL_BitrateCard(data[1])}
          {__createUL_BitrateCard(data[2])}
    </Row>
</Container>




  )
}


  const [posts, setPosts]=useState([])
  const [all_posts, setAllPosts]=useState([])

  const getPosts = async () => {
  try {
//    const userPosts = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const userPosts = await axios.get("http://172.16.10.203:19999/api/v1/data?chart=info_cell.cell_1_bitrate")

    console.log(userPosts.data["data"][0][0])
    console.log(userPosts.data["data"][0][1])
    console.log(userPosts.data["data"][0][2])

    setPosts(userPosts.data["data"][0]);  // set State
    setAllPosts(userPosts.data["data"]);  // set State

  } catch (err) {
    console.error(err.message);
  }
};

useEffect(()=>{
    
  getPosts()},[])  // includes empty dependency array


  const interval=setInterval(()=>{
    getPosts()
   },3000)

  return (
    <>
    <div></div>
  <div>
    <br></br>
  
   {__createCharts(posts)}   
   {console.log(new Date(1504095567183).toLocaleTimeString("en-US"))}
  </div>
  </> 
);
}

export default GNodeBMetrics;
