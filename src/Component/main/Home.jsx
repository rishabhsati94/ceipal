import React, { Component } from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
import Navbarcomp from "./Navbarcomp";
import "../../css/main/Homecomp.css";
import Navcom from "../../css/main/Navcom.css";
import { Link, Redirect } from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("user-info");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
    };
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <div>
          <Navbarcomp search />
        </div>
        <div>
          <div>
            <div className="topnavitabs" id="topDashboardHeader">
              <div className="content_page_head">Dashboard</div>
              <div className="pull-right">
                <span>
                  <a
                    href="/dashboard_tile_manager/DashboardTiles/add_dashboard_tile"
                    id="addDashboardTileLink"
                  >
                    Add Tile
                  </a>
                </span>
              </div>
            </div>
          </div>
          <br /> <br />
          <div id="content">
            <div className="tile-emp-info">
              <div>
                <Container>
                  <Row>
                    <Col>
                      <b>Employee Name</b> Executive <br />
                      Employee-Id : ABCD <br />
                      Employee number <br />
                      employeeid@infostride.com <br />
                      <button> Add About Yourself</button>
                    </Col>

                    <Col>
                      <h6>TIMESHEETS</h6>
                      <p class="well nm">
                        You don’t have any pending timesheets.
                      </p>
                      <br />
                      <h6>STATUS REPORTS</h6>
                      <p className="well nm">
                        You don't have any status reports to submit
                      </p>
                    </Col>

                    <Col className="key_Dates ">
                      <h6>Key Dates</h6>
                      <Table className="dataTable">
                        <thead>
                          <tr>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Approved From</th>
                            <th>Approved Until</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="4">No Data</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Container>
              </div>

              <div
                className="data-table dataTable col-md-12 margin-20t cl"
                id="ActivePlacementUI"
              >
                <h6>Active Placements</h6>
                <div id="ActivePlacementUIdiv" class=".mCustomScrollBox">
                  <div tabindex="0">
                    <div dir="ltr">
                      <table
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        className="data-table dataTable"
                      >
                        <thead>
                          <tr>
                            <th>Job Code</th>
                            <th>Title</th>
                            <th>End Client</th>
                            <th>Start Date</th>
                          </tr>
                        </thead>
                        <tbody id="DashboardActivePlacements">
                          <tr>
                            <td colSpan="5" rowSpan="10">
                              No Data
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      id="mCSB_2_scrollbar_vertical"
                      className="mCSB_scrollTools mCSB_2_scrollbar mCS-light mCSB_scrollTools_vertical"
                    >
                      <div className="mCSB_draggerContainer">
                        <div
                          id="mCSB_2_dragger_vertical"
                          className="mCSB_dragger"
                          oncontextmenu="return false;"
                        >
                          <div className="mCSB_dragger_bar"></div>
                          <div className="mCSB_draggerRail"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <br />
              <div className="col-md-6 col-lg-3">
                <div class="panel">Announcements</div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div
                  class="holidays tile-portlet mb-5"
                  data-id="13"
                  id="tile_13"
                  data-panel-id="company_holidays"
                >
                  <div
                    class="panel-heading tile-sort-handle ui-sortable-handle "
                    data-placement="top"
                    data-toggle="tooltip"
                    title="Drag &amp; Drop tiles to sort."
                    rel="tooltip"
                    data-original-title="Drag &amp; Drop Tiles to Sort"
                  >
                    <span class="panel-title ">Holidays Calendar</span>
                  </div>
                  <div class="panel-body pn scrollable mCustomScrollbar _mCS_1 mCS-autoHide ">
                    <div
                      id="mCSB_1"
                      class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                      tabindex="0"
                    >
                      <div
                        id="mCSB_1_container"
                        class="mCSB_container"
                        dir="ltr"
                      >
                        <div class="col-md-12 pt-0">
                          <div class="data-table dataTable">
                            <table
                              class="data-table dataTable"
                              cellpadding="0"
                              border="0"
                              width="95%"
                            >
                              <thead>
                                <tr>
                                  <th>Holiday Name</th>
                                  <th>Date</th>
                                  <th>Day</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>New Year Day</td>
                                  <td>01/01/2021</td>
                                  <td>Friday</td>
                                </tr>
                                <tr>
                                  <td>Memorial day</td>
                                  <td>05/31/2021</td>
                                  <td>Monday</td>
                                </tr>
                                <tr>
                                  <td>Independence Day</td>
                                  <td>08/15/2021</td>
                                  <td>Sunday</td>
                                </tr>
                                <tr>
                                  <td>Labor Day</td>
                                  <td>09/06/2021</td>
                                  <td>Monday</td>
                                </tr>
                                <tr>
                                  <td>Diwali</td>
                                  <td>11/04/2021</td>
                                  <td>Thursday</td>
                                </tr>
                                <tr>
                                  <td>Diwali Extended Holiday</td>
                                  <td>11/05/2021</td>
                                  <td>Friday</td>
                                </tr>
                                <tr>
                                  <td>Thanksgiving Day</td>
                                  <td>11/25/2021</td>
                                  <td>Thursday</td>
                                </tr>
                                <tr>
                                  <td>Extended Thanksgiving Day</td>
                                  <td>11/26/2021</td>
                                  <td>Friday</td>
                                </tr>
                                <tr>
                                  <td>Christmas</td>
                                  <td>12/25/2021</td>
                                  <td>Saturday</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
