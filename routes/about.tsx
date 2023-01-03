import {Handlers, PageProps} from "$fresh/server.ts";
import {Head} from "$fresh/src/runtime/head.ts";
import {Menu} from "../components/Menu.tsx";

interface User {
  login: string;
  name: string;
  avatar_url: string;
}

export const handler: Handlers<User | null> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const username = url.searchParams.get('username');
    console.log(url.searchParams);
    const resp = await fetch(`https://api.github.com/users/${username}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
};

export default function Page({data}: PageProps<User | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Menu/>
      <h1 class="text-lg mb-5">This page uses URL search params. Try <a href={'?username=god'} class="underline">Example</a></h1>
      <div>
        <img src={data.avatar_url} width={64} height={64}/>
        <h1>{data.name}</h1>
        <p>{data.login}</p>
      </div>
    </>
  );
}
