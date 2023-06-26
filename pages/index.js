import Layout from '../components/Layout'
import { skills , experiences, projects} from '../profile'

console.log(skills)
console.log(experiences)



function Index() {
    return (
        <Layout>
            {/**header cars*/}

            <header className="row">
                <div className="col-md-12">
                    <div className="card card-boody bg-dark text-light">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="eva011.png" alt="" className='img.fluid' />
                            </div>
                            <div className="col-md-8">
                                <h1>Tomas Granillo</h1>
                                <h3>Sistemas Developer IT</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim iste et voluptates culpa velit provident cumque labore ipsa deserunt placeat? Temporibus tenetur culpa harum amet sequi laudantium voluptates, numquam quis. </p>
                                <a href="/hireme">Hire Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/** second section */}

            <div className="row py-2">
                <div className="col-md-4">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>skill</h1>

                         {

                            skills.map(({skill ,  percentage}, i  )=> (
                            <div className='py-3' key={i} >
                                     <h5>{skill}</h5>
                                <div className="progress">
                                    <div className="progress-bar" 
                                          role="progressbar" 
                                          style ={{ width: percentage}}>
                                    </div>
                                </div>
                            </div>
                        
        

                            ))
                         }



                        </div>
                        
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>experiencia</h1>

                            <ul>
                                {
                                    experiences.map(({title,description,from,to}, Index) => (
                                        <li key={Index} >
                                            <h3>{title}</h3>
                                            <h5>{from}-{to}</h5>
                                            <p>{description}</p>

                                        </li>
                                                                              
                                    ))
                                }
                            </ul>
                        <a href='/experiences' className="btn btn-dark" > Proyectos</a>
                        

                        </div>
                    </div>
                </div>
            </div>

            {/**portfolio */}
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-dark">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className='text-center text-light'>Portfolio</h1>
                            </div>
                            {
                                projects.map(({name,description,image} , i ) =>(
                                    <div className="col-md-4 p-2" key={i}>
                                <div className="card h-100">
                                    <div className="overflow">
                                         <img src={image} alt='/' className='card-img-top'/>
                                    </div>
                                    <div className="card-body">
                                        <h3>{name}</h3>
                                        <p>{description}</p>
                                        <a href='/githab'>mas info</a>
                                    </div>
                                  </div>
                                </div>
                                ))
                            }

                            
                             
                        </div>
                        <div className="text-center mt-4">
                            <a href='/Portfolio'className='btn btn-outline-light'>Contacto</a>
                        </div>


                    
                    
                    </div>
                </div>
            </div>
            
        </Layout>
    );
}



export default Index;