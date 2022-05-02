import { Box, Container, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GalleryItem } from '../components';

import { ProductListProps, ProductStateSelector } from '../interfaces';
import { GetProduct } from '../redux/action';
import { AppDispatch } from '../redux/store';

import InfiniteScroll from 'react-infinite-scroll-component';

const ITEM_PER_PAGE = 60;

const Gallery = () => {
	const [offset, setOffset] = useState<number>(0);
	const [search, setSearch] = useState<string>('');
	const [filteredList, setFilteredList] = useState<ProductListProps[] | []>([]);

	const { loading, data } = useSelector(
		(state: ProductStateSelector) => state.product
	);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(GetProduct({ offset }));
	}, [offset]);

	useEffect(() => {
		getSearchResult();
	}, [search]);

	const getSearchResult = () => {
		const result = data.filter((item: any) =>
			item.description.toLowerCase().includes(search.toLowerCase())
		);
		setFilteredList(result);
	};

	const fetchMoreData = () => {
		setTimeout(() => {
			setOffset(offset + ITEM_PER_PAGE);
		}, 1500);
	};

	return (
		<Container>
			<Box sx={{ p: { md: 5 } }}>
				<Typography variant='h4' fontWeight={'bold'} textAlign={'center'}>
					Photo Gallery {search && `| ${search}`}
				</Typography>
				<Box my={4}>
					<TextField
						variant='outlined'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						autoComplete='off'
						placeholder='Search by description'
						fullWidth
					/>
				</Box>
				<InfiniteScroll
					dataLength={data?.length}
					next={fetchMoreData}
					hasMore={true}
					loader={<h4></h4>}
					scrollableTarget='scrollableDiv'
				>
					<GalleryItem data={search ? filteredList : data} loading={loading} />
				</InfiniteScroll>
			</Box>
		</Container>
	);
};
export default Gallery;
