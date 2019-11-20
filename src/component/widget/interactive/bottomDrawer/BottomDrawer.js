import React, { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  node, array, func, number
} from 'prop-types';
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
    width: '100%',
    backgroundColor: colors.white1
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
    borderLeftColor: colors.grey1,
    borderRightColor: colors.grey1,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    height: '100%',
    backgroundColor: colors.white1
  }
});

const BottomDrawer = ({
  children,
  stoppingPoints,
  onDrawerOpen,
  onDrawerClose,
  initialSnap
}) => {
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
  const renderInner = () => (
    <View style={styles.contentContainer}>{children}</View>
  );

  const drawerRef = useRef(null);

  useEffect(() => {
    if (drawerRef) {
      drawerRef.current.snapTo(initialSnap);
    }
  }, [initialSnap]);

  return (
    <BottomSheet
      snapPoints={stoppingPoints}
      renderContent={renderInner}
      renderHeader={renderHeader}
      initialSnap={initialSnap}
      enabledContentGestureInteraction={false}
      onOpenStart={onDrawerOpen}
      onCloseEnd={onDrawerClose}
      ref={drawerRef}
      callbackThreshold={0.001}
    />
  );
};

BottomDrawer.defaultProps = {
  stoppingPoints: ['3%', '60%'],
  initialSnap: 1,
  onDrawerOpen: () => {},
  onDrawerClose: () => {}
};

BottomDrawer.propTypes = {
  children: node,
  onDrawerOpen: func,
  onDrawerClose: func,
  stoppingPoints: array,
  initialSnap: number
};

export default BottomDrawer;
