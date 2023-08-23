import Image from 'next/image';
import React from 'react'
import loader from '../public/loading.svg'

const loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 c-black">
      <Image
        src={loader}
        width={70}
        height={70}
      />
    </div>
  );
}

export default loading