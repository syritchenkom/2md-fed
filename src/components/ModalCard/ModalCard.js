import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Carousel from '../Carousel/CarouselItem';
import './ModalCard.scss';

const ModalCard = ({
	modalOpen,
	setModalOpen,
	galleryModals,
	setGalleryModals
}) => {
	const handleClose = () => setModalOpen(false);
	return (
		<>
			<Modal
				show={modalOpen}
				className="modalCard"
				onHide={() => setModalOpen(false)}
				aria-labelledby="example-modal-sizes-title-sm"
				size="lg"
				centered>
				<Modal.Header className="modalHeader bg-info text-primary">
					<Button className="modalHeaderButton" onClick={handleClose}>
						<i class="bi bi-x"></i>
					</Button>
					<Modal.Title className="modalTitle" id="example-modal-sizes-title-sm">
						<h3>Gallery in Modal</h3>
						<p>
							<i class="bi bi-globe"></i> <span>picsum.photos</span>
						</p>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="modalBody" scrollable="false">
					<Carousel
						modalOpen={modalOpen}
						setModalOpen={setModalOpen}
						galleryModals={galleryModals}
						setGalleryModals={setGalleryModals}
					/>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default ModalCard;
