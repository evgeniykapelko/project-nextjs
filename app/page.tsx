import React from 'react';
import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Hest</Htag>
      <Button appearance='primary' className='test-props'>Button</Button>
    </>
  )
}
