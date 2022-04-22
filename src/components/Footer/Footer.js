import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './Footer.scss';

const Footer = () => {
	return (
		<footer className="py-5 d-flex">
			<Row className="footerRowText">
				<Col>
					<Card className="footerCard">
						<Card.Body className="footerCardBody">
							<Card.Title className="footerCardTitle">About Your</Card.Title>
							<Card.Text className="footerCardText">
								Write here some information about yourself!
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="footerCard">
						<Card.Body className="footerCardBody">
							<Card.Title className="footerCardTitle">Dynamic part</Card.Title>
							<Card.Text className="footerCardText">
								Please here current date yyy-mm-dd. And current time HH:MM.
								Native with PHP - use it :)
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className="footerCard">
						<Card.Body className="footerCardBody">
							<Card.Title className="footerCardTitle">Contact</Card.Title>
							<Card.Text className="footerCardText">
								Please here your contact details. For example: phone and email
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col>
					<Button className="btn footerBtn">
						<i class="bi bi-instagram"></i>
					</Button>

					<Button className="btn footerBtn">
						<i class="bi bi-twitter"></i>
					</Button>
					<Button className="btn footerBtn">
						<i class="bi bi-facebook"></i>
					</Button>
				</Col>
			</Row>
		</footer>
	);
};

export default Footer;
