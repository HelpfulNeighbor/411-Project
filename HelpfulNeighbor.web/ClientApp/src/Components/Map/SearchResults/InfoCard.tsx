import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Card,
    CardBody,
    Heading,
    Icon,
    IconButton,
    StackDivider,
    Text,
    VStack,
  } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { GoBookmark, GoBookmarkFill } from "react-icons/go";
import { FaClock } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRunning } from "react-icons/fa";
import { UserGetDto } from "../../../Data/Types/UserTypes";
import api from "../../../Api/config";
import { SavedResourceDto, createSavedResource, fetchSavedResources } from "../../../Data/Queries/SavedResourceQueries";
import { useAuth } from "../../../Authentication/AuthProvider";

  
  interface HoursOfOperation {
    DayOfWeek: string;
    OpenTime: string;
    CloseTime: string;
  }
  
  interface InfoCardProps {
    resourceId: number;
    Name: string;
    ResourceType: string;
    Address: string;
    hoursOfOperation?: HoursOfOperation[]; 
    Website: string;
    PhoneNumber: string;
    Latitude: number;
    Longitude: number;
    Distance: number;
  }
  
  export default function InfoCard(props: InfoCardProps) {
    const { token } = useAuth();
    const [user, setUser] = useState<UserGetDto | null>(null);
    const [savedResources, setSavedResources] = useState<SavedResourceDto[] | null>(null);
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
      const fetchUser = async () => {
        try {
          if (token) {
            const response = await api.get<UserGetDto>("/api/authentication/me", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            setUser(response.data);
          } else {
            console.error("Token not available.");
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      };
  
      const checkSavedStatus = async () => {
        try {
          if (user && props.resourceId) {
            const savedResources = await fetchSavedResources(user.id);
            const isSaved = savedResources.some(
              (savedResource) => savedResource.resourceId === props.resourceId
            );
            setIsSaved(isSaved);
          }
        } catch (error) {
          console.error("Error checking saved status:", error);
        }
      };
  
      fetchUser();
      checkSavedStatus();
    }, [token, user, props.resourceId]);
  
    const handleCreateSavedResource = async (resourceId: number) => {
      try {
        if (user) {
          await createSavedResource({ savedResourceId: 0, userId: user.id, resourceId });
          const updatedResources = await fetchSavedResources(user.id);
          setSavedResources(updatedResources);
          setIsSaved(true); // Set saved status to true after saving
        } else {
          console.error("User information not available.");
        }
      } catch (error) {
        console.error("Error creating saved resource", error);
      }
    };

    const infoCardStyle: React.CSSProperties = {
      width: '100%',
      position: 'relative'
    };

    const icon = isSaved ? <GoBookmarkFill /> : <GoBookmark/>;
  
    return (
      <div style={infoCardStyle}>
        <VStack
          divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
        >
          <Card>
            <CardBody>
            <Heading size='sm'>
                {props.Name}
                  <div>
                    <IconButton
                      icon={icon}
                      variant='ghost'
                      size='lg'
                      colorScheme="purple"
                      aria-label={"Bookmark Resource"}
                      onClick={() => handleCreateSavedResource(props.resourceId)}
                    />
                  </div>
              </Heading>
              <p>{props.ResourceType || ''}</p>
              <br/>              
              <p><Icon color="purple.500" as={FaRunning} />{props.Distance.toFixed(2)} mi. </p>
              <br/>
              <p><Icon color="purple.500" as={FaLocationDot}/>{props.Address || ''}</p>
              <p><Icon color="purple.500" as={FaGlobeAmericas} /> {props.Website || ''}</p> 
              <br />
              <p><Icon color="purple.500" as={FaPhoneAlt} /> {props.PhoneNumber || ''}</p>
              <br/>
              {props.hoursOfOperation && props.hoursOfOperation.length > 0 ? (
                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                          <p><Icon color="purple.500" as={FaClock} /></p>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      {props.hoursOfOperation.map((hours, index) => (
                        <div key={index}>
                          <b>{hours.DayOfWeek || "N/A"}</b>
                          <br />
                          Open: {hours.OpenTime || "N/A"}
                          <br />
                          Close: {hours.CloseTime || "N/A"}
                          <br />
                    
                        </div>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Text>No hours of operation available.</Text>
              )}
            </CardBody>
          </Card>
        </VStack>
      </div>
    );
  }