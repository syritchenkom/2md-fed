import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselItem.scss';

const CarouselItem = ({
	modalOpen,
	setModalOpen,
	galleryModals,
	setGalleryModals
}) => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<>
			<Carousel
				className="Carousel"
				prevIcon={
					<span aria-hidden="true" className="carousel-control-prev-icon">
						<i class="bi bi-chevron-left"></i>
					</span>
				}
				nextIcon={
					<span aria-hidden="true" className="carousel-control-next-icon">
						<i class="bi bi-chevron-right"></i>
					</span>
				}
				indicators={false}
				interval={null}
				autoPlay={false}
				activeIndex={index}
				onSelect={handleSelect}>
				{/* Take data-photo from picsum.photos*/}
				{galleryModals.map((image, index) => {
					// Destructuring the elements from API
					const { author, download_url } = image;
					return (
						<Carousel.Item key={index} className="carouselItem">
							{/* Extract a photo from api */}
							<img
								className="d-block w-100 h-100"
								src={download_url}
								alt={author}
							/>
							{/* Extract author photo from api */}
							<Carousel.Caption className="carouselCaption">
								Photo's {author}
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</>
	);
};

export default CarouselItem;
