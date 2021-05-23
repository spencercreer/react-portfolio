import React from 'react';

export default function Footer() {
    return (
        // Footer with profile links
        <footer className="footer mt-auto bg-dark">
          <div className="container py-3">
            <span className="text-light">© Spencer Creer
              <a className="text-light link-text mx-2" href="https://www.linkedin.com/in/spencer-creer-023246109/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
              <a className="text-light link-text mx-2 pt-3" href="https://github.com/spencercreer" target="_blank"><i
                  className="fa fa-github"></i></a>
            </span>
          </div>
        </footer>
    )
}
