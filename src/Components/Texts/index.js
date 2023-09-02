import { styled } from "@nextui-org/react";
import Link from "next/link";

export const CustomLink = styled(Link, {
  fontSize: '10pt',
  fontFamily: 'montserrat',
  fontWeight: '700',
  color: '#871C20',
  '&:hover':{
    color: '#9F2126',
  },
'&:active':{
    color: '#C66568',
  }
}

)

//   `font-size: 10pt;
// font-family: 'montserrat';
// font-weight: 700;
// color: #3B0C0E;
// &:hover{
// color: #871C20;
// }
// &:active{
//   color: #871C20;
//   }`