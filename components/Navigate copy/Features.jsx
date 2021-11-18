import React from 'react';

import Headernavigation from '../Common/HeaderNavigation';


export default function Feature() {
    return (
        <div className="feature-page">
            <Headernavigation />

            <div className="row">
                <div className="col-sm-12 content d-flex align-items-center">
                    <table border="1" className="table table-bordered table-striped">
                        <tr>
                            <th>Date</th>
                            <th>Inspection ID</th>
                            <th>Modality</th>
                            <th>Area Center</th>
                            <th>Area in Km<sup>2</sup></th>
                            <th>Measurements</th>
                            <th>Altitude</th>
                            <th>Resolutions(Pixels/mt)</th>
                            <th>Details</th>
                        </tr>
                        <tr className="table-active">
                            <td>20.11.21</td>
                            <td>19802</td>
                            <td>Drone</td>
                            <td>36.25362,-69.2515</td>
                            <td>36.25</td>
                            <td>Deforestation,Vegitation.</td>
                            <td>200m</td>
                            <td>1m</td>
                            <td>-</td>
                        </tr>
                        <tr className="even">
                            <td>19.09.21</td>
                            <td>19852</td>
                            <td>Satelite</td>
                            <td>58.25362,-69.2515</td>
                            <td>39.25</td>
                            <td>Disease coverage.</td>
                            <td>185m</td>
                            <td>1m</td>
                            <td>-</td>
                        </tr>
                        <tr className="table-active">
                            <td>06.05.21</td>
                            <td>17852</td>
                            <td>Drone</td>
                            <td>78.25362,-69.2515</td>
                            <td>85.25</td>
                            <td>Vegitation, Density.</td>
                            <td>150m</td>
                            <td>1m</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>06.11.21</td>
                            <td>17836</td>
                            <td>Satellite</td>
                            <td>68.25362,-63.2515</td>
                            <td>36.25</td>
                            <td>Disease , Density.</td>
                            <td>145m</td>
                            <td>1m</td>
                            <td>-</td>
                        </tr>
                        <tr className="table-active">
                            <td>20.11.21</td>
                            <td>96825</td>
                            <td>Drone</td>
                            <td>69.25362,-69.2515</td>
                            <td>36.25</td>
                            <td>Deforestation, Density.</td>
                            <td>200m</td>
                            <td>1m</td>
                            <td>1m</td>
                        </tr>
                        <tr>
                            <td>20.11.21</td>
                            <td>12365</td>
                            <td>Drone</td>
                            <td>78.25362,-69.2515</td>
                            <td>36.25</td>
                            <td>Disease , Density.</td>
                            <td>200m</td>
                            <td>1m</td>
                            <td>1m</td>
                        </tr>
                        <tr className="table-active">
                            <td>20.11.21</td>
                            <td>18933</td>
                            <td>Drone</td>
                            <td>55.25362,-69.2515</td>
                            <td>36.25</td>
                            <td>Vegitation, Density.</td>
                            <td>200m</td>
                            <td>1m</td>
                            <td>1m</td>
                        </tr>
                        <tr>
                            <td>20.11.21</td>
                            <td>15362</td>
                            <td>Drone</td>
                            <td>48.25362,-69.2515</td>
                            <td>36.25</td>
                            <td>Disease ,Vegitation, Density.</td>
                            <td>200m</td>
                            <td>1m</td>
                            <td>1m</td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>

    );
}
