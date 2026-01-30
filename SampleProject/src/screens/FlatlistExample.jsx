import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchUsers } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const FlatlistExample = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers(200));
  }, []);

  if (loading)
    return <ActivityIndicator size="large" color="blue" style={{ flex: 1 }} />;
  if (error)
    return (
      <Text style={{ flex: 1, textAlign: 'center', marginTop: 20 }}>
        {error}
      </Text>
    );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.firstName}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FlatlistExample;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});
