import { FC } from "react";

type Props = {text: string} 

export const Gallery: FC<Props> = ({text}) => {
  return <div>This is your gallery! {text}</div>;
};
