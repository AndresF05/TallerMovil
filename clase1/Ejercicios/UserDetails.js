import { Text, View } from 'react-native';
import React from 'react';

const UserDetails = ({ name, age, occupation }) => {
  return (
    <View>
      <Text>Nombre: {name}</Text>
      <Text>Edad: {age}</Text>
      <Text>Ocupación: {occupation}</Text>
    </View>
  );
};

export default UserDetails;