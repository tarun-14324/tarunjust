import Head from 'next/head'
import  Navbar  from "./Navbar";
import Link from 'next/link';

export default function Home() {
  return (
    <div >
      <Head>
        <title>next todo</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        ></link>
           </Head>
      <Navbar/>
  <div>
  <header className="masthead">
  <p className="weltext">Welcome to todo website</p>
            <div className="containerfour px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                  
                    </div>
                    
                       
      <ul><li>
       <Link href="/signup">
        <a className="read_mo">Get Register Now</a>
      </Link>            
         </li>
          <li>          
                    <Link href="/TodoForm">
        <a className="read_moon">Skip</a>
      </Link>
      </li></ul>
    
                </div>
            </div>
        </header>
</div>


      <footer >
    
      </footer>
    </div>
  )
}
