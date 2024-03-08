import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const {height} = Dimensions.get('window');

const section = () => {
  const [expandedSection, setExpandedSection] = useState('');

  const toggleExpand = section => {
    setExpandedSection(section === expandedSection ? '' : section);
  };

  const sections = [
    {
      key: 'schedule',
      title: 'Lịch trình',
      items: [
        {
          location: 'Hồ Tràm, Vũng Tàu',
          time: '09:00 AM - 12:00 AM, 12/04/2004',
          activity: 'Bơi, đạp xe, bóng chuyền, thiền',
          trans: 'Xe bus',
          image: '../assets/logo.png',
        },
      ],
    },
    {
      key: 'other',
      title: 'Khách sạn',
      items: [
        {
          name: 'Nha Trang',
          time: '09:00 AM - 12:00 AM, 12/04/2004',
          location: '222, Quang Trung, HCM',
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      {sections.map(section => (
        <View key={section.key}>
          <TouchableOpacity
            onPress={() => toggleExpand(section.key)}
            style={[
              styles.sectionHeader,
              {
                backgroundColor:
                  expandedSection === section.key ? 'lightblue' : 'lightgrey',
              },
            ]}>
            <Text style={styles.sectionHeaderText}>{section.title}</Text>
          </TouchableOpacity>
          {expandedSection === section.key && (
            <View style={styles.itemContainer}>
              {section.items.map((item, index) => (
                <View key={index} style={[styles.item, {elevation: 1}]}>
                  {index === 0 && section.key === 'schedule' ? (
                    <View
                      style={{
                        borderWidth: 1,
                        padding: 15,
                        borderRadius: 8,
                        shadowColor: '#000',
                        shadowOffset: {width: 0, height: 2},
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                      }}>
                      <Text>Địa điểm</Text>
                      <Text style={styles.fontText}>{item.location}</Text>
                      <Text>Thời gian</Text>
                      <Text style={styles.fontText}>{item.time}</Text>
                      <Text>Hoạt động</Text>
                      <Text style={styles.fontText}>{item.activity}</Text>
                      <Text>Phương tiện</Text>
                      <Text style={styles.fontText}>{item.trans}</Text>

                      <Text>Anh</Text>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginBottom: 30,
                        }}>
                        <Image
                          source={require('../assets/logo.png')}
                          style={styles.image}
                        />
                      </View>
                    </View>
                  ) : (
                    <View
                      style={{
                        borderWidth: 1,
                        padding: 15,
                        borderRadius: 8,
                        shadowColor: '#000',
                        shadowOffset: {width: 0, height: 2},
                        shadowOpacity: 0.2,
                        shadowRadius: 3,
                      }}>
                      <Text>Tên khách sạn</Text>
                      <Text style={styles.fontText}>{item.name}</Text>
                      <Text>Thời gian mở</Text>
                      <Text style={styles.fontText}>{item.time}</Text>
                      <Text>Địa điểm</Text>
                      <Text style={styles.fontText}>{item.location}</Text>
                      <TouchableOpacity
                        style={{
                          backgroundColor: 'lightblue',
                          borderWidth: 1,
                          borderColor: 'green',
                          height: 30,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 10,
                        }}>
                        <Text>Chi tiết</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    padding: 10,
    backgroundColor: 'lightgrey',
  },
  sectionHeaderText: {
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    padding: 15,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  image: {
    width: 300,
    height: 100,
  },
  fontText: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default section;
