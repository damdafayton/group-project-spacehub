import React from "react"

import { shallow } from 'enzyme'
import Nav from '../../components/layout/Nav'
import help from "../../utils/testHelpers"
const setUp=(props={})=>shallow(<Nav/>)

describe('Navbar component',()=>{
    let component
    beforeEach(()=>{
        component=setUp()
    })
  it('should render without errors', () => {
      const wrapper=help.findAttribute(component,"nav-test")
    expect(wrapper.length).toBe(1)
  });
  
})