import React from "react";
import '../styles/Home.css'
import Footer from "./Footer";

import Header from "./Header";
import NaveBar from "./NavBar";



export default function Home() {

    return (
        <div className="back">
            <div className="mt-5 mb-5">
                <Header />
                <NaveBar />

                <div class="accordian w-100">
                    <ul>
                        <li>
                            <div class="image_title">
                                <a href="#">Employee Management</a>
                            </div>
                            <a href="#">
                                <img src="https://www.tsg-solutions.com/app/uploads/2021/08/TSG_newsarticle_Prime_Fuelling-1024x695.jpg" />
                            </a>
                        </li>

                        <li>
                            <div class="image_title">
                                <a href="#">Vehicle Management</a>
                            </div>
                            <a href="#">
                                <img src="https://cdn.newsapi.com.au/image/v1/5207fec9b0884a1dfdb1bb22fe28fdf8?width=1024" />
                            </a>
                        </li>


                        <li>
                            <div class="image_title">
                                <a href="#">Fuel Station</a>
                            </div>
                            <a href="#">
                                <img src="e-benefits-gas-pump-560x427.jpg&ehk=Kuj%2bA86zG0LQLNmZi17AvypAsKMqy6vYhVi4%2fGZaGYY%3d&risl=&pid=ImgRaw&r=0" />
                            </a>
                        </li>

                        <li>
                            <div class="image_title">
                                <a href="#">Fuel Station</a>
                            </div>
                            <a href="#">
                                <img src="https://www.rd.com/wp-content/uploads/2021/02/GettyImages-1204853943.jpg?resize=1024" />
                            </a>
                        </li>


                       



                        <li>
                            <div class="image_title">
                                <a href="#">Fuel Station</a>
                            </div>
                            <a href="#">
                                <img src="https://d2eehagpk5cl65.cloudfront.net/img/q60/uploads/assets/mc/2018_01/gasstation_856x642.jpg" />
                            </a>
                        </li>




                    </ul>
                </div>
                
            </div>
            <Footer />
        </div>
    )

}