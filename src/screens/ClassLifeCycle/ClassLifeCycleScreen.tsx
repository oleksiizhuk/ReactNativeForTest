import React, {Component, ErrorInfo, ReactNode} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  SafeAreaView,
} from 'react-native';

interface Props {
  title?: string;
}

interface State {
  count: number;
  hasError: boolean;
}

export class ClassLifeCycleScreen extends Component<Props, State> {
  // ============================================
  // MOUNTING
  // ============================================

  // Hook: useState()
  constructor(props: Props) {
    super(props);
    console.log('1. constructor()');
    this.state = {count: 0, hasError: false};
  }

  // Hook: useMemo() or derive during render
  static getDerivedStateFromProps(props: Props, state: State): Partial<State> | null {
    console.log('2. getDerivedStateFromProps()', props, state);
    return null;
  }

  // Hook: useEffect(() => {}, [])
  componentDidMount(): void {
    console.log('4. componentDidMount()');
  }

  // ============================================
  // UPDATING
  // ============================================

  // Hook: React.memo()
  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    console.log('5. shouldComponentUpdate()', nextProps, nextState);
    return true;
  }

  // Hook: useRef() + useLayoutEffect()
  getSnapshotBeforeUpdate(prevProps: Props, prevState: State): number | null {
    console.log('6. getSnapshotBeforeUpdate()');
    return prevState.count;
  }

  // Hook: useEffect(() => {}, [deps])
  componentDidUpdate(prevProps: Props, prevState: State, snapshot: number | null): void {
    console.log('7. componentDidUpdate()', {snapshot});
  }

  // ============================================
  // UNMOUNTING
  // ============================================

  // Hook: useEffect cleanup return
  componentWillUnmount(): void {
    console.log('8. componentWillUnmount()');
  }

  // ============================================
  // ERROR HANDLING (No hook equivalent)
  // ============================================

  static getDerivedStateFromError(error: Error): Partial<State> {
    console.log('9. getDerivedStateFromError()', error);
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log('10. componentDidCatch()', error, errorInfo);
  }

  // ============================================
  // RENDER
  // ============================================

  // Hook: function component return
  render(): ReactNode {
    console.log('3. render()');

    if (this.state.hasError) {
      return (
        <View style={styles.center}>
          <Text style={styles.error}>Something went wrong!</Text>
        </View>
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>
            {this.props.title ?? 'Class Lifecycle Methods'}
          </Text>

          {/* Counter Demo */}
          <View style={styles.card}>
            <Text style={styles.count}>{this.state.count}</Text>
            <View style={styles.row}>
              <Button title="-" onPress={() => this.setState(s => ({count: s.count - 1}))} />
              <Button title="+" onPress={() => this.setState(s => ({count: s.count + 1}))} />
            </View>
          </View>

          {/* Lifecycle Reference */}
          <View style={styles.card}>
            <Text style={styles.subtitle}>Mounting</Text>
            <Text style={styles.code}>constructor() → useState()</Text>
            <Text style={styles.code}>getDerivedStateFromProps() → useMemo()</Text>
            <Text style={styles.code}>render() → return JSX</Text>
            <Text style={styles.code}>componentDidMount() → useEffect(fn, [])</Text>

            <Text style={styles.subtitle}>Updating</Text>
            <Text style={styles.code}>shouldComponentUpdate() → React.memo()</Text>
            <Text style={styles.code}>getSnapshotBeforeUpdate() → useLayoutEffect()</Text>
            <Text style={styles.code}>componentDidUpdate() → useEffect(fn, [deps])</Text>

            <Text style={styles.subtitle}>Unmounting</Text>
            <Text style={styles.code}>componentWillUnmount() → useEffect cleanup</Text>

            <Text style={styles.subtitle}>Error Handling</Text>
            <Text style={styles.code}>getDerivedStateFromError() → ErrorBoundary</Text>
            <Text style={styles.code}>componentDidCatch() → ErrorBoundary</Text>
          </View>

          <Text style={styles.note}>
            Check console logs to see lifecycle methods in action
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
    marginTop: 12,
    marginBottom: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  count: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#007AFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 12,
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#333',
    marginVertical: 2,
  },
  note: {
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
    marginTop: 8,
  },
  error: {
    color: 'red',
    fontSize: 18,
  },
});

export default ClassLifeCycleScreen;
