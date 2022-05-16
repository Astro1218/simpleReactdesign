import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import createRowData from '../../functions/createRowData.js';

/**
 * 
 * @param { row } props 
 * @returns 
*/

export default function Entry(props) {
    const row = props.row;
    const [user, setUser] = useState([]);

    // get user data from another service
    useEffect(() => {
        async function fetchData() {
            setUser(await createRowData(row))
        }
        fetchData();
    }, [row])

    return (
        <div>
            <Card className="float-right mr-3 mb-3" style={{ maxWidth: 200, height: 500 }}>
                <Card.Img variant="top" src={user.animals} />
                <Card.Body>
                    <Card.Title className="">{user.companyName}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="">
                    <ListGroupItem>{user.firstName}</ListGroupItem>
                    <ListGroupItem>{user.lastName}</ListGroupItem>
                    <ListGroupItem>{user.date}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link className="" href={user.animals}>Image Online</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}


Entry.propTypes = {
    row: PropTypes.number
}