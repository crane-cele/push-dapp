// React + Web3 Essentials
import { useContext, useEffect, useState } from 'react';

// External Packages
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled, { css, useTheme } from 'styled-components';

// Internal Compoonents
import CollapseSidebar from 'assets/collapseSidebar.svg?react';
import ExpandSidebar from 'assets/expandSidebar.svg?react';
import NavigationButton from 'components/NavigationButton';
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import Tooltip from 'components/reusables/tooltip/Tooltip';
import { NavigationContext } from 'contexts/NavigationContext';
import { useAccount } from 'hooks';
import { Item, Section, Span } from 'primaries/SharedStyling';
import { SEND_NOTIFICATION_STATES, setCanSend } from 'redux/slices/sendNotificationSlice';
import { incrementStepIndex, setTutorialContinous } from '../redux/slices/userJourneySlice';

// Internal Configs
import GLOBALS from 'config/Globals';
import navigationList from 'config/NavigationList';
import { appConfig } from 'config/index.js';
import { GlobalContext } from 'contexts/GlobalContext';

// Create Header
function Navigation() {
  const {
    channelDetails,
    delegatees,
    aliasDetails: { aliasAddr, aliasEthAddr, isAliasVerified },
  } = useSelector((state: any) => state.admin);
  const [refresh, setRefresh] = useState(false);
  const { processingState } = useSelector((state: any) => state.channelCreation);
  const { run, stepIndex, isCommunicateOpen, isDeveloperOpen } = useSelector((state: any) => state.userJourney);
  const { navigationSetup, setNavigationSetup } = useContext(NavigationContext);
  const { sidebarCollapsed, setSidebarCollapsed } = useContext(GlobalContext);

  const CORE_CHAIN_ID = appConfig.coreContractChain;
  const { account, chainId } = useAccount();
  const onCoreNetwork = CORE_CHAIN_ID === chainId;

  const theme = useTheme();
  const location = useLocation();
  const dispatch = useDispatch();

  const { canSend } = useSelector((state: any) => {
    return state.canSend;
  });

  useEffect(() => {
    if (!navigationSetup) return;

    let newNavSetup = navigationSetup;
    if (processingState === null) {
      newNavSetup.secondary[0].data.hidden = true;
      newNavSetup.secondary[1].data.hidden = true;
    } else {
      newNavSetup.secondary[0].data.hidden = true;
      newNavSetup.secondary[1].data.hidden = true;

      if (channelDetails !== 'unfetched' && channelDetails != null) {
        newNavSetup.secondary[0].data.name = channelDetails.name;
        newNavSetup.secondary[0].data.src = 'homeOffIcon';
        newNavSetup.secondary[0].data.activeSrc = 'homeOnIcon';
        newNavSetup.secondary[0].data.hidden = false;
        newNavSetup.secondary[0].data.loading = false;
      } else {
        newNavSetup.secondary[0].data.name = 'Create Channel';
        newNavSetup.secondary[0].data.hidden = false;
        newNavSetup.secondary[0].data.loading = false;
      }

      if (canSend === SEND_NOTIFICATION_STATES.SEND) {
        newNavSetup.secondary[1].data.name = 'Send Notifications';
        newNavSetup.secondary[1].data.hidden = false;
      }
    }

    setNavigationSetup(newNavSetup);
  }, [canSend, channelDetails, navigationSetup, processingState, account]);

  useEffect(() => {
    if (processingState !== 0) {
      dispatch(setCanSend(SEND_NOTIFICATION_STATES.LOADING));
    } else {
      if (((aliasAddr || aliasEthAddr) && isAliasVerified) || (delegatees && delegatees.length > 0)) {
        dispatch(setCanSend(SEND_NOTIFICATION_STATES.SEND));
      } else {
        dispatch(setCanSend(SEND_NOTIFICATION_STATES.HIDE));
      }
    }
  }, [channelDetails, aliasAddr, isAliasVerified, delegatees, canSend, processingState, account]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Set Primary List
    const primaryList = returnTransformedList(navigationList.primary, GLOBALS.CONSTANTS.NAVBAR_SECTIONS.PRIMARY);

    // Set Secondary List
    const secondaryList = returnTransformedList(navigationList.secondary, GLOBALS.CONSTANTS.NAVBAR_SECTIONS.SECONDARY);
    const thirdList = returnTransformedList(navigationList.third, GLOBALS.CONSTANTS.NAVBAR_SECTIONS.SECONDARY);

    // Set Nav List
    let count = -1;
    let navList = returnNavList(navigationList.primary, count);
    navList = Object.assign(navList, returnNavList(navigationList.secondary, Object.keys(navList).length));
    navList = Object.assign(navList, returnNavList(navigationList.third, Object.keys(navList).length));

    const finalList = {
      primary: primaryList,
      secondary: secondaryList,
      third: thirdList,
      navigation: navList,
    };

    setNavigationSetup(finalList);
  }, []);

  const returnTransformedList = (lists, identity) => {
    let transformedList = [];
    let count = -1;
    Object.entries(lists).forEach(([key, value]) => {
      count++;
      let identifier = count.toString();

      const section = lists[key];

      transformedList[identifier] = {};
      transformedList[identifier].active = false;
      transformedList[identifier].isSection = true;
      transformedList[identifier].hasMenuLogic = value['hasMenuLogic'];

      transformedList[identifier].id = identity + '_' + key;
      transformedList[identifier].parent = null;
      transformedList[identifier].hasItems = false;
      transformedList[identifier].opened = false;

      if (location.pathname === section.href) {
        transformedList[identifier].active = true;
      }
      transformedList[identifier].data = value;

      if (section.hasOwnProperty('drilldown')) {
        let drillcount = -1;
        let drilldownModified = {};

        Object.entries(section.drilldown).forEach(([drillkey, drillvalue]) => {
          drillcount++;
          let drillIdentifier = drillcount.toString();
          let item = section.drilldown[drillkey];

          drilldownModified[drillIdentifier] = {};
          drilldownModified[drillIdentifier].active = false;
          drilldownModified[drillIdentifier].isSection = false;
          drilldownModified[drillIdentifier].hasMenuLogic = drillvalue['hasMenuLogic'];

          drilldownModified[drillIdentifier].id = drillkey;
          drilldownModified[drillIdentifier].parent = transformedList[identifier].id;
          transformedList[identifier].hasItems = true;

          // Check and expand it if the pathname matches
          if (location.pathname === item.href) {
            transformedList[identifier].active = true;
            transformedList[identifier].opened = true;

            drilldownModified[drillIdentifier].active = true;
          }

          while (!item?.name) {
            item = item.data;
          }
          drilldownModified[drillIdentifier].data = item;
        });

        transformedList[identifier].data.drilldown = drilldownModified;
      }
    });
    if (identity === 2) console.debug(transformedList);
    return transformedList;
  };

  // Location has changed, reflect it accordingly
  useEffect(() => {
    if (navigationSetup) {
      // loop and find the item in question
      Object.entries(navigationSetup).forEach(([key, value]) => {
        if (key === 'primary' || key === 'secondary' || key === 'third') {
          const topSection = navigationSetup[key];

          Object.entries(topSection).forEach(([key, value]) => {
            const section = topSection[key];

            if (section.data.hasOwnProperty('drilldown')) {
              Object.entries(section.data.drilldown).forEach(([drillkey, drillvalue]) => {
                const item = section.data.drilldown[drillkey];

                if (location.pathname === item.data.href) {
                  const transformedList = mutateTransformedList(item);
                  setNavigationSetup(transformedList);
                  setRefresh(!refresh);
                  return;
                }
              });
            } else {
              if (location.pathname === section.data.href) {
                const transformedList = mutateTransformedList(section);
                setNavigationSetup(transformedList);
                setRefresh(!refresh);
                return;
              }
            }
          });
        }
      });
    }
  }, [location, navigationSetup, canSend]);

  const mutateTransformedList = (item, onlyDrilldown?) => {
    // Finally transform the json menulist
    let transformedMenuList = navigationSetup;

    let activeParentId = null;
    let activeDrilldownId = null;

    // check if this requires menu Logic
    if (item.hasMenuLogic) {
      // check if it's a section
      if (item.isSection) {
        activeParentId = item.id;
      } else {
        // item is drilldown, mark both id
        activeDrilldownId = item.id;
        activeParentId = item.parent;
      }
    }

    if (activeParentId == null && activeDrilldownId == null) {
      // nothing to do, return back
      return transformedMenuList;
    }

    // Check and take action on Drop down getting toggled or section doesn't have dropdown menu
    let selectedSectionIsActionable = false;

    if (activeDrilldownId == null) {
      Object.keys(transformedMenuList).forEach((key) => {
        if (key === 'primary' || key === 'secondary' || key === 'third') {
          Object.keys(transformedMenuList[key]).forEach((sectionkey) => {
            const section = transformedMenuList[key][sectionkey];

            if (section.id === activeParentId) {
              transformedMenuList[key][sectionkey].opened = !transformedMenuList[key][sectionkey].opened;

              if (section.hasItems) {
                selectedSectionIsActionable = true;
              }
            }
          });
        }
      });
    }

    if (selectedSectionIsActionable || onlyDrilldown) {
      // section had items but activeDrilldownId not set means dropdown toggle
      return transformedMenuList;
    } else {
      // menu item is getting selected
      Object.keys(transformedMenuList).forEach((key) => {
        if (key === 'primary' || key === 'secondary' || key === 'third') {
          Object.keys(transformedMenuList[key]).forEach((sectionkey) => {
            const section = transformedMenuList[key][sectionkey];

            if (section.id !== activeParentId) {
              if (section.active) {
                transformedMenuList[key][sectionkey].active = false;

                if (section.hasItems) {
                  // loop and make all false
                  Object.keys(transformedMenuList[key][sectionkey].data.drilldown).forEach((drillkey) => {
                    transformedMenuList[key][sectionkey].data.drilldown[drillkey].active = false;
                  });
                }
              }
            } else {
              transformedMenuList[key][sectionkey].active = true;

              if (section.hasItems) {
                // loop and make all false
                Object.keys(transformedMenuList[key][sectionkey].data.drilldown).forEach((drillkey) => {
                  const item = transformedMenuList[key][sectionkey].data.drilldown[drillkey];

                  if (item.id === activeDrilldownId) {
                    transformedMenuList[key][sectionkey].data.drilldown[drillkey].active = true;
                  } else {
                    transformedMenuList[key][sectionkey].data.drilldown[drillkey].active = false;
                  }
                });
              }
            }
          });
        }
      });
    }

    return transformedMenuList;
  };

  const returnNavList = (lists, count) => {
    let transformedList = [];

    Object.entries(lists).forEach(([key, value]) => {
      const section = lists[key];

      // omit parent if drilldown
      if (section.hasOwnProperty('drilldown')) {
        Object.entries(section.drilldown).forEach(([drillkey, drillvalue]) => {
          count++;
          let identifier = count.toString();

          let item = section.drilldown[drillkey];

          transformedList[identifier] = {};
          transformedList[identifier].active = false;
          transformedList[identifier].isSection = false;
          transformedList[identifier].id = `${key}_${drillkey}`;

          // Check and expand it if the pathname matches
          if (location.pathname === item.href) {
            transformedList[identifier].active = true;
          }
          while (!item?.name) {
            item = item.data;
          }
          transformedList[identifier].data = item;
        });
      } else {
        count++;
        let identifier = count.toString();

        transformedList[identifier] = {};
        transformedList[identifier].active = false;
        transformedList[identifier].isSection = true;
        transformedList[identifier].hasItems = false;
        transformedList[identifier].id = key;

        if (location.pathname === section.href) {
          transformedList[identifier].active = true;
        }
        transformedList[identifier].data = value;
      }
    });

    return transformedList;
  };

  // Render main items
  const renderMainItems = (items, sectionID) => {
    let Section;
    let fontSize;
    let secondaryButton = 0;
    switch (sectionID) {
      case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.SECONDARY:
        Section = SecondarySection;
        fontSize = 'small';
        secondaryButton = 1;
        break;
      case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.THIRD:
        Section = SecondarySection;
        fontSize = 'small';
        secondaryButton = 1;
        break;
      default:
        Section = PrimarySection;
        fontSize = 'normal';
    }
    let rendered = Object.keys(items).map(function (key) {
      const section = items[key];
      // console.log(section)
      const data = section.data;
      const uid = section.data.uid;
      // if(uid === 2 ){
      //   if(section.opened)
      //   dispatch(setCommunicateOpen(true))
      //   else
      //   dispatch(setCommunicateOpen(false))
      // }
      // else if(uid === 3){
      //   if(section.opened)
      //   dispatch(setDeveloperOpen(true))
      //   else
      //   dispatch(setDeveloperOpen(false))
      // }
      let innerRendered = (
        <Section
          key={key}
          flex="1"
          align="stretch"
          size={fontSize}
          wrap="nowrap"
          margin="0 5px 0 10px"
        >
          {secondaryButton ? (
            <Item
              flexBasis="100%"
              direction="row"
              overflow="hidden"
            >
              {section.hasItems
                ? renderChildItems(data.drilldown, section.opened, GLOBALS.CONSTANTS.NAVBAR_SECTIONS.PRIMARY)
                : null}

              <SectionInnerGroupContainer
                flex="1"
                align="stretch"
                zIndex={2}
                refresh={refresh}
                // margintop="15px"
                onClick={() => {
                  mutateTransformedList(section, true);
                }}
                id={data.id}
              >
                <NavigationButton
                  item={section}
                  data={data}
                  sectionID={sectionID}
                  active={section.active}
                  bg={!section.active ? 'transparent' : theme.nav.activeColor}
                />
              </SectionInnerGroupContainer>

              {data.name == 'More' && (
                <Tooltip
                  wrapperProps={{
                    width: '100%',
                    maxWidth: 'fit-content',
                    minWidth: 'fit-content',
                  }}
                  placementProps={{
                    width: 'fit-content',
                    zIndex: '1',
                    position: 'fixed',
                    bottom: sidebarCollapsed ? '7px' : '1rem',
                    left: sidebarCollapsed ? '6rem' : '16rem',
                    padding: '6px 10px',
                    background: '#000',
                    borderRadius: '2px 8px 8px 8px',
                    fontSize: '13px',
                    fontWeight: '400',
                  }}
                  tooltipContent={<div>{sidebarCollapsed ? 'Expand Sidebar' : 'Minimize Sidebar'}</div>}
                >
                  <CollapsableArrow
                    sidebarCollapsed={sidebarCollapsed}
                    onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  >
                    {sidebarCollapsed ? <ExpandSidebar /> : <CollapseSidebar />}
                  </CollapsableArrow>
                </Tooltip>
              )}
            </Item>
          ) : (
            <Item
              flexBasis="100%"
              align="stretch"
              direction="row"
              overflow="hidden"
            >
              <SectionInnerGroupContainer
                flex="1"
                align="stretch"
                margintop="-10px"
                zIndex={2}
                refresh={refresh}
                // id={section.data.name}
                onClick={() => {
                  // const uid = section.data.uid;
                  // if(uid === 2 ){
                  //   if(!section.opened)
                  //   dispatch(setCommunicateOpen(true))
                  //   else
                  //   dispatch(setCommunicateOpen(false))
                  // }
                  // else if(uid === 3){
                  //   if(!section.opened)
                  //   dispatch(setDeveloperOpen(true))
                  //   else
                  //   dispatch(setDeveloperOpen(false))
                  // }
                  // console.log(`Clicked primary button`);
                  mutateTransformedList(section, true);

                  if (run && ((stepIndex === 1 && uid === 2) || (stepIndex === 16 && uid === 3))) {
                    setTimeout(() => {
                      dispatch(incrementStepIndex());
                      // if (stepIndex === 1 && uid === 2)dispatch(setTutorialContinous(true));
                    }, 500);
                  }
                }}
              >
                <NavigationButton
                  item={section}
                  data={data}
                  sectionID={sectionID}
                  active={section.active}
                  bg={!section.active ? 'transparent' : theme.nav.activeColor}
                />
              </SectionInnerGroupContainer>

              {/* { 
                      section.hasItems 
                        ? renderChildItems(
                            data.drilldown, 
                            section.opened,
                            GLOBALS.CONSTANTS.NAVBAR_SECTIONS.PRIMARY
                          )
                        : null
                      } */}
            </Item>
          )}
        </Section>
      );

      return innerRendered;
    });

    return rendered;
  };

  // Render Child Items
  const renderChildItems = (drilldown, opened, sectionID) => {
    let SectionGroup;
    let SectionItem;

    switch (sectionID) {
      case GLOBALS.CONSTANTS.NAVBAR_SECTIONS.SECONDARY:
        SectionGroup = PrimarySectionGroup;
        SectionItem = PrimarySectionItem;
        break;
      default:
        SectionGroup = PrimarySectionGroup;
        SectionItem = PrimarySectionItem;
    }

    let rendered = (
      <SectionGroup
        align="stretch"
        margin="10px 0px"
        opened={opened}
        refresh={refresh}
      >
        {Object.keys(drilldown).map(function (key) {
          const item = drilldown[key];
          const data = item.data;
          return (
            <SectionItem
              key={key}
              flex="1"
              align="stretch"
              size="small"
            >
              <SectionInnerItemContainer
                flex="1"
                align="stretch"
                zIndex={1}
                refresh={refresh}
                onClick={() => {
                  // console.log();
                  if (
                    run &&
                    ((stepIndex === 2 && data.name === 'Channels') ||
                      (stepIndex === 6 && data.name === 'Inbox') ||
                      (stepIndex === 8 && data.name === 'Spam') ||
                      (stepIndex === 10 && data.name === 'Receive Notifs') ||
                      (stepIndex === 16 && data.name === 'Create Channel') ||
                      (stepIndex === 17 && data.name === "Developer's Guide"))
                  ) {
                    if (stepIndex === 10) dispatch(setTutorialContinous(true));
                    dispatch(incrementStepIndex());
                  }
                  // console.log(`Clicked  button`);
                  // mutateTransformedList(item)
                }}
              >
                <NavigationButton
                  item={item}
                  data={data}
                  sectionID={sectionID}
                  active={item.active}
                  bg={!item.active ? 'transparent' : theme.nav.activeColor}
                />
              </SectionInnerItemContainer>
            </SectionItem>
          );
        })}
      </SectionGroup>
    );

    return rendered;
  };

  return (
    <Container
      direction="column"
      headerHeight={GLOBALS.CONSTANTS.HEADER_HEIGHT}
    >
      {!navigationSetup && (
        <Item
          padding="20px"
          justify="flex-start"
        >
          <LoaderSpinner
            type={LOADER_TYPE.SEAMLESS}
            spinnerSize={24}
          />
        </Item>
      )}
      {navigationSetup && Object.keys(navigationSetup).length > 0 && (
        <>
          <Primary>
            {renderMainItems(navigationSetup.primary, GLOBALS.CONSTANTS.NAVBAR_SECTIONS.PRIMARY)}

            <Span
              textTransform="uppercase"
              weight="700"
              size="11px"
              margin="20px 0px 0px 0px"
              padding={sidebarCollapsed ? '15px 25px' : '15px 30px'}
              color="#575D73"
              spacing="0.16em"
            >
              {sidebarCollapsed ? 'Devs' : 'Developers'}
            </Span>
            {renderMainItems(navigationSetup.secondary, GLOBALS.CONSTANTS.NAVBAR_SECTIONS.SECONDARY)}
          </Primary>
          <Footer
            justify="flex-end"
            align="stretch"
          >
            {renderMainItems(navigationSetup.third, GLOBALS.CONSTANTS.NAVBAR_SECTIONS.THIRD)}

            {/* Put social */}
            {/* <ItemH
                flex="initial"
                padding="10px"
                radius="0px 12px 0px 0px"
                bg={theme.leftBarSocialBg}
              >
                <Anchor
                title="Open Twitter"
                href="https://twitter.com/epnsproject"
                target="_blank"
                bg={theme.leftBarSocialIconBg}
                radius="4px"
                padding="10px"
                margin="5px"
                onMouseOver={({ target }) => target.style.color = theme.color}
                onMouseOut={({target})=>target.style.color = "fff"}
                >
                  <FaTwitter size={15} color="fff" />
                </Anchor>
                <Anchor
                  title="Open Telegram"
                  href="https://t.me/epnsproject"
                  target="_blank"
                  bg={theme.leftBarSocialIconBg}
                  radius="4px"
                  padding="10px"
                  margin="5px"
                  onMouseOver={({ target }) => target.style.color = theme.color}
                  onMouseOut={({target})=>target.style.color = "fff"}
                >
                  <FaTelegramPlane size={15} color="#fff"/>
                </Anchor>
                <Anchor
                  title="Open Medium"
                  href="https://medium.com/ethereum-push-notification-service"
                  target="_blank"
                  bg={theme.leftBarSocialIconBg}
                  radius="4px"
                  padding="10px"
                  margin="5px"
                  onMouseOver={({ target }) => target.style.color = theme.color}
                  onMouseOut={({target})=>target.style.color = "fff"}
                >
                  <FaMedium size={15} color="#fff"/>
                </Anchor>
                <Anchor
                  title="Open Discord"
                  href="https://discord.gg/YVPB99F9W5"
                  target="_blank"
                  bg={theme.leftBarSocialIconBg}
                  radius="4px"
                  padding="10px"
                  margin="5px"
                  onMouseOver={({ target }) => target.style.color = theme.color}
                  onMouseOut={({target})=>target.style.color = "fff"}
                >
                  <FaDiscord size={15} color="#fff"/>
                </Anchor>
                <Anchor
                  title="Open Github"
                  href="https://github.com/push-protocol"
                  target="_blank"
                  bg={theme.leftBarSocialIconBg}
                  radius="4px"
                  padding="10px"
                  margin="5px"
                  onMouseOver={({ target }) => target.style.color = theme.color}
                  onMouseOut={({target})=>target.style.color = "fff"}
                >
                  <FaGithub size={15} color={"#fff"}/>
                </Anchor>
              </ItemH> */}
          </Footer>
        </>
      )}
    </Container>
  );
}

