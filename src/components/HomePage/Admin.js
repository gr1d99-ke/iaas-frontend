import React from "react";

import { Link } from "react-router-dom";

import routes from "../../helpers/routePaths";

import {
    Col,
    Row
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Admin = () => {
    return (
        <Row>
            <Col xs="6">
                <h5 className="text-center">Openings</h5>

                <hr/>

                <div className="d-flex flex-row">
                    <Link to={routes.openings.create} className="p-1 link add-opening-link">
                        <FontAwesomeIcon icon="plus"/> Create
                    </Link>
                    <div className="pr-1 pl-1 pt-1 link">|</div>
                    <Link to={routes.openings.all} className="p-1 link add-opening-link">
                        <FontAwesomeIcon icon="eye"/> View All
                    </Link>
                </div>
            </Col>

            <Col xs="6" className="text-center">
                <h5>Applications</h5>

                <hr/>

                <div className="d-flex flex-row">
                    <Link to="#" className="p-1 link add-opening-link">
                        <FontAwesomeIcon icon="plus"/> Create
                    </Link>
                    <div className="pr-1 pl-1 pt-1 link">|</div>
                    <Link to="#" className="p-1 link add-opening-link">
                        <FontAwesomeIcon icon="eye"/> View All
                    </Link>
                </div>
            </Col>
        </Row>
    )
};

export default Admin
