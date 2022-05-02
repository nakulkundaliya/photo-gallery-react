export interface ProductListProps {
    pageId: string;
    url: string;
    parent_url: string;
  }
  

export interface ProductState {
    data: ProductListProps[];
}
  
export interface ProductStateSelector {
    product: {
      data: ProductListProps[];
    };
  }