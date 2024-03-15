import { CustomImg } from './Avatar.styled';

export const Avatar = ({ src, size }: { src: string | undefined; size: string }) => (
  <CustomImg src={src} width={size} height={size}></CustomImg>
);
