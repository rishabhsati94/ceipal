import { BsSun } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { Button } from "react-bootstrap";
import { useState, React } from "react";
import "./../../css/main/submittimesheet.css";
import Navbarcomp from "./Navbarcomp";

export default function SubmitTimeSheet() {
  const [jobCode, setJobCode] = useState("0");

  const [stdTime, setStdTime] = useState({
    monstdtime: "0",
    tuestdtime: "0",
    wedstdtime: "0",
    thustdtime: "0",
    fristdtime: "0",
    satstdtime: "0",
    sunstdtime: "0",
  });

  const [timeOff, setTimeOff] = useState({
    montimeoff: "0",
    tuetimeoff: "0",
    wedtimeoff: "0",
    thutimeoff: "0",
    fritimeoff: "0",
    sattimeoff: "0",
    suntimeoff: "0",
  });

  // let timeoffTotalTime = montimeoff + tuetimeoff + wedtimeoff +thutimeoff +fritimeoff +sattimeoff + suntimeoff;

  const inputStdTimeValue = (e) => {
    const { name, value } = e.target;

    setStdTime((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const inputTimeOffValue = (e) => {
    const { name, value } = e.target;

    setTimeOff((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  let stTime = Object.values(stdTime);
  let [monstdtime] = [
    stTime[0],
    stTime[1],
    stTime[2],
    stTime[3],
    stTime[4],
    stTime[5],
    stTime[6],
  ];

  let tOff = Object.values(timeOff);
  let [montimeoff] = [tOff[0]];

  let st = parseInt(monstdtime) + parseInt(montimeoff);
  console.log(parseInt(st));

  const date = new Date();

  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <>
      <Navbarcomp />
      <div className="container-fluid" style={{ marginTop: "4rem" }}>
        <div className="row justify-content-between">
          <div className="col-sm-5" style={{ fontSize: "2rem" }}>
            <span className="submitsheet1">User Name</span>
            <span className="submitsheet1">Add Time Sheet</span>
          </div>

          <div className="col-sm-3">
            <div className="d-flex">
              <div className="subsheet1btn">
                <Button style={{ fontSize: "1.4rem" }} variant="warning">
                  Save
                </Button>
              </div>
              <div className="subsheet1btn">
                <Button style={{ fontSize: "1.4rem" }} variant="success">
                  Submit
                </Button>
              </div>
              <div className="subsheet1btn">
                <Button style={{ fontSize: "1.4rem" }} variant="light">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="mb-3 row">
            <label
              className="col-sm-2 col-form-label"
              style={{ fontSize: "2rem" }}
            >
              Select Placement
            </label>
            <div className="col-sm-5">
              <select
                className="form-select"
                onChange={(e) => setJobCode(e.target.value)}
                value={jobCode}
                style={{ fontSize: "2rem", border: "none" }}
              >
                <option value="0">Zero</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-sm-2">
              <Button
                style={{
                  fontSize: "1.6rem",
                  color: "#fff",
                  backgroundColor: "#a992e2",
                  margin: "2px 0",
                }}
                variant="light"
              >
                View Details
              </Button>
            </div>
          </div>

          <div className="mb-3 row">
            <label
              className="col-sm-2 col-form-label"
              style={{ fontSize: "2rem" }}
            >
              Select Dates
            </label>
            <div className="col-sm-5">
              <input style={{ fontSize: "2rem" }}></input>

              <button
                style={{
                  fontSize: "2rem",
                  marginLeft: "2rem",
                  border: "none",
                  backgroundColor: "transparent",
                }}
              >
                <GrAttachment />
              </button>
              <span style={{ fontSize: "1.5rem" }}>Attachment</span>
            </div>
          </div>

          <div className="mb-3 row">
            <label
              className="col-sm-2 col-form-label"
              style={{ fontSize: "2rem" }}
            >
              Comments
            </label>
            <div className="col-sm-5">
              <textarea
                cols="80"
                rows="4"
                style={{ fontSize: "2rem" }}
              ></textarea>
            </div>
          </div>

          <div className="mb-3 row">
            <label
              className="col-sm-2 col-form-label"
              style={{ fontSize: "2rem" }}
            >
              Signature
            </label>
            <div className="col-sm-5">
              <input type="text" style={{ fontSize: "2rem" }} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          backgroundColor: "#fff",
          marginTop: "4rem",
          marginBottom: "4rem",
        }}
      >
        <div className="row" style={{ margin: "3rem 0 0 0" }}>
          <div className="col-sm-10">
            <ul className="submittabledetails">
              <li className="submittable">
                <span style={{ color: "#d8d9da" }}>
                  <BsSun />
                </span>{" "}
                WEEKENDS
              </li>
              <li className="submittable">
                <span style={{ color: "#f4e591" }}>
                  <BsSun />
                </span>{" "}
                DRAFT
              </li>
              <li className="submittable">
                <span style={{ color: "#24ccf6" }}>
                  <BsSun />
                </span>{" "}
                SUBMITTED
              </li>
              <li className="submittable">
                <span style={{ color: "#70ca63" }}>
                  <BsSun />
                </span>{" "}
                APPROVED
              </li>
              <li className="submittable">
                <span style={{ color: "#ff0000" }}>
                  <BsSun />
                </span>{" "}
                REJECTED
              </li>
              <li className="submittable">
                <span style={{ color: "#ad9a88" }}>
                  <BsSun />
                </span>{" "}
                JOB INACTIVE
              </li>
              <li className="submittable">
                <span style={{ color: "#a992e2" }}>
                  <BsSun />
                </span>{" "}
                Leave
              </li>
            </ul>
          </div>

          <div className="col  align-self-end">
            <button type="button" className="btn btn-info cleartimesheetbtn">
              Clear TimeSheet
            </button>
          </div>
        </div>

        <div className="row container d-flex" style={{ margin: "1.5rem 5rem" }}>
          <div className="col-sm-2 subtable1">
            <p
              className="subtabvale"
              style={{ color: "#fff", backgroundColor: "#a992e2" }}
            >
              TOTAL
            </p>
            <span className="submittimesheettvalue">00:00</span>
          </div>
          <div className="col-sm-2 subtable1">
            <p
              className="subtabvale"
              style={{ color: "#fff", backgroundColor: "#70ca63" }}
            >
              BILLABLE
            </p>
            <span className="submittimesheettvalue">00:00</span>
          </div>
          <div className="col-sm-2 subtable1">
            <p
              className="subtabvale"
              style={{ color: "#fff", backgroundColor: "#f4e591" }}
            >
              STANDARD
            </p>
            <span className="submittimesheettvalue">00:00</span>
          </div>
          <div className="col-sm-2 subtable1">
            <p
              className="subtabvale"
              style={{ color: "#fff", backgroundColor: "#24ccf6" }}
            >
              TIME OFF
            </p>
            <span className="submittimesheettvalue">00:00</span>
          </div>
        </div>
        <div className="row" style={{ margin: "0 5rem" }}>
          <form>
            <table
              className="table table-bordered"
              style={{ fontSize: "2rem", textAlign: "center" }}
            >
              <tbody>
                <tr>
                  <th>Week 1</th>
                  <td>Mon</td>
                  <td>Tue</td>
                  <td>Wed</td>
                  <td>Thu</td>
                  <td>Fri</td>
                  <td>Sat</td>
                  <td>Sun</td>
                  <td
                    rowSpan="2"
                    style={{ textAlign: "center", verticalAlign: "middle" }}
                  >
                    Total Hours Per Item
                  </td>
                </tr>

                <tr>
                  <td>Pay Classification</td>
                  <td>
                    {date.getDate()}-{month[date.getMonth()]}
                  </td>
                  <td>
                    {" "}
                    {date.getDate()}-{month[date.getMonth()]}
                  </td>
                  <td>
                    {" "}
                    {date.getDate()}-{month[date.getMonth()]}
                  </td>
                  <td>
                    {" "}
                    {date.getDate()}-{month[date.getMonth()]}
                  </td>
                  <td>
                    {" "}
                    {date.getDate()}-{month[date.getMonth()]}
                  </td>
                  <td>
                    {" "}
                    {date.getDate()}-{month[date.getMonth()]}
                  </td>
                  <td>
                    {" "}
                    {date.getDate()}-{month[date.getMonth()]}
                  </td>
                </tr>
                <tr>
                  <td>Standard Time</td>
                  <td>
                    <input
                      type="text"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="monstdtime"
                      autoComplete="off"
                      value={stdTime.monstdtime}
                      onChange={inputStdTimeValue}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="tuestdtime"
                      autoComplete="off"
                      value={stdTime.tuestdtime}
                      onChange={inputStdTimeValue}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="wedstdtime"
                      autoComplete="off"
                      value={stdTime.wedstdtime}
                      onChange={inputStdTimeValue}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="thustdtime"
                      autoComplete="off"
                      value={stdTime.thustdtime}
                      onChange={inputStdTimeValue}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="fristdtime"
                      autoComplete="off"
                      value={stdTime.fristdtime}
                      onChange={inputStdTimeValue}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="satstdtime"
                      autoComplete="off"
                      value={stdTime.satstdtime}
                      onChange={inputStdTimeValue}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="sunstdtime"
                      autoComplete="off"
                      value={stdTime.sunstdtime}
                      onChange={inputStdTimeValue}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="totatimestd"
                      autoComplete="off"
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <td>Time Off</td>
                  <td>
                    <input
                      type="text"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="montimeoff"
                      autoComplete="off"
                      value={timeOff.montimeoff}
                      onChange={inputTimeOffValue}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="tuetimeoff"
                      autoComplete="off"
                      value={timeOff.tuetimeoff}
                      onChange={inputTimeOffValue}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="wedtimeoff"
                      autoComplete="off"
                      value={timeOff.wedtimeoff}
                      onChange={inputTimeOffValue}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="thutimeoff"
                      autoComplete="off"
                      value={timeOff.thutimeoff}
                      onChange={inputTimeOffValue}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="fritimeoff"
                      autoComplete="off"
                      value={timeOff.fritimeoff}
                      onChange={inputTimeOffValue}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="sattimeoff"
                      autoComplete="off"
                      value={timeOff.sattimeoff}
                      onChange={inputTimeOffValue}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="suntimeoff"
                      autoComplete="off"
                      value={timeOff.suntimeoff}
                      onChange={inputTimeOffValue}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control tableinput"
                      placeholder="00:00"
                      name="totatimestd"
                      autoComplete="off"
                      disabled
                    />
                  </td>
                </tr>
                <tr>
                  <td>Total Billable Hours</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Total Hours</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}
