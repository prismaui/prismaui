import { createStore } from '@stencil/store';

interface Toast {
  id: number;
  message: string;
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  timer: number;
  animation: 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right';
}

const { state, onChange } = createStore({
  toasts: [] as Toast[],
});

function addToast(toast: Toast) {
  state.toasts = [...state.toasts, toast];
}

function removeToast(id: number) {
  state.toasts = state.toasts.filter(toast => toast.id !== id);
}

export default {
  state,
  onChange,
  addToast,
  removeToast,
};
