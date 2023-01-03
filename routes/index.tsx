import {Head} from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import {Menu} from "../components/Menu.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Counter</title>
      </Head>
      <Menu/>
      <div class="flex flex-col items-center justify-center">
        <Counter start={3}/>
      </div>
    </>
  );
}
