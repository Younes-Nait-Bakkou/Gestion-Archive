import React from 'react'
import './actionLayout.css';
import Stepper from '../../common/components/Stepper/Stepper';

export default function ActionLayout({resourceName, actions, selects}) {


  return (
    <main className={'actions-container'}>
      <h1>{resourceName}</h1>
      <Stepper resourceName={resourceName} actions={actions} selects={selects}/>
    </main>
  )
}
