/* FILE: src/data/services.js */
import residentialImage from "../assets/images/services/residential_result.webp";
import corporateImage from "../assets/images/services/corporate_result.webp";
import hospitalityImage from "../assets/images/services/hospitality_interior_result.webp";
import retailImage from "../assets/images/services/luxury_retail_result.webp";
import kitchenImage from "../assets/images/services/moder_kitchen_result.webp";
import furnitureImage from "../assets/images/services/custom_fur_light_result.webp";
import fitoutImage from "../assets/images/services/fit_out_detail_result.webp";

export const services = [
  {
    id: 1,
    icon: "MdOutlineWeekend",
    title: "Residential Interior Design",
    shortDesc: "Complete spatial transformation for custom estate homes and luxury apartments.",
    description: "Our residential interior design services cover every aspect of creating bespoke living environments. We coordinate closely with homeowners to ensure their private sanctuaries are tailored to their lifestyles while showcasing pure architectural elegance.",
    inclusions: [
      "Bespoke layout configuration & space planning",
      "Custom woodwork & built-in design",
      "Material, texture & color coordination",
      "Designer lighting & decorative layouts",
      "Premium furniture sourcing & staging"
    ],
    image: residentialImage
  },
  {
    id: 2,
    icon: "MdCorporateFare",
    title: "Corporate Office Design",
    shortDesc: "Executive workplaces designed to project brand prestige and optimize performance.",
    description: "We shape workspace environments that embody corporate identity and stimulate performance. Velora builds executive office suites, boardrooms, and open work grids designed with advanced acoustic isolation and lighting profiles.",
    inclusions: [
      "Brand-aligned entrance lobby design",
      "Confidential executive boardroom planning",
      "Acoustic wall systems & noise insulation",
      "Ergonomic furniture packages",
      "Intelligent smart-office system integration"
    ],
    image: corporateImage
  },
  {
    id: 3,
    icon: "MdHotel",
    title: "Hospitality Interior Design",
    shortDesc: "Captivating and durable environments for boutique hotels, lounges, and resorts.",
    description: "Creating premium hospitality experiences requires evoking a deep sense of escape and luxury. We design lobbies, bars, and hotel suites that marry local cultural nuances with standard luxury guest comforts, ensuring high traffic durability.",
    inclusions: [
      "Grand fireplace & lobby reception designs",
      "Custom hospitality lighting concepts",
      "Guest suite layouts & custom-upholstered beds",
      "Commercial fire-safety fabric procurement",
      "Lounge & dining space configurations"
    ],
    image: hospitalityImage
  },
  {
    id: 4,
    icon: "MdStorefront",
    title: "Luxury Retail Design",
    shortDesc: "High-end commercial boutiques built as experiential stages for brand storytelling.",
    description: "Retail stores should operate as three-dimensional stages for brand interaction. Velora utilizes dramatic highlighting, plush materials, and fluid path systems that lead customers through curated product narratives.",
    inclusions: [
      "Prestige window displays & threshold layouts",
      "Recessed champagne gold display wall bays",
      "Premium ambient & spotlighting arrays",
      "VIP client consultation lounge zones",
      "High-durability luxury floor textures"
    ],
    image: retailImage
  },
  {
    id: 5,
    icon: "MdSoupKitchen",
    title: "Modern Kitchen & Bath",
    shortDesc: "Sleek, integrated culinary spaces and spa-like bathroom retreats.",
    description: "The kitchen is the modern heart of the luxury residence. We design handleless, integrated kitchens with massive natural quartzite counter islands, paired with master bath wet rooms clad in bookmatched marble slab tiles.",
    inclusions: [
      "Handleless integrated walnut & lacquer cabinets",
      "Quartzite & marble waterfall island counters",
      "Premium hidden appliance installations",
      "Master suite open-concept wet rooms",
      "Recessed sanitary brassware fittings"
    ],
    image: kitchenImage
  },
  {
    id: 6,
    icon: "MdLightbulb",
    title: "Custom Furniture & Lighting",
    shortDesc: "Exclusive, single-run furniture pieces and architectural lighting schemes.",
    description: "To achieve true exclusivity, standard options are bypassed. We commission private single-run furniture designs (sofas, tables, cabinets) and install complex architectural lighting grids that define spatial atmospheres.",
    inclusions: [
      "Bespoke dining & boardroom table sculpting",
      "Single-run sofa & armchair manufacturing",
      "Recessed magnetic track lighting paths",
      "Statement chandelier sourcing & planning",
      "Handcrafted metal & glass element detailing"
    ],
    image: furnitureImage
  },
  {
    id: 7,
    icon: "MdArchitecture",
    title: "Fit-Out & Detailing",
    shortDesc: "Complete execution supervision, custom millwork, and turnkey handovers.",
    description: "Design is only as good as its construction execution. Velora coordinates full structural execution, wall paneling installation, and final styling, providing clients with a seamless turnkey transition.",
    inclusions: [
      "Full construction detailing & drawings",
      "Custom wall wood & stone cladding oversight",
      "Turnkey site management & styling",
      "Rigid quality control inspections",
      "Comprehensive digital material handovers"
    ],
    image: fitoutImage
  }
];
