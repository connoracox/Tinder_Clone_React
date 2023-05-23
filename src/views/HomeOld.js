import { useState } from 'react'
import Counter from '../components/Counter';

export default function Home() {
    const [counters, setCounters] = useState([
        {
          title: 'Match Counter',
          initialCount: 10
        },
        {
          title: 'Men',
          initialCount: 5
        },
        {
          title: 'Women',
          initialCount: 1
        },
        {
          title: 'Non-Binary',
          initialCount: 1000
        }
      ])
    
    
      return (
        <div className="App">
          {
            counters.map((counter) => <Counter title={counter.title} initialCount={counter.initialCount}/>)
          }
        </div>
      );
}