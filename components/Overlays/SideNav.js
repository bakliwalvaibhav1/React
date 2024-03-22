import { motion } from "framer-motion";
import Modal from "../UI/Overlay/Modal";
import { NavLinks } from "@/utils/NavLinks";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/public/SVG/svg";

const sidebar = {
  open: (width = 1000) => ({
    clipPath: `circle(${width * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const SideNav = ({ onReset }) => {
  const linkClickHandler = (href) => {
    if (["#About", "#Skills", "#Work", "#Journey", "#Connect"].includes(href)) {
      window.location.href = href;
    } else {
      window.open(href, "_blank");
    }
    onReset();
  };

  return (
    <Modal variants={sidebar} reset={onReset} modal="top-0 left-0 bg-black text-white w-full h-full font-primaryFont flex flex-col justify-center p-4 md:w-1/2 lg:w-1/3">
      <header className=" relative">
        <h4 className="relative text-lg ">Resources</h4>
        <hr className="border border-white w-full" />
        <motion.div
          className="content-[''] bg-white h-full  absolute w-full bottom-0 left-0 right-0 top-0 "
          variants={{
            open: {
              width: 0,
              transition: {
                delay: 0.3,
              },
            },
            closed: {
              width: "100%",
            },
          }}
        />
      </header>

      <motion.nav
        //To prevent this part from sidebar-animating.
        variants={{
          closed: {},
          open: {},
        }}
        className="overflow-hidden font-extrabold space-y-10 my-6 text-3xl md:text-4xl"
      >
        {NavLinks.map((links) => (
          <motion.div
            variants={{
              open: {
                opacity: 1,
                rotateX: 0,
                translateY: 0,
                transition: {
                  duration: 0.65,
                  ease: [0.215, 0.61, 0.355, 1],
                  opacity: { duration: 0.35 },
                },
              },
              closed: {
                opacity: 0,
                rotateX: 90,
                translateY: 80,
              },
            }}
            initial="closed"
            animate="open"
            exit="closed"
            key={links.id}
          >
            <a onClick={() => linkClickHandler(links.links)}>{links.name}</a>
          </motion.div>
        ))}
      </motion.nav>

      <footer className="flex flex-col gap-2 items-center justify-start w-full relative">
        <hr className="border-2 border-b-white w-full" />
        <div className="flex gap-10">
          <a onClick={() => linkClickHandler("https://github.com/bakliwalvaibhav1")}>
            <GitHubIcon className="h-8 w-8 fill-white" />
          </a>
          <a onClick={() => linkClickHandler("#Connect")}>
            <MailIcon className="h-8 w-8" />
          </a>
          <a onClick={() => linkClickHandler("https://www.linkedin.com/in/vaibhavbakliwal/")}>
            <LinkedInIcon className="h-8 w-8 fill-white" />
          </a>
        </div>
        <motion.div
          className="content-[''] bg-white h-full"
          variants={{
            open: {
              width: 0,
              transition: {
                delay: 0.3,
              },
            },
            closed: {
              width: "100%",
            },
          }}
        />
      </footer>
    </Modal>
  );
};

export default SideNav;
