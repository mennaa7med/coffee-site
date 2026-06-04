import { useEffect } from 'react'
import gsap from 'gsap'

function fadeUp(scope, selector, options = {}) {
  const elements = scope.querySelectorAll(selector)
  if (!elements.length) return null

  return gsap.fromTo(
    elements,
    { opacity: 0, y: options.y ?? 30 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration ?? 1,
      delay: options.delay ?? 0,
      stagger: options.stagger ?? 0,
      ease: 'power2.out',
    },
  )
}

function showElements(scope, selector) {
  const elements = scope.querySelectorAll(selector)
  if (!elements.length) return
  gsap.set(elements, { opacity: 1, y: 0, clearProps: 'transform' })
}

export function useHeroAnimation(homeRef) {
  useEffect(() => {
    const section = homeRef.current
    if (!section) return

    const tweens = []
    const ctx = gsap.context(() => {
      tweens.push(fadeUp(section, '.title', { delay: 0.2 }))
      tweens.push(fadeUp(section, '.description', { delay: 0.4 }))
      tweens.push(fadeUp(section, '.home__actions .btn', { delay: 0.6 }))
      tweens.push(fadeUp(section, '.image', { delay: 0.8 }))
    }, section)

    return () => {
      tweens.forEach((tween) => tween?.kill())
      ctx.revert()
      showElements(section, '.title, .description, .home__actions .btn, .image')
    }
  }, [homeRef])
}

export function useHeaderAnimation(headerRef) {
  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const tweens = []
    const ctx = gsap.context(() => {
      tweens.push(fadeUp(header, '.logo img', { delay: 0.1, y: 10 }))
      tweens.push(fadeUp(header, '.nav_item', { delay: 0.2, stagger: 0.12, y: 20 }))
    }, header)

    return () => {
      tweens.forEach((tween) => tween?.kill())
      ctx.revert()
      showElements(header, '.logo img, .nav_item')
    }
  }, [headerRef])
}
