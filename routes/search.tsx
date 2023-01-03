import {Handlers, PageProps} from "$fresh/server.ts";
import {Head} from "$fresh/runtime.ts";
import {Menu} from "../components/Menu.tsx";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.toLowerCase().includes(query.toLowerCase()));
    return ctx.render({results, query});
  },
};

export default function Page({data}: PageProps<Data>) {
  const {results, query} = data;
  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <Menu/>
      <div>
        <form>
          <input type="text" name="q" value={query}/>
          <button type="submit">Search</button>
        </form>
        <ul>
          {results.map((name) => <li key={name}>{name}</li>)}
        </ul>
      </div>
    </>
  );
}
