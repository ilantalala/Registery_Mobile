import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Mail, Lock, ShieldCheck,User } from 'lucide-react-native'; // Icons for the textboxes
import { useRouter } from 'expo-router';
import { styles } from '../components/register/register.styles'; 

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <View style={styles.blueHeader}>
             <Text style={styles.headerTitle}>Create Account</Text>
          </View>
            
          <View style={styles.formSection}>
            {/* Full Name Input */}
<View style={styles.inputWrapper}>
  <User size={20} color="#9ca3af" />
  <TextInput 
    placeholder="Full Name" 
    style={styles.inputText}
    autoCorrect={false}
  />
</View>
            {/* Email Textbox */}
            <View style={styles.inputWrapper}>
              <Mail size={20} color="#9ca3af" />
              <TextInput 
                placeholder="Email" 
                style={styles.inputText} 
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password Textbox */}
            <View style={styles.inputWrapper}>
              <Lock size={20} color="#9ca3af" />
              <TextInput 
                placeholder="Password" 
                style={styles.inputText} 
                secureTextEntry={true} 
              />
            </View>

            {/* Confirm Password Textbox */}
            <View style={styles.inputWrapper}>
              <ShieldCheck size={20} color="#9ca3af" />
              <TextInput 
                placeholder="Confirm Password" 
                style={styles.inputText} 
                secureTextEntry={true} 
              />
            </View>
            
            <TouchableOpacity style={styles.registerBtn}>
              <Text style={styles.registerBtnText}>Sign Up</Text>
            </TouchableOpacity>
            
          </View>
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => router.push('/')}>
                    <Text style={styles.linkText}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}