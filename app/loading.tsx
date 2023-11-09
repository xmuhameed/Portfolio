import Image from 'next/image';
import React from 'react'
import loader from '../public/loading.svg'

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen text-black">
      <Image
        src={loader}
        width={70}
        height={70}
        alt='loder'
      />
    </div>
  );
}

export default loading