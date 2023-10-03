import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import Search from '../../../components/search';
import './hero.css';

const Hero = () => (
  <div className="not-prose flex max-w-screen-xl px-4 pb-8 mx-auto gap-2 items-center hero">
      <div className="mr-auto place-self-center flex-1">
        <div>
          <h1 className="max-w-3xl mb-4 text-4xl leading-none md:text-5xl text-prominent font-bold">
            DocsKit <span style={{display: 'block', fontWeight: 100, fontSize: '30px'}}> by <span className="text-interactive-text">platformOS</span></span>
          </h1>

          <h2 style={{
            fontSize: '1.5rem',
            lineHeight: '2rem',
            fontWeight: 'bold',
            padding: '1.5rem 0'
          }}>
          Deploy a best practice and fully customizable documentation site quickly!
          </h2>
          <p style={{
            fontSize: '1.5rem',
            lineHeight: '2rem'
          }}>
            Inspired by our multi-award winning documentation site, our documentation package will provide everything you need to build best practice documentation sites for your projects
          </p>
        </div>

        <Search />

      </div>
      <div className="hero__illustration">
        <StaticImage src="../../../images/hero.png" width={500} quality={100} alt="PlatformOS DocsKit" placeholder='#fff' className="h-auto" />
      </div>
  </div>
);

export default Hero;
