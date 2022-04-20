import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer
			className="py-5 mt-5 bg-primary"
			style={{ display: 'flex', justifyContent: 'center' }}>
			<Container
				className="px-4"
				style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Row style={{ color: 'white' }}>
					<Col style={{ maxWidth: '16rem' }}>
						<h6>About Your</h6>
						<p>Write here some information about yourself!</p>
					</Col>

					<Col style={{ maxWidth: '18.5rem', marginRight: '2rem' }}>
						<h6>Dynamic part</h6>
						<p>
							<span>Please here current date yyy-mm-dd. </span>
							<span>And current time HH:MM.</span>
							<span>Native with PHP - use it :)</span>
						</p>
					</Col>
					<Col style={{ maxWidth: '17.5rem' }}>
						<h6>Contact</h6>
						<span>Please here your contact details. </span>
						<span>For example: phone and email</span>
					</Col>
				</Row>
				<Row>
					<Col style={{ display: 'flex', alignItems: 'flex-start' }}>
						<Button className="btn btn-primary">
							<i class="bi bi-instagram"></i>
						</Button>

						<Button className="btn btn-primary">
							<i class="bi bi-twitter"></i>
						</Button>
						<Button className="btn btn-primary">
							<i class="bi bi-facebook"></i>
						</Button>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
