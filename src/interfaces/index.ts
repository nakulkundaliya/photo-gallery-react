export interface ProductListProps {
	page_id: string;
	image_url: string;
	name: string;
	url: string;
}

export interface ProductState {
	data: ProductListProps[];
}

export interface ProductStateSelector {
	product: {
		loading: boolean;
		data: ProductListProps[];
		error: string;
	};
}
