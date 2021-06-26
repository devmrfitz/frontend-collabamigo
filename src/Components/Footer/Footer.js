import React from "react";
import "./Footer.css";
class Footer extends React.Component {

    // Noinspection JSCheckFunctionSignatures
    shouldComponentUpdate() {

        return false;

    }

    render() {
        return (
            <section>
                <div className="footer row">
                    <div className="link-footer col-md-7">
                        <b className="float-right pr-4">
                            
                            {" "}

                            <a
                                className="link-footer"
                                href="https://github.com/watson-hex"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Watson-Hex &#169; 2021
                            </a>
                        </b>
                    </div>

                    <div className="col-md-5 float-right">
                        <a
                            className="text-black-50 float-right pr-3"
                            href="https://forms.gle/MScukDTAhm2N3ixA8"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Review us
                        </a>
                    </div>
                    
                </div>
            </section>

        )
    }

}

export default Footer;
