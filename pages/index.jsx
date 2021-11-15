import Hero from '../components/Hero/Section'
import Layout from '../components/Layout/Layout'
import { homeObjOne } from '../database/Data'

const index = () => {
  return (
    <>
      <Layout>
        <Hero {...homeObjOne} />
      </Layout>
    </>
  )
}

export default index
