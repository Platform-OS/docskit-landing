import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Hero from '../@platformos/gatsby-theme-platformos-docskit/components/hero';
import Card from '../@platformos/gatsby-theme-platformos-docskit/components/card';
import Heading from '../@platformos/gatsby-theme-platformos-docskit/components/heading';
import Grid from '@platformos/gatsby-theme-platformos-docskit/src/components/grid';
import Button from '@platformos/gatsby-theme-platformos-docskit/src/components/button';
import Awards from '../components/awards';
import bgImage1 from '../images/illustration1.svg';
import bgImage2 from '../images/illustration2.svg';
import colorSchemes from '../images/icons/colorschemes.svg';
import editorialWorkflow from '../images/icons/editorial-workflow.svg';
import howTo from '../images/icons/howto.svg';
import templates from '../images/icons/templates.svg';
import setup from '../images/icons/setup.svg';
import openSource from '../images/icons/opensource.svg';
import markdown from '../images/icons/markdown.svg';
import accessibility from '../images/icons/accessibility.svg';
import responsive from '../images/icons/responsive.svg';
import themes from '../images/icons/themes.svg';
import search from '../images/icons/search.svg';
import gatsby from '../images/icons/gatsby.png';
import github from '../images/icons/github.png';
import arrow from '../images/icons/arrow.svg';
import pos from '../images/icons/pos.png';
import book from '../images/icons/book.svg';
import arrowRight from '../images/icons/arrow-right.svg';
import video from '../images/customization.mp4';
import '../styles/home.css';
import { Link } from 'gatsby';

