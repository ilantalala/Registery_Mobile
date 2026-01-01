import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform, 
  SafeAreaView, 
  TouchableOpacity,
  TextInput 
} from 'react-native';
import { Mail, Lock, Eye,User } from 'lucide-react-native';
import { useRouter } from 'expo-router';

// This matches the 'export const styles' in your other file
import { styles } from '../components/login/login.styles'

export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          
          <View style={styles.card}>
            {/* Top Blue Section */}
            <View style={styles.blueHeader}>
              <Text style={styles.illustrationEmoji}>🚀</Text>
              <Text style={styles.headerTitle}>Welcome aboard my friend</Text>
              <Text style={styles.headerSubtitle}>just a couple of clicks and we start</Text>
            </View>
            
            {/* Bottom Form Section */}
            <View style={styles.formSection}>
              <Text style={styles.formTitle}>Log in</Text>
                    {/* Full Name Input */}
            <View style={styles.inputWrapper}>
            <User size={20} color="#9ca3af" />
            <TextInput 
                placeholder="Full Name" 
                style={styles.inputText}
                autoCorrect={false}
            />
            </View>
              <View style={styles.inputWrapper}>
                <Mail size={20} color="#9ca3af" />
                <TextInput placeholder="Email" style={styles.inputText} keyboardType="email-address" />
              </View>

              <View style={styles.inputWrapper}>
                <Lock size={20} color="#9ca3af" />
                <TextInput placeholder="Password" style={styles.inputText} secureTextEntry />
                <Eye size={20} color="#9ca3af" />
              </View>

              <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginBtnText}>Log in</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={{ marginTop: 20, alignItems: 'center' }}
                onPress={() => router.push('/register')}
              >
                <Text style={{ color: '#3f51b5', fontWeight: '600' }}>
                  Have no account yet? Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}