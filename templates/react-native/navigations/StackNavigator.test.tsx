import {RenderAPI, cleanup, render} from '@testing-library/react-native';
import {createTestElement, createTestProps} from '../../../test/utils/testUtils';

import {NavigationContainer} from '@react-navigation/native';
import {ReactElement} from 'react';
import StackNavigator from '../../../src/components/navigations/StackNavigator';

describe('[Stack] navigator', () => {
  let props: any;
  let component: ReactElement;
  let testingLib: RenderAPI;

  beforeEach(() => {
    props = createTestProps();

    component = createTestElement(
      <NavigationContainer>
        <StackNavigator {...props} />
      </NavigationContainer>,
    );

    testingLib = render(component);
  });

  afterEach(() => cleanup());

  it('should renders without crashing', () => {
    jest.useFakeTimers();

    const baseElement = testingLib.toJSON();

    jest.runAllTimers();
    expect(baseElement).toBeTruthy();
  });
});
