import React from 'react'
import SelectedCategory from '../../components/SelectedCategory';

export default function Defloration({ location }) {
    return(
        <SelectedCategory ID={location.state.ID} name={location.state.name}/>
       )
}
