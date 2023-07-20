"use clinet";

import Container from "@/Airbnb/app/components/Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBoatFishing,
  GiCastle,
  GiForestCamp,
  GiIsland,
  GiWindmill,
  GiCaveEntrance,
  GiCactus,
  GiBarn,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach.",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is close to the wndmills.",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside.",
  },
  {
    label: "Pool",
    icon: TbPool,
    description: "This property has a pool.",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island.",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is close to a lake.",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activities.",
  },
  {
    label: "Castle",
    icon: GiCastle,
    description: "This property is in a castle.",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();

  const isMainPage = pathName == "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
    pt-4
    flex
    flex-row
    items-center
    justify-between
    overflow-x-auto
    "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category == item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
