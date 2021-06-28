import React from "react";
import Navbarcomp from "./Navbarcomp";
import "../../css/main/Navcom.css";
import Footer from "./Footer";
import {
  Navbar,
  Nav,
  Form,
  Dropdown,
  Col,
  Container,
  Row,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div>
        <Navbarcomp search />
      </div>

      <div className="timesheetfirst">
        <Link to="/timesheet" className="timesheetfirstPart">
          Timesheets List
        </Link>
      </div>

      <div className="timesheetcompo">
        <div className="timesheetlist">
          <ul>
            <li>
              <Link to="/timesheet">My Timesheets</Link>
            </li>
            <li>
              <Link to="/timesheet">My Due Timesheets</Link>
            </li>
            <li>
              <Link to="/timesheet">Work List</Link>
            </li>
            <li>
              <Link to="/timesheet">All Timesheets</Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className="borderline" />
      <Container>
        <Row>
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
          <Col>4</Col>
          <Col>5</Col>
        </Row>
      </Container>
    </>
  );
}
