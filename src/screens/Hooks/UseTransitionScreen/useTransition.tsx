import React, {
  memo,
  useCallback,
  useMemo,
  useState,
  useTransition,
} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { Input } from '@components/Atoms';
import { City } from '@/constant/city';

// Expensive recursive Fibonacci - O(2^n) complexity, no memoization
// This intentionally slow function simulates heavy computation
const fibonacci = (n: number): number => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Calculate a "score" for each city using expensive Fibonacci
// Reduced to fib(25) max - still slow but won't freeze the app
const calculateExpensiveScore = (str: string): number => {
  const n = Math.min(str.length + 8, 20); // Fib(25) = 75,025 - noticeable but manageable
  return fibonacci(n);
};

export const UseTransitionScreen = memo(() => {
  const [inputValue, setInputValue] = useState<string>('');
  const [filteredValue, setFilteredValue] = useState<string>('');
  const [items] = useState<string[]>([...City, ...City, ...City]);
  const [isPending, startTransition] = useTransition();

  const handleChange = useCallback((newInputValue: string) => {
    // High priority: Update input immediately (keeps typing responsive)
    setInputValue(newInputValue);

    // Low priority: Defer the expensive filtering operation
    startTransition(() => {
      setFilteredValue(newInputValue);
    });
  }, []);

  // Filter based on filteredValue (deferred state) for proper useTransition behavior
  // Each item also triggers expensive Fibonacci calculation
  const filteredItems = useMemo(() => {
    return items
      .filter((item) =>
        item.toLowerCase().includes(filteredValue.toLowerCase()),
      )
      .map((item) => ({
        name: item,
        score: calculateExpensiveScore(item), // Expensive!
      }));
  }, [filteredValue, items]);

  const renderItem = useCallback(
    ({ item, index }: { item: { name: string; score: number }; index: number }) => (
      <View style={styles.listItem}>
        <View style={styles.indexBadge}>
          <Text style={styles.indexText}>{index + 1}</Text>
        </View>
        <View style={styles.itemContent}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.scoreText}>Fib: {item.score.toLocaleString()}</Text>
        </View>
      </View>
    ),
    [],
  );

  const ListEmptyComponent = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyEmoji}>:/</Text>
        <Text style={styles.emptyText}>No cities found</Text>
        <Text style={styles.emptySubtext}>Try a different search term</Text>
      </View>
    ),
    [],
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>useTransition Hook</Text>
        <Text style={styles.subtitle}>
          Keeps UI responsive during expensive state updates
        </Text>
      </View>

      {/* Search Section */}
      <View style={styles.searchSection}>
        <Input
          value={inputValue}
          onChangeText={handleChange}
          placeholder="Search cities..."
          label="Search"
          containerStyle={styles.inputContainer}
        />

        {/* Results count & loading indicator */}
        <View style={styles.statusRow}>
          <Text style={styles.resultsCount}>
            {filteredItems.length} of {items.length} cities
          </Text>
          {isPending && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#2860b4" />
              <Text style={styles.loadingText}>Filtering...</Text>
            </View>
          )}
        </View>
      </View>

      {/* Info Card */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>How it works</Text>
        <Text style={styles.infoText}>
          <Text style={styles.highlight}>inputValue</Text> updates immediately
          (high priority){'\n'}
          <Text style={styles.highlight}>filteredValue</Text> updates in
          transition (low priority)
        </Text>
      </View>

      {/* List Section */}
      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={ListEmptyComponent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  header: {
    backgroundColor: '#2860b4',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  searchSection: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  inputContainer: {
    marginVertical: 0,
    flex: 0,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  resultsCount: {
    fontSize: 13,
    color: '#666',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 13,
    color: '#2860b4',
    marginLeft: 6,
  },
  infoCard: {
    backgroundColor: '#e3f2fd',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2860b4',
  },
  infoTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1565c0',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 12,
    color: '#1976d2',
    lineHeight: 18,
  },
  highlight: {
    fontWeight: '600',
    color: '#0d47a1',
  },
  list: {
    flex: 1,
    marginTop: 8,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  indexBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#e8eaf6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  indexText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#5c6bc0',
  },
  itemContent: {
    flex: 1,
  },
  itemText: {
    fontSize: 15,
    color: '#333',
  },
  scoreText: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: 12,
    color: '#bdbdbd',
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#757575',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#9e9e9e',
    marginTop: 4,
  },
});
