import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { notFound } from 'next/navigation'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
    const params = await props.params

    // 잘못된 경로 필터링
    if (!params.mdxPath || params.mdxPath.some(segment =>
        segment.startsWith('.') ||
        segment.includes('chrome') ||
        segment.includes('devtools')
    )) {
        return {}
    }

    const { metadata } = await importPage(params.mdxPath)
    return metadata
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props) {
    const params = await props.params

    // 파라미터 검증
    if (!params.mdxPath) {
        notFound()
    }

    // 잘못된 경로 필터링
    if (params.mdxPath.some(segment =>
        segment.startsWith('.') ||
        segment.includes('chrome') ||
        segment.includes('devtools') ||
        segment.includes('well-known')
    )) {
        notFound()
    }

    const result = await importPage(params.mdxPath)
    const { default: MDXContent, toc, metadata } = result
    return (
        <Wrapper toc={toc} metadata={metadata}>
            <MDXContent {...props} params={params} />
        </Wrapper>
    )
}