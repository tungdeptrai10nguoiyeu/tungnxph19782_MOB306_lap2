import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View,Text,Button,TextInput, FlatList, Pressable } from 'react-native';
import Manager from './Manager';
import {useState} from 'react';


const Stack = createNativeStackNavigator();

const EditProfile = (Props) =>{
    const data = [
        {
            Ten : 'Tùng',
            Tuoi : '20',
            Diachi : 'Hà Nội',
            Sdt : '03995257193',
            Email : 'tungnxph19782@fpt.edu.vn',
        }
    ];
    const [Profile,SetProfile] = useState(data);
    const [Ten,SetTen] = useState('');
    const [Tuoi,SetTuoi] = useState('');
    const [Diachi,SetDiachi] = useState('');
    const [Sdt,SetSdt] = useState('');
    const [Email,SetEmail] = useState('');
    const handleEdit = (editProfile) => {
        const edittt = Profile.find(item => item.Ten == editProfile);
        SetTen (editProfile);
        SetTuoi(editProfile.Tuoi);
        SetDiachi(editProfile.Diachi);
        SetSdt(editProfile.Sdt);
        SetEmail(editProfile.Email);
    }

    const navigation = Props.navigation;
    return(
        <View>
        <TextInput 
    placeholder='Tên'
    value={Ten}
    onChangeText={(Text) => (SetTen(Text))}
    />
     <TextInput 
    placeholder='Tuổi'
    value={Tuoi}
    onChangeText={(Text) => (SetTuoi(Text))}
    />
     <TextInput 
    placeholder='Địa chỉ'
    value={Diachi}
    onChangeText={(Text) => (SetDiachi(Text))}
    />
    <TextInput 
    placeholder='Số điện thoại'
    value={Sdt}
    onChangeText={(Text) => (SetSdt(Text))}
    />
    <TextInput 
    placeholder='Email'
    value={Email}
    onChangeText={(Text) => (SetEmail(Text))}
    />

    <Button
    title='Lưu'
    onPress={() => navigation.navigate('Profile',{Profile})}
    />
    <Button
    title='Huỷ'
    onPress={() => navigation.navigate('Home')}/>
    </View>
    );
}

const Profile = (Props,route) =>{
    const navigation = Props.navigation;
  // const {data} = route.params;
    
   // const data = [
        //{
          //  Ten : 'Tùng',
           // Tuoi : 20,
            //Diachi : 'Hà Nội',
            //Sdt : '03995257193',
          //  Email : 'tungnxph19782@fpt.edu.vn',
        //}
    //];
    
    //const [Profile,SetProfile] = useState(data);
   // const [Ten,SetTen] = useState('');
    //const [Tuoi,SetTuoi] = useState(0);
    //const [Diachi,SetDiachi] = useState('');
    //const [Sdt,SetSdt] = useState('');
    //const [Email,SetEmail] = useState('');
    //const navigation = Props.navigation;
    return(
        <View>
           <Text>tung</Text>
           <Button
            title='Edit'
            onPress={() => navigation.navigate('EditProfile')} />
           </View>
           
          
           
        
       
    );
}


const Home = (Props) =>{
    const navigation = Props.navigation;
    return(
        <View>
            <Text>
                Tùng đẹp trai 10 người yêu!!!
            </Text>
            <Button
            title='Chuyển màn'
            onPress={() => navigation.navigate('Profile')}
            />
        </View>

    );
};
const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen name='Home' component={Home}/>
               <Stack.Screen name='Profile' component={Profile} />
               <Stack.Screen name='EditProfile' component={EditProfile}/>
               <Stack.Screen name='Manager' component={Manager} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;