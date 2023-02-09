import { RadioGroupProps, RadioProps, Radio as AntRadios } from "antd";
import { FC } from "react";

// const asd: RadioProps | RadioGroupProps
const Radio: FC<RadioProps | RadioGroupProps> = ({ ...rest }) => (
  <AntRadios>{rest}</AntRadios>
);

export default Radio;
