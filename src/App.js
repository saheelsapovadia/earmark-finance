import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import Info from '../src/components/Info';
import './Modal.css';
import twitter from './images/twitter.svg';
import app1x from './images/app@1x.png';
import arrow from './images/arrow.svg';
import bankofamerica from './images/bankofamerica.svg';
import captialone from './images/captialone.svg';
import chart1x from './images/chart@1x.png';
import citi from './images/citi.svg';
import dots from './images/dots.svg';
import growing from './images/growing.svg';
import rbc from './images/rbc.svg';
import ryan1x from './images/ryan@1x.jpg';
import swing from './images/swing.svg';
import td from './images/td.svg';
import wellsfargo from './images/wellsfargo.svg';
import { MdClose } from 'react-icons/md';

const Modal = ({ showModal, setShowModal, setUserData }) => {
  const modalRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      // resetModal();
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        // resetModal();
        // console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);
  const closeModalX = () => {
    // resetModal();
    setShowModal((prev) => !prev);
  };
  return (
    <>
      {showModal ? (
        <div className='background' onClick={closeModal} ref={modalRef}>
          <div
            className='ModalWrapper Modal__Fullscreen '
            showModal={showModal}
          >
            <MdClose
              className='close-btn'
              aria-label='Close modal'
              onClick={() => closeModalX()}
            />
            <div className='content modal'>
              <p className='text-xl font-body font-semibold logo'>earmark.</p>
              <div className='coll'>
                <div>
                  <p className='title'>Employees</p>
                  <hr></hr>
                </div>
                <div className='op'>
                  <div>
                    {' '}
                    <p>Software Internships</p>
                  </div>
                  <p className='info'>
                    Online, Offline, Remote Internships & more...
                  </p>
                </div>
                <div className='op'>
                  <div>
                    {' '}
                    <p>Design Internships</p>
                  </div>
                  <p className='info'>
                    Online, Offline, Remote Internships & more...
                  </p>
                </div>
              </div>
              <div className='coll'>
                <p className='title'>Employees</p>
                <hr></hr>
                <div className='op'>
                  <div>
                    {' '}
                    <p>Software Internships</p>
                  </div>
                  <p>Online, Offline, Remote Internships & more...</p>
                </div>
              </div>
              <div className='coll'>
                <p className='title'>Employees</p>
                <hr></hr>
                <div className='op'>
                  <div>
                    {' '}
                    <p>Software Internships</p>
                  </div>
                  <p>Online, Offline, Remote Internships & more...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
function App() {
  const [showModal, setShowModal] = useState(false);
  const openNav = () => {
    console.log('window', window.width);
    if (window.innerWidth <= 770) {
      setShowModal(true);
    }
  };

  return (
    <>
      <Modal setShowModal={setShowModal} showModal={showModal} />
      <div className='font-body bg-beige text-black pt-6 sm:pt-12 overflow-x-hidden'>
        <div className='shadow-bo'>
          <div className='sm:grid sm:grid-cols-10 sm:gap-3 md:gap-6 mx-auto max-w-screen-xl px-6 md:px-12'>
            <header className='col-span-10 mb-24 lg:mb-28'>
              <div className='flex justify-between items-end nav'>
                <p className='text-xl font-body font-semibold'>earmark.</p>
                <div className='nav-gradtheory'>
                  <div onClick={openNav}>
                    <a href='#'>GradTheory</a>
                  </div>
                  <div className='header-gradTheory'>
                    <div className='grad-con'>
                      <div className='content'>
                        <div className='coll'>
                          <p className='title'>Employees</p>
                          <hr></hr>
                          <div className='op'>
                            <div>
                              {' '}
                              <p>Software Internships</p>
                            </div>
                            <p className='info'>
                              Online, Offline, Remote Internships & more...
                            </p>
                          </div>
                          <div className='op'>
                            <div>
                              {' '}
                              <p>Design Internships</p>
                            </div>
                            <p className='info'>
                              Online, Offline, Remote Internships & more...
                            </p>
                          </div>
                        </div>
                        <div className='coll'>
                          <p className='title'>Employees</p>
                          <hr></hr>
                          <div className='op'>
                            <div>
                              {' '}
                              <p>Software Internships</p>
                            </div>
                            <p>Online, Offline, Remote Internships & more...</p>
                          </div>
                        </div>
                        <div className='coll'>
                          <p className='title'>Employees</p>
                          <hr></hr>
                          <div className='op'>
                            <div>
                              {' '}
                              <p>Software Internships</p>
                            </div>
                            <p>Online, Offline, Remote Internships & more...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href=''
                  className='inline-flex items-center hover:text-indigo-400'
                >
                  <img
                    alt='Twitter icon'
                    src={twitter}
                    width='16'
                    height='14'
                  />
                  <span className='ml-2 text-sm'>Twitter</span>
                </a>
              </div>
            </header>

            <section className='col-span-6 lg:col-span-4'>
              <h1 className='text-first leading-first md:text-sec md:leading-sec  font-body font-semibold mb-8 heading'>
                Healthy spending made
                <span className='text-purple-500'> effortlessly.</span>
              </h1>
              <p className='text-lg mb-8 heading-sub'>
                Less Robinhood YOLOs, and more strategic planning around your
                goals. Better budgeting tools and wealth tracking across all
                your accounts.
              </p>

              <form>
                <div className='bg-white rounded-full py-1 pr-1 pl-6 mb-6 shadow-input'>
                  <label className='absolute -m-px w-px h-px overflow-hidden whitespace-nowrap border-0'>
                    Enter email address...
                  </label>
                  <div className='flex items-center'>
                    <input
                      type='email'
                      placeholder='Enter email address...'
                      id='email'
                      name='email'
                      className='outline-none flex-1 bg-transparent min-w-0'
                    />
                    <button
                      type='submit'
                      className='submit flex items-center flex-none bg-yellow-200 rounded-full py-4 px-5 sm:px-7 ml-4'
                    >
                      <span className='hidden sm:block text-sm'>
                        Join waitlist
                      </span>
                      <span className='sm:hidden text-sm'>Waitlist</span>
                      <span className='block ml-2 w-3 h-3'>
                        <img
                          alt='Right arrow icon'
                          className='arrow'
                          width='12'
                          height='12'
                          src={arrow}
                        />
                      </span>
                    </button>
                  </div>
                </div>

                <p>
                  <small className='text-sm text-gray-400'>
                    We won&rsquo;t sell or spam your email. Scouts honour.
                  </small>
                </p>
              </form>
            </section>

            <aside className='col-start-7 col-end-11 mt-8 sm:mt-12'>
              <div className='app absolute right-0 rounded-lg overflow-hidden'>
                <img
                  alt='Mock up of the earmark application'
                  loading='lazy'
                  src={app1x}
                  className='sm:max-w-none h-auto'
                  width='875'
                  height='779'
                />
              </div>
              <div className='app-filler justify-self-stretch bg-transparent'></div>
            </aside>
            <div className='col-start-6 col-end-11 col-end-10 self-center pt-12 sm:pb-24 md:pt-24 mb-12 sm:mb-0'>
              <p className='inline-block py-0.5  px-3 rounded-full bg-purple-500 bg-opacity-25 mb-4'>
                <span className='text-sm text-purple-600'>
                  Secure management
                </span>
              </p>
              <h2 className='leading-3v -mt-1.5 text-7xl font-body font-semibold mb-6 max-w-lg'>
                All your accounts, one dashboard.
              </h2>
              <p className='text-lg mb-6 -mt-1'>
                Ten accounts? Four banks? We&rsquo;ve got you covered with our
                comprehensive dashboards. One account to rule them all.
              </p>
              <p className='text-lg -mt-1.5'>
                Connect once, we&rsquo;ll handle the rest securely. No more
                digging through accounts to find that transaction from last
                week.
              </p>
            </div>

            <div className='col-span-4 justify-self-end self-end col-start-1 row-start-3 md:transform translate-x-12'>
              <img
                alt='Illustration of a woman on a swing'
                loading='lazy'
                width='512'
                className='max-w-full h-auto sm:max-w-none'
                height='481'
                src={swing}
              />
            </div>
          </div>
        </div>
        <section>
          <Info />
        </section>
        <section className='bg-white py-16 lg:pt-28'>
          <div className='sm:grid sm:grid-cols-10 sm:gap-12 md:gap-24 mx-auto max-w-screen-xl px-6 md:px-12'>
            <div className='col-span-6 lg:col-span-5 sm:pr-12'>
              <p className='inline-block py-0.5  px-3 rounded-full bg-purple-500 bg-opacity-25 mb-4'>
                <span className='text-sm text-purple-600'>
                  Personalized insights
                </span>
              </p>
              <h2 className='leading-3v -mt-1.5 text-7xl font-body font-semibold mb-6 max-w-lg'>
                Informed budget management
              </h2>
              <p className='text-lg mb-6 -mt-1'>
                Keep track of subscriptions and recurring bills with ease.
                You&rsquo;ll know where your money goes before it&rsquo;s gone.
              </p>
              <p className='text-lg -mt-1.5'>
                You&rsquo;ll be kept in the loop to manage unexpected charges
                before they show up on your next bill.
              </p>
            </div>
            <aside className='col-start-8 lg:col-start-6 col-end-11 mt-8 sm:mt-12'>
              <div className='chart absolute right-0 rounded-lg overflow-hidden'>
                <img
                  alt='Monthly budget graphing showing a balance'
                  loading='lazy'
                  src={chart1x}
                  className='max-w-none h-auto'
                  width='629'
                  height='420'
                />
              </div>
              <div className='chart-filler justify-self-stretch bg-transparent'></div>
            </aside>
          </div>
        </section>

        <section className='sm:hidden bg-beige px-6 py-12'>
          <blockquote className='relative'>
            <img
              alt=''
              loading='lazy'
              width='196'
              height='158'
              className='absolute transform -translate-x-1/2 -translate-y-1/2'
              src={dots}
            />
            <article className='flex flex-col relative'>
              <img
                alt='Ryan Johnson headshot avatar'
                loading='lazy'
                src={ryan1x}
                className='self-center sm:self-start lg:self-center rounded-full mb-6'
                width='64'
                height='64'
              />
              <p className='text-xl leading-2v font-semibold mb-8'>
                &ldquo;This will seriously be a game changer. Get ready for the
                best thing to come to your finances.&rdquo;
              </p>
              <p className='text-lg leading-v '>
                <strong>Ryan Johnson</strong>
              </p>
              <p className='text-lg leading-v'>
                Principal Product Design, Dribbble
              </p>
            </article>
          </blockquote>
        </section>

        <div className='bg-white sm:bg-transparent bg-vhite'>
          <div className='sm:grid sm:grid-cols-12 sm:gap-3 md:gap-6 mx-auto max-w-screen-xl px-6 md:px-12'>
            <div className='hidden sm:block col-start-1 row-start-1 col-end-5 pt-28 pr-4 lg:pr-12'>
              <blockquote className='relative'>
                <img
                  alt=''
                  loading='lazy'
                  width='196'
                  height='158'
                  className='absolute transform -translate-x-1/2 -translate-y-1/2'
                  src={dots}
                />
                <article className='flex flex-col relative'>
                  <img
                    alt='Ryan Johnson headshot avatar'
                    loading='lazy'
                    src={ryan1x}
                    className='self-center sm:self-start lg:self-center rounded-full mb-6'
                    width='64'
                    height='64'
                  />
                  <p className='text-xl leading-2v font-semibold mb-8'>
                    &ldquo;This will seriously be a game changer. Get ready for
                    the best thing to come to your finances.&rdquo;
                  </p>
                  <p className='text-lg leading-v '>
                    <strong>Ryan Johnson</strong>
                  </p>
                  <p className='text-lg leading-v'>
                    Principal Product Design, Dribbble
                  </p>
                </article>
              </blockquote>
            </div>

            <section className='col-start-7 col-end-13 row-start-1 pt-12 sm:pt-6 z-10'>
              <article>
                <p className='inline-block py-0.5  px-3 rounded-full bg-purple-500 bg-opacity-25 mb-4'>
                  <span className='text-sm text-purple-600'>No boundaries</span>
                </p>
                <h2 className='leading-3v -mt-1.5 text-7xl font-body font-semibold mb-6 max-w-lg'>
                  Easily swap money between all your accounts
                </h2>
                <p className='text-lg mb-6 -mt-1'>
                  We&rsquo;re big believers in paying yourself first. Set
                  automated transfers between accounts and banks to make your
                  pay work for you.
                </p>
                <p className='text-lg -mt-1.5 mb-10'>
                  Quickly create and cancel transfers to align with your
                  investment goals.
                </p>
                <ul className='flex justify-between items-center mb-4'>
                  <li>
                    <img
                      alt='Wells fargo logo'
                      loading='lazy'
                      width='50'
                      height='50'
                      src={wellsfargo}
                    />
                  </li>
                  <li>
                    <img
                      alt='Citi logo'
                      loading='lazy'
                      width='62'
                      height='40'
                      src={citi}
                    />
                  </li>
                  <li className='hidden lg:block'>
                    <img
                      alt='Capital One logo'
                      loading='lazy'
                      width='111'
                      height='40'
                      src={captialone}
                    />
                  </li>
                  <li className='block sm:hidden md:block'>
                    <img
                      alt='TD logo'
                      loading='lazy'
                      width='53'
                      height='48'
                      src={td}
                    />
                  </li>
                  <li>
                    <img
                      alt='Bank of America logo'
                      loading='lazy'
                      width='68'
                      height='68'
                      src={bankofamerica}
                    />
                  </li>
                  <li className='hidden xl:block'>
                    <img
                      alt='RBC logo'
                      loading='lazy'
                      width='50'
                      height='50'
                      src={rbc}
                    />
                  </li>
                </ul>
                <p className='text-right opacity-50'>+ many others</p>
              </article>
            </section>

            <section className='col-start-7 col-end-13 row-start-2 z-10'>
              <article className='pt-12 sm:pt-24 pb-4 sm:pb-28'>
                <p className='inline-block py-0.5 px-3 rounded-full bg-purple-500 bg-opacity-25 mb-4'>
                  <span className='text-sm text-purple-600'>Net worth</span>
                </p>
                <h2 className='leading-3v -mt-1.5 text-7xl font-body font-semibold mb-6 max-w-lg'>
                  Grow your savings
                </h2>
                <p className='text-lg mb-6 -mt-1.5'>
                  Track your net worth over time and overview your current
                  portfolio.
                </p>
                <p className='text-lg -mt-1.5 mb-10'>
                  Better yet, view trendlines for specific accounts to better
                  inform future decisions.
                </p>
              </article>
            </section>

            <div className='hidden sm:block sm:bg-white col-start-5 col-end-13 row-start-1 row-end-3'></div>
            <div className='col-start-1 col-end-5 row-start-2 self-end justify-self-end'>
              <img
                alt='Illustration of woman holding a plant'
                loading='lazy'
                width='493'
                height='461'
                className='max-w-full h-auto sm:max-w-none sm:transform sm:translate-x-24 sm:translate-y-6'
                src={growing}
              />
            </div>
          </div>
        </div>

        <div className='bg-white pb-6 sm:pb-12'>
          <div className='mx-auto max-w-screen-xl px-6 md:px-12'>
            <section className='pt-16 sm:pt-28'>
              <div className='max-w-lg text-center mx-auto'>
                <h3 className='text-7xl leading-3v font-semibold mb-6'>
                  Join the waitlist
                </h3>
                <p className='text-lg leading-v mb-8'>
                  We can&rsquo;t wait to show you what Earmark can do. Be the
                  first to know when we launch.
                </p>

                <form>
                  <div className='bg-white rounded-full py-1 pr-1 pl-6 mb-6 shadow-input'>
                    <label className='absolute -m-px w-px h-px overflow-hidden whitespace-nowrap border-0'>
                      Enter email address...
                    </label>
                    <div className='flex items-center'>
                      <input
                        type='email'
                        placeholder='Enter email address...'
                        id='email'
                        name='email'
                        className='outline-none flex-1 bg-transparent min-w-0'
                      />
                      <button
                        type='submit'
                        className='submit flex items-center flex-none bg-yellow-200 rounded-full py-4 px-5 sm:px-7 ml-4'
                      >
                        <span className='hidden sm:block text-sm'>
                          Join waitlist
                        </span>
                        <span className='sm:hidden text-sm'>Waitlist</span>
                        <span className='block ml-2 w-3 h-3'>
                          <img
                            alt='Right arrow icon'
                            className='arrow'
                            width='12'
                            height='12'
                            src={arrow}
                          />
                        </span>
                      </button>
                    </div>
                  </div>

                  <p>
                    <small className='text-sm text-gray-400'>
                      We won&rsquo;t sell or spam your email. Scouts honour.
                    </small>
                  </p>
                </form>
              </div>
            </section>
            <footer className='text-center sm:text-left sm:flex justify-between items-end pt-24'>
              <p className='mb-6 sm:mb-0 text-sm'>
                Copyright &copy; 2020 Earmark. All right reserved.
              </p>
              <a
                href=''
                className='inline-flex items-center hover:text-indigo-400'
              >
                <img alt='Twitter icon' src={twitter} width='16' height='14' />
                <span className='ml-2 text-sm'>Twitter</span>
              </a>
            </footer>
          </div>
        </div>
        <div className='scrunch' aria-hidden='true'></div>
      </div>
    </>
  );
}

export default App;
