import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// We use 'export' so index.tsx can see it
export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#c7d2fe', // The light lavender background
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
  blueHeader: {
    backgroundColor: '#3f51b5',
    padding: 30,
    alignItems: 'center',
  },
  illustrationEmoji: {
    fontSize: 60,
    marginVertical: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerSubtitle: {
    color: '#c7d2fe',
    fontSize: 12,
    marginTop: 5,
  },
  formSection: {
    padding: 24,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e1b4b',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 55,
    marginBottom: 16,
  },
  inputText: {
    flex: 1,
    marginLeft: 10,
    color: '#1e1b4b',
  },
  loginBtn: {
    backgroundColor: '#3f51b5',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  loginBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }
});