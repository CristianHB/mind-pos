import React from "react";
import { Panel, PanelHeader, PanelBody } from "./../components/panel/panel.jsx";

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <ol className="breadcrumb float-xl-end">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
        </ol> */}
        <h1 className="page-header">Dashboard </h1>
        <Panel>
          <PanelHeader>Panel Title here</PanelHeader>
          <PanelBody>Panel Content Here</PanelBody>
        </Panel>
      </div>
    );
  }
}

export default Home;
