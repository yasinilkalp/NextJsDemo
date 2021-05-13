import { getMdxNode, getMdxPaths } from 'next-mdx/server'
import { useHydrate } from 'next-mdx/client'
import { mdxComponents } from '../../components/mdx-components'
import { useAuth0 } from '@auth0/auth0-react'

export default function PostPage({ post }) {
  const { loginWithPopup, logout, isAuthenticated, user } = useAuth0()
  const content = useHydrate(post, {
    components: mdxComponents
  })
  return (
    <div className="site-container">
      <article className="prose">
        <h1 className="text-2xl font-bold"> {post.frontMatter.title} </h1>
        <p> {post.frontMatter.excerpt} </p>
        <hr />
        <div> {content} </div>
      </article>
      <div className="my-10">
        {isAuthenticated ? (
          <div>
            <button onClick={() => logout()}> Çıkış Yap </button>
          </div>
        ) : (
          <>
            <textarea className="w-full border"></textarea>
            <button onClick={() => loginWithPopup()}> Giriş Yap </button>
          </>
        )}
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths('post'),
    fallback: false
  }
}

export async function getStaticProps(context) {
  const post = await getMdxNode('post', context)

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
}
