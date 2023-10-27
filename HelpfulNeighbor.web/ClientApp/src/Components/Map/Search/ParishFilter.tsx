import React from "react";
import {
  Button,
  Checkbox,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { IoIosArrowDown } from 'react-icons/io';

interface ParishFilterProps {
  onFilterChange: (filterName: string, filterValue: boolean) => void;
}

const ParishFilter: React.FC<ParishFilterProps> = ({ onFilterChange }) => {
  const parishList = [
    "Acadia",
    "Ascension",
    "Caldwell",
    "Caddo",
    "Calcasieu",
    "East Baton Rouge",
    "Iberia",
    "Jefferson Davis",
    "Lafayette",
    "Lafourche",
    "Lincoln",
    "Livingston",
    "Madison",
    "Morehouse",
    "Natchitoches",
    "Orleans",
    "Ouachita",
    "Rapides",
    "St. Bernard",
    "St. Landry",
    "St. John the Baptist",
    "St. Landry & Acadia",
    "St. Mary",
    "St. Martin",
    "St. Tammany",
    "Tangipahoa",
    "Terrebonne",
    "Vermilion",
    "Vernon",
    "Washington",
    "Webster",
    "Winn",
  ];

  const handleCheckboxChange = (filterName: string, filterValue: boolean) => {
    onFilterChange(filterName, filterValue);
  };

    const searchFilterStyle: React.CSSProperties = {
        position: 'absolute',
        top: '3%',
        left: '34%',
    };

  return (
    <div>
      <div style={searchFilterStyle}>
        <Popover>
          <PopoverTrigger>
            <Button
              rightIcon={<IoIosArrowDown />}
              colorScheme="purple"
              borderRadius="xl"
            >
              Parish
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Filter by Parish</PopoverHeader>
            <PopoverBody>
            <Wrap>
                {parishList.map((type) => (
                  <WrapItem key={type}>
                    <Checkbox
                      onChange={(e) => handleCheckboxChange(type, e.target.checked)}
                    >
                      {type}
                    </Checkbox>
                  </WrapItem>
                ))}
              </Wrap>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default ParishFilter;
