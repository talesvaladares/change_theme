import {useState, useEffect , Dispatch, SetStateAction} from 'react';

type UsePersistedStateThemeResponse<T> = [
  T,
  Dispatch<SetStateAction<T>>
];

export function usePersistedStateTheme<T> (key: string, initialState: T): UsePersistedStateThemeResponse<T>  {
  
  const [theme, setTheme] = useState(() => {
    
    const storageValue = localStorage.getItem(key);

    if(storageValue){
      return JSON.parse(storageValue);
    }
    else{
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  },[theme, key]);

  return [theme, setTheme];
}