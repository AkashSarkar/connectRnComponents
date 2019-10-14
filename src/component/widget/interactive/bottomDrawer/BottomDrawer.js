import React from 'react';
import { View, StyleSheet } from 'react-native';
import { node } from 'prop-types';
import BottomSheet from 'reanimated-bottom-sheet';
import { colors } from '../../../../styles/baseStyle';


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  panelHeader: {
    alignItems: 'center'
  },
  panelHandle: {
    width: 50,
    height: 5,
    borderRadius: 4,
    backgroundColor: colors.black2,
    marginBottom: 10
  },
  contentContainer: {
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
    elevation: 1,
    height: '100%'
  }
});

const BottomDrawer = ({ children }) => {
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
  const renderInner = () => (
    <View style={styles.contentContainer}>
      {renderHeader()}
      {children}
    </View>
  );
  return (
    <BottomSheet
      snapPoints={['60%', '10%']}
      renderContent={renderInner}
      initialSnap={1}
    />
  );
};

BottomDrawer.propTypes = {
  children: node
};

export default BottomDrawer;
