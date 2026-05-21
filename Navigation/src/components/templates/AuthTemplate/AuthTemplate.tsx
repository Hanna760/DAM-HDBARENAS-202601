import React, { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

interface AuthTemplateProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
}

const AuthTemplate = ({ title, subtitle, children }: AuthTemplateProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        <View style={styles.content}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  title: {
    color: '#067680',
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 0.4,
  },
  subtitle: {
    color: '#ef7f00',
    marginTop: 6,
    marginBottom: 10,
    fontSize: 13,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
});

export default AuthTemplate;
