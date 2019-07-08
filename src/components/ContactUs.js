import React, { Component } from 'react';

export default class ContactUs extends Component {
    state = {
        title: 'ATLANTA BISTRO RESTAURANT',
        phone: '(404) 512 - 0978',
        location: 'Atlanta, Georgia',
    }
    render() {
        return (
            <section id="ContactUs" className="texturebg">
                <div className="container">
                    <h5 className="ContactUs-title">Contact Us</h5>
                    <h2>Delicious Flavor of Autumn</h2>

                    <div className="box">
                    <div className="row">
                    <div className="col-md-6">
                    <div className="title">
                        {this.state.location}
                    </div>
                    <h6 className="address"> 3309 Hamilton Road <br/>
                    Sandy Springs, GA 30303
                    </h6>
                    <p>
                        <strong>email:</strong> <a href="mailto:info@atlantabistro.com">info@atlantabistro.com</a>
                    </p>
                    </div>
                    <div className="col-md-6">
                        <h6>
                        Phone: 
                        </h6>
                        <div className="title">
                        {this.state.phone}
                        </div>
                        <h6>
                        Lunch Service:
                        </h6>
                        <p>
                        Sunday - Friday <br/> from 11am - 2:00pm
                        </p>
                        <h6>
                        Dinner Service:
                        </h6>
                        <p>
                        Sunday - Saturday: <br/> from 5pm - 11:30pm
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
