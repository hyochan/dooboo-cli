import 'react-native';

import React, { ReactElement } from 'react';
import {
  RenderResult,
  cleanup,
  render,
} from '@testing-library/react-native';
import { createTestElement, createTestProps } from '../../../../test/testUtils';

import DrawerNavigator from '../DrawerNavigator';
import { NavigationNativeContainer } from '@react-navigation/native';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let props: any;
let component: ReactElement;
let testingLib: RenderResult;

describe('[Drawer] navigator', () => {
  beforeEach(() => {
    props = createTestProps();
    component = createTestElement(
      <NavigationNativeContainer>
        <DrawerNavigator {...props} />
      </NavigationNativeContainer>,
    );
    testingLib = render(component);
  });

  afterEach(() => cleanup());

  it('should renders without crashing', () => {
    jest.useFakeTimers();
    const { baseElement } = testingLib;
    jest.runAllTimers();
    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });
});
