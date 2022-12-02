import React from 'react';
import TimeElapsed from './TimeElapsed';

type checkDateTime = {
  time: Date
}
export const UXTime:React.FC<checkDateTime> = (time: checkDateTime) => {

  const asktime: checkDateTime = time;
  return (
    <div>
      UX S Time:
      {TimeElapsed({time: asktime.time})}
    </div>
  );
};

// npm version patch
// npm publish --access public
