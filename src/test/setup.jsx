import "@testing-library/jest-dom";

vi.mock("framer-motion", () => {
  const passthrough = (el) => ({ children, ...props }) => {
    const { initial, animate, exit, transition, whileHover, whileTap, layout, ...rest } = props;
    const Tag = el;
    return <Tag {...rest}>{children}</Tag>;
  };
  return {
    motion: {
      div: passthrough("div"),
      tr: passthrough("tr"),
      td: passthrough("td"),
      button: passthrough("button"),
      span: passthrough("span"),
      p: passthrough("p"),
      svg: passthrough("svg"),
      path: passthrough("path"),
    },
    AnimatePresence: ({ children }) => <>{children}</>,
    useScroll: () => ({ scrollYProgress: { onChange: () => {} } }),
    useSpring: (v) => v,
    useTransform: (v) => v,
    useMotionValue: (v) => ({ get: () => v, set: () => {} }),
  };
});
