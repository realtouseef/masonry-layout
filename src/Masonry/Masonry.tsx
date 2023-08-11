import React from 'react';
import './masonry.css';
import chunk from 'lodash.chunk';

type MasonryType = {
  width?: number;
  column?: number;
  data: {
    src: string;
  }[];
};

/**
 *
 * @param data array of object with src inside
 *
 * @param width sets the width of column
 *
 * @param column is the number used to create number of columns
 */
export const Masonry: React.FunctionComponent<MasonryType> = ({
  data,
  width = 25,
  column = 4,
}) => {
  /*
   * chunkSize helps in creating the number of columns
   */
  const chunkSize = Math.ceil(data.length / column);

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
