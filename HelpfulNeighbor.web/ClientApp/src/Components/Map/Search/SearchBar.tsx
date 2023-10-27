import { SearchIcon } from "@chakra-ui/icons";
import { Box, 
    IconButton, 
    Input, 
    InputGroup, 
    InputRightElement,  
    Stack, 
    Wrap, 
    WrapItem, 
} from "@chakra-ui/react";
import React, { useState } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
  }

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = () => {
        onSearch(searchQuery);
      };

    const searchBarStyle: React.CSSProperties = {
        position: 'absolute',
        top: '3%',
        left: '3%',
    };

    return (
        <Wrap spacing='30px'>
            <WrapItem>
                <div style={searchBarStyle}>
                    <Stack spacing={4}>
                        <Box bgColor="#FFFFFF" borderRadius='lg'>
                            <InputGroup>
                                <Input 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder='Search' 
                                variant='filled'
                                />
                                <InputRightElement>
                                    <IconButton 
                                    onClick={handleSearch}
                                    aria-label='Search database' 
                                    variant='ghost' 
                                    icon={<SearchIcon />} />
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                    </Stack>
                </div>
            </WrapItem>
        </Wrap>
    );
}
