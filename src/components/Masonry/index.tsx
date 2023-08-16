import React, { useState, useEffect } from 'react';
import { chunk } from '../../utils';
import './masonry.css';

interface MasonryType {
  column: Breakpoint;
  data: {
    src: string;
  }[];
}

type Breakpoint = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

/**
 *
 * @param data array of object with src inside
 *
 * @param column is the number used to create number of columns
 */
const Masonry: React.FunctionComponent<MasonryType> = ({ data, column }) => {
  const [currentColumn, setCurrentColumn] = useState<number>(4);
  const [columnWidth, setColumnWidth] = useState<number>(0);

  const handleColumns = () => {
    const windowWidth = window.innerWidth;
    let currentBreakpointColumns: number;
    let currentBreakpointColumnWidth: number;

    switch (true) {
      case windowWidth < 640:
        currentBreakpointColumns = column.xs;
        currentBreakpointColumnWidth = 50;
        break;
      case windowWidth < 768:
        currentBreakpointColumns = column.sm;
        currentBreakpointColumnWidth = 50;
        break;
      case windowWidth < 1024:
        currentBreakpointColumns = column.md;
        currentBreakpointColumnWidth = 40;
        break;
      case windowWidth < 1280:
        currentBreakpointColumns = column.lg;
        currentBreakpointColumnWidth = 30;
        break;
      case windowWidth < 1536:
        currentBreakpointColumns = column.xl;
        currentBreakpointColumnWidth = 25;
        break;
      case windowWidth > 1536:
        currentBreakpointColumns = column.xxl;
        currentBreakpointColumnWidth = 25;
        break;
      default:
        currentBreakpointColumns = column.md;
        currentBreakpointColumnWidth = 40;
        break;
    }

    setCurrentColumn(currentBreakpointColumns);
    setColumnWidth(currentBreakpointColumnWidth);
  };

  useEffect(() => {
    handleColumns();

    window.addEventListener('resize', handleColumns);

    return () => window.removeEventListener('resize', handleColumns);
  }, [column]);

  /**
   * FIXME:
   * find a better way to equally distribute the images
   * so that each array has equal items
   */

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
        <div key={rowIndex} style={{ width: `${columnWidth}%` }}>
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
