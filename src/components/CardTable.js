import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ModalCard from './ModalCard';
import CardLogo from '../assets/item.svg';

const CardTable = ({ galleryModals, setGalleryModals }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(true);

	// const modalShow = () => setModalOpen(false);
	return (
		<main>
			<Container>
				<Row>
					<Col style={{ display: 'flex', justifyContent: 'center' }}>
						<Card
							style={{
								width: '34rem',
								backgroundColor: '#7fc4fd',
								flexDirection: 'row',
								alignItems: 'center'
							}}>
							<Card.Img
								style={{ margin: '0 50px 0 -60px' }}
								variant="left"
								src={CardLogo}
							/>
							<Card.Body
								style={{
									backgroundColor: '#f1f9ff',
									// height: '325px',
									display: 'flex',
									alignItems: 'center',
									// flexDirection: 'row',
									alignContent: 'center',
									flexWrap: 'wrap',
									color: '#7fc4fd',
									padding: '4rem 3rem '
								}}>
								<Card.Title>This is main page title</Card.Title>
								{isOpen ? (
									<Card.Text>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
										officiis vitae...
									</Card.Text>
								) : (
									<Card.Text>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
										officiis vitae repellendus recusandae, nulla nesciunt
										voluptatibus, provident quibusdam dolorem, et mollitia id
										officia beatae eaque aperiam veritatis. Aperiam, vitae.
										Libero? Exercitationem quae error in iste totam. Voluptas
										sequi eaque alias odio voluptate quos vero, illum quasi qui
										ex omnis. Blanditiis ipsam quidem voluptates inventore iusto
										magnam, reiciendis tempore omnis dicta.
									</Card.Text>
								)}
								<Button
									className="me-2"
									variant="outline-primary"
									style={{ width: '8.5rem' }}
									onClick={() => setIsOpen(!isOpen)}>
									More
								</Button>
								<Button variant="primary" onClick={() => setModalOpen(true)}>
									Show Gallery
								</Button>
								<ModalCard
									modalOpen={modalOpen}
									setModalOpen={setModalOpen}
									galleryModals={galleryModals}
									setGalleryModals={setGalleryModals}
								/>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</main>
	);
};

export default CardTable;
