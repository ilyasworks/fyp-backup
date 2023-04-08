import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

const Notification = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {
        isLoading?
        <Text style={styles.loading}>is loading....</Text>
        :
        <WebView
        source={{uri: 'https://www.sinotrack.com/'}}
        style={styles.webview}
        allowsFullscreenVideo={true}
        allowsInlineMediaPlayback={true}
      />
      }
    
  </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1 ,
    justifyContent: "center",
    fontSize: 30,
  },
  webview: {
    flex: 1,
  },
});


export default Notification;
