'use client';

import React, { useEffect, useState } from 'react';
import { Button, Htag, P } from '../components';
import { Layout, withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log('Counter: ' + counter);
    return function cleanup() {
      console.log('Unmount: ' + counter);
    }
  }, [])
  return (
    <>
      <Htag tag='h1'>Hest: {counter}</Htag>
      <Button appearance='primary' className='test-props' onClick={() => setCounter(c => c + 1)}>Button</Button>
      <Button appearance='ghost' className='test-props'>Button</Button>
      <P size='l'>Big size</P>
      <P size='m'>Medium size</P>
      <P size='s'>Small size</P>
    </>
  )
}


export default withLayout(Home);