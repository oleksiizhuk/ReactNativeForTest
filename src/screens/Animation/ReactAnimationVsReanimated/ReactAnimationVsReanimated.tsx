import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { styles } from './ReactAnimationVsReanimated.styles';
import { useBlockJSThread } from './hooks/useBlockJSThread';
import { ReanimatedExample } from './components/reanimatedExample';
import { ReactAnimationExample } from './components/reactAnimationExample';

export const ReactAnimationVsReanimated: React.FC = () => {
  const {
    stressJSThread,
    isStressing,
    handleTextChange,
    items,
    inputText,
    continuousStress,
    counter,
    setCounter,
  } = useBlockJSThread();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>React Animated vs Reanimated</Text>
      <Text style={styles.subtitle}>
        Stress the JS thread and watch the difference!
      </Text>

      {/* Animation comparison section */}
      <View style={styles.animationSection}>
        {/* React Native Animated */}
        <ReactAnimationExample />

        {/* Reanimated */}
        <ReanimatedExample />
      </View>

      {/* Stress test controls */}
      <View style={styles.controlsSection}>
        <Text style={styles.sectionTitle}>Stress Test Controls</Text>

        <TouchableOpacity
          style={[styles.button, styles.heavyButton]}
          onPress={stressJSThread}
          disabled={isStressing}
        >
          <Text style={styles.buttonText}>
            {isStressing
              ? 'Calculating...'
              : '🔥 Heavy Calculation (Fibonacci 35)'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.continuousButton]}
          onPress={continuousStress}
        >
          <Text style={styles.buttonText}>
            ⚡ Continuous Stress (50 iterations)
          </Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Type fast to stress JS thread:</Text>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={handleTextChange}
            placeholder="Type here rapidly..."
            placeholderTextColor="#888"
          />
        </View>

        <View style={styles.counterContainer}>
          <Text style={styles.counterLabel}>State updates: {counter}</Text>
          <TouchableOpacity
            style={styles.incrementButton}
            onPress={() => {
              // Rapid increments with blocking
              let sum = 0;

              for (let i = 0; i < 100; i++) {
                setCounter(prev => prev + 1);
                // Small blocking operation
                for (let j = 0; j < 100000; j++) {
                  sum += j;
                }
              }
              console.log('Counter sum:', sum);
            }}
          >
            <Text style={styles.buttonText}>+100 with blocking</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Log section */}
      <View style={styles.logSection}>
        <Text style={styles.sectionTitle}>Activity Log</Text>
        <View style={styles.logContainer}>
          {items.length === 0 ? (
            <Text style={styles.logEmpty}>
              Press buttons or type to generate activity...
            </Text>
          ) : (
            items.map((item, index) => (
              <Text key={index} style={styles.logItem}>
                {item}
              </Text>
            ))
          )}
        </View>
      </View>

      {/* Explanation */}
      <View style={styles.explanationSection}>
        <Text style={styles.explanationTitle}>Why the difference?</Text>
        <Text style={styles.explanationText}>
          <Text style={styles.bold}>React Animated</Text> runs on the JavaScript
          thread by default. When the JS thread is busy with computations, state
          updates, or other operations, animations stutter and lag.
        </Text>
        <Text style={styles.explanationText}>
          <Text style={styles.bold}>Reanimated</Text> runs animations directly
          on the UI thread using worklets. This means animations continue
          smoothly regardless of what's happening on the JS thread.
        </Text>
        <Text style={styles.noteText}>
          Note: Even with useNativeDriver: true, React Animated still needs the
          JS thread to start/stop animations and handle callbacks.
        </Text>
      </View>
    </ScrollView>
  );
};
