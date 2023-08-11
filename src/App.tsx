import { FunctionComponent } from 'react';
import { Masonry } from './Masonry';
import { data } from './data';

const App: FunctionComponent = () => {
  return (
    <>
      <Masonry data={data} />
    </>
  );
};

export default App;
