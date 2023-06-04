import React from 'react';
import { Button, Htag, P } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Hest</Htag>
      <Button appearance='primary' className='test-props'>Button</Button>
      <Button appearance='ghost' className='test-props'>Button</Button>
      <P size='l'>Big size</P>
      <P size='m'>Medium size</P>
      <P size='s'>Small size</P>
    </>
  )
}
