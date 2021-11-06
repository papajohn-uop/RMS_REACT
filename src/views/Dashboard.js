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
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";


import resources from "resources.js";


function __createLineChart()
{
 return (
  <Col md="8">
  <Card className="card-chart">
    <CardHeader>
      <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
      <p className="card-category">Line Chart with Points</p>
    </CardHeader>
    <CardBody>
      <Line
        data={dashboardNASDAQChart.data}
        options={dashboardNASDAQChart.options}
        width={400}
        height={100}
      />
    </CardBody>
    <CardFooter>
      <div className="chart-legend">
        <i className="fa fa-circle text-info" /> Tesla Model S{" "}
        <i className="fa fa-circle text-warning" /> BMW 5 Series
      </div>
      <hr />
      <div className="card-stats">
        <i className="fa fa-check" /> Data information certified
      </div>
    </CardFooter>
  </Card>
</Col>
 ) 
}


function __createCharts()
{
  return(
    <Row>
    <Col md="4">
    {__createPieChart()}
    </Col>
    {__createLineChart()}
  </Row>
  )
}

function __createChart()
{
  return ( <Row>
  <Col md="12">
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Users Behavior</CardTitle>
        <p className="card-category">24 Hours performance</p>
      </CardHeader>
      <CardBody>
        <Line
          data={dashboard24HoursPerformanceChart.data}
          options={dashboard24HoursPerformanceChart.options}
          width={400}
          height={100}
        />
      </CardBody>
      <CardFooter>
        <hr />
        <div className="stats">
          <i className="fa fa-history" /> Updated 3 minutes ago
        </div>
      </CardFooter>
    </Card>
  </Col>
</Row>)
}

function __createPieChart()
{
  return (

    <Card>
    <CardHeader>
      <CardTitle tag="h5">Email Statistics</CardTitle>
      <p className="card-category">Last Campaign Performance</p>
    </CardHeader>
    <CardBody style={{ height: "266px" }}>
      <Pie
        data={dashboardEmailStatisticsChart.data}
        options={dashboardEmailStatisticsChart.options}
      />
    </CardBody>
    <CardFooter>
      <div className="legend">
        <i className="fa fa-circle text-primary" /> Opened{" "}
        <i className="fa fa-circle text-warning" /> Read{" "}
        <i className="fa fa-circle text-danger" /> Deleted{" "}
        <i className="fa fa-circle text-gray" /> Unopened
      </div>
      <hr />
      <div className="stats">
        <i className="fa fa-calendar" /> Number of emails sent
      </div>
    </CardFooter>
  </Card>
)
  }



  function __createCapacityCard()
  {
    return(
      <Col lg="3" md="6" sm="6">
      <Card className="card-stats">
      <CardBody>
        <Row>
          <Col md="4" xs="5">
            <div className="icon-big text-center icon-warning">
              <i className="nc-icon nc-globe text-warning" />
            </div>
          </Col>
          <Col md="8" xs="7">
            <div className="numbers">
              <p className="card-category">Capacity</p>
              <CardTitle tag="p">150GB</CardTitle>
              <p />
            </div>
          </Col>
        </Row>
      </CardBody>
      <CardFooter>
        <hr />
        <div className="stats">
          <i className="fas fa-sync-alt" /> Update Now
        </div>
      </CardFooter>
    </Card>
    </Col>
    )
  }




  function __createRevenueCard()
  {
    return(
      <Col lg="3" md="6" sm="6">
      <Card className="card-stats">
      <CardBody>
        <Row>
          <Col md="4" xs="5">
            <div className="icon-big text-center icon-warning">
              <i className="nc-icon nc-money-coins text-success" />
            </div>
          </Col>
          <Col md="8" xs="7">
            <div className="numbers">
              <p className="card-category">Revenue</p>
              <CardTitle tag="p">$ 1,345</CardTitle>
              <p />
            </div>
          </Col>
        </Row>
      </CardBody>
      <CardFooter>
        <hr />
        <div className="stats">
          <i className="far fa-calendar" /> Last day
        </div>
      </CardFooter>
    </Card>
        </Col>
    )
  }


function __createErrorsCard()
{
  return(
    <Col lg="3" md="6" sm="6">
    <Card className="card-stats">
      <CardBody>
        <Row>
          <Col md="4" xs="5">
            <div className="icon-big text-center icon-warning">
              <i className="nc-icon nc-vector text-danger" />
            </div>
          </Col>
          <Col md="8" xs="7">
            <div className="numbers">
              <p className="card-category">Errors</p>
              <CardTitle tag="p">23</CardTitle>
              <p />
            </div>
          </Col>
        </Row>
      </CardBody>
      <CardFooter>
        <hr />
        <div className="stats">
          <i className="far fa-clock" /> In the last hour
        </div>
      </CardFooter>
    </Card>
  </Col>

  )
}

function __createFollowerCard()
{
  return (
    <Col lg="3" md="6" sm="6">
    <Card className="card-stats">
      <CardBody>
        <Row>
          <Col md="4" xs="5">
            <div className="icon-big text-center icon-warning">
              <i className="nc-icon nc-favourite-28 text-primary" />
            </div>
          </Col>
          <Col md="8" xs="7">
            <div className="numbers">
              <p className="card-category">Followers</p>
              <CardTitle tag="p">+45K</CardTitle>
              <p />
            </div>
          </Col>
        </Row>
      </CardBody>
      <CardFooter>
        <hr />
        <div className="stats">
          <i className="fas fa-sync-alt" /> Update now
        </div>
      </CardFooter>
    </Card>
  </Col>
  )

}


function __createDashBoard()
{
  return (
    <>
      <div className="content">

                 <div className="gNodebeResources">
         <Container>
            <Row xs={3}>
            {[...Array(resources.length)].map((e, i) => {
                return (
                  <Col>
                      <Card>
                      <CardImg top width="100%" src="/assets/318x180.svg" alt="Generic gNodeb img"/>
                        
                          <CardBody>
                              <CardTitle tag="h5">{resources[i].name}</CardTitle>
                              <CardSubtitle tag="h6" className="mb-2 text-muted">{resources[i].description}</CardSubtitle>
                              <CardText>Basic info </CardText>
                              <ul>
                                <li className="gNBcategory"> Category: {resources[i].category} </li>
                                <li className="gNBresource_version"> Version: {resources[i].resource_version} </li>
                                <li className="gNBadministrative_state"> administrative_state: {resources[i].administrative_state} </li>
                                <li className="gNBoperational_state"> operational_state: {resources[i].operational_state} </li>
                              </ul>
                              <Button>Button</Button>
                          </CardBody>
                      </Card>
                  </Col>
                )
            })}
            </Row>
        </Container>
    </div>  

        <Row>
            {__createCapacityCard()}
            {__createRevenueCard()}
            {__createErrorsCard()}
            {__createFollowerCard()}
        </Row>
        {__createChart()}
        {__createCharts()}
      </div>
    </>
  );
}

function Dashboard() {
  return(
  __createDashBoard()
  )
}

export default Dashboard;
