import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SectionList,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const header = () => {
  const [expandedSection, setExpandedSection] = useState('');
  const toggleExpand = section => {
    setExpandedSection(section === expandedSection ? '' : section);
  };

  const sections = [
    {
      title: 'Left Component',
      data: [{key: 'left'}],
      expanded: expandedSection === 'left',
    },
    {
      title: 'Center Component',
      data: [{key: 'center'}],
      expanded: expandedSection === 'center',
    },
    {
      title: 'Right Component',
      data: [{key: 'right'}],
      expanded: expandedSection === 'right',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => toggleExpand(item.key)}
        style={[
          styles.item,
          {
            height:
              item.key === expandedSection ? height * (2 / 6) : height / 6,
          },
        ]}>
        <Text>{item.key}</Text>
      </TouchableOpacity>
    );
  };

  const renderSectionHeader = ({section}) => {
    return <Text style={styles.sectionHeader}>{section.title}</Text>;
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  sectionHeader: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
});

export default header;
