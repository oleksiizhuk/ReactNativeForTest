import { StyleSheet } from 'react-native';
import { BOX_SIZE} from './ReactAnimationVsReanimated.constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  content: {
    padding: 20,
    paddingBottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 30,
  },
  animationSection: {
    marginBottom: 30,
  },
  animationContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 2,
  },
  labelSmall: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  animationTrack: {
    height: BOX_SIZE + 20,
    backgroundColor: '#16213e',
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  box: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rnBox: {
    backgroundColor: '#e94560',
  },
  reanimatedBox: {
    backgroundColor: '#0f3460',
    borderWidth: 3,
    borderColor: '#00d9ff',
  },
  controlsSection: {
    backgroundColor: '#16213e',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 16,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
  },
  heavyButton: {
    backgroundColor: '#e94560',
  },
  continuousButton: {
    backgroundColor: '#f9a825',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  inputContainer: {
    marginTop: 10,
  },
  inputLabel: {
    color: '#888',
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#0f3460',
    borderRadius: 10,
    padding: 14,
    color: '#fff',
    fontSize: 16,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  counterLabel: {
    color: '#fff',
    fontSize: 16,
  },
  incrementButton: {
    backgroundColor: '#533483',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  logSection: {
    backgroundColor: '#16213e',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  logContainer: {
    maxHeight: 200,
  },
  logEmpty: {
    color: '#555',
    fontStyle: 'italic',
  },
  logItem: {
    color: '#00d9ff',
    fontSize: 12,
    marginBottom: 4,
    fontFamily: 'monospace',
  },
  explanationSection: {
    backgroundColor: '#16213e',
    borderRadius: 16,
    padding: 20,
  },
  explanationTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
  },
  explanationText: {
    color: '#ccc',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 12,
  },
  bold: {
    fontWeight: 'bold',
    color: '#fff',
  },
  noteText: {
    color: '#888',
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 8,
    lineHeight: 18,
  },
});
