import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement>{
    classes?: string;
}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={props.classes + " px-2 py-1 border(gray-100 2) rounded-md hover:bg-gray-200"}
    />
  );
}
