import React from 'react'
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() });

import MyComponent from './view/MyComponent'
// import CardPokemon from './components/Card/CardPokemon'

// describe('CardPokemon', () => {
//     // const onCountChange = jest.fn();
//     let wrapper;
//     beforeEach(() => {
//       wrapper = mount(<CardPokemon />);
//     });
  
//     it('renders', () => {
//       expect(wrapper).not.toBeNull();
//     });

// });

describe('MyComponent', () => {
    const onCountChange = jest.fn();
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<MyComponent onCountChange={onCountChange} />);
    });
  
    it('renders', () => {
      expect(wrapper).not.toBeNull();
    });
  
    it('shows my default text', () => {
      expect(wrapper.find('p').text()).toEqual('Count: 0');
    });

});