import React, { useState, useEffect } from 'react'
import SelectedCategory from '../../components/SelectedCategory';

export default function TeamSkeet({ location }) {
    return(
        <SelectedCategory ID={location.state.ID} name={location.state.name}/>
       )
}
