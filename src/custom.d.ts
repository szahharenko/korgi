declare module '*.svg?inline' {
  const content: any
  export default content
}

declare module '*.jpg';
declare module '*.png';

declare module '*.svg' {
  const content: any
  export default content
}
declare module "*.json" {
  const value: any;
  export default value;
}