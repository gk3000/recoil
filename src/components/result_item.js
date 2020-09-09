import React from 'react';

const ResultItem = ({show:{ name, image:{ medium }}}) => {
    debugger
    return <div className='result_item'>
              <h2>{name}</h2>
              <img src={medium} alt={'result image'}/>
           </div>
}

export default ResultItem;