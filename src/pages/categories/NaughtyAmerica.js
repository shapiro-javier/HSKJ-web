import React from 'react'
import SelectedCategory from '../../components/SelectedCategory';

export default function NaughtyAmerica({ location }) {
    return(
        <SelectedCategory ID={location.state.ID} name={location.state.name}/>
       )
}
