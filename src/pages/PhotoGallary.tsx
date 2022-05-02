import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductStateSelector } from '../interfaces';
import { GetProduct } from '../redux/action';
import { AppDispatch } from '../redux/store';

const PhotoGallary = () => {
  const product = useSelector((state: ProductStateSelector) => state.product);
  const dispatch = useDispatch<AppDispatch>();

  const getProduct = () => dispatch(GetProduct());

  useEffect(() => {
    getProduct();
  }, []);

  console.log('product of data', product);

  return <div>hello</div>;
};
export default PhotoGallary;
