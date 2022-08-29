import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Hospitals from './screens/Hospitals'; 
import Doctors from './screens/Doctors';


const Tab = createBottomTabNavigator();  

export default function App(){
  return(
  <NavigationContainer>
    <Tab.Navigator 
        screenOptions ={({route})=> ({
          tabBarIcon:({focused,color,size})=>{
            let iconName
            if(route.name==='Hospitals'){
              iconName=focused
              ?'book'
              :'book-outline'
            }
            else if(route.name==='Doctors'){
            iconName=focused
            ?'create'
            :'create-outline'
            }
              return 
              <Ionicons name ={iconName} size={size} color={color}/>
          }
        })}
            tabBarOptions={{
              activeTintColor:'tomato',
              inactiveTintColor:'gray'
            }}
            >
              <Tab.Screen name='Hospitals'
              component={Hospitals}
              options={{headerShown:false}}/>

              <Tab.Screen name='Doctors'
              component={Doctors}
              options={{headerShown:false}}/>
             </Tab.Navigator>

          </NavigationContainer>
  )
  }
