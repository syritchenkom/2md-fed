import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ModalCard from '../ModalCard/ModalCard';
import CardLogo from '../../assets/item.svg';
import './CardTable.scss';

const CardTable = ({ galleryModals, setGalleryModals }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(true);

	return (
		<Container>
			<Row>
				<Col className="cardCol">
					<Card className="cardContainer">
						{/* Take Logo.svg */}
						<Card.Img className="cardImg" variant="left" src={CardLogo} />
						<Card.Body className="cardBody">
							<Card.Title className="cardTitle">
								<h1>This is main page title.</h1>
							</Card.Title>
							{/* If not pressed the button shows it */}
							{isOpen ? (
								<Card.Text className="cardText">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
									officiis vitae...
								</Card.Text>
							) : (
								// If the button is pressed it shows it
								<Card.Text className="cardText">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
									officiis vitae repellendus recusandae, nulla nesciunt
									voluptatibus, provident quibusdam dolorem, et mollitia id
									officia beatae eaque aperiam veritatis. Aperiam, vitae.
									Libero? Exercitationem quae error in iste totam. Voluptas
									sequi eaque alias odio voluptate quos vero, illum quasi qui ex
									omnis. Blanditiis ipsam quidem voluptates inventore iusto
									magnam, reiciendis tempore omnis dicta.
								</Card.Text>
							)}
							<Button
								className="cardBtnFirst"
								variant="outline-primary"
								onClick={() => setIsOpen(!isOpen)}>
								More
							</Button>
							<Button
								className="cardBtnSecond"
								onClick={() => setModalOpen(true)}>
								Show Gallery
							</Button>
							{/* When pressed, this modal window is displayed */}
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
	);
};

export default CardTable;
