// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import { ButtonV2, H2V2, ImageV2, ItemHV2, ItemVV2, SectionV2, SpanV2 } from 'components/reusables/SharedStylingV2';
import InfoLogo from "../../assets/inforWithoutBG.svg";
import { Button } from 'primaries/SharedStyling';
import { MdWarning } from 'react-icons/md';

const YieldPushFeeV2 = () => {
    return (
        <Container>

            <Note>
                <MdWarning color='#E2B71D' />This function has been deprecated. Please migrate to the new pool.
            </Note>
            {/* Top Section */}
            <ItemVV2 margin="14px 0px 20px 0px">
                <Heading>
                    Uniswap V2 Staking Pool
                    <Deprecated>Deprecated</Deprecated>
                </Heading>
                <SecondaryText>
                    Current APR <SpanV2 color="#D53A94">9.89%</SpanV2>
                </SecondaryText>
            </ItemVV2>

            {/* Body Section */}
            <ItemVV2

            >
                {/* Reward Section */}
                <ItemHV2
                    border="1px solid #BAC4D6"
                    borderRadius="16px"
                >
                    <ItemVV2 margin="0px 18px 0px 0px" padding="10px">
                        <SecondaryText>Current Reward</SecondaryText>
                        <H2V2
                            fontSize="24px"
                            fontWeight="700"
                            color="#D53A94"
                            letterSpacing="-0.03em"
                        >
                            24,900 PUSH
                        </H2V2>
                    </ItemVV2>

                    <Line width="10px" height="100%"></Line>

                    <ItemVV2 margin="0px 0px 0px 18px" padding="10px">
                        <SecondaryText>Total Staked</SecondaryText>
                        <H2V2
                            fontSize="24px"
                            fontWeight="700"
                            letterSpacing="-0.03em"
                        >
                            12.725 Uni-V2
                        </H2V2>
                    </ItemVV2>
                </ItemHV2>

                {/* Epoch Text */}
                <ItemHV2
                    alignSelf="end"
                    margin="12px 13px 24px 0px"
                    color="#575D73"
                    letterSpacing="-0.03em"
                >
                    Current Epoch 100/100
                </ItemHV2>

                {/* Deposit Cash Data */}
                <ItemVV2 >
                    <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                        <DataTitle>
                            User Deposit
                            <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                        </DataTitle>
                        <DataValue> 0 PUSH</DataValue>
                    </ItemHV2>
                    <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                        <DataTitle>
                            Rewards Claimed
                            <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                        </DataTitle>
                        <DataValue> 0 PUSH</DataValue>
                    </ItemHV2>
                    <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                        <DataTitle>
                            Current Epoch Reward
                            <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                        </DataTitle>
                        <DataValue> 0 PUSH</DataValue>
                    </ItemHV2>
                    <ItemHV2 justifyContent="space-between" margin="0px 13px 12px 13px">
                        <DataTitle>
                            Available for Claiming
                            <SpanV2 margin="0px 0px 0px 6px"><ImageV2 src={InfoLogo} alt="Info-Logo" width="12.75px" /></SpanV2>
                        </DataTitle>
                        <DataValue> 0 PUSH</DataValue>
                    </ItemHV2>

                </ItemVV2>

            </ItemVV2>

            {/* Bottom Section */}
            <ItemVV2 padding=" 0px 14px" margin="24px 0px 0px 0px">
                <ButtonsContainer>
                    <FilledButton style={{ margin: "0px 10px 0px 0px" }}>Migrate to Push Fee Pool</FilledButton>
                </ButtonsContainer>

                <ButtonsContainer>
                    <EmptyButton>Unstake PUSH</EmptyButton>
                </ButtonsContainer>
            </ItemVV2>
        </Container>
    );
};

export default YieldPushFeeV2;

const Container = styled(SectionV2)`
    border: 1px solid #BAC4D6;
    border-radius: 24px;
    padding:20px;
    margin:10px;
    font-family: 'Strawford';
    font-style: normal;
    font-weight: 500;

`;
const Note = styled(ItemHV2)`
    padding: 8px 4px;
    gap: 4px;
    background: #FFF7DA;
    border-radius: 8px;
    font-size: 14px;
    line-height: 118.5%;
    letter-spacing: -0.03em;
    color: rgba(87, 93, 115, 0.8);
    
`

const Heading = styled(H2V2)`
    font-size: 24px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: #333333;
    display:flex;
    align-items:center;


`

const Deprecated = styled(SpanV2)`
    font-size: 12px;
    line-height: 140%;
    display: flex;
    align-items: center;
    color: #D53A94;
    margin-left:10px;
    padding: 2px 6px;
    background: #F3D7FA;
    border-radius: 6px;
    height: 17px;
`
const SecondaryText = styled.p`
    margin:0px;
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: #333333;
`

const Line = styled.div`
    width: 1px;
    height: 100%;
    background:#BAC4D6;
`
const DataTitle = styled.div`
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: rgba(87, 93, 115, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

`

const DataValue = styled(H2V2)`
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: #333333;
`

const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    margin:15px 0px 0px 0px;
`


const FilledButton = styled(ButtonV2)`
    width:100%;
    background: #D53A94;
    border: 1px solid #D53A94;
    border-radius: 8px;
    padding: 12px;
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: #FFFFFF;
    cursor:pointer;
    & > div{
        display:block;
    }
    
`;

const EmptyButton = styled.button`
    border: 1px solid #657795;
    border-radius: 8px;
    padding: 12px;
    background:#ffffff;
    font-size: 18px;
    line-height: 141%;
    letter-spacing: -0.03em;
    color: #657795;
    flex:1;
    cursor:pointer;
    & > div{
        display:block;
    }

    &:hover{
        background: #e3e3e3;
        opacity:1;
    }
`
