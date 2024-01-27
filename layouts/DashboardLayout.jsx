import Navbar from "@components/navbar/Navbar";
import Sidebar from "@components/sidebars/Sidebar";
import useClickOutside from "@hooks/useClickOutside";
import { useRef, useState } from "react";
import styled from "styled-components";

const DashboardLayout = ({ children }) => {
  const [isopen, setIsOpen] = useState(false);

  const sideBarRef = useRef();
  const hamRef = useRef();
  const toggleSidebar = () => setIsOpen(false);

  useClickOutside(sideBarRef, hamRef, toggleSidebar, isopen);

  return (
    <DashboardLayoutStyles isopen={isopen}>
      <div className="parent">
        <div className="sidebar" ref={sideBarRef}>
          <div className="sidebar_main _auto_scroll_y">
            <Sidebar />
          </div>
        </div>
        <div className="main">
          <div className="navbar">
            <Navbar isopen={isopen} setIsOpen={setIsOpen} hamRef={hamRef} />
          </div>
          <hr className="_full_w" style={{ height: 1 }} />
          <div className="main_content _auto_scroll_y">{children}</div>
        </div>
      </div>
    </DashboardLayoutStyles>
  );
};

export default DashboardLayout;

const DashboardLayoutStyles = styled.div`
  &&& {
    --nav_height: 88px;
    --main_content_pad: 35px 50px 30px;

    position: fixed;
    inset: 0;
    background: #ffffff;
    padding: 0px;

    * {
      padding: 0;
      /* margin: 0; */
    }

    .parent {
      /* background: #00000018; */
      background: #ffffff;
      /*  */
      max-width: 100%;
      min-width: 100%;
      max-height: 100%;
      min-height: 100%;

      display: flex;
      gap: 5px;

      .sidebar {
        width: min(20%, 80px);
        min-width: 80px;
        max-width: 80px;

        display: flex;
        flex-direction: column;
        gap: 20px;
        border: 1px solid #e4e1e8;
        background: #fafafa;

        .sidebar_main {
          /* background: #fafafa; */
        }
      }

      .main {
        display: flex;
        flex-direction: column;
        flex: 1;
        background: #fafafa;
        padding: 0 20px;

        > * {
          max-width: 100%;
          min-width: 100%;
        }

        .navbar {
          min-height: var(--nav_height);
          max-height: var(--nav_height);

          max-width: 100%;
          min-width: 100%;
        }

        .main_content {
          flex: 1;
          background: var(--Background, #fafafa);                                                                                                                                                                                                                                                                                                                 
        }
      }

      @media screen and (max-width: 900px) {
        --main_content_pad: 30px;

        .sidebar {
          transition: all 0.3s ease-in;

          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          transform: ${({ isopen }) =>
            !isopen ? "translateX(-105%)" : "translateX(0%)"};
          max-width: 260px;
          min-width: 250px;

          z-index: 10;
        }
      }
    }
  }
`;
