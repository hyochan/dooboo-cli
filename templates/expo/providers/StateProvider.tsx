import type {Dispatch, SetStateAction} from 'react';

import {useState} from 'react';
import createCtx from '../utils/createCtx';

interface User {
  displayName: string;
  age: number;
  job: string;
}

interface Context {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const [useCtx, Provider] = createCtx<Context>();

interface Props {
  children?: JSX.Element;
}

function StateProvider({children}: Props): JSX.Element {
  const [user, setUser] = useState<User>({
    displayName: 'hyochan',
    age: 18,
    job: 'dev',
  });

  return (
    <Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </Provider>
  );
}

export {useCtx as useStateContext, StateProvider};
