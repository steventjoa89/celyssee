import React from "react";
import { FOOTER_MENU, SOCIAL_MEDIA_ICONS } from "../../data/settings";
import { Link } from "react-router-dom";
import Accordion from "../Accordion/Accordion";

function FooterLogo({ isHideTop = false, isHideBottom = false }) {
  return (
    <div className="flex-grow">
      {/* Logo */}
      {isHideTop === true ? (
        <></>
      ) : (
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <span className="font-title font-black text-xl tracking-widest">
            CELYSSEE
          </span>
        </div>
      )}

      {/* Social Media Icons */}
      {isHideBottom ? (
        <></>
      ) : (
        <>
          <ul className="my-4 lg:my-8 flex flex-row items-center justify-center space-x-3">
            {SOCIAL_MEDIA_ICONS.map((item, key) => (
              <li
                key={key}
                className="text-gray-400 hover:text-black cursor-pointer"
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 text-left">
              Copyright &copy; 2024, CELYSSEE
            </span>
            <span className="text-xs text-gray-400 text-left">
              All Right Reserved
            </span>
          </div>
        </>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="bg-white mb-10 px-6 lg:px-12 pt-3 lg:pt-10 border-t border-gray-200">
        <div className="mx-auto">
          {/* Small Screen */}
          <div className="lg:hidden">
            <div className="flex flex-col items-center justify-center">
              <div className="mb-3">
                <FooterLogo isHideBottom={true} />
              </div>

              {FOOTER_MENU.map((item, key) => (
                <Accordion
                  key={key}
                  title={item.title}
                  isShowBottomBorder={true}
                >
                  <div className="px-4 pb-2 text-left">
                    <ul className="space-y-3 text-xs">
                      {item.submenus.map((item2, key2) => (
                        <li key={key2}>
                          {item2.outside ? (
                            // Outside Link
                            <a
                              href={item2.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item2.name}
                            </a>
                          ) : (
                            // React Link
                            <Link to={item2.link}>{item2.name}</Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Accordion>
              ))}

              <div className="mt-3">
                <FooterLogo isHideTop={true} />
              </div>
            </div>
          </div>

          {/* Large Screen */}
          <div className="hidden lg:flex">
            <div className="w-1/4 flex flex-col items-start justify-start">
              <FooterLogo />
            </div>

            <div className="w-3/4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {FOOTER_MENU.map((item, key) => (
                  <div
                    key={key}
                    className="flex flex-col items-start justify-start"
                  >
                    <span className="text-sm text-black uppercase font-bold">
                      {item.title}
                    </span>
                    <ul className="mt-4 space-y-3 text-xs text-gray-600 uppercase text-left">
                      {item.submenus.map((item2, key2) => (
                        <li key={key2}>
                          {item2.outside ? (
                            // Outside Link
                            <a
                              href={item2.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item2.name}
                            </a>
                          ) : (
                            // React Link
                            <Link to={item2.link}>{item2.name}</Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
