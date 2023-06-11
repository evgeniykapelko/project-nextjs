'use client';

import React, { useEffect, useState } from 'react';
import { Button, Htag, P } from '../components';
import { withLayout } from '../layout/Layout';
import { GetStaticProps,InferGetStaticPropsType } from 'next';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';

function Home({menu, firstCategory}: HomeProps): JSX.Element {
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
      {console.log(menu)}

    </>
  )
}


export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[][]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory
  });
  return {
      props: {
          menu,
          firstCategory
      }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}