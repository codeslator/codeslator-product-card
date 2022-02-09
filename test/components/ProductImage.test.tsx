import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('Product Image Component', () => {
  test('Should to render the component correctly with the custom image', () => {
    const wrapper = renderer.create(<ProductImage img={product2.img} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
  test('Should to show the  component with the product\'s image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => (
          <ProductImage />
        )}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});