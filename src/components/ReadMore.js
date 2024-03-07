import React, { useState } from 'react';

const ReadMore = ({text}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)};

  return (
    <p className='desc'>
      {isReadMore ? text.slice(0, 120): text }
    
      {text.length > 120 &&
        <span onClick={toggleReadMore} className='readmore'>
          {isReadMore ? '...read more' : ' ...show less'}
        </span>
      }
    </p>
  )
}

export default ReadMore;