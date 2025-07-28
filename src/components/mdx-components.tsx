import React, { ComponentPropsWithoutRef } from 'react';
import type { MDXComponents } from "mdx/types"
import { CodeBlock } from './code-block';
// import { ContentGate } from "./access-control/content-gate"

type PreProps = ComponentPropsWithoutRef<'pre'>;

export const mdxComponents: MDXComponents = {
    h1: ({ children }) => (
        <h1 className="font-serif text-3xl md:text-4xl text-ink  mb-8 leading-tight">{children}</h1>
    ),
    h2: ({ children }) => (
        <h2 className="font-serif text-2xl md:text-3xl text-ink  mb-6 mt-12 leading-tight">{children}</h2>
    ),
    h3: ({ children }) => (
        <h3 className="font-serif text-xl md:text-2xl  mb-4 mt-8 leading-tight">{children}</h3>
    ),
    p: ({ children }) => <p className="font-sans leading-relaxed mb-6">{children}</p>,
    a: ({ href, children }) => (
        <a
            href={href}
            className="text-accent  transition-colors duration-300 underline decoration-accent/30 hover:decoration-accent"
        >
            {children}
        </a>
    ),
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 italic ">
            {children}
        </blockquote>
    ),
    ul: ({ children }) => (
        <ul className="list-disc list-inside mb-6 space-y-2 ">{children}</ul>
    ),
    ol: ({ children }) => (
        <ol className="list-decimal list-inside mb-6 space-y-2 ">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    code: ({ children, className }) => {
        if (!className) {
            return (
                <code className="text-accent px-2 py-1 rounded text-sm font-mono">{children}</code>
            )
        }
        return <code className={className}>{children}</code>
    },
    pre: ({ children, className, ...props }) => {
        const getTextContent = (node: any): string => {
            if (typeof node === "string") return node
            if (typeof node === "number") return node.toString()
            if (Array.isArray(node)) return node.map(getTextContent).join("")
            if (node && typeof node === "object" && node.props) {
                return getTextContent(node.props.children)
            }
            return ""
        }

        const textContent = getTextContent(children)

        return (
            <CodeBlock className={className} raw={textContent} {...props}>
                {children}
            </CodeBlock>
        )
    },
};
