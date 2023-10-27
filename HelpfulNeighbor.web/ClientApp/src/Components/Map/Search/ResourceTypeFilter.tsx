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
import { IoIosArrowDown } from "react-icons/io";

interface ResourceTypeFilterProps {
  onFilterChange: (filterName: string, filterValue: boolean) => void;
}

const ResourceTypeFilter: React.FC<ResourceTypeFilterProps> = ({ onFilterChange }) => {
  const resourceTypes = [
    "Affordable Housing",
    "Charity",
    "Clothing Donation Center",
    "Domestic Violence Help",
    "Food Bank / Distribution Center",
    "Government Help Organizations",
    "Group Housing",
    "Mental Health Treatment Center",
    "Social Service Organization",
    "Veteran Organization",
    "Homeless shelter",
  ];

  const handleCheckboxChange = (filterName: string, filterValue: boolean) => {
    onFilterChange(filterName, filterValue);
  };

  const searchFilterStyle: React.CSSProperties = {
    position: 'absolute',
    top: '3%',
    left: '20%',
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
              Resource
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Search by Resource</PopoverHeader>
            <PopoverBody>
              <Wrap spacing="4">
                {resourceTypes.map((type) => (
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
};

export default ResourceTypeFilter;
