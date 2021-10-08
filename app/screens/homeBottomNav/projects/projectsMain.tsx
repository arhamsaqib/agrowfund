import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import {MyText} from '../../../core/MyText';
import {ProjectCard} from '../../../core/ProjectCard';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../../../colors';
import {ButtonStandard} from '../../../core/Button';

export const ProjectsMain = ({navigation}: any) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
        <View style={styles.scrollViewInnerMainCont}>
          <View style={{width: '90%', marginBottom: 20}}>
            <View style={styles.headerCont}>
              <MyText style={styles.headingTxt}>Projects</MyText>
              <View style={styles.headerInnerCont}>
                <View
                  style={[
                    styles.headIconCont,
                    expanded && {backgroundColor: '#e5fbf6'},
                  ]}>
                  <Icon
                    name="grid"
                    color={(expanded && COLORS.gradient_primary) || COLORS.grey}
                    size={28}
                    onPress={() => setExpanded(true)}
                  />
                </View>
                <View
                  // style={[styles.headIconCont, {backgroundColor: '#e5fbf6'}]}
                  style={[
                    styles.headIconCont,
                    !expanded && {backgroundColor: '#e5fbf6'},
                  ]}>
                  <Icon
                    name="reorder-three-sharp"
                    color={
                      (!expanded && COLORS.gradient_primary) || COLORS.grey
                    }
                    size={25}
                    onPress={() => setExpanded(false)}
                  />
                </View>
              </View>
            </View>
            <View style={styles.filtersCont}>
              <View style={{width: '30%', marginRight: 5}}>
                <ButtonStandard title="Ongoing" style={{height: 32}} />
              </View>
              <View style={{width: '40%', marginRight: 5}}>
                <ButtonStandard title="Coming soon" grey style={{height: 32}} />
              </View>
              <View style={{width: '30%', marginRight: 5}}>
                <ButtonStandard title="Closed" grey style={{height: 32}} />
              </View>
            </View>
            <ProjectCard
              separator
              expanded={expanded}
              onPress={() => navigation.navigate('Project Details')}
            />
            <ProjectCard separator expanded={expanded} />
            <ProjectCard separator expanded={expanded} />
            <ProjectCard separator expanded={expanded} />
            <ProjectCard separator expanded={expanded} />

            <ProjectCard />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerInnerCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headIconCont: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#F2F2F2',
  },
  filtersCont: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  scrollViewInnerMainCont: {
    width: '100%',
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
  },
  headingTxt: {fontFamily: 'Poppins-SemiBold', fontSize: 25},
});
