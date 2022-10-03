import React from 'react';
import {View,ScrollView, Text} from 'react-native';
import CategoryCard from './CategoryCard';


const Categories = () => {
    return (
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}
        >
            <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing" />
            <CategoryCard imgUrl="https://links.papareact.com/wru"
            title="Testing"/>
            <CategoryCard imgUrl="https://links.papareact.com/wru"
            title="Testing"/>
        </ScrollView>
    );
}
export default Categories;
