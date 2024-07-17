import { HTMLProps } from 'react';

type IframeLoadingAttribute = "eager" | "lazy" | "auto" | undefined;
type IframeProps = {
  src: string;
  title?: string;
  allowFullScreen?: boolean;
  height?: number | string;
  width?: number | string;
  loading?: IframeLoadingAttribute;
} & HTMLProps<HTMLIFrameElement>;

const MarketplaceIframe = (props: IframeProps) => {
  return (
    <>
      <iframe
        src={props.src}
        title={props.title}
        allowFullScreen={props.allowFullScreen}
        height={props.height}
        width={props.width}
        loading="lazy"
      />
    </>

  );
};

export { MarketplaceIframe };