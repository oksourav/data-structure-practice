# Quick Sort

## Basic Concept
Quick Sort is a divide-and-conquer sorting algorithm that works by selecting a 'pivot' element and partitioning the array around it.

## Algorithm Steps
1. **Choose a pivot** element from the array
2. **Partition** the array:
   - Place elements smaller than pivot to its left
   - Place elements greater than pivot to its right
3. **Recursively apply** steps 1-2 to the sub-arrays
4. **Combine** the sorted sub-arrays (this happens automatically)

## Visualization
```
[8, 3, 1, 6, 4]  → Original array
       ↓
Choose 4 as pivot
       ↓
[3, 1] [4] [8, 6] → Partition around pivot
       ↓
[1] [3] [4] [6] [8] → Recursively sort sub-arrays
       ↓
[1, 3, 4, 6, 8] → Final sorted array
```

## Characteristics
- **Average time complexity**: O(n log n)
- **Worst-case time complexity**: O(n²)
- **Space complexity**: O(log n)
- **Not stable**: Equal elements may change relative order

## Advantages
- Usually faster in practice than other O(n log n) algorithms
- In-place sorting (requires small auxiliary stack)
- Works well for a variety of data types

## Disadvantages
- Poor performance on already sorted or nearly sorted arrays (if first/last element is chosen as pivot)
- Vulnerable to O(n²) performance with bad pivot selection