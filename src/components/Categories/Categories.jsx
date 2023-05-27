import React from 'react';
import Container from '../Shared/Container';
import { categories } from './CategoriesData';
import CategoryBox from './CategoryBox';

const Categories = () => {
	return (
		<Container>
			<div className='pt-4 gap-x-4 flex flex-row justify-between items-center overflow-x-auto'>
				{categories.map((item, i) => (
					<CategoryBox label={item.label} icon={item.icon} key={i} />
				))}
			</div>
		</Container>
	);
};

export default Categories;
