import type {NextPage} from 'next'
import dbClient from "@utils/dbClient";
import {User, withPageAuth, getUser} from '@supabase/auth-helpers-nextjs';
import {useUser} from "@supabase/auth-helpers-react";


const Home: NextPage = () => {
  const {user, error} = useUser();
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there, {user?.email}</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. and else</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const user = await dbClient.auth.user()
  console.log(user, 'server')
  return {
    props: {user}, // will be passed to the page component as props
  }
}
export default Home
