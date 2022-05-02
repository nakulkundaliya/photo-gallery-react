import React, { Fragment } from 'react';
import { Masonry } from '@mui/lab';
import { Box, Link, Typography } from '@mui/material';
import { ProductListProps } from '../../interfaces';
import { Loader } from '../Loader';
import './styles.css';
interface GalleryItemprops {
	data: ProductListProps[];
	loading: boolean;
}

const GalleryItem: React.FC<GalleryItemprops> = ({ data, loading }) => {
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>
          {data.length < 1 && (
            <Box display="flex" justifyContent="center">
              <Typography variant="h6">No data found</Typography>
            </Box>
          )}
        </>
      )}
      <Masonry columns={{ lg: 4, md: 3, sm: 2, xs: 1 }}>
        {data.map((item, index) => (
          <Link
            href={item?.url || '#'}
            color="inherit"
            underline="hover"
            target="_self"
            rel="noopener"
            key={index}
            sx={{ p: 1 }}
          >
            <Box className="gallery-img-container">
              <img
                src={item.image_url}
                alt={item.name}
                loading="lazy"
                className="gallery-img"
              />
              <div className="overlay">
                <Typography variant="h5" className="overlay-text">
                  Open
                </Typography>
              </div>
            </Box>

            <Typography variant="h6" mt={1}>
              {item.name}
            </Typography>
          </Link>
        ))}
      </Masonry>
    </Fragment>
  );
};

export { GalleryItem };
