import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = ({
	modalOpen,
	setModalOpen,
	galleryModals,
	setGalleryModals
}) => {
	// const [index, setIndex] = useState(false);
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<>
			<Carousel
				className="test"
				prevIcon={
					<span
						aria-hidden="true"
						className="carousel-control-prev-icon"
						// style={{ backgroundColor: 'gray', color: 'green' }}
						// <span aria-hidden="true" className="glyphicon glyphicon-glass"
						// style={{
						// 	border: '2px solid #7fc4fd',
						// 	borderRadius: '6px',
						// 	fontSize: '15px'
						// 	// color: 'green'
						// }}/>
					/>
					// <i class="bi bi-chevron-left"></i>
				}
				nextIcon={
					<span aria-hidden="true" className="">
						<i class="bi bi-chevron-right"></i>
					</span>
				}
				// variant="dark"
				indicators={false}
				interval={null}
				// autoPlay={false}
				activeIndex={index}
				onSelect={handleSelect}>
				{galleryModals.map((image, index) => {
					const { author, download_url } = image;
					return (
						<Carousel.Item key={index} style={{ height: '32rem' }}>
							<img className="d-block w-100" src={download_url} alt={author} />
							<Carousel.Caption>
								<p
									style={{
										color: '#7fc4fd',
										border: '1px solid #7fc4fd',
										width: '14rem',
										fontSize: '12px',
										marginLeft: '-6rem'
									}}>
									<span>Photo's Author </span>
									{author}
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</>
	);
};

export default Slider;
