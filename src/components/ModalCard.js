import React from 'react';
import { Modal } from 'react-bootstrap';
import Slider from './Slider';

const ModalCard = ({
	modalOpen,
	setModalOpen,
	galleryModals,
	setGalleryModals
}) => {
	// const handleClose = () => setModalOpen(false);

	return (
		<>
			<Modal
				show={modalOpen}
				height="50%"
				onHide={() => setModalOpen(false)}
				aria-labelledby="example-modal-sizes-title-sm"
				size="lg"
				centered>
				<Modal.Header closeButton className="bg-info text-primary">
					<Modal.Title id="example-modal-sizes-title-sm">
						<h4>Gallery in Modal</h4>
						<p style={{ fontSize: '14px' }}>
							<i class="bi bi-globe"></i> <span>picsum.photos</span>
						</p>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body scrollable="false" style={{ padding: '0' }}>
					<Slider
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
