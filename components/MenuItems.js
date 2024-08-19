import React from 'react';

import { View, Text, ScrollView, StyleSheet, FlatList, SectionList } from 'react-native';

const menuItemsToDisplay = [
  {
    title: 'Docinhos',
    data: [
      { name: 'Brigadeiro', price: '$55.00' },
      { name: 'Ninho com Nutella', price: '$65.00' },
      { name: 'Churros', price: '$65.00' },
      { name: 'Nozes', price: '$65.00' },
      { name: 'Beijinho', price: '$55.00' },
      { name: 'Casadinho', price: '$65.00' },
      { name: 'Moranguinho', price: '$55.00' },
      { name: 'Oreo', price: '$65.00' },
    ],
  },
  {
    title: 'Brownie - [P / G]',
    data: [
      { name: 'Ninho com Nutella', price: '$3/5' },
      { name: 'Brigadeiro (preto ou branco)', price: '$3/5' },
      { name: 'Nozes', price: '$3/5' },
      { name: 'Doce de Leite', price: '$3/5' },
    ],
  },
];

const Separator = () => <View style={menuStyles.separator} />
const Header = () => <Text style={menuStyles.headerText}> View Menu </Text>

const Item = ({name, price}) => {
  return (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{price}</Text>
    </View>
  )
}

const MenuItems = () => {

  const renderItem = ({item}) => <Item name={item.name} price={item.price} />
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={menuStyles.headerStyle}>
      <Text style={menuStyles.sectionHeader}>{title}</Text>
    </View>
  );

  return (
    <View style={menuStyles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        indicatorStyle={'white'}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

export default MenuItems;

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerStyle: {
    backgroundColor: 'black',
  },
  sectionHeader: {
    color: 'white',
    fontSize: 26,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  headerText: { 
    fontSize: 40, 
    flexWrap: 'wrap', 
    textAlign: 'center', 
    color: 'white',
    paddingVertical: 8,
  },
  itemText: {
    //color: 'yellow',
    color: 'white',
    fontSize: 20,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#EDEFEE'
  }
});