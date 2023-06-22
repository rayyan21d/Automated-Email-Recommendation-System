import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Research
      <br className='max-md:hidden' />
      <span className='blue_gradient text-center'> 
      Updates 
      </span>
      <br />
      <span className='orange_gradient text-center'>
        [ Personalized ]
      </span>
    </h1>

    <p className='desc text-center'>
       PaperLink is an open-source email recommendation system for researchers to get weekly updates from the world of research based on your interests.
    </p>
    
    <Feed />
  </section>
);

export default Home;
