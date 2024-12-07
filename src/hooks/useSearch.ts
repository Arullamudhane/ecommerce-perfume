import { useState, useMemo } from 'react';
import { Perfume } from '../types';

export function useSearch(items: Perfume[], filters: {
  brand?: string;
  priceRange?: string;
  fragranceType?: string;
  size?: string;
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = !searchQuery || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesBrand = !filters.brand || filters.brand === 'all' || 
        item.brand === filters.brand;

      const matchesPriceRange = !filters.priceRange || filters.priceRange === 'all' || 
        (filters.priceRange === 'under5000' && item.price < 5000) ||
        (filters.priceRange === '5000-10000' && item.price >= 5000 && item.price <= 10000) ||
        (filters.priceRange === 'above10000' && item.price > 10000);

      const matchesSize = !filters.size || filters.size === 'all' || 
        item.size_ml.toString() === filters.size;

      return matchesSearch && matchesBrand && matchesPriceRange && matchesSize;
    });
  }, [items, searchQuery, filters]);

  return {
    searchQuery,
    setSearchQuery,
    filteredItems
  };
}