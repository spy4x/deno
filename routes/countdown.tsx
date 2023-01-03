import Countdown from "../islands/Countdown.tsx";
import {Handlers, PageProps} from "$fresh/server.ts";
import {Head} from "$fresh/src/runtime/head.ts";
import {Menu} from "../components/Menu.tsx";

type Props = {
  to: string | null;
}

export const handler: Handlers<Props> = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const to = url.searchParams.get('to');
    console.log(to);
    return ctx.render({to});
  },
};

export default function Page({data}: PageProps<Props>) {

  if (!data.to) {
    const date = new Date();
    date.setHours(date.getHours() + 1);
    return (
      <>
        <Head>
          <title>Countdown</title>
        </Head>
        <Menu/>
        <h1>To continue - set "to" url query. Click on <a href={'?to='+date.toISOString()} class="underline">Example</a></h1>
      </>
    )
  }
  return (
    <>
      <Head>
        <title>Countdown</title>
      </Head>
      <Menu/>
      <p>
        The big event is happening <Countdown target={data.to}/>.
      </p>
    </>
  );
}
