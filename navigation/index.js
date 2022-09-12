import { NavigationContainer } from '@react-navigation/native';  
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../app/firebase';
import Main from './stacks/index';
import BTabs from './bottomtabs/TabsNavigator';



const MainNavigator = () => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('user', user);
                const uid = user.uid;
                setIsLogged(true);
            } else {
                console.log("No user logged");
                setIsLogged(false);
            }
        });
    }, []);

    return (<NavigationContainer>
        {isLogged ?
            <BTabs/> :
            <Main/>
        }
    </NavigationContainer>)

}

export default MainNavigator;