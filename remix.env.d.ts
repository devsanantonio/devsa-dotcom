/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

declare module '*.mdx' {
    let MDXComponent: (props: any) => JSX.Element;
    export const frontmatter: any;
    export default MDXComponent;
}
