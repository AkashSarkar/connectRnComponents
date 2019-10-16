import React from 'react';
import { View, StyleSheet } from 'react-native';
import { node, string } from 'prop-types';
import BottomSheet from 'reanimated-bottom-sheet';
import { colors } from '../../../../styles/baseStyle';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderTopColor: colors.grey1,
    borderLeftColor: colors.grey1,
    borderRightColor: colors.grey1,
    borderTopWidth: 0.2,
    borderLeftWidth: 0.2,
    borderRightWidth: 0.2,
    paddingTop: 8,
    width: '100%'
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
    borderLeftColor: colors.grey1,
    borderRightColor: colors.grey1,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    height: '100%'
  }
});

const BottomDrawer = ({ children, firstStoppingPoint, secondStoppingPoint }) => {
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
  const renderInner = () => (
    <View style={styles.contentContainer}>
      {children}
    </View>
  );
  return (
    <BottomSheet
      snapPoints={[secondStoppingPoint, firstStoppingPoint]}
      renderContent={renderInner}
      renderHeader={renderHeader}
      initialSnap={1}
      enabledContentGestureInteraction={false}
    />
  );
};

BottomDrawer.defaultProps = {
  firstStoppingPoint: '3%',
  secondStoppingPoint: '60%'
};

BottomDrawer.propTypes = {
  children: node,
  firstStoppingPoint: string,
  secondStoppingPoint: string
};

export default BottomDrawer;
