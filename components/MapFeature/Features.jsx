import React from 'react';

import Headernavigation from '../Common/HeaderNavigation';


export default function MapFeature() {
    return (
        <div className="MapFeature-page">
            <Headernavigation />

            <div className="row">
                <div className="col-sm-6 content d-flex align-items-center">
                    <h3>Select Features to the map from the following table</h3>
                    <h5>(Only Features  available to map from the your  selected run are shown below)</h5>
                    <table border="1" className="table no-border">
                        <tr>
                            <th colSpan="2">Available Features</th>
                        </tr>
                        <tr className="">
                            <td>CSSV locations</td>
                            <td><input type="checkbox" checked="checked"/></td>
                        </tr>
                        <tr className="">
                            <td>High Vegetation Density</td>
                            <td><input type="checkbox" /></td>
                        </tr>
                        <tr className="">
                            <td>Low Vegetation density</td>
                            <td><input type="checkbox" /></td>
                        </tr>
                        <tr className="">
                            <td>Deforested locations</td>
                            <td><input type="checkbox" checked="checked"/></td>
                        </tr>
                        <tr className="">
                            <td>Pesticide Z locations</td>
                            <td><input type="checkbox" /></td>
                        </tr>
                        <tr className="">
                            <td>Low Yield locations</td>
                            <td><input type="checkbox" /></td>
                        </tr>
                        <tr className="">
                            <td>High Yield locations</td>
                            <td><input type="checkbox" /></td>
                        </tr>
                        <tr className="">
                            <td>Inspection Data Available</td>
                            <td><input type="checkbox" checked="checked" /></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    Cluster Data &nbsp;
                    <label>Yes <input type="checkbox" /></label>
                    <label>No <input type="checkbox" /></label>
                </div>
            </div>
        </div>

    );
}
