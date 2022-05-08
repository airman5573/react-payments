import React from 'react';
import styled from '@emotion/styled';
import CVCInputContainer from './CVCInputContainer';
import { FieldsetContent, Fieldset, FieldsetHead } from '../Fieldset';

function CVCFieldset() {
  return (
    <Fieldset>
      <FieldsetHead>
        <label htmlFor="card-cvc-input">보안 코드(CVC/CVV)</label>
      </FieldsetHead>
      <FieldsetContent>
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <CVCInputContainer />
          <HelpTip>
            <div className="helptip-content">
              CVC(Card Validation Code)는 Visa, MasterCard, Discover 카드의 뒷면과 아메리칸 익스프레스 카드의 앞면에
              있는 3자리 또는 4자리 코드이다.
            </div>
          </HelpTip>
        </div>
      </FieldsetContent>
    </Fieldset>
  );
}

const HelpTip = styled.div`
  display: inline-block;
  position: relative;
  text-align: center;
  border: 2px solid #444;
  border-radius: 50%;
  width: 27px;
  height: 27px;
  font-size: 20px;
  line-height: 27px;
  padding-left: 1px;

  transform: translateY(-1px);
  cursor: pointer;
  &:before {
    content: '?';
    font-weight: normal;
    color: #444;
  }
  .helptip-content {
    display: none;
    // text-rendering: optimizeLegibility;
    text-align: center;
    background-color: #ffffff;
    padding: 8px 8px;
    word-break: keep-all;
    height: auto;
    width: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(30px, -50%);
    border-radius: 3px;
    box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.1);
    color: #37393d;
    font-size: 12px;
    line-height: 18px;
    z-index: 99;
    &:before {
      content: '';
      position: absolute;
      left: -10px;
      top: 50%;
      transform: translateY(-50%);
      border-style: solid;
      border-width: 8px 10px 8px 0;
      border-color: rgba(0, 0, 0, 0) #ffffff rgba(0, 0, 0, 0) rgba(0, 255, 132, 0);
    }
    &:after {
      width: 10px;
      height: 40px;
      content: '';
      position: absolute;
      top: -40px;
      left: 0;
    }
    ul {
      text-align: left;
    }
  }
  &:hover .helptip-content {
    display: block;
    transform-origin: 100% 0%;
    animation: fadeIn 0.3s ease;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100%;
    }
  }
`;

export default CVCFieldset;
