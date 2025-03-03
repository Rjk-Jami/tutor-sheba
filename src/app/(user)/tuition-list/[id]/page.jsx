"use client"
import { useParams } from 'next/navigation';
import React from 'react'
import { useGetTuitionDetailsQuery } from '../../../../../redux/api/rootApi';

const TuitionDetails = () => {
    const { id } = useParams();
    const {data, error, isLoading} = useGetTuitionDetailsQuery(id);
        console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default TuitionDetails
