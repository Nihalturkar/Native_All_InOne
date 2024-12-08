import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Dimensions
} from 'react-native';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import { styles } from './styles';

const { width } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [biometryType, setBiometryType] = useState(null);

  useEffect(() => {
    const checkBiometryAvailability = async () => {
      try {
        const rnBiometrics = new ReactNativeBiometrics();
        const { biometryType } = await rnBiometrics.isSensorAvailable();
        setBiometryType(biometryType);
      } catch (error) {
        Alert.alert('Error', error.message);
      }
    };
    checkBiometryAvailability();
  }, []);

  const requestPermission = async () => {
    const permission = await ReactNativeBiometrics.requestPermission();
    if (permission === 'authorized') {
      // Biometric authentication is available
    } else {
      Alert.alert('Biometric authentication not available');
    }
  };

  const handleFingerprintAuth = async () => {
    if (!biometryType) {
      Alert.alert('Biometric authentication not available');
      return;
    }

    await requestPermission();

    setIsAuthenticating(true);
    try {
      const rnBiometrics = new ReactNativeBiometrics();
      const result = await rnBiometrics.simpleAuth();
      if (result.success) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Authentication failed');
      }
    } catch (error) {
      Alert.alert('Authentication failed', error.message);
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome back..!!</Text>
          <Text style={styles.subtitle}>Sign in to your account</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.formAction}>
            {isAuthenticating? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <TouchableOpacity
                onPress={()=>navigation.navigate("Home")}
                style={[
                  styles.button,
                  { backgroundColor: 'green' }
                ]}
              >
                <Text style={styles.btnText}>
                  {'Sign in with Fingerprint'}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;