import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div class="flex gap-2 items-center justify-center w-full">
      <Button onClick={() => setCount(count - 1)} classes={'bg-red-500 text-white'}>-</Button>
      <span class="font-bold text-lg">{count}</span>
      <Button onClick={() => setCount(count + 1)} classes={'bg-green-500 text-white'}>+</Button>
    </div>
  );
}