export default function HomePage() {

  return (
    <div className="home">
      <section className="section section--gray section--bg">

        <div className="container container--hero">
          <Hero />
          <Grid>
            <Card variant="gradient" hoverable shadow bgImage={bgImage1} className='cta-card'>

              <Heading level={3}>Learn more about DocsKit</Heading>
              <p>
                Discover the full potential of DocsKit! Explore our detailed specifications and descriptions to gain deeper insights into our features.
              </p>

              <Button href="/docskit">Discover DocsKit</Button>
            </Card>
            <Card variant="highlighted" hoverable shadow bgImage={bgImage2} className='cta-card'>

              <Heading level={3}>Book a live demo</Heading>
              <p>
                Experience the capabilities of DocsKit in action! Schedule a personalized demo to see how DocsKit can enhance your documentation process.
              </p>

              <Button href="/contact">Book a demo</Button>
            </Card>
          </Grid>
        </div>
      </section>
      <section className="section" style={{ marginTop: '-8rem', paddingTop: '10rem' }}>
        <div className="container not-prose">
          <Grid>
            <StaticImage src="../images/whats-included.png" alt="What's included in DocsKit" />
            <div>
              <Heading level={2}>What's included <span className='sub'>in DocsKit</span></Heading>
              <ul className="feature-list">
                <li>
                  <img src={openSource} alt="Open source" />
                  Open-source Docs as Code documentation solution leveraging platformOS, a git workflow, and a static site generator
                </li>
                <li>
                  <img src={colorSchemes} alt="Configurable color schemes" />
                  Three configurable color schemes
                </li>
                <li>
                  <img src={editorialWorkflow} alt="Editorial workflow" />
                  Editorial workflow
                </li>
                <li>
                  <img src={howTo} alt="Comprehensive documentation" />
                  Comprehensive how-to documentation for using the DocsKit
                </li>
                <li>
                  <img src={templates} alt="Content type templates" />
                  Templates for your most frequently used content types
                </li>
              </ul>
            </div>
          </Grid>
        </div>
      </section>
      <section className="section section--gray section--bg">
        <div className="container not-prose">

          <Heading level={2}>Features <span className='sub'>designed to enhance your documentation site</span></Heading>
          <div className='py-8'>

            <Grid cols='3'>
              <Card shadow className='feature-card'>
                <Grid cols='3'>
                  <div style={{ gridColumn: 'span 2 / span 2' }}>
                    <Heading level={3}>Easy setup</Heading>
                    <p>quick and effortless deployment of your documentation site</p>
                  </div>
                  <span className='icon--rounded'>
                    <img src={setup} alt="Easy setup" />
                  </span>
                </Grid>
              </Card>
              <Card shadow className='feature-card'>
                <Grid cols='3'>
                  <div style={{ gridColumn: 'span 2 / span 2' }}>
                    <Heading level={3}>Markdown and MDX support</Heading>
                    <p>easy formatting and content creation</p>
                  </div>
                  <span className='icon--rounded'>
                    <img src={markdown} alt="Markdown and MDX support" />
                  </span>
                </Grid>
              </Card>
              <Card shadow className='feature-card'>
                <Grid cols='3'>
                  <div style={{ gridColumn: 'span 2 / span 2' }}>
                    <Heading level={3}>Accessibility compliance</Heading>
                    <p>inclusive experience for all users</p>
                  </div>
                  <span className='icon--rounded'>
                    <img src={accessibility} alt="Accessibility compliance" />
                  </span>
                </Grid>
              </Card>
              <Card shadow className='feature-card'>
                <Grid cols='3'>
                  <div style={{ gridColumn: 'span 2 / span 2' }}>
                    <Heading level={3}>Responsive design</Heading>
                    <p>functions seamlessly across devices</p>
                  </div>

                  <span className='icon--rounded'>
                    <img src={responsive} alt="Responsive design" />
                  </span>
                </Grid>
              </Card>
              <Card shadow className='feature-card'>
                <Grid cols='3'>
                  <div style={{ gridColumn: 'span 2 / span 2' }}>
                    <Heading level={3}>Customizable themes</Heading>
                    <p>personalize the appearance of your documentation</p>
                  </div>
                  <span className='icon--rounded'>
                    <img src={themes} alt="Customizable themes" />
                  </span>
                </Grid>
              </Card>
              <Card shadow className='feature-card'>
                <Grid cols='3'>
                  <div style={{ gridColumn: 'span 2 / span 2' }}>
                    <Heading level={3}>Search functionality</Heading>
                    <p>quickly find specific content</p>
                  </div>
                  <span className='icon--rounded'>
                    <img src={search} alt="Search functionality" />
                  </span>
                </Grid>
              </Card>
            </Grid>
          </div>
          <div className='flex'>
            <Link to="/docskit/features/" className='features-link hover:underline'>
              More features <img src={arrow} alt="arrow" />
            </Link>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='text-center'>
            <Heading level={2}>Pre-designed custom components <span className="sub">that you can readily utilize in your MDX documentation pages</span></Heading>
          </div>
          <video width="1040" height="480" autoPlay loop muted className="mx-auto"> <source src={video} type="video/mp4" />
            <StaticImage src="../images/docskit_customizable.png" alt="Customizations" placeholder='#fff' />
          </video>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container not-prose">
          <Grid>
            <div className='text-xl'>
              <Heading level={2}>Our inspiration <span className='sub'>the <span className='text-interactive-text'>platformOS Documentation</span></span></Heading>
              <p className='pb-6'>
                <b>The <a href="https://documentation.platformos.com" target="_blank" rel="noreferrer" className='text-interactive-text hover:underline'>platformOS Documentation</a></b> provides onboarding, conceptual information, tutorials, examples, API references, use cases,
                and best practices to developers building their apps or sites on the Platform-as-a-Service (PaaS) framework that is platformOS.
              </p>
              <p>
                Following the Docs as Code approach, it is built to accommodate constant iteration and collaboration — with our developer
                community being involved in all phases of our editorial workflow, the portal is quick to adapt to their ever evolving needs.
              </p>
            </div>
            <StaticImage src="../images/award.png" alt="Award winning documentation" placeholder='#F7F8FA' />
          </Grid>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='text-center max-w-3xl mx-auto'>
            <Heading level={2}>Begin crafting your documentation <span className="sub">on a codebase fine-tuned for optimal performance, accessibility, sustainability, and SEO.</span></Heading>
          </div>
          <StaticImage src="../images/performance.png" alt="Optimized for performance, accessibility, sustainability and SEO" placeholder='#fff' />
        </div>
      </section>
      <section className='section section--gray'>
        <div className='container'>
          <Grid cols='3'>
            <div style={{ gridColumn: 'span 2 / span 2' }}>
              <Heading level={2}>Uncover the strategies <span className="sub">behind our multi-award-winning platformOS Documentation and learn how to build your own.</span></Heading>
            </div>
            <StaticImage src="../images/book.png" alt="Crafting Docs for Success: An End-to-End Approach to Developer Documentation" />

          </Grid>
          <Card className='book-banner not-prose' variant='gradient'>
            <img src={book} alt="book" />
            <p className='flex-1'>
              Dive into <a href="https://www.amazon.com/Crafting-Docs-Success-End-End/dp/1484295935/" target='blank' rel='nofollow' className='text-inverted underline'>Crafting Docs for Success: An End-to-End Approach to Developer Documentation</a> by Diana Lakatos for an insightful exploration.
            </p>
            <Button href="https://www.amazon.com/Crafting-Docs-Success-End-End/dp/1484295935/">
              <span>
                <img src={arrowRight} style={{ display: 'inline-block' }} alt="arrow" />
              </span>
            </Button>
          </Card>
        </div>
      </section>
      <section className='section section--gray'>
        <div className='container'>
          <Awards />
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='tech-grid not-prose'>
            <div className='tech-grid__card'>
              <Heading level={3}>
                <span>Built with Gatsby</span>
                <span><img src={gatsby} alt="Gatsby" /></span>
              </Heading>
              <p>DocsKit is built on Gatsby: the modern, open-source, and lightning-fast static site generator framework</p>
            </div>
            <div className='tech-grid__card'>
              <Heading level={3}>
                <span>Using GitHub</span>
                <span><img src={github} alt="Github" /></span>
              </Heading>
              <p>As a web-based hosting service for version control using Git, GitHub facilitates collaborative development</p>
            </div>
            <div className='tech-grid__card'>
              <Heading level={3}>
                <span>Powered by platformOS</span>
                <span><img src={pos} alt="platformOS" /></span></Heading>
              <p>DocsKit is maintained and developed by the team behind platformOS: the limitless API-first application development platform</p>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}
