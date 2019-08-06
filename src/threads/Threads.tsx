import React, { useState, useEffect, FunctionComponent } from 'react';
import Spinner from '../components/spinner/Spinner';
import ThreadSummary from '../components/threadSummary/ThreadSummary';

const getThreads = () => [
  {
    id: 1,
    title: 'Chevrolet Corvette project',
  },
  {
    id: 2,
    title: 'BMW M3 project',
  },
];

const Threads: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingFailed, setLoadingFailed] = useState(false);
  const [threads, setThreads] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setThreads(getThreads());
      setIsLoading(false);
    }, 2000);
  });

  return (
    <>
      {isLoading && <Spinner />}
      {loadingFailed && <div>Loading failed</div>}
      {threads.map(thread => (
        <ThreadSummary title={thread.title} id={thread.id} />
      ))}
    </>
  );
};

export default Threads;
