import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import CardTable from '../components/CardTable';
import axios from 'axios';

function Home() {
	const [galleryModals, setGalleryModals] = useState([]);
	useEffect(() => {
		axios.get('https://picsum.photos/v2/list?limit=10').then((res) => {
			setGalleryModals(
				res.data.map((selectedImg) => {
					// console.log('selectedImg', selectedImg);
					return selectedImg;
				})
			);
		});
	}, []);
	// Loading message for array
	if (!galleryModals?.length) {
		return <h5>Loading...</h5>;
	}
	return (
		<Container
			style={{
				minHeight: '28.8rem',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}>
			{/* {console.log('galleryModals', galleryModals)} */}
			<CardTable
				galleryModals={galleryModals}
				setGalleryModals={setGalleryModals}
			/>
		</Container>
	);
}

export default Home;
