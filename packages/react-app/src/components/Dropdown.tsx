import React from "react";
import styled,{useTheme} from "styled-components";
import {
  ItemH,
  Span,
  Image,
  A,
  RouterLink,
} from "../primaries/SharedStyling.js";

// Create Dropdown
function Dropdown(props) {
  const theme = useTheme();
  const copyToClipboard = (address) => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(address);
    } else {
      const el = document.createElement("textarea");
      el.value = address;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
  };
  return (
    <>
      {props.dropdownValues.map((dropdownValue) =>
        dropdownValue.id === "walletAddress" ? (
          <ItemH
            bg="linear-gradient(87.17deg, #F72C81 0%, #6C55AF 50%, #4FD5FF 100%)"
            radius="17px"
            padding="2px 12px"
            wrap="nowrap"
            margin="0px 0 8px 0"
          >
            <Span
              margin="11px 22px 11px 2px"
              weight="400"
              size="12px"
              textTransform="uppercase"
              color="#fff"
              spacing="1px"
            >
              {dropdownValue?.title}
            </Span>
            <Image
              src={dropdownValue?.icon}
              alt="icon"
              width="auto"
              cursor="pointer"
              filter="brightness(0) invert(1)"
              onClick={() => {
                copyToClipboard(dropdownValue?.value);
              }}
            />
          </ItemH>
        ) : (
          <ItemH wrap="nowrap" margin="8px 0">
            <Image
              src={dropdownValue.icon}
              alt="icon"
              width="auto"
              spacing="1px"
              filter={theme.snackbarBorderIcon}
            />
            {!dropdownValue?.link && dropdownValue?.function && (
              <Span
                color={theme.snackbarBorderText}
                margin="10px 20px"
                weight="400"
                size="14px"
                cursor="pointer"
                onClick={() => dropdownValue?.function()}
              >
                {dropdownValue.title}
              </Span>
            )}
            {dropdownValue?.link && (
              <A
                href={dropdownValue?.link}
                target="_blank"
                rel="nofollow"
                margin="10px 20px"
                weight="400"
                size="14px"
                color={theme.snackbarBorderText}
                hoverBG="transparent"
              >
                {dropdownValue.title}
              </A>
            )}
            {dropdownValue.sideBarData && (
              <button id="olvy-target">test latest</button>
              // <RouterLink
              //   id="olvy-target"
              //   className={dropdownValue?.sideBarData?.name?.toLowerCase()}
              //   spacing="inherit"
              //   color={theme.snackbarBorderText}
              //   margin="10px 20px"
              //   weight="400"
              //   size="14px"
              //   flex="1"
              //   hoverBG="transparent"
              //   title={`${dropdownValue?.sideBarData?.title}`}
              //   to={`${
              //     dropdownValue?.sideBarData?.href
              //       ? dropdownValue?.sideBarData?.href
              //       : "#"
              //   }`}
              //   href={`${
              //     dropdownValue?.sideBarData?.href
              //       ? dropdownValue?.sideBarData?.href
              //       : "#"
              //   }`}
              //   alt={`${dropdownValue?.sideBarData?.alt}`}
              //   target={
              //     dropdownValue?.sideBarData?.isRoute
              //       ? null
              //       : dropdownValue?.sideBarData?.newTab
              //       ? "_blank"
              //       : "self"
              //   }
              //   disabled={dropdownValue?.sideBarData?.disabled}
              //   // hoverBG={theme.leftBarHoverColor}
              //   radius="12px"
              //   align="stretch"
              //   padding="10px"
              //   // margin={definedMargin}
              //   active={dropdownValue?.sideBarData?.active}
              // >
              //   {dropdownValue?.title}
              // </RouterLink>
            )}
          </ItemH>
        )
      )}
    </>
  );
}

// css styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
const DropdownItem = styled.div`
  display: flex;
  margin: 1rem;
`;
// Export Default
export default Dropdown;
