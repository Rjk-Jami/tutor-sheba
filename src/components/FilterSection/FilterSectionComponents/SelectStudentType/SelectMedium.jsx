"use client"
import React, { useState } from 'react'
import FilterHeader from '../../FilterHeader';
import FormSelect from '@/components/FormSelect/FormSelect';
import { useGetMediumsQuery } from '../../../../../redux/api/rootApi';
import { useDispatch, useSelector } from 'react-redux';
import { setMedium } from '../../../../../redux/filter/commonFilterSlice';

const SelectMedium = () => {
    const { data: mediums = [], isLoading: mediumsLoading } =
        useGetMediumsQuery();
    
        const medium = useSelector((state) => state.filters.medium);
        const dispatch = useDispatch()

  return (
    <div>
    <FilterHeader>Select Medium</FilterHeader>
    <FormSelect
      options={mediums}
      selectedValue={medium}
      onChange={(e)=>dispatch(setMedium(e))}
    />
  </div>
  )
}

export default SelectMedium
