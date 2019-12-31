import React, { useState, useEffect } from 'react'
import SelectedCategory from '../../components/SelectedCategory';

export default function BBC({ location }) {
    return(
        <SelectedCategory ID={location.state.ID} name={location.state.name}/>
       )
}
