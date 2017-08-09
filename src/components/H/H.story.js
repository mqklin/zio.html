import React from 'react';
import { storiesOf } from '@storybook/react';
import  H  from './index';
import './story/custom.css'

storiesOf('H', module)
  .add('Size | xs', () => <H size="xs">Very Small 😊</H>)
  .add('Size | sm', () => <H size="sm">Just Small 😊</H>)
  .add('Size | md', () => <H size="md">Medium Size 😊</H>)
  .add('Size | lg', () => <H size="lg">Big Size 😁</H>)
  .add('Size | xl', () => <H size="xl">Veryy Big Size 😱</H>)
  .add('Inner Tag', () => <H size="md"><a href="#"> Send me nowhere</a></H>)
  .add('Custom Style', () => <H className="custom-component" size="md">Its Custom Style</H>)
