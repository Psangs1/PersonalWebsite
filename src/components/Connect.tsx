import { useState } from 'react';
import { connectdata } from '../data/connectdata.ts';


import ProjectCard from './ProjectCard';
import ConnectCard from './ConnectCard.tsx';


function Connect() {

    return (
      <>
        <div className='mt-10' id='contact'>
            <h1 className='font-bold text-[64px] font-primary'>Lets Connect!</h1>
            <div className='grid grid-cols-3 gap-4 mt-10'>
                {connectdata.map(connect => <ConnectCard 
                    id = {connect.id}
                    platform={connect.platform}
                    icon={connect.icon}
                    url={connect.url}
                />
                )}
            </div>
        </div>

      </>
    )
  }
  
  export default Connect