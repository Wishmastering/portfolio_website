import Image from "next/image";
import png from  "../../public/carls.webp"
import png1 from "../../public/Carrusel1.png"
import png2 from "../../public/Carrusel2.jpeg"
import png3 from "../../public/Carrusel3.jpg"
import png4 from "../../public/Carrusel4.jpg"
import png5 from "../../public/Carrusel5.jpg"



export default function Carousel(){
    return<>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner ">
                {/* Este es el primer slider del carrusel */}
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className="d-flex justify-content-center">
                        <Image 
                            src={png}
                            className="d-block w-100" 
                            alt="Where2day"
                            width={500}
                            height={700}
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                              }}
                           
                        />
                    </div>
                </div>
                {/* Este es el segundo slider del carrusel */}
                <div className="carousel-item">
                    <div className="d-flex justify-content-center">
                        <Image 
                            src={png2}
                            className="d-block w-100" 
                            alt="Where2day"
                            width={500}
                            height={700}
                          
                        />
                    </div>
                </div>

                {/* Este es el tercer slider del carrusel */}
                <div className="carousel-item bg-dark">
                    <div className="d-flex justify-content-center">
                        <Image 
                            src={png3}
                            className="d-block w-100" 
                            alt="Where2day"
                            width={901}
                            height={700}
                          
                        />
                    </div>
                </div>
                {/* Este es el Cuarto slider del carrusel */}
                <div className="carousel-item bg-dark">
                    <div className="d-flex justify-content-center">
                        <Image 
                            src={png4}
                            className="d-block w-100" 
                            alt="Where2day"
                            width={900}
                            height={700}
                            
                          
                        />
                    </div>
                </div>
                {/* Este es el Quinto slider del carrusel */}
                <div className="carousel-item bg-dark">
                    <div className="d-flex justify-content-center">
                        <Image 
                            src={png5}
                            className="d-block w-100" 
                            alt="Where2day"
                            width={900}
                            height={700}
                          
                        />
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div> 
    </>
}
