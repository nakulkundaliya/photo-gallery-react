import { Box, CircularProgress } from '@mui/material';
import './styles.css';

const Loader = () => {
	return (
		<Box className='loader-container'>
			<CircularProgress thickness={4} size={40} />
		</Box>
	);
};
export { Loader };