// CSS Styles
const Container = styled(Section)`
  background: ${(props) => props.theme.nav.bg};
  flex: 1;
  height: calc(100% - ${(props) => props.headerHeight}px);
  margin: ${(props) => props.headerHeight}px 0px 0px 0px;
`;

const Primary = styled(Item)`
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: flex-start;
  background: '#fff';
  overflow-y: scroll;
  gap: 10px;
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0.44, #cf1c84),
      color-stop(0.72, #cf1c84),
      color-stop(0.86, #cf1c84)
    );
  }
  padding: 10px 0px 20px 0px;
`;

const InheritedSection = styled(Item)`
  flex: initial;
  align-items: 'center';
`;

const PrimarySection = styled(InheritedSection)`
  margin-top: -1px;
`;

const InheritedSectionGroup = styled(Item)`
  align-items: 'stretch';
`;

const InheritedSectionItem = styled(Item)`
  align-items: 'stretch';
  padding: 0px 0px 0px 20px;
`;

const SectionInnerGroupContainer = styled(Item)`
  &:after {
    content: '';
    position: absolute;
    top: ${(props) => props.margintop};
    right: 0;
    left: 0;
    height: 10px;
  }
`;

const SectionInnerItemContainer = styled(Item)``;

const PrimarySectionGroup = styled(Item)`
  border: 1px solid #e5e8f6;
  border-radius: 16px;
  transition: margin 0.1s ease-out;
  ${(props) =>
    !props.opened &&
    css`
      margin-top: -210%;
    `};
`;

const PrimarySectionItem = styled(Item)``;

const Footer = styled(Item)`
  z-index: 3;
  gap: 10px;
  align-items: stretch;
  flex-wrap: nowrap;
  padding: 0 6px 10px 0;
`;

const Secondary = styled(Item)`
  flex: auto;
`;

const SecondarySection = styled(InheritedSection)``;

const Social = styled(Item)``;

const CollapsableArrow = styled.div`
  border-radius: 10px;
  background: ${(props) => props.theme.collapsaBg};
  z-index: 10;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.8;
  margin: ${(props) => (props.sidebarCollapsed ? '8px 0 0 0' : '0 0 0 16px')};

  &:hover {
    opacity: 1;
  }

  svg {
    path {
      stroke-width: 2px;
      stroke: ${(props) => props.theme.svgStrokeColor};
    }
  }
`;

// Export Default
export default Navigation;
