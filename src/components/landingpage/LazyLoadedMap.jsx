// components/LazyLoadedMap.jsx
import dynamic from 'next/dynamic';

const LazyLoadedMap = dynamic(() => import('./EmbeddedMap'), {
  ssr: false, // This ensures the component is only rendered on the client side
  loading: () => <p>Loading map...</p>,
});

export default LazyLoadedMap;
