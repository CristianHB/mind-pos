import React, { useContext } from "react";
import { Panel, PanelHeader, PanelBody } from "./../components/panel/panel.jsx";
import { Line } from "react-chartjs-2";
import { AppSettings } from "../config/app-settings.js";

export default function Home() {
  const { appState } = useContext(AppSettings);
  const lineChartData = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        label: "Page Views",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(" + appState.color.tealRgb + ", 0.25)",
        borderColor: appState.color.teal,
        borderWidth: 2,
        pointBorderColor: appState.color.teal,
        pointBackgroundColor: appState.color.componentBg,
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: appState.color.componentBg,
        pointHoverBorderColor: appState.color.teal,
        pointHoverBorderWidth: 3,
        pointRadius: 3,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40, 59, 76, 94, 77, 82],
      },
      {
        label: "Visitors",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(" + appState.color.blueRgb + ", 0.25)",
        borderColor: appState.color.blue,
        borderWidth: 2,
        pointBorderColor: appState.color.blue,
        pointBackgroundColor: appState.color.componentBg,
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: appState.color.componentBg,
        pointHoverBorderColor: appState.color.blue,
        pointHoverBorderWidth: 3,
        pointRadius: 3,
        pointHitRadius: 10,
        data: [25, 29, 40, 45, 16, 15, 20, 39, 26, 44, 57, 32],
      },
    ],
  };

  const lineChartOptions = {
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontColor: "black",
      },
    },
  };

  return (
    <div>
      {/* <ol className="breadcrumb float-xl-end">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
        </ol> */}
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-blue">
            <div className="stats-icon">
              <i className="fa fa-desktop"></i>
            </div>
            <div className="stats-info">
              <h4>TOTAL VISITORS</h4>
              <p>3,291,922</p>
            </div>
            <div className="stats-link">
              {/* <Link to="/dashboard/v1">
                View Detail <i className="fa fa-arrow-alt-circle-right"></i>
              </Link> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-info">
            <div className="stats-icon">
              <i className="fa fa-link"></i>
            </div>
            <div className="stats-info">
              <h4>BOUNCE RATE</h4>
              <p>20.44%</p>
            </div>
            <div className="stats-link">
              {/* <Link to="/dashboard/v1">
                View Detail <i className="fa fa-arrow-alt-circle-right"></i>
              </Link> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-orange">
            <div className="stats-icon">
              <i className="fa fa-users"></i>
            </div>
            <div className="stats-info">
              <h4>UNIQUE VISITORS</h4>
              <p>1,291,922</p>
            </div>
            <div className="stats-link">
              {/* <Link to="/dashboard/v1">
                View Detail <i className="fa fa-arrow-alt-circle-right"></i>
              </Link> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="widget widget-stats bg-red">
            <div className="stats-icon">
              <i className="fa fa-clock"></i>
            </div>
            <div className="stats-info">
              <h4>AVG TIME ON SITE</h4>
              <p>00:12:23</p>
            </div>
            <div className="stats-link">
              {/* <Link to="/dashboard/v1">
                View Detail <i className="fa fa-arrow-alt-circle-right"></i>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <h1 className="page-header">Dashboard </h1>
      <Panel>
        <PanelHeader>Ventas </PanelHeader>
        <PanelBody>
          <Line data={lineChartData} height={300} options={lineChartOptions} />
        </PanelBody>
      </Panel>
    </div>
  );
}
