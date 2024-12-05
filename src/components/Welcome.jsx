import React from 'react'

const Welcome = () => {
    return (
        <>
            <section id='welcome-hero' className='welcome-hero'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <div className='header-text'>
                                <h2>
                                    Hi <span>,</span> I am <br /> Vishnu <br /> Mevada <span>.</span>
                                </h2>
                                <p>Web Developer</p>
                                <a href="/download/csvsamples.pdf" download>Download Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Welcome
