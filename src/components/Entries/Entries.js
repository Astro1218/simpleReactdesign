import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Entry from '../Entry/Entry';

/**
 * 
 * @param { number } props 
 * @returns 
 */

export default function Entries(props) {
	const number = props.number;
	const [arr, setArr] = useState([])

	useEffect(() => {
		var temp = [];
		for (var i = 1; i <= number; i++) {
			temp.push(i);
		}
		setArr(temp);
	}, [number])

	return (
		<div>
			<Container fluid>
				<Row className="justify-content-md-center">
					{
						arr.map(item => (
							<Col key={item}>
								<Entry row={item} />
							</Col>)
						)
					}
				</Row>
			</Container>
		</div >
	);
}

Entries.propTypes = {
	number: PropTypes.number
}