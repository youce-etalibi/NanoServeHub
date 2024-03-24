import { Fragment } from "react";
import './footer.css';

export default function Footer(){
    return(
        <Fragment>
            <div className="parentFooter" data-aos="fade-up">
                <div className="rowBrandLogo">
                    <img src="/public/nanoSH-logo.png" alt="" />
                </div>
                <div className="parentFirstTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Offices</th>
                                <th>Contact Sales</th>
                                <th>Contact Support</th>
                                <th>Subscribe to Our Newsletter</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>200 Tangier, bendiban, iran rue, morroco</td>
                                <td><i className='bx bx-envelope' ></i> NanoServeHub@gmail.com</td>
                                <td><i className='bx bx-chat' ></i> Contact Support</td>
                                <td>
                                    <form action="">
                                        <input type="email" placeholder="email ... " className="emailFooter"/>
                                    </form>
                                </td>
                            </tr>
                            <tr>
                                <td>292 Tangier, boukhalf, kaddisie rue, morroco</td>
                                <td><i className='bx bx-mobile-alt' ></i> +212 619288562</td>
                                <td></td>
                                <td><input type="submit" value="Subscribe" className="submitFooter"/></td>
                            </tr>
                            <br /><br />
                            <tr>
                                <td>
                                    <div className="mediaIconsLine">
                                    <a href="#" className="mediaICons"><i className='bx bxl-facebook-circle' ></i></a>
                                    <a href="#" className="mediaICons"><i className='bx bxl-instagram-alt'></i></a>
                                    <a href="#" className="mediaICons"><i className='bx bxl-linkedin-square' ></i></a>
                                    <a href="#" className="mediaICons"><i className='bx bxl-whatsapp' ></i></a>
                                    </div>
                                </td>
                                <td colSpan={2}>
                                    <div className="parentHelpFooter">
                                    <a href="#" >Privacy</a>
                                    <a href="#" >Terms</a>
                                    <a href="#" >Master Subscription Agreement</a>
                                    <a href="#" >Sitemap</a>
                                    </div>
                                </td>
                                <td>
                                    <p className="copyrightP">Copyright © {new Date().getFullYear()} NanoServeHub. All rights reserved.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}