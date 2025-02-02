import { mode, Styles } from "@chakra-ui/theme-tools"

const styles: Styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: "red",
      bg: "red",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
  }),
}

export default styles
