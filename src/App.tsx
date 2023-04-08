import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MainLayout } from 'components/layout';
import Collections from 'pages/collections';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Collections />
      </MainLayout>
    </QueryClientProvider>
  );
}

export default App;
