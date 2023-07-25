import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import Search from '../../../components/search';
import './hero.css';

const Hero = () => (
  <div className="not-prose flex max-w-screen-xl px-4 pb-8 mx-auto gap-2 items-center hero">
      <div className="mr-auto place-self-center flex-1">
        <div>
          <h1 className="max-w-3xl mb-4 text-4xl leading-none md:text-5xl text-prominent font-bold">
            DocsKit by <span className="text-interactive-text">platformOS</span>
          </h1>

          <h2 className="max-w-3xl mb-6 font-light text-prominent lg:mb-8 md:text-lg lg:text-xl">
          Deploy a best practice and fully customizable documentation site quickly!
          Inspired by our multi-award winning documentation site, our documentation package will provide everything
          you need to build best practice documentation sites for your projects.
          </h2>
        </div>

        <Search />

      </div>
      <div className="hero__illustration">
        <StaticImage src="../../../images/docskit.png" width={350} quality={100} alt="PlatformOS DocsKit" placeholder='#fff' className="h-auto" />
        <div className="area" aria-hidden="true">
          <ul className="triangles">
            <li>▶</li><li>▶</li><li>▶</li><li>▶</li><li>▶</li><li>▶</li>
          </ul>
        </div>
      </div>
  </div>
);

export default Hero;