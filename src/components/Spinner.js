import React from 'react';
import './Spinner.css'

const Spinner = () => {
    return (
        <div className="fixed inset-40 flex items-center justify-center bg-black text-slate-100 font-light">
            <div className=''> 
                <div className='mb-4'>
                Enter info
                </div>
                <div className="neon-spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;
