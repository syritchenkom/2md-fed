import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import CardTable from '../../components/CardTable/CardTable';
import axios from 'axios';
import './Home.scss';

function Home() {
	const [galleryModals, setGalleryModals] = useState([]);
	useEffect(() => {
		axios.get('https://picsum.photos/v2/list?limit=10').then((res) => {
			setGalleryModals(
				res.data.map((selectedImg) => {
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
		<Container className="homeContainer">
			{/* Import Card table */}
			<CardTable
				galleryModals={galleryModals}
				setGalleryModals={setGalleryModals}
			/>
		</Container>
	);
}

export default Home;
