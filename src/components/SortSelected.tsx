import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export interface SortOrder {
  value: string;
  label: string;
}

export interface Props {
  onSelectSortOrder: (sortOrder: SortOrder) => void;
  selectedSortOrder: SortOrder | null;
}

const SortSelected = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-released", label: "Release Date" },
    { value: "rating", label: "Average Rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {selectedSortOrder ? selectedSortOrder.label : "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => onSelectSortOrder(sortOrder)}
            key={sortOrder.value}
            value={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelected;
