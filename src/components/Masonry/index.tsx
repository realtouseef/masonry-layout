import React, { useState, useEffect } from 'react';
import { chunk } from '../../utils';
import './masonry.css';

interface MasonryType {
  width?: number;
  column: Breakpoint;
  data: {
    src: string;
  }[];
}

type Breakpoint = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
};

/**
 *
 * @param data array of object with src inside
 *
 * @param width sets the width of column
 *
 * @param column is the number used to create number of columns
 */
const Masonry: React.FunctionComponent<MasonryType> = ({
  data,
  column,
  width = 25,
}) => {
  const [currentColumn, setCurrentColumn] = useState<number>(4);

  useEffect(() => {
    const handleColumns = () => {
      const windowWidth = window.innerWidth;

      const currentBreakpointColumns =
        column[
          windowWidth < 640
            ? 'xs'
            : windowWidth < 768
            ? 'sm'
            : windowWidth < 1024
            ? 'md'
            : windowWidth < 1280
            ? 'lg'
            : windowWidth < 1536
            ? 'xl'
            : 'xxl'
        ] || column.md;

      setCurrentColumn(currentBreakpointColumns || 4);
    };

    handleColumns();
    const resizeColumn = () => handleColumns();

    window.addEventListener('resize', resizeColumn);

    return () => window.removeEventListener('resize', resizeColumn);
  }, [column]);

  /*
   * chunkSize helps in creating the number of columns
   */
  const chunkSize = Math.ceil(data.length / currentColumn);

  /*
   * chunk takes the original array and the chunkSize
   * to equally distribute the items inside
   *
   * the chunk from lodash converts the original array into 2D array
   */
  const distributed = chunk(data, chunkSize);

  return (
    <main className='gallery'>
      {distributed?.map((innerArray, rowIndex) => (
        <div key={rowIndex} style={{ width: `${width}%` }}>
          {innerArray?.map((imageObj, columnIndex) => (
            <div key={columnIndex} className='item'>
              <img
                src={imageObj?.src}
                alt={`Image ${rowIndex}-${columnIndex}`}
              />
            </div>
          ))}
        </div>
      ))}
    </main>
  );
};

export default Masonry;
