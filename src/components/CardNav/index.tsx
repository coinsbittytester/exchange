import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const StyledNav = styled.div`
  margin-bottom: 40px;
`

function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  const TranslateString = useI18n()
  return (
    <StyledNav>
      <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
        <ButtonMenuItem id="swap-nav-link" to="/swap?inputCurrency=BNB&outputCurrency=0xaabcac4b236d1a7290fb05234862348d274621cf" as={Link}>
          {TranslateString(1142, 'Swap')}
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-link" to="/add/BNB/0xaabcac4b236d1a7290fb05234862348d274621cf" as={Link}>
          {TranslateString(262, 'Liquidity')}
        </ButtonMenuItem>
        <ButtonMenuItem
          id="pool-nav-link"
          as="a"
          href="https://www.binance.org/en/bridge?utm_source=PancakeSwap"
          target="_blank"
          rel="noreferrer noopener"
        >
          Bridge
        </ButtonMenuItem>
      </ButtonMenu>
    </StyledNav>
  )
}

export default Nav
