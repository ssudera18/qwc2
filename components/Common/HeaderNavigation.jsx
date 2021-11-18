
import React from 'react';
import { Link } from "react-router-dom";

export default function Headernavigation() {
    return (
        <div className="Custom-Menu container-fluid">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">QGIS SYSTEM</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Navigate
                            <span className="caret" /></a>
                        <ul className="dropdown-menu">
                            <li><Link className="menu-item" to="/feature">Navigate to specific features from table list</Link></li>
                        </ul></li>

                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Map Features
                                <span className="caret" /></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Turn Off/On Mapping</a></li>
                                <li><Link className="menu-item" to="/mapfeature">Select Features to map from a list</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Estimates
                                <span className="caret" /></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Select ROI from map</a></li>
                                <li><a href="#">Set rules</a></li>
                                <li><a href="#">Yield estimate</a></li>
                                <li><a href="#">Other Estimates</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Time Lapse
                                <span className="caret" /></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Select ROI from map</a></li>
                                <li><a href="#">Select time range</a></li>
                                <li><a href="#">Select features or estimates to plot</a></li>
                                <li><a href="#">Play Time lapse slides of changes</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
