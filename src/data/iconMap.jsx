// iconMap.js - Final verified version
import {
  FaDumbbell,
  FaTableTennis,
  FaTheaterMasks,
  FaLeaf,
  FaChess,
  FaShieldAlt,
  FaBolt,
  FaSwimmingPool,
  FaParking,
  FaWalking,
  FaBasketballBall,
  FaChair,
  FaPagelines,
  FaUserFriends,
  FaFire,
  FaStore,
  FaDoorOpen,
  FaSchool,
  FaArchway,
  FaBuilding,
  FaToilet,
  FaChild,
  FaVideo,
  FaTint,
  FaTree,
  FaFireExtinguisher,
  FaUtensils,
  FaBath,
  FaHome,
  FaWater,
  FaBook,
  FaPhoneAlt,
  FaCar,
  FaRunning,
  FaSpa,
} from "react-icons/fa";

import { FaCompassDrafting } from "react-icons/fa6";

import {
  MdElevator,
  MdOutlineChildCare,
  MdBorderAll,
  MdWater,
  MdDirectionsWalk,
} from "react-icons/md";

export const iconMap = {
  // ── Core / pre-existing ──────────────────────────────
  FaDumbbell,
  FaTableTennis,
  FaTheaterMasks,
  FaLeaf,
  FaChess,
  FaShieldAlt,
  FaBolt,
  FaSwimmingPool,
  FaParking,
  FaWalking,
  MdElevator,
  MdOutlineChildCare,
  FaHome,
  FaWater,
  FaBook,
  FaPhoneAlt,
  FaCar,
  FaRunning,
  FaSpa,

  // ── Emperors amenity icons ───────────────────────────
  FaBasketballBall, // Multipurpose Court
  FaChair, // Mother's Hangout Sitting
  FaPagelines, // Gazebo
  FaUserFriends, // Senior Citizen Sit-Outs
  FaFire, // Pantry & Barbecue Station
  FaStore, // Society Store
  FaDoorOpen, // Entrance Gate
  FaSchool, // Children Drop-Off Zone
  FaArchway, // Entrance Foyer
  FaBuilding, // Society Office
  FaToilet, // Common Toilet
  FaChild, // Swing Area
  FaVideo, // Open Air Projector Wall / CCTV

  // ── Atlantis / Alteza / other project icons ──────────
  FaTint, // 24×7 Water Supply
  FaTree, // Party Lawn & Paver Lawn
  FaCompassDrafting, // Vastu-Compliant Layouts (Alteza)

  // ── Mangaldeep amenity icons ─────────────────────────
  FaFireExtinguisher, // Fire Safety System
  FaUtensils, // Granite Kitchen Platform
  FaBath, // Premium Sanitary Fittings

  // ── Icons referenced by string but not in fa — safely aliased ──
  FaPersonWalking: MdDirectionsWalk, // Yoga Deck
  FaBorderAll: MdBorderAll, // Vitrified Tile Flooring
  FaElevator: MdElevator, // 2 Automatic Lifts
  FaWater: MdWater, // Underground / Overhead Water Tank

  // ── Md extras ────────────────────────────────────────
  MdBorderAll,
  MdWater,
  MdDirectionsWalk,
};
