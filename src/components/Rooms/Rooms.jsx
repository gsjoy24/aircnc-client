import React, { useEffect, useState } from 'react';
import Card from './Card';
import Container from '../Shared/Container';
import Loader from '../Shared/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import Heading from '../Heading/Heading';

const Rooms = () => {
	const [params, setParams] = useSearchParams();
	const category = params.get('category');

	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetch('rooms.json')
			.then((res) => res.json())
			.then((data) => {
				if (category) {
					const filtered = data.filter((room) => room.category === category);
					setRooms(filtered);
				} else {
					setRooms(data);
				}
				setLoading(false);
			})
			.catch((err) => console.log(err.message));
	}, [category]);

	if (loading) {
		return <Loader />;
	}
	return (
		<Container>
			{rooms.length > 0 ? (
				<div
					className='pt-12 grid grid-cols-1
      sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
					{rooms.map((room, i) => (
						<Card key={i} room={room} />
					))}
				</div>
			) : (
				<div className='pt-16'>
					<Heading
						title='No Rooms Available In This Category!'
						subtitle='Please Select Other Categories.'
						center={true}
					/>
				</div>
			)}
		</Container>
	);
};

export default Rooms;
