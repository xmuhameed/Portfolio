import React from 'react'
import { VscLoading } from "react-icons/vsc";

const loading = () => {
  return (
    <div className='d-flex justify-content-center align-item-center vh-100'>
      <VscLoading className="loading" />
    </div>
  );
}

export default loading