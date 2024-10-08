import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Home, HomeIcon, Minimize } from "lucide-react";
import { BsCalendarFill, BsCrosshair, BsHouse, BsHouseFill, BsImageFill, BsInfo, BsInfoCircleFill, BsPeopleFill, BsPersonFill, BsPhoneFill, BsSliders, BsSliders2, BsTrophyFill } from "react-icons/bs";
import { CloseButton } from "react-toastify";
export default function Nav() {
  const [isNav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (!isMobile) {
      let lastScrollTop = 0;
  
      const handleScroll = () => {
        if (containerRef.current) {  // Check if the ref exists
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
          if (scrollTop > lastScrollTop) {
            // Scrolling down
            containerRef.current.style.top = '-100px';
            console.log('Scrolling down');
          } else {
            // Scrolling up
            containerRef.current.style.top = '20px';
            console.log('Scrolling up');
          }
  
          lastScrollTop = scrollTop;
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isMobile]);
  return (
    <>
      <div className="md:hidden" style={{ width: "75%" }}>
        <div
          className="relative"
          onClick={() => {
            setNav(!isNav);
          }}
        >
          {isNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="60"
              viewBox="0 0 46 30"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
                fill="#F8F8F8"
                fillOpacity="0.9"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="60"
              viewBox="0 0 46 30"
              fill="none"
            >
              <path
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                fill="#F8F8F8"
                fillOpacity="0.9"
              />
            </svg>
          )}
        </div>
      </div>
      {!isMobile && (
        <motion.div
          className="flex"
          ref={containerRef}
          style={{
            height: "fit-content",
            width: "75%",
            background: "red",
            alignItems: "center",
            justifyContent: "space-evenly",
            borderRadius: "50px",
            border: "3px solid #545454",
            backgroundColor: "#000016",
            position: "fixed",
            top: "20px",
            // left: 0,
            zIndex: 999,
            transitionDuration: '1s'
          }}
        >
          <motion.ul
            className="flex flex-wrap w-[100%] "
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <motion.li>
              <div className="relative item">
                <Link href="#Home">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="71"
                    height="74"
                    viewBox="0 0 46 44"
                    fill="none"
                  >
                    <path
                      d="M20.9886 31.7934V24.2882H26.4233V31.7934C26.4233 32.619 27.0347 33.2945 27.782 33.2945H31.8581C32.6053 33.2945 33.2168 32.619 33.2168 31.7934V21.2861H35.5265C36.1515 21.2861 36.4504 20.4305 35.9749 19.9802L24.6163 8.67726C24.1 8.16691 23.3119 8.16691 22.7956 8.67726L11.437 19.9802C10.9751 20.4305 11.2604 21.2861 11.8854 21.2861H14.1952V31.7934C14.1952 32.619 14.8066 33.2945 15.5539 33.2945H19.6299C20.3772 33.2945 20.9886 32.619 20.9886 31.7934Z"
                      fill="#F8F8F8"
                      fillOpacity="0.9"
                    />
                  </svg>
                </Link>
              </div>
            </motion.li>
            <li>
              <div className="relative ">
                <Link href="#About">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="71"
                    height="74"
                    viewBox="0 0 71 74"
                    fill="none"
                  >
                    <path
                      d="M37.541 33.75H35.041V31.25H37.541M37.541 43.75H35.041V36.25H37.541M36.291 25C34.6495 25 33.024 25.3233 31.5075 25.9515C29.9909 26.5797 28.6129 27.5004 27.4522 28.6612C25.108 31.0054 23.791 34.1848 23.791 37.5C23.791 40.8152 25.108 43.9946 27.4522 46.3388C28.6129 47.4996 29.9909 48.4203 31.5075 49.0485C33.024 49.6767 34.6495 50 36.291 50C39.6062 50 42.7856 48.683 45.1299 46.3388C47.4741 43.9946 48.791 40.8152 48.791 37.5C48.791 35.8585 48.4677 34.233 47.8395 32.7165C47.2113 31.1999 46.2906 29.8219 45.1299 28.6612C43.9691 27.5004 42.5911 26.5797 41.0746 25.9515C39.558 25.3233 37.9325 25 36.291 25Z"
                      fill="#F8F8F8"
                      fillOpacity="0.9"
                    />
                  </svg>
                </Link>
              </div>
            </li>
            <motion.li>
              <div className="relative ">
                <Link href="#Members">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="77"
                    height="78"
                    viewBox="0 0 77 78"
                    fill="none"
                  >
                    <path
                      d="M39.291 27C38.8225 27 38.3585 27.1077 37.9257 27.317C37.4928 27.5262 37.0995 27.833 36.7682 28.2197C36.4369 28.6063 36.174 29.0654 35.9947 29.5706C35.8154 30.0758 35.7232 30.6173 35.7232 31.1642C35.7232 31.711 35.8154 32.2525 35.9947 32.7577C36.174 33.2629 36.4369 33.722 36.7682 34.1087C37.0995 34.4953 37.4928 34.8021 37.9257 35.0113C38.3585 35.2206 38.8225 35.3283 39.291 35.3283C40.2373 35.3283 41.1448 34.8896 41.8139 34.1087C42.483 33.3277 42.8589 32.2686 42.8589 31.1642C42.8589 30.0598 42.483 29.0006 41.8139 28.2197C41.1448 27.4387 40.2373 27 39.291 27ZM47.3267 29.08C46.6163 29.08 45.935 29.4094 45.4327 29.9957C44.9304 30.5819 44.6482 31.3771 44.6482 32.2062C44.6482 33.0354 44.9304 33.8305 45.4327 34.4168C45.935 35.0031 46.6163 35.3325 47.3267 35.3325C48.0371 35.3325 48.7184 35.0031 49.2208 34.4168C49.7231 33.8305 50.0053 33.0354 50.0053 32.2062C50.0053 31.3771 49.7231 30.5819 49.2208 29.9957C48.7184 29.4094 48.0371 29.08 47.3267 29.08ZM31.2553 29.08C30.5449 29.08 29.8636 29.4094 29.3613 29.9957C28.8589 30.5819 28.5767 31.3771 28.5767 32.2062C28.5767 33.0354 28.8589 33.8305 29.3613 34.4168C29.8636 35.0031 30.5449 35.3325 31.2553 35.3325C31.9657 35.3325 32.647 35.0031 33.1493 34.4168C33.6517 33.8305 33.9339 33.0354 33.9339 32.2062C33.9339 31.3771 33.6517 30.5819 33.1493 29.9957C32.647 29.4094 31.9657 29.08 31.2553 29.08ZM33.9339 39.4862C33.9372 38.936 34.1268 38.4096 34.4613 38.0219C34.7958 37.6342 35.2481 37.4166 35.7196 37.4167H42.8624C43.336 37.4167 43.7902 37.6362 44.1251 38.0271C44.46 38.418 44.6482 38.9481 44.6482 39.5008V45.7533C44.648 46.4092 44.5601 47.0611 44.3874 47.6853C43.992 49.0999 43.1775 50.3035 42.0901 51.0802C41.0028 51.8569 39.7138 52.1557 38.4546 51.923C37.1955 51.6903 36.0487 50.9413 35.2201 49.8105C34.3915 48.6797 33.9355 47.2412 33.9339 45.7533V39.4862ZM32.1482 39.5008C32.1482 38.7401 32.3214 38.0294 32.6267 37.4167H28.5767C28.1031 37.4167 27.6489 37.6362 27.314 38.0271C26.9792 38.418 26.791 38.9481 26.791 39.5008V44.7112C26.7908 45.5643 26.97 46.4044 27.3129 47.1577C27.6559 47.911 28.152 48.5546 28.7579 49.0318C29.3637 49.509 30.0607 49.8053 30.7875 49.8947C31.5144 49.9841 32.249 49.8638 32.9267 49.5444C32.4128 48.3701 32.1459 47.0698 32.1482 45.7512V39.5008ZM46.4339 39.5008V45.7533C46.4339 47.1184 46.1535 48.4065 45.6553 49.5444C46.333 49.8638 47.0676 49.9841 47.7945 49.8947C48.5214 49.8053 49.2183 49.509 49.8242 49.0318C50.43 48.5546 50.9262 47.911 51.2691 47.1577C51.612 46.4044 51.7913 45.5643 51.791 44.7112V39.5008C51.791 38.9481 51.6029 38.418 51.268 38.0271C50.9331 37.6362 50.4789 37.4167 50.0053 37.4167H45.9553C46.2589 38.0294 46.4339 38.7401 46.4339 39.5008Z"
                      fill="#F8F8F8"
                      fillOpacity="0.9"
                    />
                  </svg>
                </Link>
              </div>
            </motion.li>
            <motion.li>
              <div className="relative ">
                <Link href="#Achievements">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="88"
                    height="88"
                    viewBox="0 0 88 88"
                    fill="none"
                  >
                    <path
                      d="M51.791 31.5C50.666 31.5 49.291 32.75 49.291 34H39.291C39.291 32.75 37.916 31.5 36.791 31.5H31.791V42.75C31.791 44 33.041 45.25 34.291 45.25H37.041C37.541 47.75 39.166 49.875 43.041 50.25V52.85C39.291 53.425 39.291 56.5 39.291 56.5H49.291C49.291 56.5 49.291 53.425 45.541 52.85V50.25C49.416 49.875 51.041 47.75 51.541 45.25H54.291C55.541 45.25 56.791 44 56.791 42.75V31.5H51.791ZM36.791 42.75H34.291V34H36.791V42.75ZM54.291 42.75H51.791V34H54.291V42.75Z"
                      fill="#F8F8F8"
                      fillOpacity="0.9"
                    />
                  </svg>
                </Link>
              </div>
            </motion.li>
            <motion.li>
              <div className="relative ">
                <Link href="#Events">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="83"
                    height="80"
                    viewBox="0 0 83 80"
                    fill="none"
                  >
                    <path
                      d="M45.7632 47.5C44.791 47.5 43.9693 47.1979 43.298 46.5937C42.6267 45.9896 42.291 45.25 42.291 44.375C42.291 43.5 42.6267 42.7604 43.298 42.1562C43.9693 41.5521 44.791 41.25 45.7632 41.25C46.7355 41.25 47.5572 41.5521 48.2285 42.1562C48.8998 42.7604 49.2355 43.5 49.2355 44.375C49.2355 45.25 48.8998 45.9896 48.2285 46.5937C47.5572 47.1979 46.7355 47.5 45.7632 47.5ZM32.5688 52.5C31.8049 52.5 31.1507 52.255 30.6063 51.765C30.0619 51.275 29.7901 50.6867 29.791 50V32.5C29.791 31.8125 30.0632 31.2237 30.6077 30.7337C31.1521 30.2437 31.8058 29.9992 32.5688 30H33.9577V27.5H36.7355V30H47.8466V27.5H50.6243V30H52.0132C52.7771 30 53.4313 30.245 53.9757 30.735C54.5202 31.225 54.7919 31.8133 54.791 32.5V50C54.791 50.6875 54.5188 51.2762 53.9743 51.7662C53.4299 52.2562 52.7762 52.5008 52.0132 52.5H32.5688ZM32.5688 50H52.0132V37.5H32.5688V50Z"
                      fill="#F8F8F8"
                      fillOpacity="0.9"
                    />
                  </svg>
                </Link>
              </div>
            </motion.li>
            <motion.li>
              <div className="relative ">
                <Link href="#Alumni">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="82"
                    height="78"
                    viewBox="0 0 82 78"
                    fill="none"
                  >
                    <path
                      d="M41.291 26C39.6334 26 38.0437 26.5268 36.8716 27.4645C35.6995 28.4021 35.041 29.6739 35.041 31C35.041 32.3261 35.6995 33.5979 36.8716 34.5355C38.0437 35.4732 39.6334 36 41.291 36C42.9486 36 44.5383 35.4732 45.7104 34.5355C46.8825 33.5979 47.541 32.3261 47.541 31C47.541 29.6739 46.8825 28.4021 45.7104 27.4645C44.5383 26.5268 42.9486 26 41.291 26ZM49.1035 38.5H33.4785C32.2353 38.5 31.043 38.8951 30.164 39.5983C29.2849 40.3016 28.791 41.2554 28.791 42.25C28.791 45.04 30.2254 47.275 32.5785 48.7875C34.8941 50.275 38.0004 51 41.291 51C44.5816 51 47.6879 50.275 50.0035 48.7875C52.3535 47.275 53.791 45.04 53.791 42.25C53.791 41.2554 53.2972 40.3016 52.4181 39.5983C51.539 38.8951 50.3467 38.5 49.1035 38.5Z"
                      fill="#F8F8F8"
                      fillOpacity="0.9"
                    />
                  </svg>
                </Link>
              </div>
            </motion.li>
            <motion.li>
              <div className="relative ">
                <Link href="#Projects">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="86"
                    height="84"
                    viewBox="0 0 86 84"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M46.416 52.6557L33.916 48.7497V36.2503L46.416 32.3443V52.6557ZM32.0723 50.7121C31.6928 50.5933 31.3686 50.3931 31.1406 50.1364C30.9126 49.8798 30.791 49.5783 30.791 49.27V35.73C30.791 35.4217 30.9126 35.1202 31.1406 34.8636C31.3686 34.6069 31.6928 34.4067 32.0723 34.2879L45.2139 30.1803C45.6889 30.0319 46.2054 29.9737 46.7175 30.0109C47.2297 30.0482 47.7216 30.1797 48.1497 30.3938C48.5778 30.6078 48.9288 30.8979 49.1715 31.2382C49.4142 31.5784 49.5412 31.9584 49.541 32.3443V33.1255H52.1452C54.1577 33.1255 55.791 34.3489 55.791 35.8597V49.1403C55.791 49.8654 55.4069 50.5609 54.7232 51.0737C54.0394 51.5864 53.1121 51.8745 52.1452 51.8745H49.541V52.6557C49.5412 53.0416 49.4142 53.4216 49.1715 53.7618C48.9288 54.1021 48.5778 54.3922 48.1497 54.6062C47.7216 54.8203 47.2297 54.9518 46.7175 54.9891C46.2054 55.0263 45.6889 54.9681 45.2139 54.8197L32.0723 50.7121ZM49.541 49.5309H52.1452C52.2833 49.5309 52.4158 49.4897 52.5135 49.4165C52.6111 49.3432 52.666 49.2439 52.666 49.1403V35.8597C52.666 35.7561 52.6111 35.6568 52.5135 35.5835C52.4158 35.5103 52.2833 35.4691 52.1452 35.4691H49.541V49.5309Z"
                      fill="#F8F8F8"
                      fillOpacity="0.9"
                    />
                  </svg>
                </Link>
              </div>
            </motion.li>
            <motion.li>
              <div className="relative ">
                <Link href="#Gallery">
                  <svg
                    fill="none"
                    height="78"
                    viewBox="0 0 76 78"
                    width="76"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M45.2679 34.3488C45.2679 34.9656 45.0228 35.5571 44.5867 35.9932C44.1506 36.4293 43.5591 36.6744 42.9423 36.6744C42.3255 36.6744 41.734 36.4293 41.2978 35.9932C40.8617 35.5571 40.6167 34.9656 40.6167 34.3488C40.6167 33.732 40.8617 33.1405 41.2978 32.7043C41.734 32.2682 42.3255 32.0232 42.9423 32.0232C43.5591 32.0232 44.1506 32.2682 44.5867 32.7043C45.0228 33.1405 45.2679 33.732 45.2679 34.3488Z"
                      fill="#F8F8F8"
                      fillOpacity="0.9"
                    />
                    <path
                      clipRule="evenodd"
                      d="M38.2247 26.5H38.3573C41.0422 26.5 43.1457 26.5 44.7875 26.7209C46.4666 26.9465 47.7922 27.4186 48.8329 28.4581C49.8736 29.4988 50.3445 30.8244 50.5701 32.5047C50.791 34.1453 50.791 36.2488 50.791 38.9337V39.036C50.791 41.2558 50.791 43.0721 50.6701 44.5512C50.5492 46.0395 50.3015 47.2802 49.7457 48.3128C49.5015 48.7674 49.1992 49.1756 48.8329 49.5419C47.7922 50.5826 46.4666 51.0535 44.7864 51.2791C43.1457 51.5 41.0422 51.5 38.3573 51.5H38.2247C35.5399 51.5 33.4364 51.5 31.7945 51.2791C30.1154 51.0535 28.7899 50.5814 27.7492 49.5419C26.8271 48.6198 26.3503 47.4721 26.098 46.0465C25.848 44.6477 25.8026 42.907 25.7933 40.7465C25.791 40.1965 25.791 39.6151 25.791 39.0012V38.9337C25.791 36.2488 25.791 34.1453 26.0119 32.5035C26.2375 30.8244 26.7096 29.4988 27.7492 28.4581C28.7899 27.4174 30.1154 26.9465 31.7957 26.7209C33.4364 26.5 35.5399 26.5 38.2247 26.5ZM32.0271 28.4488C30.541 28.6488 29.6445 29.0302 28.9829 29.6919C28.3201 30.3547 27.9399 31.25 27.7399 32.7372C27.5375 34.2488 27.5352 36.2349 27.5352 39V39.9814L28.6992 38.9616C29.2098 38.5149 29.8713 38.2789 30.5494 38.3016C31.2276 38.3243 31.8718 38.6038 32.3515 39.0837L37.3399 44.0721C37.727 44.4591 38.2382 44.6972 38.7835 44.7444C39.3289 44.7916 39.8734 44.645 40.3212 44.3302L40.6678 44.086C41.3139 43.632 42.095 43.4107 42.8833 43.4582C43.6715 43.5057 44.4204 43.8193 45.0073 44.3477L48.298 47.3093C48.6306 46.614 48.8271 45.7 48.9317 44.4105C49.0457 43.0093 49.0468 41.2628 49.0468 39C49.0468 36.2349 49.0445 34.2488 48.8422 32.7372C48.6422 31.25 48.2608 30.3535 47.5992 29.6907C46.9364 29.0291 46.041 28.6488 44.5538 28.4488C43.0422 28.2465 41.0561 28.2442 38.291 28.2442C35.5259 28.2442 33.5387 28.2465 32.0271 28.4488Z"
                      fill="#F8F8F8"
                      fillOpacity="0.9"
                      fillRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </motion.li>
            <li>
              <div className="relative ">
                <Link href="#Contacts">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="74"
                    height="78"
                    viewBox="0 0 74 78"
                    fill="none"
                  >
                    <path
                      d="M47.3415 43.5483L43.8066 43.1447C43.391 43.0959 42.9697 43.1419 42.5744 43.2793C42.179 43.4167 41.82 43.6419 41.5242 43.938L38.9635 46.4987C35.0128 44.4894 31.8016 41.2782 29.7923 37.3274L32.3669 34.7528C32.9653 34.1543 33.2576 33.3193 33.1602 32.4704L32.7566 28.9633C32.6777 28.2844 32.3519 27.6582 31.8412 27.204C31.3305 26.7498 30.6706 26.4992 29.9871 26.5H27.5795C26.0069 26.5 24.6987 27.8082 24.7961 29.3808C25.5337 41.2659 35.039 50.7573 46.9101 51.4949C48.4827 51.5923 49.7909 50.2841 49.7909 48.7115V46.3039C49.8048 44.8982 48.7471 43.7153 47.3415 43.5483Z"
                      fill="#F8F8F8"
                      fillOpacity="0.9"
                    />
                  </svg>{" "}
                </Link>
              </div>
            </li>
          </motion.ul>
        </motion.div>
      )}
      <AnimatePresence>
        {isMobile && (
          <div
            className={`flex bg-slate-600 fixed top-0 ${isNav ? 'left-0' : 'left-[-75%]'} duration-500 h-full flex-row w-[75%] z-50`}

            // cx={500}
            // animate={{ scale: [0, 1, 1] }}
            // exit={{ scale: 0, transition: { duration: 0.4, times: [0, 1, 1] } }}
            // transition={{ duration: 3, times: [0, 0.2, 1] }}
            // style={{
            //   width: "75%",
            //   alignItems: "center",
            //   justifyContent: "space-evenly",
            //   borderRadius: "50px",
            //   border: "3px solid #545454",
            // }}
          >
            <Minimize onClick={()=>setNav(!isNav)} className="right-10 top-10 absolute"/>
            <ul
              className="flex flex-wrap w-[100%] flex-col justify-end gap-7 pb-[10vh] pl-10 text-2xl"
            >
              <li>
                <div className="relative item">
                  <Link
                  className=" flex items-center gap-5"
                    href="#Home"
                    onClick={() => {
                      setNav(!isNav);
                    }}
                  >
                    
                    <BsHouseFill />
                    Home
                  </Link>
                </div>
              </li>
              <li>
                <div className="relative ">
                  <Link
                  className=" flex items-center gap-5"
                    href="#About"
                    onClick={() => {
                      setNav(!isNav);
                    }}
                  >
                    <BsInfoCircleFill/>
                    About Us
                  </Link>
                </div>
              </li>
              <li>
                <div className="relative ">
                  <Link
                  className=" flex items-center gap-5"
                    href="#Members"
                    onClick={() => {
                      setNav(!isNav);
                    }}
                  >
                    <BsPeopleFill/>
                    Members
                  </Link>
                </div>
              </li>
              <li>
                <div className="relative ">
                  <Link
                  className=" flex items-center gap-5"
                    href="#Achievements"
                    onClick={() => {
                      setNav(!isNav);
                    }}
                  >
                    <BsTrophyFill/>
                    Achivements
                  </Link>
                </div>
              </li>
              <li>
                <div className="relative ">
                  <Link
                  className=" flex items-center gap-5"
                    href="#Events"
                    onClick={() => {
                      setNav(!isNav);
                    }}
                  >
                    <BsCalendarFill/>
                    Events
                  </Link>
                </div>
              </li>
              <li>
                <div className="relative ">
                  <Link
                  className=" flex items-center gap-5"
                    href="#Alumni"
                    onClick={() => {
                      setNav(!isNav);
                    }}
                  >
                    <BsPersonFill/>
                    Members
                  </Link>
                </div>
              </li>
              <li>
                <div className="relative ">
                  <Link
                  className=" flex items-center gap-5"
                    href="#Projects"
                    onClick={() => {
                      setNav(!isNav);
                    }}
                  >
                    <BsSliders2/>
                    Projects
                  </Link>
                </div>
              </li>
              <li>
                <div className="relative ">
                  <Link
                  className=" flex items-center gap-5"
                    href="#Gallery"
                    onClick={() => {
                      setNav(!isNav);
                    }}
                  >
                    <BsImageFill/>
                    Gallery
                  </Link>
                </div>
              </li>
              <li>
                <div className="relative ">
                  <Link
                  className=" flex items-center gap-5"
                    href="#Contacts"
                    onClick={() => {
                      setNav(!isNav);
                    }}
                  >
                    <BsPhoneFill/>
                    Contact
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        )}
      </AnimatePresence>

      {/* )} */}
    </>
  );
}
