import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle Component', () => {
  test('Should to render the component correctly with custom title', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom Product" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Should to show the  component with the product\'s name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => (
          <ProductTitle />
        )}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
})