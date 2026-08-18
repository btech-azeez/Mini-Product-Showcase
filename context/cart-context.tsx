'use client';

import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import type { Product } from '@/data/products';

type CartItem = { product: Product; quantity: number };
type CartState = { items: CartItem[]; hydrated: boolean };
type Action =
  | { type: 'HYDRATE'; items: CartItem[] }
  | { type: 'ADD'; product: Product }
  | { type: 'REMOVE'; productId: string }
  | { type: 'INCREMENT'; productId: string }
  | { type: 'DECREMENT'; productId: string }
  | { type: 'CLEAR' };

const initialState: CartState = { items: [], hydrated: false };

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'HYDRATE': return { items: action.items, hydrated: true };
    case 'ADD': {
      const existing = state.items.find((item) => item.product.id === action.product.id);
      return { ...state, items: existing ? state.items.map((item) => item.product.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...state.items, { product: action.product, quantity: 1 }] };
    }
    case 'REMOVE': return { ...state, items: state.items.filter((item) => item.product.id !== action.productId) };
    case 'INCREMENT': return { ...state, items: state.items.map((item) => item.product.id === action.productId ? { ...item, quantity: item.quantity + 1 } : item) };
    case 'DECREMENT': return { ...state, items: state.items.map((item) => item.product.id === action.productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item) };
    case 'CLEAR': return { ...state, items: [] };
  }
}

const CartContext = createContext<{
  state: CartState;
  itemCount: number;
  subtotal: number;
  add: (product: Product) => void;
  remove: (productId: string) => void;
  increment: (productId: string) => void;
  decrement: (productId: string) => void;
  clear: () => void;
} | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const stored = window.localStorage.getItem('lumora-cart');
    if (!stored) { dispatch({ type: 'HYDRATE', items: [] }); return; }
    try { dispatch({ type: 'HYDRATE', items: JSON.parse(stored) as CartItem[] }); }
    catch { dispatch({ type: 'HYDRATE', items: [] }); }
  }, []);

  useEffect(() => {
    if (state.hydrated) window.localStorage.setItem('lumora-cart', JSON.stringify(state.items));
  }, [state.items, state.hydrated]);

  const value = useMemo(() => ({
    state,
    itemCount: state.items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    add: (product: Product) => dispatch({ type: 'ADD', product }),
    remove: (productId: string) => dispatch({ type: 'REMOVE', productId }),
    increment: (productId: string) => dispatch({ type: 'INCREMENT', productId }),
    decrement: (productId: string) => dispatch({ type: 'DECREMENT', productId }),
    clear: () => dispatch({ type: 'CLEAR' })
  }), [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
