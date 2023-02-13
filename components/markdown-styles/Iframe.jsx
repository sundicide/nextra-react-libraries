export default function Iframe({ src, height = "800", width = "100%" }) {
  return <iframe src={src} width={width} height={height} />
}