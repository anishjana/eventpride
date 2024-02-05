// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import "typeface-nunito"
import "typeface-alegreya"

//gsap plugin

import { gsap } from "gsap"

import { CustomEase } from "gsap/CustomEase"
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack"

import { Flip } from "gsap/Flip"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Observer } from "gsap/Observer"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Draggable } from "gsap/Draggable"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { EaselPlugin } from "gsap/EaselPlugin"
import { TextPlugin } from "gsap/TextPlugin"

gsap.registerPlugin(
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable,
  MotionPathPlugin,
  EaselPlugin,
  TextPlugin,
  RoughEase,
  ExpoScaleEase,
  SlowMo,
  CustomEase
)
// eslint-disable-next-line
gsap.registerPlugin(SplitText)
