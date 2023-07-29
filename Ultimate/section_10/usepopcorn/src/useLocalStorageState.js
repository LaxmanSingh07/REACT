import React from 'react'
import { useState ,useEffect} from 'react';

export function useLocalStorageState(initialState,key) {
     const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
         
    return storedValue ? JSON.parse(storedValue) : initialState;
     });
    
     useEffect(
        function () {
          localStorage.setItem(key, JSON.stringify(value));
        },
        [key, value]
    ); // it will only run on the mount
    
    return [value, setValue];
}



