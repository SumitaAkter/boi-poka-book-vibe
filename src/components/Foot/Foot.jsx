import React from 'react';

const Foot = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-neutral text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by <a target='blank' className='link link-hover semibold text-lime-500' href = 'https://www.facebook.com/sumita.akter.771/' >Somita</a> Bsc in CSE</p>
  </aside>
</footer>
    );
};

export default Foot;