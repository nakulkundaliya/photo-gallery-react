import { Route, Routes } from 'react-router-dom';
import PhotoGallary from './pages/PhotoGallary';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PhotoGallary />} />
    </Routes>
  );
};

export default App;
