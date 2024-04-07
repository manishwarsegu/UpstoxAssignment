import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StickyBottomAccordion = ({ footerComponent, body }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleAccordion} style={styles.header}>
        <Text style={styles.headerText}>{expanded ? '\u21a7' : '\u21a5'}</Text>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.stickyContent}>
          {body}
        </View>
      )}
      {footerComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  stickyContent: {
    backgroundColor: 'white',
  },
});

export default StickyBottomAccordion;
