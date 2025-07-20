

export const fadeMotion = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    transition: {
        duration: 0.5
    },
}

export const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -25,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    delay: 0.6,
    duration: 0.3,
    ease: 'easeOut',
  }
}