import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen'

const Layout = () =>{
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMBMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
    })

    // we want to see home page only when font is loaded
    const onLayoutRootView = useCallback(async ()=>{
        if(fontsLoaded){
            await SplashScreen.hideAsync()
        }
    },[fontsLoaded])
    
    if(!fontsLoaded) return null;
    return <Stack />

}


export default Layout;