import { useCallback, useState } from 'react';

export const useBlockJSThread = () => {
  const [isStressing, setIsStressing] = useState(false);
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const [counter, setCounter] = useState(0);

  const handleTextChange = useCallback((text: string) => {
    setInputText(text);

    // Simulate heavy text processing
    let processed = text;
    for (let i = 0; i < 10000; i++) {
      processed = processed.split('').reverse().join('');
    }

    setItems(prev =>
      [...prev, `Processed: ${text.substring(0, 10)}...`].slice(-20),
    );
  }, []);

  // Heavy computation to block JS thread
  const fibonacci = useCallback((n: number): number => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }, []);

  // Stress JS thread with heavy computation
  const stressJSThread = useCallback(() => {
    setIsStressing(true);
    // Calculate fibonacci (blocking operation)
    const result = fibonacci(35);
    console.log('Fibonacci result:', result);
    setIsStressing(false);
  }, [fibonacci]);

  const continuousStress = useCallback(() => {
    let count = 0;
    const interval = setInterval(() => {
      // Heavy computation each tick
      let sum = 0;
      for (let i = 0; i < 1000000; i++) {
        sum += Math.sqrt(i) * Math.sin(i);
      }

      // Rapid state updates
      setCounter(prev => prev + 1);
      setItems(prev =>
        [...prev, `Item ${count}: ${sum.toFixed(2)}`].slice(-20),
      );

      count++;
      if (count >= 50) {
        clearInterval(interval);
      }
    }, 16); // ~60fps timing

    return () => clearInterval(interval);
  }, []);
  return {
    stressJSThread,
    isStressing,
    handleTextChange,
    items,
    inputText,
    continuousStress,
    counter,
    setCounter,
  };
};
